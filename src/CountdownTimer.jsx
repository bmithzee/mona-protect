import { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds = 10 }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds <= 0) return; // Stop when reaching 0

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [seconds]);

    return (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            {seconds > 0 ? seconds : "Time's up!"}
        </div>
    );
};

export default CountdownTimer;
