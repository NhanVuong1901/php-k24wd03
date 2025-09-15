function Top({ topStudent }) {
    return (
        <div>
            <h1>Sinh viên có điểm cao nhất</h1>
            {topStudent ? (
                <div>
                    <p>ID: {topStudent.id}</p>
                    <p>Tên: {topStudent.name}</p>
                    <p>Điểm: {topStudent.score}</p>
                </div>
            ) : (
                <p>Không có sinh viên nào.</p>
            )}
        </div>
    );
}

export default Top;
