<?php

namespace App\Http\Controllers;

use App\Models\Temp_parent_details;
use Illuminate\Http\Request;

class TempParentDetailController extends Controller
{
   
    public function show()
    {
        $email=session('user.email');
        $parentDetail = Temp_parent_details::where('college_email', $email)->firstOrFail();
        return response()->json($parentDetail,200);
    }

    public function update(Request $request)
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


        $parentDetail = Temp_parent_details::updateorCreate(
            ['college_email' => $email=session('user.email')], // Match by college_email
            $request->all() 
        );

        return response()->json($parentDetail, $parentDetail->wasRecentlyCreated ? 201 : 200);
    }

    public function destroy()
    {
        $email=session('user.email');
        $parentDetail = Temp_parent_details::where('college_email', $email)->firstOrFail();

        $parentDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
