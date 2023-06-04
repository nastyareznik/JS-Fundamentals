document.addEventListener("DOMContentLoaded", function () {
  var gameContainer = document.getElementById("game-container");
  var containerWidth = gameContainer.clientWidth;
  var containerHeight = gameContainer.clientHeight;
  var score = 0;
  var lives = 3;
  var speed = 2000;
  var level = "Easy";

  function startGame() {
    score = 0;
    gameContainer.innerHTML = "";
    updateStats();

    var intervalId;
    var gameOver = false;

    function createTarget() {
      if (!gameOver) {
        var target = document.createElement("div");
        target.classList.add("target");
        target.style.backgroundImage = "url('../img/cat-face.png')";
        target.style.top =
          Math.floor(Math.random() * (containerHeight - 50)) + "px";
        target.style.left =
          Math.floor(Math.random() * (containerWidth - 50)) + "px";
        gameContainer.appendChild(target);

        target.addEventListener("click", function () {
          score++;
          gameContainer.removeChild(target);
        });

        var animationId = setInterval(function () {
          var targetTop = parseInt(target.style.top);
          var targetLeft = parseInt(target.style.left);
          var randomTop = Math.floor(Math.random() * (containerHeight - 50));
          var randomLeft = Math.floor(Math.random() * (containerWidth - 50));
          var distanceX = Math.abs(targetLeft - randomLeft);
          var distanceY = Math.abs(targetTop - randomTop);
          var moveSpeed = getMoveSpeed();

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
            gameContainer.removeChild(target);
          }
        }, 10);
      }
    }

    function checkCollision(bullet) {
      var targets = document.getElementsByClassName("target");
      var bulletRect = bullet.getBoundingClientRect();

      for (var i = 0; i < targets.length; i++) {
        var target = targets[i];
        var targetRect = target.getBoundingClientRect();

        if (
          bulletRect.top <= targetRect.bottom &&
          bulletRect.right >= targetRect.left &&
          bulletRect.left <= targetRect.right &&
          bulletRect.bottom >= targetRect.top
        ) {
          score++;
          gameContainer.removeChild(target);
          gameContainer.removeChild(bullet);
          break;
        }
      }
    }

    gameContainer.addEventListener("click", function (event) {
      handleShot(event);
    });

    function getMoveSpeed() {
      switch (level) {
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

    function updateStats() {
      document.getElementById("lives").innerText = "Lives: " + lives;
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === " ") {
        handleShot({ clientX: containerWidth / 2, clientY: containerHeight });
      }
    });

    document.getElementById("easy-btn").addEventListener("click", function () {
      level = "Easy";
      speed = 2000;
      lives = 3;
      updateStats();
      startGame();
    });

    document
      .getElementById("medium-btn")
      .addEventListener("click", function () {
        level = "Medium";
        speed = 1500;
        lives = 2;
        updateStats();
        startGame();
      });

    document.getElementById("hard-btn").addEventListener("click", function () {
      level = "Hard";
      speed = 1000;
      lives = 1;
      updateStats();
      startGame();
    });

    document.getElementById("play-btn").addEventListener("click", function () {
      intervalId = setInterval(function () {
        createTarget();
      }, speed);
    });

    setTimeout(function () {
      clearInterval(intervalId);
      gameOver = true; // гру завершено
      showGameOverMessage();
    }, 30000);

    // повідомлення про закінчення гри
    function showGameOverMessage() {
      if (gameOver) {
        var result = document.createElement("div");
        result.innerText = "Game Over! You caught " + score + " cats";
        result.classList.add("result");
        result.style.display = "block";
        gameContainer.appendChild(result);
      }
    }
  }

  startGame();
});
