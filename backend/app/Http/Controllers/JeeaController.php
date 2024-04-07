<?php

namespace App\Http\Controllers;

use App\Models\Jeea;
use Illuminate\Http\Request;

class JeeaController extends Controller
{
    // Index (Fetch all records)
    // public function index()
    // {
    //     $jeeasList = Jeea::all(); 
    //     return response()->json($jeeasList); 
    // }


    // Show (Fetch single record)
    public function show()
    {
        $email=session('user.email');
        $jeea = Jeea::where('email_username', $email)->firstOrFail();
        return response()->json($jeea,200);
    }

    // Update
    // public function update(Request $request)
    // {
    //     $request->validate([
    //         'jee_main_application_no' => 'required|integer|unique:jeeas',
    //         'institute_name'          => 'required|string|max:255',
    //         'first_name'              => 'required|string|max:100',
    //         'middle_name'             => 'nullable|string|max:100',
    //         'last_name'               => 'required|string|max:100',
    //         'email'                   => 'required|email', 
    //         'contact_no'              => 'required|digits:10', 
    //         'category'                => 'required|string', 
    //         'allocated_category'      => 'required|string', 
    //         'date_of_birth'           => 'required|date',
    //         'gender'                  => 'required|string',  
    //         'preparatory'             => 'required|string',
    //         'divyang'                 => 'required|string',
    //         'admission_based_on'      => 'required|string',
    //         'course_code'             => 'required|string',
    //         'course'                  => 'required|string',
    //         'branch'                  => 'required|string',
    //         'email_username'          => 'required|string',
    //         'email_password'          => 'required|integer', 
    //         'fee_amount'              => 'required|numeric',
    //         'fee_date'                => 'required|date',
    //         'fee_mode'                => 'required|string', 
    //         'transaction_id'          => 'nullable|string', 
    //     ]);

    //     // $jeea->update($request->all());
    //     // return response()->json($jeea, 200); // 200: OK

    //     $hostelDetail = Jeea::updateorCreate(
    //         ['email_username' => $email=session('user.email')], // Match by college_email
    //         $request->all() 
    //     );

    //     return response()->json($hostelDetail, $hostelDetail->wasRecentlyCreated ? 201 : 200);
    // }

    // Destroy (Delete)
    // public function destroy(Jeea $jeea)
    // {
    //     $jeea->delete();
    //     return response()->json("Successfully Deleted", 200);
    // }
}
