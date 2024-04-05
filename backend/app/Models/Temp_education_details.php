<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temp_education_details extends Model
{
    use HasFactory;

    protected $fillable = [
        'name_of_examination_10',
        'university_board_10',
        'year_10',
        'institution_school_10',
        'grade_percentage_10',
        'division_10',
        'major_subjects_10',
        'uploaded_marksheet_10',
        'uploaded_certificate_10',
        'name_of_examination_12',
        'university_board_12',
        'year_12',
        'institution_school_12',
        'grade_percentage_12',
        'division_12',
        'major_subjects_12',
        'migration_certificate_no',
        'uploaded_marksheet_12',
        'uploaded_certificate_12'
    ];
}
