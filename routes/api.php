<?php

use App\Http\Controllers\Api\TaskApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/save-task',[TaskApiController::class,'saveTask']);
Route::get('/get-task',[TaskApiController::class,'getAllTask']);
Route::delete('/delete-task/{id}',[TaskApiController::class,'deleteTask']);
Route::patch('/update-task/{id}',[TaskApiController::class,'markAsDone']);