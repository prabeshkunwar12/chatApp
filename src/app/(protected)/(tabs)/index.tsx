import { useState } from "react"
import { Channel, ChannelList, MessageInput, MessageList } from "stream-chat-expo"
import { Channel as ChannelType } from 'stream-chat';
import { router } from "expo-router";
import { useAuth } from "../../../providers/AuthProvider";

const MainTabScreen = () => {
    const { user } = useAuth();
    return (
        <ChannelList 
            filters={{ members: { $in: [user.id] } }}
            onSelect={(channel)=> router.push(`/channel/${channel.cid}`)} 
        />
    )
}

export default MainTabScreen