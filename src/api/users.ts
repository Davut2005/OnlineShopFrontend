import axios from "axios";

export const createUser = async () => {
    const result = await axios.post( "http://localhost:8000/users" );

    return result
};

export const getUsers = async () => {
    const result = await axios.get( "http://localhost:8000/users" );

    return result
};

export const updateUser = async () => {
    const result = await axios.put( "http://localhost:8000/users" );

    return result
};

export const deleteUser = async () =>{
    const result = await axios.delete( "http://localhost:8000/users" );

    return result
};