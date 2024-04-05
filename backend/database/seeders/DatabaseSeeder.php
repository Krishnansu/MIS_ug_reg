<?php

namespace Database\Seeders;

use App\Models\Jeea;
use App\Models\User;
use Illuminate\Support\Str;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'jee_main_application_no' => 100095,
        //     'registered_email_id' => 'test@example.com',
        // ]);


        User::create([
            'jee_main_application_no' => 12345656,
            'registered_email_id' => '24je6900@iitism.ac.in',
            'registered_mob_no' => 1234567890,
            'remember_token' => Str::random(10),
        ]);
        
        User::create([
            'jee_main_application_no' => 23456788,
            'registered_email_id' => '24je0699@iitism.ac.in',
            'registered_mob_no' => 8765432170,
            'remember_token' => Str::random(10),
        ]);
        
        User::create([
            'jee_main_application_no' => 34567891,
            'registered_email_id' => '24je0069@iitism.ac.in',
            'registered_mob_no' => 2345678910,
            'remember_token' => Str::random(10),
        ]);
        
    }
}
