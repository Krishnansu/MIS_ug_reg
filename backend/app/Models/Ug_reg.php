<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ug_reg extends Model
{
    use HasFactory;

    //Relationship to jeea
    public function jeea() {
        return $this->belongsTo(Jeea::class, 'email_username');
    }
}
