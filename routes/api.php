<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController as UserController;
use App\Http\Controllers\ItemController as ItemController;

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

// User Routes
Route::post('/register', [UserController::class, 'store']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/user', [UserController::class, 'fetchUser']);
Route::get('/users', [UserController::class, 'fetchUsers']);

// Task Routes 
Route::get('/tasks', [ItemController::class, 'index']);
Route::prefix('/task')->group( function(){
    Route::post('/store', [ItemController::class, 'store']);
    Route::put('/{id}', [ItemController::class, 'update']);
    Route::delete('/{id}', [ItemController::class, 'destroy']);
});
