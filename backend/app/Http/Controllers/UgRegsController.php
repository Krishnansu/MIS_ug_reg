<?php

namespace App\Http\Controllers;

use App\Models\Temp_cca_eca;
use App\Models\Temp_education_details;
use App\Models\Temp_hostel_details;
use App\Models\Temp_other_details;
use App\Models\Temp_parent_details;
use App\Models\Temp_personal_details;
use App\Models\Ug_reg;
use Illuminate\Http\Request;

class UgRegsController extends Controller
{

    // public function index()
    // {
    //     $ugRegistrations = Ug_reg::all(); // Retrieve all records
    //     return response()->json($ugRegistrations);
    // }

    public function show()
    {
        $email=session('user.email');
        $ugDetail = Ug_reg::where('college_email', $email)->firstOrFail();
        return response()->json($ugDetail,200);
    }

    public function store(Request $request)
    {
        $collegeEmail = session('user.email');

        // Retrieve data from temporary tables 
        $otherDetails = Temp_other_details::where('college_email', $collegeEmail)->firstOrFail();
        $parentDetails = Temp_parent_details::where('college_email', $collegeEmail)->firstOrFail();
        $educationDetails = Temp_education_details::where('college_email', $collegeEmail)->firstOrFail();
        $hostelDetails = Temp_hostel_details::where('college_email', $collegeEmail)->firstOrFail();
        $personalDetails = Temp_personal_details::where('college_email', $collegeEmail)->firstOrFail();
        $ccaEcaDetails = Temp_cca_eca::where('college_email', $collegeEmail)->firstOrFail();


        // Create the registration record
        $ugRegistration = Ug_reg::create([
            'college_email' => $collegeEmail,
            ...$otherDetails->toArray(), 
            ...$parentDetails->toArray(),
            ...$educationDetails->toArray(),
            ...$hostelDetails->toArray(),
            ...$personalDetails->toArray(),
            ...$ccaEcaDetails->toArray(),
        ]);

        return response()->json($ugRegistration, 201); 

        
    }
}
