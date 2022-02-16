import { supabase } from "../supabase";
import Cookies from "js-cookie";
import { writable } from "svelte/store";

const tableUser = 'users'

export const userExists = writable()
export const errorMessage = writable()


export const aliasCookie = async (alias) => {
    if (!Cookies.get('alias')) {
        Cookies.set('alias', alias, { expires: 1 })
        aliasValue.set(alias)
    }
}

export const checkUserExist = async (alias) => {
    if (!alias || alias.length > 10 || !alias.replace(/\s/g, '').length) {
        errorMessage.set("Invalid Alias - No nulls and < 10 characters please.")
        userExists.set(true)
        return true
    }
    const { data, error } = await supabase.from(tableUser).select('alias').match({alias});
    if (data.length > 0) {
        errorMessage.set("Alias already exists in DB, please try another.")
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