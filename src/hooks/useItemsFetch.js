import { useState, useEffect } from "react";
// API
import API from '../API';

const initialState = {
    items: []
}

export const useItemsFetch = () => {
    const[state, setState] = useState(initialState);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[searchTerm, setSearchTerm] = useState('');

    const fetchItems = async() => {
        try {
            setError(false);
            setLoading(true);

            if(searchTerm) {
                let items = Object.values(await API.fetchItems()).filter(i => i.img.includes(searchTerm));

                setState(() => ({
                    items
                }))
            }
            else {
                const items = Object.values(await API.fetchItems()).filter(i => !i.img.includes('recipe'));
    
                setState(() => ({
                    items
                }))
            }
            
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        setState(initialState);
        fetchItems(searchTerm);
    }, [searchTerm]);

    return { state, loading, error, setSearchTerm };
};