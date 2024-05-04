import { Tabs } from "expo-router"
import { Feather } from '@expo/vector-icons';

const TabsNavigator = () => {
	return (
		<Tabs>
			<Tabs.Screen 
				name="index" 
				options={{ 
					title: 'Chats', 
					tabBarIcon: ({size, color}) => (
						<Feather 
							name="home" 
							size={size} 
							color={color} 
						/>
					)
				}} 
			/>
			<Tabs.Screen 
				name="profile" 
				options={{ 
					title: 'Profile', 
					tabBarIcon: ({size, color}) => (
						<Feather 
							name="user" 
							size={size} 
							color={color} 
						/>
					)
				}} 
			/>
		</Tabs>
	)
}

export default TabsNavigator
