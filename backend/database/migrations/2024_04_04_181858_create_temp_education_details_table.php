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
        Schema::create('temp_education_details', function (Blueprint $table) {
            $table->id();

            $table->string('college_email');

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
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_education_details');
    }
};
