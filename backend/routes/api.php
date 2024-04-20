<?php

use App\Http\Controllers\JeeaController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SportsCaaQuotaSeatsStockController;
use App\Http\Controllers\TempCcaEcaController;
use App\Http\Controllers\TempEducationDetailController;
use App\Http\Controllers\TempHostelDetailController;
use App\Http\Controllers\TempOtherDetailController;
use App\Http\Controllers\TempParentDetailController;
use App\Http\Controllers\TempPersonalDetailController;
use App\Http\Controllers\UgRegsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login', [LoginController::class, 'login']);

Route::post('/logout', [LoginController::class, 'logout']);
     
    Route::get('/jeeas/{email}', [JeeaController::class, 'show']);

    Route::get('/sports-caa-seats', [SportsCaaQuotaSeatsStockController::class, 'index']);
    Route::post('/sports-caa-seats/{id}/decrement', [SportsCaaQuotaSeatsStockController::class, 'decrementSeatCount']);

    Route::get('/sports-caa-seats/id', [SportsCaaQuotaSeatsStockController::class, 'fetchSeats']);
    Route::get('/sports-caa-seats/distinct-caa-sub-categories', [SportsCaaQuotaSeatsStockController::class, 'fetchDistinctCaaSubCategories']);
    Route::get('/sports-caa-seats/names/nso/major', [SportsCaaQuotaSeatsStockController::class, 'fetchNamesForNsoMajor']);
    Route::get('/sports-caa-seats/names/nso/minor', [SportsCaaQuotaSeatsStockController::class, 'fetchNamesForNsoMinor']);
    Route::get('/sports-caa-seats/names/eca', [SportsCaaQuotaSeatsStockController::class, 'fetchNamesForECA']);

    Route::get('/temp-cca-ecas/{email}', [TempCcaEcaController::class, 'show']);
    Route::post('/temp-cca-ecas', [TempCcaEcaController::class, 'update']);
    Route::delete('/temp-cca-ecas/{email}', [TempCcaEcaController::class, 'destroy']);

    Route::get('/temp-personal-details/{email}', [TempPersonalDetailController::class, 'show']);
    Route::post('/temp-personal-details', [TempPersonalDetailController::class, 'update']);
    Route::delete('/temp-personal-details/{email}', [TempPersonalDetailController::class, 'destroy']);

    Route::get('/temp-other-details/{email}', [TempOtherDetailController::class, 'show']);
    Route::post('/temp-other-details', [TempOtherDetailController::class, 'update']);
    Route::delete('/temp-other-details/{email}', [TempOtherDetailController::class, 'destroy']);

    Route::get('/temp-parent-details/{email}', [TempParentDetailController::class, 'show']);
    Route::post('/temp-parent-details', [TempParentDetailController::class, 'update']);
    Route::delete('/temp-parent-details/{email}', [TempParentDetailController::class, 'destroy']);

    Route::get('/temp-education-details/{email}', [TempEducationDetailController::class, 'show']);
    Route::post('/temp-education-details', [TempEducationDetailController::class, 'update']);
    Route::delete('/temp-education-details/{email}', [TempEducationDetailController::class, 'destroy']);

    Route::get('/temp-hostel-details/{email}', [TempHostelDetailController::class, 'show']);
    Route::post('/temp-hostel-details', [TempHostelDetailController::class, 'update']);
    Route::delete('/temp-hostel-details/{email}', [TempHostelDetailController::class, 'destroy']);

    Route::get('/preview/{email}', [UgRegsController::class, 'preview']);
    Route::get('/ug-registrations/{email}', [UgRegsController::class, 'show']); 
    Route::post('/ug-registrations', [UgRegsController::class, 'store']);



