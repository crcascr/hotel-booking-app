import { axios_hotels } from "./axios"; 

const modules = {
    getHotelsUrl: "/hotels",    
};

export const getHotelsService = async => {
    return axios_hotels.get(modules.getHotelsUrl);
};