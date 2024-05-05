import { Pressable, Text } from 'react-native'
import React from 'react'
import { useChatContext } from 'stream-chat-expo'
import { useAuth } from '../providers/AuthProvider'
import { router } from 'expo-router'

export default function UserListItem({ user }) {
    const { client } = useChatContext()
    const { user:me } = useAuth()

    const onPress = async () => {
        const channel = client.channel('messaging', {
            members: [me.id, user.id],
        })
        await channel.watch()
        router.replace(`/(protected)/channel/${channel.cid}`)
    }

    return (
        <Pressable 
            onPress={onPress} 
            style={{ 
                padding:15, 
                backgroundColor: 'white' 
            }}
        >
            <Text style={{ fontWeight: '600',  }}>{user.full_name}</Text>
        </Pressable>
    )
}