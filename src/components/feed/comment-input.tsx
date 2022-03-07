import { useState } from "react";

interface CommentInputProps {
    value?: string
    className?: string
    onCommentSubmit: (comment: string) => void
}

const CommentInput: React.FC<CommentInputProps> = (props) => {

    const { value, className, onCommentSubmit } = props;

    const [comment, setComment] = useState("" || value);

    return (
        <div className={`flex justify-between space-x-4 ${className}`}>
            <input 
                value={comment}
                placeholder="Write your comment here..."
                className="w-full border px-2 py-1 rounded-xl focus:outline-none text-sm"
                onChange={({target}) => setComment(target.value)}
                />

            <button 
                className="bg-blue-900 rounded-lg px-4 py-1 text-white text-sm"
                onClick={() => onCommentSubmit(comment || "")}
                >
                Submit
            </button>
     </div>
    );

}// End of CommentInput component


export default CommentInput;