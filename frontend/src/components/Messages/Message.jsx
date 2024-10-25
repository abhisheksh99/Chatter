import react from "react"

const Message = () => {
    return (
        <div className="chat chat-end"> {/* or chat-start depending on sender */}
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="User Avatar" src="" /> {/* Placeholder for profile picture */}
                </div>
            </div>
            <div className="chat-bubble text-white bg-blue-500 pb-2"> {/* Background color for sender */}
                Message content goes here
            </div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
                12:00 PM {/* Placeholder for formatted time */}
            </div>
        </div>
    );
};

export default Message;
