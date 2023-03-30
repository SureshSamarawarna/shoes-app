import axios from "axios";
const PRODUCTS_API_BASE_URL = "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";

class ProductService{

    getProducts(){
        return axios.get(PRODUCTS_API_BASE_URL);
    }

}

export default new ProductService();