import {ApiServices} from "../utils/ApiServices";
import Config from "../Config";

export const getCounterValue = async (counter: number): Promise<string> => {
    const response = await ApiServices.getCounterValue(counter);
    const data = response.data?.data;
    return data ? data : Config.noneFizzBuzzValue;
}
