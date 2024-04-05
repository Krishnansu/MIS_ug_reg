<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temp_cca_eca extends Model
{
    use HasFactory;

    protected $fillable = [
        'college_email',
        'cca_sports',
        'eca_sports',
        'major_game',
        'minor_game'
    ];
}
