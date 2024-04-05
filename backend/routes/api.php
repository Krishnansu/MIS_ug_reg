<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\TempCcaEcaController;
use App\Http\Controllers\TempEducationDetailController;
use App\Http\Controllers\TempHostelDetailController;
use App\Http\Controllers\TempOtherDetailController;
use App\Http\Controllers\TempParentDetailController;
use App\Http\Controllers\TempPersonalDetailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);

Route::post('/logout', [LoginController::class, 'logout']);

// CCA/ECA Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-cca-ecas', [TempCcaEcaController::class, 'index']);
    Route::get('/temp-cca-ecas/{ccaEca}', [TempCcaEcaController::class, 'show']);
    Route::post('/temp-cca-ecas', [TempCcaEcaController::class, 'store']);
    Route::put('/temp-cca-ecas/{ccaEca}', [TempCcaEcaController::class, 'update']);
    Route::delete('/temp-cca-ecas/{ccaEca}', [TempCcaEcaController::class, 'destroy']);
});

// Personal Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-personal-details', [TempPersonalDetailController::class, 'index']);
    Route::get('/temp-personal-details/{personalDetail}', [TempPersonalDetailController::class, 'show']);
    Route::post('/temp-personal-details', [TempPersonalDetailController::class, 'store']);
    Route::put('/temp-personal-details/{personalDetail}', [TempPersonalDetailController::class, 'update']);
    Route::delete('/temp-personal-details/{personalDetail}', [TempPersonalDetailController::class, 'destroy']);
});

// Other Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-other-details', [TempOtherDetailController::class, 'index']);
    Route::get('/temp-other-details/{otherDetail}', [TempOtherDetailController::class, 'show']);
    Route::post('/temp-other-details', [TempOtherDetailController::class, 'store']);
    Route::put('/temp-other-details/{otherDetail}', [TempOtherDetailController::class, 'update']);
    Route::delete('/temp-other-details/{otherDetail}', [TempOtherDetailController::class, 'destroy']);
});

// Parent Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-parent-details', [TempParentDetailController::class, 'index']);
    Route::get('/temp-parent-details/{parentDetail}', [TempParentDetailController::class, 'show']);
    Route::post('/temp-parent-details', [TempParentDetailController::class, 'store']);
    Route::put('/temp-parent-details/{parentDetail}', [TempParentDetailController::class, 'update']);
    Route::delete('/temp-parent-details/{parentDetail}', [TempParentDetailController::class, 'destroy']);
});

// Education Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-education-details', [TempEducationDetailController::class, 'index']);
    Route::get('/temp-education-details/{educationDetail}', [TempEducationDetailController::class, 'show']);
    Route::post('/temp-education-details', [TempEducationDetailController::class, 'store']);
    Route::put('/temp-education-details/{educationDetail}', [TempEducationDetailController::class, 'update']);
    Route::delete('/temp-education-details/{educationDetail}', [TempEducationDetailController::class, 'destroy']);
});

// Hostel Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-hostel-details', [TempHostelDetailController::class, 'index']);
    Route::get('/temp-hostel-details/{hostelDetail}', [TempHostelDetailController::class, 'show']);
    Route::post('/temp-hostel-details', [TempHostelDetailController::class, 'store']);
    Route::put('/temp-hostel-details/{hostelDetail}', [TempHostelDetailController::class, 'update']);
    Route::delete('/temp-hostel-details/{hostelDetail}', [TempHostelDetailController::class, 'destroy']);
});

// // Retrieve a list of CCA/ECA records
// Route::get('/temp-cca-ecas', [TempCcaEcaController::class, 'index'])->middleware('auth');

// // Get a specific CCA/ECA record
// Route::get('/temp-cca-ecas/{ccaEca}', [TempCcaEcaController::class, 'show']);

// // Create a new CCA/ECA record
// Route::post('/temp-cca-ecas', [TempCcaEcaController::class, 'store']);

// // Update an existing record
// Route::put('/temp-cca-ecas/{ccaEca}', [TempCcaEcaController::class, 'update']); 

// // Delete a CCA/ECA record
// Route::delete('/temp-cca-ecas/{ccaEca}', [TempCcaEcaController::class, 'destroy']); 



// // Retrieve all personal details records
// Route::get('/temp-personal-details', [TempPersonalDetailController::class, 'index']);

// // Get a specific personal details record
// Route::get('/temp-personal-details/{personalDetail}', [TempPersonalDetailController::class, 'show']);

// // Create a new personal details record
// Route::post('/temp-personal-details', [TempPersonalDetailController::class, 'store']);

// // Update an existing personal details record
// Route::put('/temp-personal-details/{personalDetail}', [TempPersonalDetailController::class, 'update']); 

// // Delete a personal details record
// Route::delete('/temp-personal-details/{personalDetail}', [TempPersonalDetailController::class, 'destroy']); 


// // Retrieve all other details records
// Route::get('/temp-other-details', [TempOtherDetailController::class, 'index']);

// // Get a specific other details record 
// Route::get('/temp-other-details/{otherDetail}', [TempOtherDetailController::class, 'show']);

// // Create a new other details record
// Route::post('/temp-other-details', [TempOtherDetailController::class, 'store']);

// // Update an existing other details record
// Route::put('/temp-other-details/{otherDetail}', [TempOtherDetailController::class, 'update']); 

// // Delete an other details record
// Route::delete('/temp-other-details/{otherDetail}', [TempOtherDetailController::class, 'destroy']); 


// // Retrieve all parent details records
// Route::get('/temp-parent-details', [TempParentDetailController::class, 'index']);

// // Get a specific parent details record 
// Route::get('/temp-parent-details/{parentDetail}', [TempParentDetailController::class, 'show']);

// // Create a new parent details record
// Route::post('/temp-parent-details', [TempParentDetailController::class, 'store']);

// // Update an existing parent details record
// Route::put('/temp-parent-details/{parentDetail}', [TempParentDetailController::class, 'update']); 

// // Delete a parent details record
// Route::delete('/temp-parent-details/{parentDetail}', [TempParentDetailController::class, 'destroy']);


// // Retrieve all education details records
// Route::get('/temp-education-details', [TempEducationDetailController::class, 'index']);

// // Get a specific education details record 
// Route::get('/temp-education-details/{educationDetail}', [TempEducationDetailController::class, 'show']);

// // Create a new education details record
// Route::post('/temp-education-details', [TempEducationDetailController::class, 'store']);

// // Update an existing education details record
// Route::put('/temp-education-details/{educationDetail}', [TempEducationDetailController::class, 'update']); 

// // Delete a education details record
// Route::delete('/temp-education-details/{educationDetail}', [TempEducationDetailController::class, 'destroy']);

// // Retrieve all hostel details records
// Route::get('/temp-hostel-details', [TempHostelDetailController::class, 'index']);

// // Get a specific hostel details record 
// Route::get('/temp-hostel-details/{hostelDetail}', [TempHostelDetailController::class, 'show']);

// // Create a new hostel details record
// Route::post('/temp-hostel-details', [TempHostelDetailController::class, 'store']);

// // Update an existing hostel details record
// Route::put('/temp-hostel-details/{hostelDetail}', [TempHostelDetailController::class, 'update']); 

// // Delete a hostel details record
// Route::delete('/temp-hostel-details/{hostelDetail}', [TempHostelDetailController::class, 'destroy']);