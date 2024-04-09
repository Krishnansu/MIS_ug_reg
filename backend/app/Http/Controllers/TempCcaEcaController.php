<?php

namespace App\Http\Controllers;

use App\Models\Temp_cca_eca;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TempCcaEcaController extends Controller
{

    public function show() 
    {
        // $email=session('user.email');
        $user = Auth::user(); 
        $email = $user -> registered_email_id;
        $ccaEca = Temp_cca_eca::where('college_email', $email)->firstOrFail();
        return response()->json($ccaEca,200);
    }


    public function update(Request $request)
    {
        $request->validate([
            'cca_sports' => 'required',
            'eca_sports' => 'required',
            'major_game' => 'required',
            'minor_game' => 'required'
        ]);
        
        // $email=session('user.email');

        $user = Auth::user(); 
        $email = $user -> registered_email_id;
        
        
        $ccaEca = Temp_cca_eca::updateorCreate(
            ['college_email' => $email], // Match by college_email
            $request->all() // Set all fields 
        );

        return response()->json($ccaEca, $ccaEca->wasRecentlyCreated ? 201 : 200);
    }


    public function destroy()
    {

        // $email=session('user.email');

        $user = Auth::user(); 
        $email = $user -> registered_email_id;
        
        $ccaEca = Temp_cca_eca::where('college_email', $email)->firstOrFail();

        $ccaEca->delete();
        return response()->json("Deleted Successfully", 200);
    }
}
