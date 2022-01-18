class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.reset = createButton("");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.reset.position(1450,25);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.reset.class("resetButton");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  show() {
    this.titleImg.class("gameTitleAfterEffect");
    game = new Game();
    this.greeting.hide();
    game.getState();
    game.start();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }
  resetPressed() {
    this.reset.mousePressed(() => {
      database.ref("/").set({
        gameState:0,
        playerCount:0,
        players:{}
      });
    //  this.show();
    window.location.reload();
    //  this.input.value ="";
    })
  }
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.resetPressed();
  }
}
