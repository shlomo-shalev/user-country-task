<?php

namespace Database\Seeders;

// Tools
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insertOrIgnore([
            [
                'user_id' => 1,
                'name' => 'Israel',
                'iso' => 'IL',
            ],
            [
                'user_id' => 1,
                'name' => 'Cyprus',
                'iso' => 'CY',
            ],
        ]);
    }
}
