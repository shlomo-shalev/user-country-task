<?php

namespace App\Http\Requests\Country;

// tools

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Validator;

class UpdateCountryRequest extends FormRequest
{
    public function prepareForValidation() {
        $this->merge([
            'id' => $this->route()->id,
        ]);
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'min:1', 'exists:countries,id'],
            'name' => ['required', 'string', 'min:2'],
            'iso' => ['required', 'string', 'min:2'],
        ];
    }

    public function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {
            $user_id = $this->user()->id;
            $country_id = $this->input('id');
            $name = $this->input('name');
            $iso = $this->input('iso');

            $exists = DB::table('countries')
                ->where('name', $name)
                ->where('user_id', $user_id)
                ->where('id', '!=', $country_id)
                ->exists();

            if ($exists) {
                $validator->errors()->add('name', 'The new name has already been taken.');   
            }

            $exists = DB::table('countries')
                ->where('iso', $iso)
                ->where('user_id', $user_id)
                ->where('id', '!=', $country_id)
                ->exists();

            if ($exists) {
                $validator->errors()->add('iso', 'The new iso has already been taken.');   
            }
        });
    }
}
