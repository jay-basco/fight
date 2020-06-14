export const weapons = () => [
  {
    name: "sparkly glove",
    attacks: [
      { name: "slap", target: "face", damage: 3, chance: 6 },
      { name: "eye poke", target: "both eyes", damage: 4, chance: 3 },
      { name: "pimp slap", target: "cheeck bone", damage: 8, chance: 1 }
    ]
  },
  {
    name: "steel toed boots",
    attacks: [
      { name: "jab kick", target: "shin", damage: 1, chance: 6 },
      { name: "plum smash", target: "balls", damage: 3, chance: 3 },
      { name: "spartan kick", target: "chest", damage: 7, chance: 1 }
    ]
  },
  {
    name: "yeti",
    attacks: [
      { name: "body slam", target: "back", damage: 1, chance: 6 },
      { name: "drop kick", target: "shoulder", damage: 2, chance: 3 },
      {
        name: "yeti stomp",
        target: "chest",
        damage: 4,
        chance: 1
      }
    ]
  }
];
