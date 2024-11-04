<?php

use Illuminate\Support\Facades\Route;
use Modules\Pdik\Http\Controllers\MenuController;
use Modules\Pdik\Http\Controllers\PageController;
use Modules\Pdik\Http\Controllers\PdikController;

/*
 *--------------------------------------------------------------------------
 * API Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register API routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * is assigned the "api" middleware group. Enjoy building your API!
 *
*/

Route::middleware([])->prefix('v1')->group(function () {
    Route::apiResource('page', PageController::class)->names('page');
});
