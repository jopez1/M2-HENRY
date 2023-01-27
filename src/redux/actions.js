
import { ADD_CHARACTER, DELETE_CHARACTER } from "./types";

export function addCharacter(fav){
    return {
        type: ADD_CHARACTER,
        payload: fav,
    };
};

export function deleteCharacter(id){
    return {
        type: DELETE_CHARACTER,
        payload: id,
    }
}

