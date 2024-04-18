<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SportsCaaQuotaSeatsStock extends Model
{
    use HasFactory;

    protected $table = 'sports_caa_quota_seats_stock';

    public $timestamps = false;

    protected $fillable = [
        'caa_type',
        'caa_sub_category',
        'name',
        'is_major',
        'is_minor',
        'major_minor_type',
        'male_available_seats',
        'female_available_seats',
        'total_available_seats',
        'remark',
        'created_by',
        'is_deleted', 
        'status'
    ];

    protected $casts = [ // Adjust if needed based on data interaction
        'male_available_seats' => 'integer',
        'female_available_seats' => 'integer',
        'total_available_seats' => 'integer'
    ]; 
}