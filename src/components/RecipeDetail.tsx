import {useState} from 'react';

function RecipeDetail() {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<string[]>([]);

    const handleAddComment = () => {
        if (comment.trim() === '') return;
        setComments((prev) => [...prev, comment]);
        setComment('');
    };

    return (
        <div>
            <textarea
                placeholder="Leave a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 rounded"
            />
            <button onClick={handleAddComment} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
                Submit
            </button>

            <ul>
                {comments.map((c, idx) => (
                    <li key={idx} className="mt-2 bg-gray-800 p-2 rounded">{c}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeDetail;