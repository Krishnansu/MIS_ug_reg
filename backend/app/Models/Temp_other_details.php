<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temp_other_details extends Model
{
    use HasFactory;

    protected $fillable = [
        'college_email',
        'name_in_hindi',
        'marital_status',
        'kashmiri_immigrant',
        'identification_mark',
        'extra_curricular_activities',
        'other_relevent_info',
        'favourite_past_time',
        'hobbies',
        'jee_advanced_rank',
        'jee_advanced_category_rank',
        'bank_name_of_student',
        'account_no_of_student',
        'confirm_account_no_of_student',
        'ifsc_code_of_student'
    ];
}
