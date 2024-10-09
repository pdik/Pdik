<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),

    ]);
})->name('welcome');

Route::resource('/cases', \App\Http\Controllers\ProjectController::class);
Route::get('/jouw-applicatie',function (){
    return Inertia::render('JouwApplicatie');
});


