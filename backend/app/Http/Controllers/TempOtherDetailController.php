<?php

namespace App\Http\Controllers;

use App\Models\Temp_other_details;
use Illuminate\Http\Request;

class TempOtherDetailController extends Controller
{
    public function index()
    {
        $otherDetails = Temp_other_details::all();
        return response()->json($otherDetails);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'name_in_hindi' => 'required|string|max:255', // Limit length
            'marital_status' => 'required|string',
            'kashmiri_immigrant' => 'required|string',
            'identification_mark' => 'nullable|string', // Optional
            'extra_curricular_activities' => 'required|string',
            'other_relevent_info' => 'nullable|string', 
            'favourite_past_time' => 'required|string',
            'hobbies' => 'required|string',
            'jee_advanced_rank' => 'required|integer|min:1', // Positive rank
            'jee_advanced_category_rank' => 'nullable|integer|min:1',
            'bank_name_of_student' => 'required|string',
            'account_no_of_student' => 'required|integer|digits_between:8,18', 
            'confirm_account_no_of_student' => 'required|same:account_no_of_student',
            'ifsc_code_of_student' => 'required|regex:/^[A-Z]{4}0[A-Z0-9]{6}$/', // Typical IFSC code format
        ]);

        $formFields['college_email'] = session('user.email');

        $otherDetail = Temp_other_details::create($formFields);
        return response()->json($otherDetail, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Temp_other_details $otherDetail)
    {
        return response()->json($otherDetail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Temp_other_details $otherDetail)
    {
        $request->validate([
            'name_in_hindi' => 'required|string|max:255', // Limit length
            'marital_status' => 'required|string',
            'kashmiri_immigrant' => 'required|string',
            'identification_mark' => 'nullable|string', // Optional
            'extra_curricular_activities' => 'required|string',
            'other_relevent_info' => 'nullable|string', 
            'favourite_past_time' => 'required|string',
            'hobbies' => 'required|string',
            'jee_advanced_rank' => 'required|integer|min:1', // Positive rank
            'jee_advanced_category_rank' => 'nullable|integer|min:1',
            'bank_name_of_student' => 'required|string',
            'account_no_of_student' => 'required|integer|digits_between:8,18', 
            'confirm_account_no_of_student' => 'required|same:account_no_of_student',
            'ifsc_code_of_student' => 'required|regex:/^[A-Z]{4}0[A-Z0-9]{6}$/', // Typical IFSC code format
        ]);

        $otherDetail->update($request->all());
        return response()->json($otherDetail, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Temp_other_details $otherDetail)
    {
        $otherDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
