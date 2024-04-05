<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jeeas', function (Blueprint $table) {
            $table->id();

            $table->integer('jee_main_application_no')->unique();
            $table->string('institute_name');
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('email');
            $table->bigInteger('contact_no');
            $table->string('category');
            $table->string('allocated_category');
            $table->string('date_of_birth');
            $table->string('gender');
            $table->string('preparatory');
            $table->string('divyang');

            $table->string('admission_based_on');
            $table->string('course_code');
            $table->string('course');
            $table->string('branch');

            $table->string('email_username')->unique();
            $table->bigInteger('email_password');

            $table->float('fee_amount');
            $table->date('fee_date');
            $table->string('fee_mode');
            $table->string('transaction_id');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jeeas');
    }
};
