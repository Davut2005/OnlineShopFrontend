import axios from "axios";

export const createProduct = async () => {
    const result = await axios.post( "http://localhost:8000/products" );

    return result
};

export const getProducts = async () => {
    const result = await axios.get( "http://localhost:8000/products" );

    return result
};

export const updateProduct = async () => {
    const result = await axios.put( "http://localhost:8000/products" );

    return result
};

export const deleteProduct = async () =>{
    const result = await axios.delete( "http://localhost:8000/products" );

    return result
};