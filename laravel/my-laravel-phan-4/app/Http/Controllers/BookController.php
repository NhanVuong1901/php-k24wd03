<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $books = Book::when($search, fn($q) =>
        $q->where('title', 'like', "%$search%"))
            ->orderBy('title')->get();

        return Inertia::render('Books/Index', [
            'books' => $books,
            'filters' => ['search' => $search],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'year' => 'required|integer|min:1900|max:' . date('Y'),
        ]);

        Book::create($request->only('title', 'author', 'year'));

        return redirect()->back()->with('success', 'Book added successfully.');
    }

    public function destroy(Book $book)
    {
        $book->delete();

        return redirect()->back()->with('success', 'Book deleted successfully.');
    }
}
