<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Order\OrderController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Auth\RoleWithAbilitiesController;

Route::post('login', [LoginController::class, 'login'])->name('login');
Route::post('register', [RegisterController::class, 'register'])->name('register');

Route::middleware(['auth:sanctum'])->group(function(){

    Route::get('orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('orders/{order}', [OrderController::class, 'show'])->name('orders.show');
    Route::post('orders', [OrderController::class, 'store'])->name('orders.store');
    Route::match(['put', 'patch'], 'orders/{order}', [OrderController::class, 'update'])->name('orders.update');

    Route::get('profiles/{profile}', [ProfileController::class, 'show'])->name('profiles.show');
    Route::match(['put', 'patch'], 'profiles/{profile}', [ProfileController::class, 'update'])->name('profiles.update');

    Route::get('role-abilities', [RoleWithAbilitiesController::class, 'index'])->name('role_abilities');

});