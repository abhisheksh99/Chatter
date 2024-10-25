import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;

    return (
        <div className='md:min-w-[700px] flex flex-col border border-gray-300 rounded-lg shadow-lg overflow-hidden'>
            {noChatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className='bg-slate-600 px-4 py-3 mb-2 flex items-center'>
                        <span className='label-text text-white'>To:</span>
                        <span className='text-gray-100 font-bold ml-2'>John Doe</span>
                    </div>
                    <div className='flex-1 bg-white p-4 overflow-y-auto'>
                        <Messages />
                    </div>
                    <div className='bg-gray-100 p-2'>
                        <MessageInput />
                    </div>
                </>
            )}
        </div>
    );
};

const NoChatSelected = () => {
    

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 John Doe ❄</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};

export default MessageContainer;
