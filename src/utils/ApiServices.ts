import axios, { AxiosPromise } from 'axios';
import {FizzBuzzResponse} from "../models/api/FizzBuzzResponse";
import Config from "../Config";

const ApiServices = {
    getCounterValue(counter: number): AxiosPromise<FizzBuzzResponse> {
        return axios.get<FizzBuzzResponse>(`${Config.endpoints.getCounterValue}/${counter}`);
    },
}

export {ApiServices};