<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 1; $i <= 50;$i++){
            Book::create([
                'title' => 'Book'.$i,
                'author' => 'Author'.rand(1,10),
                'year'=>rand(1990,2023)
            ]);
        }
    }
}
