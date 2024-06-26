<?php

namespace App\Http\Controllers;

use App\Models\Temp_cca_eca;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class TempCcaEcaController extends Controller
{

    public function show($email) 
    {
        // $email=session('user.email');
        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;
        // Log::debug(Temp_cca_eca::where('college_email', $email)->first());
        $ccaEca = Temp_cca_eca::where('college_email', $email)->first();
        if(!$ccaEca){
            return response()->json(['message' => 'Data not found for this email' ], 204);
        }
        else{
            return response()->json($ccaEca,200);
        }  
        
    }


    public function update(Request $request)
    {
        $request->validate([
            'cca_sports' => 'required',
            'eca_sports' => 'required'
        ]);
        
        // $email=session('user.email');
        Log::debug($request);
        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;
        
        $email=$request->college_email;

        $ccaEca = Temp_cca_eca::updateorCreate(
            ['college_email' => $email], // Match by college_email
            $request->all() // Set all fields 
        );
        Log::debug($ccaEca);
        return response()->json($ccaEca, $ccaEca->wasRecentlyCreated ? 201 : 200);
        return response() ->json("Success");
    }


    public function destroy($email)
    {

        // $email=session('user.email');

        // $user = Auth::user(); 
        // $email = $user -> registered_email_id;
        
        $ccaEca = Temp_cca_eca::where('college_email', $email)->firstOrFail();

        $ccaEca->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
