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
            Schema::create('ug_regs', function (Blueprint $table) {
            $table->id();

            $table->string('email_username');
            // $table->foreign('email_username')->references('email_username')->on('jeeas');
            
            $table->string('cca_sports');
            $table->string('eca_sports');
            $table->string('major_game');
            $table->string('minor_game');

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

            $table->string('father_name');
            $table->string('mother_name');
            $table->string('father_occupation');
            $table->string('mother_occupation');
            $table->bigInteger('father_income');
            $table->bigInteger('mother_income');
            $table->bigInteger('parent_mobile_no');
            $table->string('parent_email_id');
            $table->string('guardian_name');
            $table->string('guardian_relation');
            $table->bigInteger('alternate_mobile_no');
            $table->string('alternate_email_id');
            $table->string('bank_name_of_parent');
            $table->bigInteger('account_no_of_parent');
            $table->bigInteger('confirm_account_no_of_parent');
            $table->string('ifsc_code_of_parent');

            $table->string('name_of_examination_10');
            $table->string('university_board_10');
            $table->integer('year_10');
            $table->string('institution_school_10');
            $table->string('grade_percentage_10');
            $table->string('division_10');
            $table->longText('major_subjects_10');
            $table->string('uploaded_marksheet_10');
            $table->string('uploaded_certificate_10');

            $table->string('name_of_examination_12');
            $table->string('university_board_12');
            $table->integer('year_12');
            $table->string('institution_school_12');
            $table->string('grade_percentage_12');
            $table->string('division_12');
            $table->longText('major_subjects_12');
            $table->string('migration_certificate_no');
            $table->string('uploaded_marksheet_12');
            $table->string('uploaded_certificate_12');

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
        Schema::dropIfExists('ug_regs');
    }
};
