import { useState } from "react";

// icons
import CommentIcon from "../icons/comment-icon";
import DotsHorizontalIcon from "../icons/dots-horizontal-icon";
import EmojiHappyIcon from "../icons/emoji-happy-icon";
import HandIcon from "../icons/hand-icon";
import HeartIcon from "../icons/heart-icon";
import ThumbUpIcon from "../icons/thumb-up-icon";
import Tooltip from "../tooltip/tooltip";
import CommentInput from "./comment-input";


interface FeedTileProps {
    name: string
    imageUrl: string
    alt: string
    description?: string
}

const FeedTile: React.FC<FeedTileProps> = (props) => {

    const { name, imageUrl, alt, description } = props;
    
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [comment, setComment] = useState("");
    const [isLiked, setIsLiked] = useState(false);
    const [isCelebrated, setIsCelebrated] = useState(false);
    const [isSupported, setIsSupported] = useState(false);
    const [isLoved, setIsLoved] = useState(false);


    const eitHandler = () => {
        setShowCommentInput(true);
    }

    const deleteHandler = () => {
        setComment("");
    }


    return (
        <div className="shadow-md rounded-lg border">
            <h2 className="font-bold p-3">By {name}</h2>
            <img 
                src={imageUrl} 
                alt={alt} 
                className="w-full h-48 object-cover"
                />
            
            <div className="px-3 py-4 space-y-4">
                <div>
                    <p className="text-sm font-bold">Description:</p>
                    <p className="text-sm font-semibold">{description}</p>
                </div>
                
                {/* Status */}
                <div className="space-x-2 text-xs font-bold tracking-wide">
                    {isLiked && <span className="text-blue-400">1 Liked</span>}
                    {isCelebrated && <span className="text-green-400">1 Celebrated</span>}
                    {isSupported && <span className="text-purple-400">1 Supported</span>}
                    {isLoved && <span className="text-pink-400">1 Loved</span>}
                </div>

                {/* Icons */}
                <div className="flex space-x-4 text-gray-400">
                    <div className="relative cursor-pointer group">
                        <ThumbUpIcon />

                        <div className="absolute -top-12 md:-top-10 left-0  shadow-md z-50 space-x-4 bg-gray-100 p-2 rounded-md hidden group-hover:flex">
                            <button onClick={() => setIsLiked(prevState => !prevState)} className={isLiked ? "text-blue-900" : ""}>
                                <ThumbUpIcon />
                            </button>
                            <button onClick={() => setIsCelebrated(prevState => !prevState)} className={isCelebrated ? "text-green-900" : ""}>
                                <HandIcon />
                            </button>
                            <button onClick={() => setIsSupported(prevState => !prevState)} className={isSupported ? "text-purple-900" : ""}>
                                <EmojiHappyIcon />
                            </button>
                            <button onClick={() => setIsLoved(prevState => !prevState)} className={isLoved ? "text-pink-900" : ""}>
                                <HeartIcon />
                            </button>
                        </div>
                    </div>

                    {!comment && 
                        <button onClick={() => setShowCommentInput(prevState => !prevState && !comment)}>
                            <CommentIcon />
                        </button>
                    }
                </div>

                {/* Comment Input */}
                {showCommentInput && 
                    <CommentInput 
                        value={comment}
                        onCommentSubmit={(comment: string) => {
                            setComment(comment);
                            setShowCommentInput(false);
                        }}
                        />
                }

                {/* Comments */}
                {
                    comment && 
                    <div className="space-y-1">
                        <p className="text-gray-400 text-xs">All Comments (1)</p>
                        <div className="flex justify-between">
                            <p className="text-sm">
                                <span className="font-bold">By You: </span>
                                <span className="text-gray-600">{comment}</span>
                            </p>

                            <span className="text-gray-600 relative group">
                                <DotsHorizontalIcon />
                                <Tooltip className="right-0 -top-20 lg:-top-16 hidden group-hover:block">
                                    <div className="flex flex-col justify-start items-start space-y-2">
                                        <button onClick={eitHandler}>Edit</button>
                                        <button onClick={deleteHandler}>Delete</button>
                                    </div> 
                                </Tooltip>
                            </span>
                        </div>
                    </div>
                }
            </div>

        </div>
    )

}// End of FeedTile component


export default FeedTile;