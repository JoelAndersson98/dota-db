import {
  SEARCH_BASE_URL,
  ABILITY_URL,
  ITEM_URL,
  LORE_URL,
} from './config';
import { trimName } from './helpers';

const apiSettings = {
  fetchHeroes: async() => {
    const endpoint = `${SEARCH_BASE_URL}`;
    return await (await fetch(endpoint)).json();
  },
  fetchAbilities: async() => {
    const endpoint = `${ABILITY_URL}`;
    return await (await fetch(endpoint)).json();
  },
  fetchItems: async() => {
    const endpoint = `${ITEM_URL}`;
    return await (await fetch(endpoint)).json();
  },
  fetchLore: async(heroName) => {
    const endpoint = `${LORE_URL}`;
    const lore = await (await fetch(endpoint)).json();
    return lore[trimName(heroName)];
  }
};

export default apiSettings;
