import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";

const ENDPOINT = 'http://localhost:4000';

export const LogIn = ({username, password}) => {
    const url = `${ENDPOINT}/api/auth/login`;
    return async dispatch => {
        try {
            const results = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });
            const jsonResponse = await results.json();
            console.log(jsonResponse);
        } catch (error) {
            
        }
    }
}