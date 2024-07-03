// THE HTML AND CSS IS NOT WITH THIS

alert("Welcome to Dragon Dungeon Crawler!");

// DECLARE VARIABLES WE NEED
let dragonClass = function (player) {
  let dragon = {
    name: "dragon",
    health: 100,
    atkPower: 28,
  };

  while (dragon.health >= 0) {
    player.health = player.health - dragon.atkPower;
    alert(
      `The dragon attacked you for ${dragon.atkPower} hit points! Your health is at ${player.health}`
    );
    if (player.class == "Knight") {
      dragon.health = dragon.health - player.atkPower;
      alert(
        `You attack for ${player.atkPower} hit points! Dragons health is at ${dragon.health}`
      );
      if (player.health <= 0) {
        return alert("You lose!");
      } else if (dragon.health <= 0) {
        return alert("You Win");
      }
    } else if ((player.class = "Wizard")) {
      dragon.health = dragon.health - player.magicPower;
      alert(
        `You attack for ${player.magicPower} hit points! Dragons health is at ${dragon.health}`
      );
      if (player.health <= 0) {
        return alert("You lose!");
      } else if (dragon.health <= 0) {
        return alert("You Win");
      }
    } else if (player.health < 50 && player.class == "Wizard") {
      player.health = player.health + 10;
      alert(
        `You healed for 10 hit points, this brings your health back up to ${player.health}`
      );
    }
  }
};

const startFight = function (player) {
  let start = prompt("Are you ready to fight? [y] [n]");

  if (start == "y") {
    return dragonClass(player);
  } else {
    console.log("What are you doing here?");
  }
};

// THE MAIN GAME LOOP // the entry point in our game
let main = function () {
  let player = prompt(
    "Type number associated with class you want: [1] Knight, [2] Wizard"
  );

  if (player == 1) {
    player = {
      class: "Knight",
      weapon: "Sword",
      atkPower: 25,
      health: 150,
    };

    alert(
      `You have chosen ${player.class} who weilds the ${player.weapon} for ${player.atkPower} damage and you start with ${player.health} health.`
    );

    return startFight(player);
  } else if (player == 2) {
    player = {
      class: "Wizard",
      weapon: "Wand",
      magicPower: 35,
      health: 100,
    };

    alert(
      `You have chosen ${player.class} who weilds the ${player.weapon} for ${player.magicPower} damage and you start with ${player.health} health.`
    );

    return startFight(player);
  } else {
    alert("Invalid choice! Please enter 1 or 2.");
    return;
  }
};

// Invocation to begin game
main();
