<?php

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

Route::middleware('auth')->group(function () {
    Route::post('/ug-registrations', [UgRegsController::class, 'store']);
    Route::get('/ug-registrations', [UgRegsController::class, 'index']);
});
