import axios from 'axios';

const API_KEY = "27031452-a137835af82b3a6efb2323c99";
const BASE_URL = 'https://pixabay.com/api/';

class API {
    constructor() {
        this.service = axios.create({
            baseURL: BASE_URL,
            params: {
                api_key: API_KEY,
            },
        })
        this.options = {
            urlPath: '',
        }
    };

    getQueryImages(q) {
        const a = 5;
    };

    get urlPath() {
        return this.options.urlPath
    };

    set urlPath(newPath) {
        this.options.urlPath = newPath
    };
};

export default API;