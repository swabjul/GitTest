let GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();

  },
  resetPlayer: function(classType) {

    switch (classType) {
      case "Gintoki":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Kagura":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Shinpachi":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "Sadaharu":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/characters/' + classType.toLowerCase() + '.jpg" alt="' + classType.toLowerCase() + '" class="img-avatar"><div><h3>'+ classType +'</h3><p class="health-player">Health: '+ player.health +'</p><p>Mana: '+ player.mana +'</p><p>Strength: '+ player.strength +'</p><p>Agility: '+ player.agility +'</p><p>Speed: '+ player.speed +'</p></div>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");

    getHeader.innerHTML = '<p>Task: Find stupid enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-fight" onclick="GameManager.setFight()">Search for Enemy!</a>';
    getArena.style.visibility = 'visible';



  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");


    // Create Enemy!
    let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100 );
    let enemy01 = new Enemy("Troll", 100, 0, 50, 100, 100 );
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = '<p>Task: Kill the enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-fight" onclick="PlayerMoves.calcAttack()">Attach the enemy!</a>';
    getEnemy.innerHTML = '<img src="img/enemy/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType.toLowerCase() + '" class="img-avatar"><div><h3>'+ enemy.enemyType +'</h3><p class="health-enemy">Health: '+ enemy.health +'</p><p>Mana: '+ enemy.mana +'</p><p>Strength: '+ enemy.strength +'</p><p>Agility: '+ enemy.agility +'</p><p>Speed: '+ enemy.speed +'</p></div>';

  }


}
