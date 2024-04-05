<?php

namespace App\Http\Controllers;

use App\Models\Temp_hostel_details;
use Illuminate\Http\Request;

class TempHostelDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hostelDetails = Temp_hostel_details::all();
        return response()->json($hostelDetails);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'food_habit' => 'required|string',
            'laptop_details' => 'required|string',
            'model_no' => 'nullable|string',
            'serial_no' => 'nullable|string'
        ]);

        $hostelDetail = Temp_hostel_details::create($request->all());
        return response()->json($hostelDetail, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Temp_hostel_details $hostelDetail)
    {
        return response()->json($hostelDetail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Temp_hostel_details $hostelDetail)
    {
        $request->validate([
            'food_habit' => 'required|string',
            'laptop_details' => 'required|string',
            'model_no' => 'nullable|string',
            'serial_no' => 'nullable|string'
        ]);

        $hostelDetail->update($request->all());
        return response()->json($hostelDetail, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Temp_hostel_details $hostelDetail)
    {
        $hostelDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
