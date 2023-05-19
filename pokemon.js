let ashy = {
  firstName: 'Ash',
  lastName: 'Ketchum',
  address: 'Pallet Town',
  mons: function() {
    console.log('Pikachu', 'Haunter', 'Dragonite', 'Lucario', 'Sir Fetchd', 'Dracovish');
  },
  introduce: function() {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + this.address + ' !!!');
  }
};

ashy.introduce();

let leony = {
  firstName: 'Champion',
  lastName: 'Leon',
  address: 'Postwick Town',
  mons: function() {
    console.log('Charizard', 'Mr. Rime', 'Cinderace', 'Rillaboom', 'Inteleon', 'Dragapult');
  },
  introduce: function() {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + this.address + ' !!!');
  }
};

leony.introduce();

let cynthy = {
  firstName: 'Champion',
  lastName: 'Cynthia',
  address: 'Celestic Town',
  mons: function() {
    console.log('Spiritomb', 'Roserade', 'Gastrodon', 'Lucario', 'Milotic', 'Garchomp');
  },
  introduce: function() {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + this.address + ' !!!');
  }
};

cynthy.introduce();

let ann = {
  fullName: 'Announcer',
  address: 'Wyndon Stadium',
  position: 'Pokemon Monarch',

  introduce: function() {
    console.log('I am the ' + this.fullName + ' and here in ' + this.address);
    console.log('We are about to witness the greatest final battle for the title of ' + this.position + '!!!');
  }
};

ann.introduce();

let myPokemon = {
  name: 'Substitute',
  level: 100,
  health: 100,
  attack: 100,
  iron: function() {
    console.log(this.name + " used Iron tail on the foe!");
    console.log("The foe's Pokemon health has been reduced");
  },
  thunder: function() {
    console.log(this.name + " used Thunderbolt on the foe!");
    console.log("The foe's Pokemon health has been reduced");
  },
  tackle: function() {
    console.log(this.name + " used Tackle on the foe!");
    console.log("The foe's Pokemon health has been reduced");
  },
  faint: function() {
    console.log("Pokemon fainted");
  }
};

let otherPokemon = {
  name: 'Substitute',
  level: 100,
  health: 100,
  attack: 100,
  blitz: function() {
    console.log(this.name + " used Fire Blitz on the foe!");
    console.log("The foe's Pokemon health has been reduced");
  },
  ball: function() {
    console.log(this.name + " used Fire ball on the foe!");
    console.log("The foe's Pokemon health has been reduced");
  },
  faint: function() {
    console.log("Pokemon fainted");
  }
};

function Pokemon(name, level, health, attack) {
  this.name = name;
  this.level = level;
  this.health = health;
  this.attack = attack;

  this.thunder = function(target) {
    console.log(this.name + ' struck ' + target.name);
    target.health -= this.attack;
    console.log(target.name + "'s health is reduced to " + target.health);
  };

  this.blitz = function(target) {
    console.log(this.name + ' blitzed through ' + target.name);
    target.health -= this.attack;
    console.log(target.name + "'s health is reduced to " + target.health);
  };

  this.ball = function(target) {
    console.log(this.name + ' fireballed ' + target.name);
    target.health -= this.attack;
    console.log(target.name + "'s health is reduced to " + target.health);
  };

  this.iron = function(target) {
    console.log(this.name + ' iron tailed ' + target.name);
    target.health -= this.attack;
    console.log(target.name + "'s health is reduced to " + target.health);
  };
   this.tackle = function(target) {
    console.log(this.name + ' tackled ' + target.name);
    target.health -= this.attack;
    console.log(target.name + "'s health is reduced to " + target.health);
  };
  this.faint = function() {
    console.log(this.name + ' fainted');
  };
}

let pikachu = new Pokemon('Pikachu', 50, 150, 50);
let charizard = new Pokemon('Charizard', 50, 150, 70);

pikachu.thunder(charizard);
charizard.ball(pikachu);
charizard.blitz(pikachu);
pikachu.tackle(charizard)
pikachu.iron(charizard);
charizard.faint();
