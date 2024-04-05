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
        Schema::create('temp_parent_details', function (Blueprint $table) {
            $table->id();

            $table->string('college_email');

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
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temp_parent_details');
    }
};
