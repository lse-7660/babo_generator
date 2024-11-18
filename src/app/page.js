'use client';
import React, { useState } from 'react';

export default function Home() {
    const [btnPosition, setBtnPosition] = useState({ top: '50%', left: '50%' });
    const [babo, setBabo] = useState([]);

    const handleClick = () => {
        setBabo((prev) => [...prev, { top: btnPosition.top, left: btnPosition.left, text: '바보' }]);

        const randomTop = Math.random() * 80 + 10;
        const randomLeft = Math.random() * 80 + 10;

        setBtnPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <button
                onClick={handleClick}
                className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 py-2 px-5 rounded-lg bg-slate-800 text-white text-xl`}
                style={{ top: btnPosition.top, left: btnPosition.left }}
            >
                무한 바보 생성기
            </button>

            <div className="absolute top-0 left-0 w-full h-full ">
                {babo.map((item, index) => (
                    <span
                        key={index}
                        className=" absolute -translate-x-1/2 -translate-y-1/2  text-3xl pointer-events-none"
                        style={{ top: item.top, left: item.left }}
                    >
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
    );
}
