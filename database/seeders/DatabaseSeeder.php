<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $admin_user = \App\Models\User::create([
            'firstname' => "Dummy1",
            'lastname' => 'User1',
            'username' => 'dummy01',
            'email' => "dummy01@gmail.com",
            'email_verified_at' => now(),
            'password' => Hash::make('Default123'),
            'remember_token' => Str::random(10),
        ]);

        \App\Models\User::factory(10)->create();
    }
}
