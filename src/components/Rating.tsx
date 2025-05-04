import { useState } from "react";

type Props = {
    onRate: (rating: number) => void;
};

function Rating({ onRate }: Props) {
    const [hovered, setHovered] = useState(0);

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    style={{ cursor: "pointer", color: star <= hovered ? "#ffd700" : "#999" }}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => onRate(star)}
                >
          ★
        </span>
            ))}
        </div>
    );
}

export default Rating;
