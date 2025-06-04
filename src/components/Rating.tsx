import { useState } from "react";

interface RatingProps {
    value: number | null;
    onChange: (value: number) => void;
    max?: number;
    className?: string;
}

export function Rating({ value, onChange, max = 5, className }: RatingProps) {
    const [hovered, setHovered] = useState(0);

    return (
        <div className={`flex items-center ${className}`}>
            {[...Array(max)].map((_, i) => {
                const starValue = i + 1;
                return (
                    <button
                        key={i}
                        onClick={() => onChange(starValue)}
                        className="text-2xl focus:outline-none"
                        onMouseEnter={() => setHovered(starValue)}
                        onMouseLeave={() => setHovered(0)}
                        style={{ color: starValue <= (hovered || value || 0) ? "#ffd700" : "#999" }}
                    >
                        {starValue <= (hovered || value || 0) ? '★' : '☆'}
                    </button>
                );
            })}
        </div>
    );
}