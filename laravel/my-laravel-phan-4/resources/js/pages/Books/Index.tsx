//@ts-nocheck
import { router, useForm } from '@inertiajs/react';
import { useState } from 'react';

function Index({ books = [] }) {
    const [search, setSearch] = useState('');

    const { data, setData, post, reset } = useForm({
        title: '',
        author: '',
        year: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/books', { onSuccess: () => reset() });
    };

    const handleDelete = (id) => {
        if (confirm('Xoá sách này?')) {
            router.delete(`/books/${id}`);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/books', { search });
    };

    return (
        <div>
            <h1>Quản lý sách</h1>

            <form onSubmit={submit}>
                <input type="text" placeholder="Tiêu đề" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                <input type="text" placeholder="Tác giả" value={data.author} onChange={(e) => setData('author', e.target.value)} />
                <input type="number" placeholder="Năm xuất bản" value={data.year} onChange={(e) => setData('year', e.target.value)} />
                <button type="submit">Thêm</button>
            </form>

            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Tìm theo tiêu đề" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Tác giả</th>
                        <th>Năm</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>
                                <button onClick={() => handleDelete(book.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Index;
