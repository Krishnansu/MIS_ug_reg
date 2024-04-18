<?php

namespace App\Http\Controllers;

use App\Models\SportsCaaQuotaSeatsStock;
use Illuminate\Http\Request;

class SportsCaaQuotaSeatsStockController extends Controller
{

    public function index()
    {
        $sportsSeatsData = SportsCaaQuotaSeatsStock::all();
        return response()->json($sportsSeatsData);
    }

    public function decrementSeatCount($id)
    {
        $seatData = SportsCaaQuotaSeatsStock::findOrFail($id);
        
        if ($seatData->total_available_seats <= 0) {
            return response()->json(['error' => 'No available seats'], 400); 
        }
        $seatData->total_available_seats -= 1; 
        $seatData->save();

        return request() -> json($seatData,200); 
    }

}
