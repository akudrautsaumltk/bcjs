import {endpoint} from "../util/variables";
import axios from "axios";

export function getFirstUser(){
    return axios.get(`${endpoint}`);
}
