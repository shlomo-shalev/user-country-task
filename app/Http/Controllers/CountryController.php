<?php

namespace App\Http\Controllers;

// requests
use App\Http\Requests\Country\CreateCountryRequest;
use App\Http\Requests\Country\UpdateCountryRequest;

// providers
use App\Providers\RouteServiceProvider;

// models
use App\Models\Country;

// tools
use Illuminate\Http\Request;
class CountryController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateCountryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateCountryRequest $request)
    {
        $country = new Country();
        $country->name = $request->get('name');
        $country->iso = $request->get('iso');
        $country->user_id = $request->user()->id;
        $country->save();

        return redirect()->intended(RouteServiceProvider::HOME);
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateCountryRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCountryRequest $request, $id)
    {
        Country::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->update([
                'name' => $request->get('name'),
                'iso' => $request->get('iso'),
            ]);
        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        Country::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->delete();
        return redirect()->intended(RouteServiceProvider::HOME);
    }
}
