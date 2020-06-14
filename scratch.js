import { getAttack } from "./get-attack";

for (let i = 0; i < 10; i++) {
  console.log(
    getAttack({
      name: "sparkly glove",
      attacks: [
        { name: "slap", target: "face", damage: 3, chance: 6 },
        { name: "eye poke", target: "both eyes", damage: 4, chance: 3 },
        { name: "pimp slap", target: "cheeck bone", damage: 8, chance: 1 }
      ]
    })
  );
}
