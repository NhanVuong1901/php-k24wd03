<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::resource('contacts', ContactController::class);

require __DIR__ . "/ex4_2.php"; // sua thanh ex4_1.php de xem bai 1