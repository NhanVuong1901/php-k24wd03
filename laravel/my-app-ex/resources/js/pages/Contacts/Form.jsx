import { Link, useForm } from '@inertiajs/react';

export default function Form({ mode, contact = {} }) {
    const isEdit = mode === 'edit';
    const { data, setData, post, put, processing, errors } = useForm({
        name: contact.name || '',
        email: contact.email || '',
        phone: contact.phone || '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/contacts/${contact.id}`);
        } else {
            post('/contacts');
        }
    };

    return (
        <div className="centered-form">
            <form onSubmit={submit} className="card">
                <div className="form-row">
                    <label>Tên</label>
                    <input
                        type="text"
                        className="input"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="form-row">
                    <label>Email</label>
                    <input
                        type="email"
                        className="input"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="form-row">
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        className="input"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                </div>
                <div className="form-row">
                    <button type="submit" className="btn" disabled={processing}>
                        {isEdit ? 'Cập nhật' : 'Lưu'}
                    </button>
                    <Link href={route('contacts.index')} className="btn">Huỷ</Link>
                </div>
            </form>
        </div>
    );
}
