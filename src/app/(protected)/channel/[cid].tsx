import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Channel as ChannelType} from 'stream-chat';
import { Channel, MessageInput, MessageList, useChatContext } from "stream-chat-expo";

const ChannelScreen = () => {
	const [channel, setChannnel] = useState<ChannelType | null>(null);
	const { cid } = useLocalSearchParams<{cid: string}>();

	const { client } = useChatContext();
	
	useEffect(() => {
		const fetchChannel = async () => {
			const channels = await client.queryChannels({ cid });
			setChannnel(channels[0]);
		};
		fetchChannel();
	}, [cid])

	if(!channel) {
		return <ActivityIndicator />
	}

	return (
		<Channel channel={channel}>
			<MessageList />
			<SafeAreaView edges={['bottom']}>
				<MessageInput />
			</SafeAreaView>
		</Channel>
	)
}

export default ChannelScreen