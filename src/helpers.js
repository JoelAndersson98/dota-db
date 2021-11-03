import Fallback from './images/404.png'
// Calculates the hero base stats
export const calculateStats = stats => {
  console.log(stats);
  const health = stats.base_health + stats.base_str * 20;
  const health_regen = Math.round((stats.base_health_regen + stats.base_str * 0.1 + Number.EPSILON) * 100) / 100;
  const mana = stats.base_mana + stats.base_int * 12;
  const mana_regen = Math.round((stats.base_mana_regen + stats.base_int * 0.05 + Number.EPSILON) * 100) / 100;
  const armor = Math.round(stats.base_armor + stats.base_agi * 0.167);
  const attack_min = stats.base_attack_min + stats.base_agi;
  const attack_max = stats.base_attack_max + stats.base_agi;
  
  return { health, health_regen, mana, mana_regen, armor, attack_min, attack_max };
};
// Trims name
export const trimName = name => {
  let newName = name.replace('-', '').split(' ').join('_');
  return newName.toLowerCase();
};
// Adds error image if 404
export const addFallback = image => {
  image.src = Fallback;
};
// Constants
export const checkName = name => {
  let newName = "";
  if(name === "Windranger")
    newName = "windrunner"
  else if(name === "Necrophos")
    newName = "necrolyte"
  else if(name === "Underlord")
    newName = "abyssal_underlord"
  else if(name === "Magnus")
    newName = "magnataur"
  else if(name === "Doom")
    newName = "doom_bringer"
  else if(name === "Clockwerk")
    newName = "rattletrap"
  else if(name === "Shadow Fiend")
    newName = "nevermore"
  else if(name === "Wraith King")
    newName = "skeleton_king"
  else if(name === "Timbersaw")
    newName = "shredder"
  else if(name === "Sand King")
    newName = "sandking"
  else if(name === "Treant Protector")
    newName = "treant"
  else if(name === "Zeus")
    newName = "zuus"
  else if(name === "Io")
    newName = "wisp"
  else if(name === "Vengeful Spirit")
    newName = "vengefulspirit"
  else
    newName = name;
  return newName;
};