<?php

namespace Database\Seeders;

use App\Models\Jeea;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JeeaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Jeea::create([
            'jee_main_application_no' => 12345678, // Unique application number
            'institute_name' => 'Sample Institute', 
            'first_name' => 'John',
            'middle_name' => 'M', 
            'last_name' => 'Doe',
            'email' => 'john.doe@example.com',
            'contact_no' => 9876543210, 
            'category' => 'General', 
            'allocated_category' => 'General',
            'date_of_birth' => '1998-12-31', 
            'gender' => 'Male',
            'preparatory' => 'Yes',
            'divyang' => 'No', 
            'admission_based_on' => 'JEE Main',
            'course_code' => 'BTECH',
            'course' => 'Bachelor of Technology',
            'branch' => 'Computer Science',
            'email_username' => 'john.doe.2024', // Unique username
            'email_password' => 12345678, 
            'fee_amount' => 30000.00,
            'fee_date' => now(),
            'fee_mode' => 'Online',
            'transaction_id' => 'SAMPLE_TXN_12345',
            'created_at' => now(),
            'updated_at' => now()
            ]);
    }
}
