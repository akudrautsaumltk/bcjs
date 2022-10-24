import axios from "axios";

export function postBody (body,heaeders )   {
    return axios.post('https://restful-booker.herokuapp.com/booking', body , heaeders);
}