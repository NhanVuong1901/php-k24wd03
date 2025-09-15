function Index({ students }) {
    return (
        <div>
            <h1>Danh sách sinh viên</h1>
            <ul>
                {students.map((s) => (
                    <li key={s.id}>
                        ID: {s.id} - Tên: {s.name} - Điểm: {s.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Index;
