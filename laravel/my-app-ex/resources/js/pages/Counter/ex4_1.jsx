import { useState } from 'react';

const Ex4_1 = ({ greeting }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{greeting}</h1>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Cộng</button>
            <button onClick={() => setCount(count - 1)}>Trừ</button>
            <button onClick={() => setCount(count * 2)}>Nhân 2</button>
            <button onClick={() => setCount(Math.floor(count / 2))}>Chia 2</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Ex4_1;
