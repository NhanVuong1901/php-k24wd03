<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->paginate(10);

        return Inertia::render('Contacts/Index', [
            'contacts' => $contacts,
            'flash' => session('flash'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Contacts/Form', [
            'mode' => 'create',
            'contact' => ['name' => '', 'email' => '', 'phone' => ''],
        ]);
    }

    public function store(ContactRequest $request): RedirectResponse
    {
        Contact::create($request->validated());

        return redirect()
            ->route('contacts.index')
            ->with('flash', ['type' => 'success', 'message' => 'Đã thêm liên hệ!']);
    }

    public function edit(Contact $contact)
    {
        return Inertia::render('Contacts/Form', [
            'mode' => 'edit',
            'contact' => $contact,
        ]);
    }

    public function update(ContactRequest $request, Contact $contact): RedirectResponse
    {
        $contact->update($request->validated());

        return redirect()
            ->route('contacts.index')
            ->with('flash', ['type' => 'success', 'message' => 'Đã cập nhật liên hệ!']);
    }

    public function destroy(Contact $contact): RedirectResponse
    {
        $contact->delete();

        return redirect()
            ->route('contacts.index')
            ->with('flash', ['type' => 'success', 'message' => 'Đã xóa liên hệ!']);
    }
}
