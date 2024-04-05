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
        Schema::create('temp_hostel_details', function (Blueprint $table) {
            $table->id();

            $table->string('college_email');

            $table->string('food_habit');
            $table->string('laptop_details');
            $table->string('model_no');
            $table->string('serial_no');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_hostel_details');
    }
};
