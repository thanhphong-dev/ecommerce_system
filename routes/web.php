<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/products/detail', [ProductController::class,'detail'])->name('products.detail');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/index');
    })->name('dashboard');

    Route::get('/products', [ProductController::class,'index'])->name('products.index');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
