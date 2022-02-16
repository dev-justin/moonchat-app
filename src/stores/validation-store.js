import { writable } from "svelte/store";

export const errorMessage = writable()

export const validateAlias = async (alias) => {
    if (!alias || alias.length > 10 || !alias.replace(/\s/g, '').length) {
        errorMessage.set("Invalid Alias - No nulls and < 10 characters please.")
    }
    return false
}