import { supabase } from "../supabase";
import { writable } from "svelte/store";

export const globalChat = writable([])
const tableChat = 'moonchat_global'

export const fetchChat = async () => {
    const { data, error } = await supabase.from(tableChat).select().order('id', {ascending: false}).limit(20);
    globalChat.set(data);

    const mySubscription = supabase
    .from(tableChat)
    .on('INSERT', (payload) => {
        globalChat.set([...data, payload.new])
        fetchChat()
    })
    .subscribe();
};

export const sendMessage = async (message, alias) => {
    const {data, error} = await supabase.from(tableChat).insert([{message: message, alias: alias}])
}