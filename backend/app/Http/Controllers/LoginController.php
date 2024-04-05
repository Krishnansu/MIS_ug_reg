<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $formFields = $request->validate([
            'registered_email_id' => 'required|email', 
            'registered_mob_no' => 'required' // Assuming you're using mobile number as a 'password'
        ]);

        $credentials = $request->only('registered_email_id', 'registered_mob_no');
        $user = User::where('registered_email_id', $credentials['registered_email_id'])->first();

    

        if ($user && Hash::check($credentials['registered_mob_no'], $user->registered_mob_no)) {
            Auth::login($user,true); // Manually log the user in

            
            $request->session()->put('user.email', $user->registered_email_id);
            $request->session()->put('user.jee_application_no', $user->jee_main_application_no);

            //$request->session()->get('user.email')
            //session('user.email')
            return response()->json(['message' => 'Login successful'], 200);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401); // Unauthorized
        }
    }

    public function logout(Request $request)
    {
        // Invalidate the user's session (standard logout)
        $request->session()->invalidate();

        // Regenerate the session ID to further enhance security
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
