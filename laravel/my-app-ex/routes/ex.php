<?

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('ex4_1', [
        'greeting' => 'Xin chào từ backend Laravel'
    ]);
});
