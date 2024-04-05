<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temp_personal_details extends Model
{
    use HasFactory;

    protected $fillable = [
        'aadhar_number',
        'country',
        'state',
        'city',
        'pincode',
        'permanent_address_line_1',
        'permanent_address_line_2',
        'blood_group',
        'nationality',
        'religion',
        'birth_place',
        'uploaded_photo',
        'uploaded_signature'
    ];
}
