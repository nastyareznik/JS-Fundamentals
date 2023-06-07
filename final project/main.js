document.addEventListener("DOMContentLoaded", function () {
  class Game {
    constructor() {
      this.gameContainer = document.getElementById("game-container");
      this.containerWidth = this.gameContainer.clientWidth;
      this.containerHeight = this.gameContainer.clientHeight;
      this.score = 0;
      this.lives = 3;
      this.speed = 2000;
      this.level = "Easy";
      this.intervalId = null;
      this.gameOver = false;
    }

    startGame() {
      this.score = 0;
      this.gameContainer.innerHTML = "";
      this.updateStats();

      this.intervalId = setInterval(() => {
        this.createTarget();
      }, this.speed);

      setTimeout(() => {
        clearInterval(this.intervalId);
        this.gameOver = true;
        this.showGameOverMessage();
      }, 30000);
    }

    createTarget() {
      if (!this.gameOver) {
        const target = document.createElement("div");
        target.classList.add("target");
        target.style.backgroundImage = "url('../img/cat-face.png')";
        target.style.top =
          Math.floor(Math.random() * (this.containerHeight - 50)) + "px";
        target.style.left =
          Math.floor(Math.random() * (this.containerWidth - 50)) + "px";
        this.gameContainer.appendChild(target);

        target.addEventListener("click", () => {
          this.score++;
          this.gameContainer.removeChild(target);
        });

        const animationId = setInterval(() => {
          const targetTop = parseInt(target.style.top);
          const targetLeft = parseInt(target.style.left);
          const randomTop = Math.floor(
            Math.random() * (this.containerHeight - 50)
          );
          const randomLeft = Math.floor(
            Math.random() * (this.containerWidth - 50)
          );
          const distanceX = Math.abs(targetLeft - randomLeft);
          const distanceY = Math.abs(targetTop - randomTop);
          const moveSpeed = this.getMoveSpeed();

          if (targetTop < randomTop) {
            target.style.top = targetTop + moveSpeed + "px";
          } else if (targetTop > randomTop) {
            target.style.top = targetTop - moveSpeed + "px";
          }

          if (targetLeft < randomLeft) {
            target.style.left = targetLeft + moveSpeed + "px";
          } else if (targetLeft > randomLeft) {
            target.style.left = targetLeft - moveSpeed + "px";
          }

          if (distanceX < moveSpeed && distanceY < moveSpeed) {
            clearInterval(animationId);
            this.gameContainer.removeChild(target);
          }
        }, 10);
      }
    }

    getMoveSpeed() {
      switch (this.level) {
        case "Easy":
          return 1;
        case "Medium":
          return 2;
        case "Hard":
          return 3;
        default:
          return 1;
      }
    }

    updateStats() {
      document.getElementById("lives").innerText = "Lives: " + this.lives;
    }

    showGameOverMessage() {
      if (this.gameOver) {
        const result = document.createElement("div");
        result.innerText = "Game Over! You caught " + this.score + " cats";
        result.classList.add("result");
        result.style.display = "block";
        this.gameContainer.appendChild(result);
      }
    }
  }

  const game = new Game();
  game.startGame();

  document.getElementById("easy-btn").addEventListener("click", function () {
    game.level = "Easy";
    game.speed = 2000;
    game.lives = 3;
    game.updateStats();
    game.startGame();
  });

  document.getElementById("medium-btn").addEventListener("click", function () {
    game.level = "Medium";
    game.speed = 1500;
    game.lives = 2;
    game.updateStats();
    game.startGame();
  });

  document.getElementById("hard-btn").addEventListener("click", function () {
    game.level = "Hard";
    game.speed = 1000;
    game.lives = 1;
    game.updateStats();
    game.startGame();
  });
});

