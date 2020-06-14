import { dice } from "./dice";

export const getAttack = ({ attacks }) => {
  const bag = [];
  for (let i = 0; i < attacks.length; i++) {
    const attack = attacks[i];
    for (let j = 0; j < attack.chance; j++) {
      bag.push(attack);
    }
  }
  return bag[dice(bag.length - 1)];
};
