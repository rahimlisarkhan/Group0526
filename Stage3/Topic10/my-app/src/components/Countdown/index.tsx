"use client"
import { useState } from "react";


export default function Countdown() {
    const [count, setCount] = useState(10);

    return (
        <div>
            <div className="mt-6 text-2xl font-medium text-black dark:text-zinc-50">
                {count > 0 ? `Countdown: ${count}` : "Time's up!"}
            </div>
            <button
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1);
                    }
                }}
            >
                Decrease Count
            </button>
        </div>

    );
}