import { supabase } from "../lib/supabase"

export const tokenProvider = async () => {
    const { data } = await supabase.functions.invoke('stream-token');
    console.log("TOKEN_PROVIDER: " + data.token)
    return data.token;
}