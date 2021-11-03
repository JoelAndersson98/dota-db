import { useState, useEffect } from "react";
import API from '../API';


const useComponentFetch = components => {
    const[comp, setComp] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    useEffect(() => {
        const fetchComponent = async() => {
            try {
                setLoading(true);
                setError(false);

                if(components.includes('recipe_dagon'))
                    components.splice(components.indexOf('recipe_dagon'), 1)


                let itemsArray = []
                let items = Object.values(await API.fetchItems());
                for(let i = 0;i<components.length; i++) {
                    itemsArray.push(items.filter(x => x.img.includes(components[i])))
                }

                setComp({
                    itemsArray
                });

                setLoading(false);
            } catch(error) {
                setError(true);
            }
        }
        
        fetchComponent();
    }, [components])

    return { comp, loading, error };
};

export default useComponentFetch;