import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../providers/AuthProvider";

const AuthLayout = () => {
    const { user } = useAuth();

    if(user) return <Redirect href="/(protected)" />

    return <Stack />
}

export default AuthLayout;
