<?php

namespace Database\Seeders;

// Tools
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insertOrIgnore([
            'name' => 'Admin',
            'email' => 'admin@medisonmedia.com',
            'password' => Hash::make('Aa123456'),
        ]);
    }
}
