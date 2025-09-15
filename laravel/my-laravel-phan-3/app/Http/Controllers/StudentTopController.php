<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Inertia\Inertia;

class StudentTopController extends Controller
{
    
    public function index()
    {
        $students = Student::all();  
        return Inertia::render('Students/Index', [
            'students' => $students,
        ]);
    }

    
    public function topStudent()    
    {
        $topStudent = Student::orderBy('score', 'desc')->first();
        return Inertia::render('Students/Top', [
            'topStudent' => $topStudent,
        ]);
    }
}
