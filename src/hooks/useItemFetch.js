import { useState, useEffect } from "react";
import API from '../API';



export const useItemFetch = itemId => {
    const[item, setItem] = useState({});
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                setLoading(true);
                setError(false);

                //let items = await API.fetchItems();
                let item = Object.values(await API.fetchItems()).filter(x => x.id == itemId);

                setItem({
                    ...item,
                });

                setLoading(false);
            } catch(error) {
                setError(true);
            }
        }

        fetchItem();
    }, [itemId])

    return { item, loading, error };
};