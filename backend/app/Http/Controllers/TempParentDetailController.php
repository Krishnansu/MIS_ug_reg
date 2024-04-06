<?php

namespace App\Http\Controllers;

use App\Models\Temp_parent_details;
use Illuminate\Http\Request;

class TempParentDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $parentDetails = Temp_parent_details::all();
        return response()->json($parentDetails);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'father_name' => 'required|string|max:255', 
            'mother_name' => 'required|string|max:255', 
            'father_occupation' => 'required|string',
            'mother_occupation' => 'required|string',
            'father_income' => 'required|integer|min:0', // Income can't be negative
            'mother_income' => 'required|integer|min:0', 
            'parent_mobile_no' => 'required|digits:10',
            'parent_email_id' => 'required|email',
            'guardian_name' => 'nullable|string', 
            'guardian_relation' => 'nullable|string',
            'alternate_mobile_no' => 'nullable|digits:10',
            'alternate_email_id' => 'nullable|email',
            'bank_name_of_parent' => 'required|string',
            'account_no_of_parent' => 'required|integer|digits_between:8,18', 
            'confirm_account_no_of_parent' => 'required|same:account_no_of_parent',
            'ifsc_code_of_parent' => 'required|regex:/^[A-Z]{4}0[A-Z0-9]{6}$/', 
        ]);

        $formFields['college_email'] = session('user.email');

        $parentDetail = Temp_parent_details::create($formFields);
        return response()->json($parentDetail, 201); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Temp_parent_details $parentDetail)
    {
        return response()->json($parentDetail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Temp_parent_details $parentDetail)
    {
        $request->validate([
            'father_name' => 'required|string|max:255', 
            'mother_name' => 'required|string|max:255', 
            'father_occupation' => 'required|string',
            'mother_occupation' => 'required|string',
            'father_income' => 'required|integer|min:0', // Income can't be negative
            'mother_income' => 'required|integer|min:0', 
            'parent_mobile_no' => 'required|digits:10',
            'parent_email_id' => 'required|email',
            'guardian_name' => 'nullable|string', 
            'guardian_relation' => 'nullable|string',
            'alternate_mobile_no' => 'nullable|digits:10',
            'alternate_email_id' => 'nullable|email',
            'bank_name_of_parent' => 'required|string',
            'account_no_of_parent' => 'required|integer|digits_between:8,18', 
            'confirm_account_no_of_parent' => 'required|same:account_no_of_parent',
            'ifsc_code_of_parent' => 'required|regex:/^[A-Z]{4}0[A-Z0-9]{6}$/', 
        ]);

        $parentDetail->update($request->all());
        return response()->json($parentDetail, 200); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Temp_parent_details $parentDetail)
    {
        $parentDetail->delete();
        return response()->json("Deleted Successfully", 200); 
    }
}
