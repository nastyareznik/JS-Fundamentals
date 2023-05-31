document.addEventListener("DOMContentLoaded", function () {
    var gameContainer = document.getElementById("game-container");
    var containerWidth = gameContainer.clientWidth;
    var containerHeight = gameContainer.clientHeight;
    var score = 0;
    var lives = 3;
    var speed = 2000; // Початкова швидкість мішеней (2 секунди)
    var level = "Easy"; // Початковий рівень складності
  
    function startGame() {
      score = 0;
      gameContainer.innerHTML = "";
      updateStats();
  
      var intervalId;
      var gameOver = false;
  
      function createTarget() {
        var target = document.createElement("div");
        target.classList.add("target");
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
          var moveSpeed = getMoveSpeed(); // Отримуємо швидкість руху мішеня
  
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
  
    
  
        // Перевірка, чи клік був в межах контейнера
        
  
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
        document.getElementById("score").innerText = "Score: " + score;
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
        gameOver = true; // Позначаємо гру як завершену
        showGameOverMessage(); // Викликаємо функцію для виведення повідомлення
      }, 30000); // Гра триває 30 секунд
    
      // Функція для виведення повідомлення "Гра закінчена!"
      function showGameOverMessage() {
        if (gameOver) {
          // Виконуємо дії, які потрібно зробити після завершення гри
          var gameOverMessage = document.getElementById("game-over-message");
          gameOverMessage.style.display = "block";
        }
      }
    }
  
    startGame();
  });
  
