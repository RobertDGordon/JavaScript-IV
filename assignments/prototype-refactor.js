/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

function GameObject (attr) {
    this.createdAt = attr.createdAt;
    this.name = attr.name;
    this.dimensions = attr.dimensions;
  }
  
  GameObject.prototype.destroy = function (){return `${this.name} was removed from the game.`};
  
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats (charattr){
    GameObject.call(this, charattr);
    this.healthPoints = charattr.healthPoints;
  }
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function () {return `${this.name} took damage.`};
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  function Humanoid (humattr){
    GameObject.call(this, humattr);
    CharacterStats.call(this, humattr);
    this.team = humattr.team;
    this.weapons = humattr.weapons;
    this.language = humattr.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function () {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    console.log("***********************Let the games begin!******************************")
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  /////////////Villain constructor:
    function Villain (vilattr){
      GameObject.call(this, vilattr);
      CharacterStats.call(this, vilattr);
      Humanoid.call(this, vilattr);
      this.superpower = vilattr.superpower;
      
    }
    
    Villain.prototype = Object.create(Humanoid.prototype);
  
    Villain.prototype.laugh = function () {
      return `${this.name} laughs at you in ${this.language}!`;
    }
    Villain.prototype.nodamage = function () {
      return `${this.name} brushes his shoulders and shows off his ${this.superpower}!`;
    }
  
    Villain.prototype.checkDamage = function (attackweapon, damagecount) {
      console.log (`Your weapon: ${attackweapon}, attacks ${this.name}'s health of ${this.healthPoints} with ${damagecount} damage!`);
      if (damagecount > this.healthPoints){
        console.log (this.takeDamage());
      } else{
        console.log (this.laugh());
        console.log (this.nodamage());
      }
    }
  ////////////Hero constructor:
    function Hero (heroattr){
      GameObject.call(this, heroattr);
      CharacterStats.call(this, heroattr);
      Humanoid.call(this, heroattr);
      Villain.call(this, heroattr);
    }
    
    Hero.prototype = Object.create(Villain.prototype);
    
    Hero.prototype.boast = function () {
      return `${this.name} boasts they will destroy you with a ${this.weapons[0]} and ${this.weapons[1]}!`;
    }
  
    const trevor = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 11,
      name: 'Trevor',
      team: "Trevor's Baddies",
      weapons: [
        'Pen',
        'Bazooka',
      ],
      language: 'Dork',
      superpower: 'Ice cold stare',
    });
  
    const robert = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 9000,
      name: 'Robert',
      team: 'Ro Ro',
      weapons: [
        'RGB Keyboard',
        'High speed internet connection',
      ],
      language: 'Nerd',
      superpower: 'Fabulous hair',
    });
    console.log(trevor.checkDamage(robert.weapons[0],3)) //Your weapon: RGB Keyboard, attacks Trevor's health of 11 with 3 damage! - Trevor laughs at you in Dork! - Trevor brushes his shoulders and shows off his Ice cold stare!
    console.log(robert.checkDamage(trevor.weapons[1],10)) // Your weapon: Bazooka, attacks Robert's health of 9000 with 10 damage! - Robert laughs at you in Nerd! - Robert brushes his shoulders and shows off his Fabulous hair!
  
    // console.log(trevor.laugh())
  
    // console.log(robert.boast())