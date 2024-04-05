<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jeea extends Model
{
    use HasFactory;

    //Relationship with Ug_reg
    public function ug_reg() {
        return $this->hasOne(Ug_reg::class, 'email_username');
    }
}
