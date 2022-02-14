import { supabase } from "../supabase";
import Cookies from "js-cookie";

const tableUser = 'users'

export const aliasCookie = async (alias) => {
    if (!Cookies.get('alias')) {
        Cookies.set('alias', alias, { expires: 1 })
        aliasValue.set(alias)
    }
}

export const checkUserExist = async (alias) => {
    const { data, error } = await supabase.from(tableUser).select('alias').match({alias});
    if (data.length > 0) {
        return true
    }
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