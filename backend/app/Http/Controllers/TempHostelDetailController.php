<?php

namespace App\Http\Controllers;

use App\Models\Temp_hostel_details;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TempHostelDetailController extends Controller
{



    public function show()
    {
        // $email=session('user.email');
        $user = Auth::user(); 
        $email = $user -> registered_email_id;
        $hostelDetail = Temp_hostel_details::where('college_email', $email)->firstOrFail();
        return response()->json($hostelDetail,200);
    }

    public function update(Request $request)
    {
        $request->validate([
            'food_habit' => 'required|string',
            'laptop_details' => 'required|string',
            'model_no' => 'nullable|string',
            'serial_no' => 'nullable|string'
        ]);

        $user = Auth::user(); 
        $email = $user -> registered_email_id;


        $hostelDetail = Temp_hostel_details::updateorCreate(
            ['college_email' => $email], // Match by college_email
            $request->all() 
        );

        return response()->json($hostelDetail, $hostelDetail->wasRecentlyCreated ? 201 : 200);
    }

    public function destroy()
    {

        // $email=session('user.email');

        $user = Auth::user(); 
        $email = $user -> registered_email_id;
        $hostelDetail = Temp_hostel_details::where('college_email', $email)->firstOrFail();

        $hostelDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
