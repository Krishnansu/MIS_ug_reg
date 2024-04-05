<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temp_parent_details extends Model
{
    use HasFactory;

    protected $fillable = [
        'father_name',
        'mother_name',
        'father_occupation',
        'mother_occupation',
        'father_income',
        'mother_income',
        'parent_mobile_no',
        'parent_email_id',
        'guardian_name',
        'guardian_relation',
        'alternate_mobile_no',
        'alternate_email_id',
        'bank_name_of_parent',
        'account_no_of_parent',
        'confirm_account_no_of_parent',
        'ifsc_code_of_parent'
    ];
}
