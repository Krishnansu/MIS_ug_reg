<?php

namespace App\Http\Controllers;

use App\Models\Temp_other_details;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TempOtherDetailController extends Controller
{
    
    public function show($email)
    {
        // $email=session('user.email');

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;
        $otherDetail = Temp_other_details::where('college_email', $email)->firstOrFail();
        if(!$otherDetail){
            return response()->json(['message' => 'Data not found for this email' ], 204);
        }
        else{
            return response()->json($otherDetail,200);
        }
    }

    public function update(Request $request)
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

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;

        $email=$request->college_email;

        $otherDetail = Temp_other_details::updateorCreate(
            ['college_email' => $email], // Match by college_email
            $request->all() 
        );

        return response()->json($otherDetail, $otherDetail->wasRecentlyCreated ? 201 : 200);
    }


    public function destroy($email)
    {
        // $email=session('user.email');

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;
        $otherDetail = Temp_other_details::where('college_email', $email)->firstOrFail();

        $otherDetail->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
