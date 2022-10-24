import {endpoint} from "../util/variables";
import axios from "axios";
import {nat, gender} from "../test/collectionExample.test";

export  function getTheSecondUser(){
    return axios.get(`${endpoint}/?gender=${gender}&nat=${nat}`);
}

