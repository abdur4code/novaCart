import api from "./axios";
import { addProduct, setProductStatus, setProductError } from "../features/products/productSlice";

const getProduct = async (dispatch) => {
    dispatch(setProductStatus("loading"));
    try {
        let res = await api.get('/products');
        dispatch(addProduct(res.data.products))
    } catch (error) {
        console.log("Error in API: ", error);
        dispatch(setProductError(error.message || "Failed to load products"));
    }
}

export default getProduct;

