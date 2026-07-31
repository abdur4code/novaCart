import { useDispatch } from "react-redux";
import api from "./axios";
import { addProduct } from "../features/products/productSlice";

const getProduct = async () => {
    const dispatch = useDispatch();
    try {
        let res = await api.get('/products');
        dispatch(addProduct(res.data.products))
    } catch (error) {
        console.log("Error in API: ", error);
    }
}

export default getProduct;

