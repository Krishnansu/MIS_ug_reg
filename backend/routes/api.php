<?php

use App\Http\Controllers\JeeaController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TempCcaEcaController;
use App\Http\Controllers\TempEducationDetailController;
use App\Http\Controllers\TempHostelDetailController;
use App\Http\Controllers\TempOtherDetailController;
use App\Http\Controllers\TempParentDetailController;
use App\Http\Controllers\TempPersonalDetailController;
use App\Http\Controllers\UgRegsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/login', [LoginController::class, 'login']);

Route::post('/logout', [LoginController::class, 'logout']);

// Jeea Records with auth middleware
Route::middleware('auth')->group(function () {       
    Route::get('/jeeas', [JeeaController::class, 'show']);     
});


// CCA/ECA Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-cca-ecas', [TempCcaEcaController::class, 'show']);
    Route::post('/temp-cca-ecas', [TempCcaEcaController::class, 'update']);
    Route::delete('/temp-cca-ecas', [TempCcaEcaController::class, 'destroy']);
});

// Personal Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-personal-details', [TempPersonalDetailController::class, 'show']);
    Route::post('/temp-personal-details', [TempPersonalDetailController::class, 'update']);
    Route::delete('/temp-personal-details', [TempPersonalDetailController::class, 'destroy']);
});

// Other Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-other-details', [TempOtherDetailController::class, 'show']);
    Route::post('/temp-other-details', [TempOtherDetailController::class, 'update']);
    Route::delete('/temp-other-details', [TempOtherDetailController::class, 'destroy']);
});

// Parent Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-parent-details', [TempParentDetailController::class, 'show']);
    Route::post('/temp-parent-details', [TempParentDetailController::class, 'update']);
    Route::delete('/temp-parent-details', [TempParentDetailController::class, 'destroy']);
});

// Education Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-education-details', [TempEducationDetailController::class, 'show']);
    Route::post('/temp-education-details', [TempEducationDetailController::class, 'update']);
    Route::delete('/temp-education-details', [TempEducationDetailController::class, 'destroy']);
});

// Hostel Details Records with auth middleware
Route::middleware('auth')->group(function () {
    Route::get('/temp-hostel-details', [TempHostelDetailController::class, 'show']);
    Route::post('/temp-hostel-details', [TempHostelDetailController::class, 'update']);
    Route::delete('/temp-hostel-details', [TempHostelDetailController::class, 'destroy']);
});

Route::middleware('auth')->group(function () {
    Route::get('/ug-registrations', [UgRegsController::class, 'show']);
    Route::post('/ug-registrations', [UgRegsController::class, 'store']);
});
