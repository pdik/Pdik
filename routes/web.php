<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class,'index'])->name('welcome');

Route::resource('cases', \App\Http\Controllers\ProjectController::class);

Route::get('/jouw-applicatie',function (){
    return Inertia::render('JouwApplicatie');
});


