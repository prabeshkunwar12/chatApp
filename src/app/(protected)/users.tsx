import { useEffect, useState } from "react"
import { FlatList, Text } from "react-native"
import { supabase } from "../../lib/supabase"
import { useAuth } from "../../providers/AuthProvider"
import UserListItem from "../../components/UserListItem"

export default function UserScreen() {
    const [users, setUsers] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        const fetchUsers = async () => {
            let { data } = await supabase
                .from('profiles')
                .select('*')
                .neq('id', user.id);
            setUsers(data)
        }
        fetchUsers()
    }, [])

    return (
        <FlatList 
            data={users}
            contentContainerStyle={{ gap:5 }}
            renderItem={({ item }) => (
                <UserListItem user={item} />
            )}
        />
    )
}