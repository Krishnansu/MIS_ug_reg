<?php

namespace Database\Seeders;

use App\Models\Temp_cca_eca;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TempCcaEcaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Temp_cca_eca::create([
            'cca_sports' => 'Cricket',
            'eca_sports' => 'Chess',
            'major_game' => 'Football',
            'minor_game' => 'Swimming'
        ]);
    }
}
