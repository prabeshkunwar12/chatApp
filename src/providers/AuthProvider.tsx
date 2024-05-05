import { Session, User } from "@supabase/supabase-js";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type AuthContext = {
    session: Session | null
    user: User | null
	profile: any | null
}

const AuthContext = createContext<AuthContext>({
    session: null,
    user: null,
	profile: null, 
});

export default function AuthProvider({ children } : PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null)
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          	setSession(session)
        })
    
        supabase.auth.onAuthStateChange((_event, session) => {
          	setSession(session)
        })
    }, [])

	useEffect(() => {
		if(!session?.user) {
			setProfile(null)
			return
		}

		const fetchProfile = async () => {
			let { data, error } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', session.user.id)
				.single()
			setProfile(data)
		}

		fetchProfile()
	},[session?.user])

    return <AuthContext.Provider value={{ session, user:session?.user, profile }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);