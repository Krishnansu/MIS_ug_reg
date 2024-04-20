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

    public function fetchDistinctCaaSubCategories()
    {
        $distinctSubCategories = SportsCaaQuotaSeatsStock::distinct()
                                    ->pluck('caa_sub_category');

        return response()->json($distinctSubCategories);
    }

    public function fetchSeats() 
    {
        $data = SportsCaaQuotaSeatsStock::select('id', 'total_available_seats')
                                            ->get()
                                            ->toArray();
    
        return response()->json($data);
    } 

    public function fetchNamesForNsoMajor() 
    {
        $data = SportsCaaQuotaSeatsStock::where('caa_sub_category', 'NSO')
                                         ->where('major_minor_type', 'major') 
                                         ->select('id', 'name') // Select only the required fields
                                         ->get()
                                         ->map(function ($item) {
                                             return [
                                                 'id' => $item->id,
                                                 'name' => $item->name
                                            ];
                                         });
    
        return response()->json($data);
    } 
    
    public function fetchNamesForNsoMinor() 
    {
        $data = SportsCaaQuotaSeatsStock::where('caa_sub_category', 'NSO')
                                     ->where('major_minor_type', 'minor') 
                                     ->select('id', 'name') // Select only the required fields
                                     ->get()
                                     ->map(function ($item) {
                                         return [
                                             'id' => $item->id,
                                             'name' => $item->name
                                        ];
                                     });

        return response()->json($data);
    } 



    public function fetchNamesForECA()
    {
        $names = SportsCaaQuotaSeatsStock::where('caa_sub_category', 'ECA')
                                ->pluck('name');

        return response()->json($names);
    }

    public function fetchNamesByCaaType($caaType) 
    {
        $names = SportsCaaQuotaSeatsStock::where('caa_type', $caaType)
                                ->pluck('name');

        return response()->json($names);
    }

}
