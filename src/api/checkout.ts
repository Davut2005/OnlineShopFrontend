import axios from "axios";

export const createOrder = async () => {
    const result = await axios.post( "http://localhost:8000/checkouts" );

    return result
};

export const getOrders = async () => {
    const result = await axios.get( "http://localhost:8000/checkouts" );

    return result
};

export const updateOrder = async () => {
    const result = await axios.put( "http://localhost:8000/checkouts" );

    return result
};

export const deleteOrder = async () => {
    const result = await axios.delete( "http://localhost:8000/checkouts" );

    return result
};