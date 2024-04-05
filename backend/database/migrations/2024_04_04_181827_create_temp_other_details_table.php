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
        Schema::create('temp_other_details', function (Blueprint $table) {
            $table->id();

            $table->string('college_email');

            $table->string('name_in_hindi');
            $table->string('marital_status');
            $table->string('kashmiri_immigrant');
            $table->longText('identification_mark');
            $table->string('extra_curricular_activities');
            $table->longText('other_relevent_info');
            $table->string('favourite_past_time');
            $table->string('hobbies');
            $table->integer('jee_advanced_rank');
            $table->integer('jee_advanced_category_rank');
            $table->string('bank_name_of_student');
            $table->bigInteger('account_no_of_student');
            $table->bigInteger('confirm_account_no_of_student');
            $table->string('ifsc_code_of_student');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_other_details');
    }
};
