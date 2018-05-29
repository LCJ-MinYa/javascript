window.onload = function() {
    let gameTimer, map, snake, food, onKeyDownTime;
    let canvas = document.getElementById('map');
    let context = canvas.getContext('2d');

    //map
    class Map {
        initMap() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#000';
            context.fillRect(0, 0, canvas.width, canvas.height);
            snake = new Snake();
            snake.draw();
            food = new Food().getRandomFood();
            food.draw();
        }
        startGame() {
            gameTimer = setInterval(function() {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = '#000';
                context.fillRect(0, 0, canvas.width, canvas.height);
                food.draw();
                snake.move();
                snake.draw();
            }, 300);
        }
        endGame() {
            clearInterval(gameTimer);
        }
    }

    //基本矩形类
    class Rect {
        constructor(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
        }
        draw() {
            context.beginPath();
            context.fillStyle = this.color;
            context.rect(this.x, this.y, this.width, this.height);
            context.fill();
            context.stroke();
        }
    }

    //食物
    class Food {
        getRandomFood() {
            let rect;
            let isOnSnake = true;

            while (isOnSnake) {
                isOnSnake = false;
                let indexX = this.getNumberInRange(0, canvas.width / 20 - 1);
                let indexY = this.getNumberInRange(0, canvas.height / 20 - 1);
                rect = new Rect(indexX * 20, indexY * 20, 20, 20, "green");

                for (let i = 0; i < snake.snakeArray.length; i++) {
                    if (snake.snakeArray[i].x == rect.x && snake.snakeArray[i].y == rect.y) {
                        isOnSnake = true;
                        break;
                    }
                }
            }

            return rect;
        }
        getNumberInRange(min, max) {
            let range = max - min;
            let r = Math.random();
            return Math.round(r * range + min);
        }
    }

    //Snake类
    class Snake {
        constructor() {
            let snakeArray = [];

            for (let i = 0; i < 5; i++) {
                let rect = new Rect(i * 20 + 200, 280, 20, 20, "#fff");
                snakeArray.splice(0, 0, rect);
            }

            this.head = snakeArray[0];
            this.snakeArray = snakeArray;
            this.direction = 39;
        }
        draw() {
            for (let i = 0; i < this.snakeArray.length; i++) {
                this.snakeArray[i].draw();
            }
        }
        move() {
            let rect = new Rect(this.head.x, this.head.y, this.head.width, this.head.height, "#fff");
            this.snakeArray.splice(1, 0, rect);

            if (this.isEat()) {
                food = new Food().getRandomFood();
            } else {
                this.snakeArray.pop();
            }

            //37 左，38 上，39 右，40 下
            switch (this.direction) {
                case 37:
                    this.head.x -= this.head.width;
                    break;
                case 38:
                    this.head.y -= this.head.height;
                    break;
                case 39:
                    this.head.x += this.head.width;
                    break;
                case 40:
                    this.head.y += this.head.height;
                    break;
                default:
                    break;
            }

            if (this.head.x > canvas.width || this.head.x < 0 || this.head.y > canvas.height || this.head.y < 0) {
                clearInterval(gameTimer);
                alert("你失败了，撞墙了");
            }

            // 撞自己，循环从1开始，避开蛇头与蛇头比较的情况
            for (let i = 1; i < this.snakeArray.length; i++) {
                if (this.snakeArray[i].x == this.head.x && this.snakeArray[i].y == this.head.y) {
                    clearInterval(gameTimer);
                    alert("你失败了，吃自己了");
                }
            }

        }
        isEat() {
            if (this.head.x == food.x && this.head.y == food.y) {
                return true;
            } else {
                return false;
            }
        }
    }

    //监听键盘事件，改变蛇的方向
    window.onkeydown = function(e) {
        if (onKeyDownTime) {
            let nowDate = new Date().valueOf();
            if (nowDate - onKeyDownTime < 200) {
                return;
            } else {
                onKeyDownTime = nowDate;
            }
        } else {
            onKeyDownTime = new Date().valueOf();
        }
        let ev = e || window.event;
        //37 左，38 上，39 右，40 下
        switch (ev.keyCode) {
            case 37:
                {
                    if (snake.direction !== 39) {
                        snake.direction = 37;
                    }
                    break;
                }
            case 38:
                {
                    if (snake.direction !== 40) {
                        snake.direction = 38;
                    }
                    break;
                }
            case 39:
                {
                    if (snake.direction !== 37) {
                        snake.direction = 39;
                    }
                    break;
                }
            case 40:
                {
                    if (snake.direction !== 38) {
                        snake.direction = 40;
                    }
                    break;
                }
        }
        ev.preventDefault();
    }

    let startBtn = document.getElementById('startBtn');
    startBtn.onclick = function() {
        if (startBtn.innerText == '开始游戏') {
            startBtn.innerText = '重新开始';
            map.startGame();
        } else {
            map.endGame();
            map.initMap();
            map.startGame();
        }
    }

    let stopBtn = document.getElementById('stopBtn');
    stopBtn.onclick = function() {
        map.endGame();
        map.initMap();
        startBtn.innerText = '开始游戏';
    }

    map = new Map();
    map.initMap();
}