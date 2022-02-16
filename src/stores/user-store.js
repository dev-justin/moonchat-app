import { supabase } from "../supabase";
import Cookies from "js-cookie";
import { writable } from "svelte/store";

const tableUser = 'users'

export const userExists = writable()

export const aliasCookie = async (alias) => {
    if (!Cookies.get('alias')) {
        Cookies.set('alias', alias, { expires: 1 })
        aliasValue.set(alias)
    }
}

export const checkUserExist = async (alias) => {
    const { data, error } = await supabase.from(tableUser).select('alias').match({alias});
    if (data.length > 0) {
        userExists.set(true)
        return true
    }
    userExists.set(false)
    return false
}

export const addUser = async (alias) => {
    const {data, error} = await supabase.from(tableUser).insert([{alias: alias}])
    if (error) {
        console.error(error)
    } else {
        return data
    }
}