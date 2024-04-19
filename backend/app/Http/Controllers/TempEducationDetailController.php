<?php

namespace App\Http\Controllers;

use App\Models\Temp_education_details;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TempEducationDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $educationDetails = Temp_education_details::all();
    //     return response()->json($educationDetails);
    // }

 
    public function show()
    {
        // $email=session('user.email');
        $user = Auth::user(); 
        $email = $user -> registered_email_id;
        $educationDetail = Temp_education_details::where('college_email', $email)->firstOrFail();
        return response()->json($educationDetail,200);
    }


    public function update(Request $request)
    {
        $formFields = $request->validate([
            'name_of_examination_10' => 'required|string|max:255', 
            'university_board_10' => 'required|string|max:100',
            'year_10' => 'required|integer|digits:4|min:1950', 
            'institution_school_10' => 'required|string|max:255',
            'grade_percentage_10' => 'required|numeric|between:0,100',
            'division_10' => 'required|string', 
            'major_subjects_10' => 'string', // Optional 
            
            'name_of_examination_12' => 'required|string|max:255', 
            'university_board_12' => 'required|string|max:100',
            'year_12' => 'required|integer|digits:4|min:1950', 
            'institution_school_12' => 'required|string|max:255',
            'grade_percentage_12' => 'required|numeric|between:0,100',
            'division_12' => 'required|string', 
            'major_subjects_12' => 'string', // Optional 
            'migration_certificate_no' => 'required|string' 
        ]);

        if($request->hasFile('uploaded_marksheet_10')){
            $formFields['uploaded_marksheet_10'] = $request->file('uploaded_marksheet_10')->store('uploaded','public');
        }

        if($request->hasFile('uploaded_certificate_10')){
            $formFields['uploaded_certificate_10'] = $request->file('uploaded_certificate_10')->store('uploaded','public');
        }

        if($request->hasFile('uploaded_marksheet_12')){
            $formFields['uploaded_marksheet_12'] = $request->file('uploaded_marksheet_12')->store('uploaded','public');
        }

        if($request->hasFile('uploaded_certificate_12')){
            $formFields['uploaded_certificate_12'] = $request->file('uploaded_certificate_12')->store('uploaded','public');
        }

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;

        $educationDetail = Temp_education_details::updateorCreate(
            // ['college_email' => $email], // Match by college_email
            $formFields 
        );

        return response()->json($educationDetail, $educationDetail->wasRecentlyCreated ? 201 : 200);
    }


    public function destroy()
    {
        // $email=session('user.email');
        $user = Auth::user(); 
        $email = $user -> registered_email_id;
        $educationDetail = Temp_education_details::where('college_email', $email)->firstOrFail();

        $educationDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
