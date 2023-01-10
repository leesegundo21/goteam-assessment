<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PokemonController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->middleware(['auth'])->name('home');

Route::controller(PokemonController::class)->middleware(['auth'])->prefix('pokemon')->as('pokemon.')->group(function() {
    Route::get('show/{name}', 'show')->name('show');
    Route::post('like/{name}', 'likePokemon')->name('like');
    Route::post('hate/{name}', 'hatePokemon')->name('hate');
    Route::delete('delete/{name}', 'deletePokemon')->name('delete');
});

Route::controller(UserController::class)->middleware(['auth'])->prefix('user')->as('user.')->group(function() {
    Route::get('/', 'index')->name('index');
    Route::get('dashboard', 'dashboard')->name('dashboard');
    Route::get('profile', 'profile')->name('profile');
    Route::post('update', 'update')->name('update');
    Route::get('show/{id}', 'show')->name('show');
});

Route::get('get-user-information', function() {
    return response()->json([
        "success" => true,
        "user" => auth()->user()
    ]);
})->middleware(['auth'])->name('get-user-information');


require __DIR__.'/auth.php';
