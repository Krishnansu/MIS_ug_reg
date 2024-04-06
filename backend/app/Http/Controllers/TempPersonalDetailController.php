<?php

namespace App\Http\Controllers;

use App\Models\Temp_personal_details;
use Illuminate\Http\Request;

class TempPersonalDetailController extends Controller
{
    public function index()
    {
        $personalDetails = Temp_personal_details::all();
        return response()->json(['data' => $personalDetails, 'user' => session('user.email')]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'aadhar_number' => 'required|integer|digits:12',
            'country' => 'required|string',
            'state' => 'required|string',
            'city' => 'required|string',
            'pincode' => 'required|integer', // Adjust pincode length
            'permanent_address_line_1' => 'required|string', 
            'permanent_address_line_2' => 'required|string', // Optional
            'blood_group' => 'required|in:A+,A-,B+,B-,AB+,AB-,O+,O-',
            'nationality' => 'required|string',
            'religion' => 'required|string',
            'birth_place' => 'required|string',
        ]);

        if($request->hasFile('uploaded_photo')){
            $formFields['uploaded_photo'] = $request->file('uploaded_photo')->store('uploaded','public');
        }

        if($request->hasFile('uploaded_signature')){
            $formFields['uploaded_signature'] = $request->file('uploaded_signature')->store('uploaded','public');
        }

        $formFields['college_email'] = session('user.email');

        $personalDetail = Temp_personal_details::create($formFields);
        return response()->json($personalDetail, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Temp_personal_details $personalDetail)
    {
        return response()->json($personalDetail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Temp_personal_details $personalDetail)
    {
        // dd($request->all());
        $formFields = $request->validate([
            'aadhar_number' => 'required|integer|digits:12',
            'country' => 'required|string',
            'state' => 'required|string',
            'city' => 'required|string',
            'pincode' => 'required|integer', // Adjust pincode length
            'permanent_address_line_1' => 'required|string', 
            'permanent_address_line_2' => 'required|string', // Optional
            'blood_group' => 'required|in:A+,A-,B+,B-,AB+,AB-,O+,O-',
            'nationality' => 'required|string',
            'religion' => 'required|string',
            'birth_place' => 'required|string',
        ]);

        if($request->hasFile('uploaded_photo')){
            $formFields['uploaded_photo'] = $request->file('uploaded_photo')->store('uploaded','public');
        }

        if($request->hasFile('uploaded_signature')){
            $formFields['uploaded_signature'] = $request->file('uploaded_signature')->store('uploaded','public');
        }

        $personalDetail->update($formFields);
        return response()->json($personalDetail, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Temp_personal_details $personalDetail)
    {
        $personalDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
