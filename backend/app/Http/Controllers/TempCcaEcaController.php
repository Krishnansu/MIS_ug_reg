<?php

namespace App\Http\Controllers;

use App\Models\Temp_cca_eca;
use Illuminate\Http\Request;

class TempCcaEcaController extends Controller
{
    public function index()
    {
        $ccaEcas = Temp_cca_eca::all();
        return response()->json($ccaEcas);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields = $request->validate([
            'cca_sports' => 'required',
            'eca_sports' => 'required',
            'major_game' => 'required',
            'minor_game' => 'required'
        ]);

        $formFields['college_email'] = session('user.email');

        $ccaEca = Temp_cca_eca::create($formFields);
        return response()->json($ccaEca, 201); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Temp_cca_eca $ccaEca) 
    {
        return response()->json($ccaEca);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Temp_cca_eca $ccaEca)
    {
        $request->validate([
            'cca_sports' => 'required',
            'eca_sports' => 'required',
            'major_game' => 'required',
            'minor_game' => 'required'
        ]);
        
        $ccaEca->update($request->all());
        return response()->json($ccaEca, 200); 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Temp_cca_eca $ccaEca)
    {
        $ccaEca->delete();
        return response()->json("Successfully Deleted", 200); 
    }
}
