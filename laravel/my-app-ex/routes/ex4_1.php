<?

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/counter', function () {
    return Inertia::render('Counter/ex4_1', [
        'greeting' => 'Xin chào từ backend Laravel'
    ]);
})->name('counter');
