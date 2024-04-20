<?php

namespace App\Http\Controllers;

use App\Models\Temp_personal_details;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class TempPersonalDetailController extends Controller
{
    
    public function show($email)
    {
        // $email=session('user.email');

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;
        $personalDetail = Temp_personal_details::where('college_email', $email)->firstOrFail();
        if(!$personalDetail){
            return response()->json(['message' => 'Data not found for this email' ], 204);
        }
        else{
            return response()->json($personalDetail,200);
        }

    }

    public function update(Request $request)
    {
        // Log::debug("Inside Controller");
        Log::debug($request);

        $formFields = $request->validate([
            'aadhar_number' => 'required|integer|digits:12',
            'country' => 'required|string',
            'state' => 'required|string',
            'city' => 'required|string',
            'pincode' => 'required|integer', 
            'permanent_address_line_1' => 'required|string', 
            'permanent_address_line_2' => 'required|string', 
            'blood_group' => 'required|in:A+,A-,B+,B-,AB+,AB-,O+,O-',
            'nationality' => 'required|string',
            'religion' => 'required|string',
            'birth_place' => 'required|string',
        ]);

        
        // Log::debug("here");
        if($request->hasFile('uploaded_photo')){
            $formFields['uploaded_photo'] = $request->file('uploaded_photo')->store('uploaded','public');
            // Log::debug($request->file('uploaded_photo'));
        }

        if($request->hasFile('uploaded_signature')){
            $formFields['uploaded_signature'] = $request->file('uploaded_signature')->store('uploaded','public');
            // Log::debug($request->file('uploaded_signature'));
        }

        // Log::debug("There");

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;

        $email=$request->college_email;


        $personalDetail = Temp_personal_details::updateorCreate(
            ['college_email' => $email], // Match by college_email
            $formFields 
        );

        return response()->json($personalDetail, $personalDetail->wasRecentlyCreated ? 201 : 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($email)
    {

        // $email=session('user.email');

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;
        $personalDetail = Temp_personal_details::where('college_email', $email)->firstOrFail();

        $personalDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
