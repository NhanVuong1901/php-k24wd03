<?

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/contacts', function () {
    return redirect()->route('contacts.index');
});
Route::resource('contacts', ContactController::class);
