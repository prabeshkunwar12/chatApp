import { useState } from "react"
import { Channel, ChannelList, MessageInput, MessageList } from "stream-chat-expo"
import { Channel as ChannelType } from 'stream-chat';
import { router } from "expo-router";

const MainTabScreen = () => {
    const [channel, setChannnel] = useState<ChannelType>();

    return (
        <ChannelList 
            onSelect={(channel)=> router.push(`/channel/${channel.cid}`)} 
        />
    )
}

export default MainTabScreen