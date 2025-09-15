<?php

use App\Http\Controllers\StudentTopController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/students', [StudentTopController::class, 'index'])->name('students.index');
Route::get('/students/top', [StudentTopController::class, 'topStudent'])->name('students.top');
