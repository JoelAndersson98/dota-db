import { useState, useEffect } from "react";
import API from '../API';
import { trimName, checkName } from "../helpers";

export const useHeroFetch = heroId => {
    const[state, setState] = useState({});
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    const[abilities, setAbilities] = useState([]);
    const[lore, setLore] = useState({});

    useEffect(() => {
        const fetchHero = async () => {
            try {
                setLoading(true);
                setError(false);

                let heroes = await API.fetchHeroes();
                const hero = heroes.filter(h => h.id == heroId);
                const abilityFetch = await API.fetchAbilities();

                const heroName = checkName(`${hero[0].localized_name}`);
                const heroLore = await API.fetchLore(heroName);

                const filteredAbilities = Object.keys(abilityFetch).filter(x => x.startsWith(trimName(heroName))).reduce(function(newData, k) {
                    newData[k] = abilityFetch[k];
                    return newData;
                }, {});

                const abilities = Object.values(filteredAbilities).filter(t => t.behavior != null && !t.behavior.includes('Hidden'))

                setState({
                    ...hero,
                });
                setAbilities({
                    abilities
                });
                setLore({
                    heroLore
                });

                setLoading(false);
            } catch(error) {
                setError(true);
            }
        }

        fetchHero();
    }, [heroId])

    return { state, loading, error, abilities, lore };
};