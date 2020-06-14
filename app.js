import { charlieBrown } from "./characters/charlie-brown";
import { yeti } from "./characters/yeti";
import { michaelJackson } from "./characters/michael-jackson";
import { weapons as w } from "./weapons/weapons";
import { dice } from "./dice";
import { getAttack } from "./get-attack";

const weapons = w();

const getWeapon = type => weapons.find(weapon => weapon.name === type);

const fight = async ({ fighter1, fighter2 }, rate) => {
  let keepFighting = true;
  let winner;

  while (keepFighting) {
    fighter1.advantage = dice(10) + fighter1.speed;
    fighter2.advantage = dice(10) + fighter2.speed;

    let attacker =
      fighter1.advantage > fighter2.advantage ? fighter1 : fighter2;
    let defender = attacker === fighter1 ? fighter2 : fighter1;

    console.log(`${attacker.name} attacks with his ${attacker.weapon.type}`);
    await sleep(1 * rate);

    const attackerRoll = dice(20);
    attacker.rolls.push(attackerRoll);
    if (attackerRoll > 15) {
      const weapon = getWeapon(attacker.weapon.type);
      const attack = getAttack(weapon);
      console.log({ attack });
      const damage = attacker.strength + dice(attack.damage);

      console.log(
        `${attacker.name}'s ${weapon.name} ${attack.name}s ${defender.name} in ${attack.target} for ${attack.damage} damage`
      );
      await sleep(1 * rate);

      defender.current_hp =
        defender.current_hp > damage ? defender.current_hp - damage : 0;
      console.log(`${defender.name} has ${defender.current_hp} remaining!`);
      if (defender.current_hp < 1) {
        winner = attacker;
        console.log("ROSHAMBO!!!");
        console.log(`${defender.name} died`);
        await sleep(3 * rate);
        console.log("");
        console.log("Analysis");
        console.log("fighter1");
        console.log(fighter1);
        console.log("fighter2");
        console.log(fighter2);
        await sleep(1 * rate);
        keepFighting = false;
      }
    } else {
      console.log(`${defender.name} evades the attack!`);
      await sleep(1 * rate);
    }
  }
  console.log("");
  return winner.name;
};

const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const startAFight = async (rate, iterations) => {
  const winners = [];
  const stable = [yeti, charlieBrown, michaelJackson];
  for (let i = 0; i < iterations; i++) {
    const fighters = { fighter1: stable[2](), fighter2: stable[1]() };
    // winners.length === 0
    // ? {  }
    // : {};
    console.log(fighters);
    winners.push(await fight(fighters, rate));
  }

  const tally = {};
  winners.forEach(winner => {
    tally[winner] ? (tally[winner] = tally[winner] + 1) : (tally[winner] = 1);
  });
  console.log(tally);
};

startAFight(1000, 2).then(() => {
  console.log("Fight over...");
});
