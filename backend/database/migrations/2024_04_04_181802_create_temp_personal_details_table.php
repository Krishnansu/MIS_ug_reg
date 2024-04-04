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
        Schema::create('temp_personal_details', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('aadhar_number');
            $table->string('country');
            $table->string('state');
            $table->string('city');
            $table->integer('pincode');
            $table->longText('permanent_address_line_1');
            $table->longText('permanent_address_line_2');
            $table->string('blood_group');
            $table->string('nationality');
            $table->string('religion');
            $table->string('birth_place');
            $table->string('uploaded_photo');
            $table->string('uploaded_signature');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_personal_details');
    }
};
