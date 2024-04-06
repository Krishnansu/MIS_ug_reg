<?php

namespace App\Http\Controllers;

use App\Models\Temp_education_details;
use Illuminate\Http\Request;

class TempEducationDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $educationDetails = Temp_education_details::all();
        return response()->json($educationDetails);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name_of_examination_10' => 'required|string|max:255', 
            'university_board_10' => 'required|string|max:100',
            'year_10' => 'required|integer|digits:4|min:1950', // Add sensible minimum year
            'institution_school_10' => 'required|string|max:255',
            'grade_percentage_10' => 'required|numeric|between:0,100',
            'division_10' => 'required|string', // Could be 'First class', etc.
            'major_subjects_10' => 'string', // Optional 
            
            'name_of_examination_12' => 'required|string|max:255', 
            'university_board_12' => 'required|string|max:100',
            'year_12' => 'required|integer|digits:4|min:1950', // Add sensible minimum year
            'institution_school_12' => 'required|string|max:255',
            'grade_percentage_12' => 'required|numeric|between:0,100',
            'division_12' => 'required|string', // Could be 'First class', etc.
            'major_subjects_12' => 'string', // Optional 
            'migration_certificate_no' => 'required|string' // Assuming this is optional

            // 'uploaded_marksheet_10' => 'file|mimes:pdf|max:5120', // Restrict to PDF, 5MB max
            // 'uploaded_certificate_10' => 'file|mimes:pdf|max:5120',
            // 'uploaded_marksheet_12' => 'file|mimes:pdf|max:5120',
            // 'uploaded_certificate_12' => 'file|mimes:pdf|max:5120',
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

        $formFields['college_email'] = session('user.email');

        $educationDetail = Temp_education_details::create($formFields);
        return response()->json($educationDetail, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Temp_education_details $educationDetail)
    {
        return response()->json($educationDetail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Temp_education_details $educationDetail)
    {
        $formFields = $request->validate([
            'name_of_examination_10' => 'required|string|max:255', 
            'university_board_10' => 'required|string|max:100',
            'year_10' => 'required|integer|digits:4|min:1950', // Add sensible minimum year
            'institution_school_10' => 'required|string|max:255',
            'grade_percentage_10' => 'required|numeric|between:0,100',
            'division_10' => 'required|string', // Could be 'First class', etc.
            'major_subjects_10' => 'string', // Optional 
            
            'name_of_examination_12' => 'required|string|max:255', 
            'university_board_12' => 'required|string|max:100',
            'year_12' => 'required|integer|digits:4|min:1950', // Add sensible minimum year
            'institution_school_12' => 'required|string|max:255',
            'grade_percentage_12' => 'required|numeric|between:0,100',
            'division_12' => 'required|string', // Could be 'First class', etc.
            'major_subjects_12' => 'string', // Optional 
            'migration_certificate_no' => 'required|string' // Assuming this is optional
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

        $educationDetail->update($formFields);
        return response()->json($educationDetail, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Temp_education_details $educationDetail)
    {
        $educationDetail->delete();
        return response()->json(null, 204);
    }
}
