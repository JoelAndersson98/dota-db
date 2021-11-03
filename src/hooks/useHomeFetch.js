import { useState, useEffect } from "react";
// API
import API from '../API';

const initialState = {
    heroes: []
}

export const useHomeFetch = () => {
    const[state, setState] = useState(initialState);
    const[searchTerm, setSearchTerm] = useState('');
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);

    const fetchHeroes = async() => {
        try {
            setError(false);
            setLoading(true);

            if(searchTerm) {
                const heroSearch = await API.fetchHeroes();
                let heroes = heroSearch.filter(h => h.name.includes(searchTerm));
                
                setState(prev => ({
                    heroes
                }))
            }
            else {
                const heroes = await API.fetchHeroes();

                setState(prev => ({
                    heroes
                }))
            }

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        setState(initialState);
        fetchHeroes(searchTerm);
    }, [searchTerm]);

    return { state, loading, error, setSearchTerm };
};