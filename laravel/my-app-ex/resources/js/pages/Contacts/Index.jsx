import { Link, useForm } from '@inertiajs/react';

export default function Index({ contacts, flash }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Bạn chắc chắn xoá?')) {
            destroy(`/contacts/${id}`);
        }
    };

    return (
        <div className="container">
            <h1>Danh sách liên hệ</h1>
            {flash && <div className={`alert ${flash.type}`}>{flash.message}</div>}
            <Link href={route('contacts.create')} className="btn">Thêm liên hệ</Link>
            <table className="card">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.data.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td className="text-right">
                                <Link href={route('contacts.edit', contact.id)} className="btn">Sửa</Link>
                                <button onClick={() => handleDelete(contact.id)} className="btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
