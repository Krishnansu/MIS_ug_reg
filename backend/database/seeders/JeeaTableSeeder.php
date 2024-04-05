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
            'jee_main_application_no' => 12345656, // Unique application number
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
            'email_username' => '24je6900@iitism.ac.in', // Unique username
            'email_password' => 1234567890, 
            'fee_amount' => 30000.00,
            'fee_date' => now(),
            'fee_mode' => 'Online',
            'transaction_id' => 'SAMPLE_TXN_12345',
            'created_at' => now(),
            'updated_at' => now()
            ]);

        Jeea::create([
            'jee_main_application_no' => 23456788, 
            'institute_name' => 'Another Institute', 
            'first_name' => 'Sarah',
            'middle_name' => 'K', 
            'last_name' => 'Williams',
            'email' => 'sarah.williams@example.com',
            'contact_no' => 8765432109, 
            'category' => 'OBC-NCL',
            'allocated_category' => 'OBC-NCL', 
            'date_of_birth' => '2000-05-12', 
            'gender' => 'Female',
            'preparatory' => 'No', 
            'divyang' => 'No', 
            'admission_based_on' => 'JEE Advanced', // Example of JEE Advanced
            'course_code' => 'BTECH',
            'course' => 'Bachelor of Technology',
            'branch' => 'Mechanical Engineering',
            'email_username' => '24je0699@iitism.ac.in', 
            'email_password' => 8765432170, 
            'fee_amount' => 25000.00, // Potentially lower fee 
            'fee_date' => now(),
            'fee_mode' => 'Bank Transfer',
            'transaction_id' => 'SAMPLE_TXN_67890',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        

        Jeea::create([
            'jee_main_application_no' => 34567891, 
            'institute_name' => 'Sample Institute', 
            'first_name' => 'Raj',
            'middle_name' => '', // No middle name
            'last_name' => 'Patel',
            'email' => 'raj.patel@example.com',
            'contact_no' => 7654321098, 
            'category' => 'SC', 
            'allocated_category' => 'SC', 
            'date_of_birth' => '1999-01-25', 
            'gender' => 'Male',
            'preparatory' => 'Yes', // Preparatory course taken
            'divyang' => 'Yes', // Divyang status
            'admission_based_on' => 'JEE Main',
            'course_code' => 'BARCH', // Example of a different course code
            'course' => 'Bachelor of Architecture',
            'branch' => 'Architecture',
            'email_username' => '24je0069@iitism.ac.in', 
            'email_password' => 2345678910, 
            'fee_amount' => 15000.00, // Potentially lower fee
            'fee_date' => now(),
            'fee_mode' => 'Offline', // Offline payment mode 
            'transaction_id' => '',  // No transaction ID for offline
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
