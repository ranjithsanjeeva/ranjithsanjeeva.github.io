var canvas = document.getElementById("img1");
canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight - 140;
canvas.addEventListener('click', drawCircle, false);
let running = false;
let c = canvas.getContext("2d");
circle = [];
let animationFrame;
let intervalID;
let range = document.getElementById("myRange");
var output = document.getElementById("demo");
var collition = document.getElementById("collition");
let isRandomX = true;
let playing=true;
let i=0;

range.oninput = function () {
    this.style.background = 'linear-gradient(to right, #080cc0 0%, #080cc0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
};


function drawCircle(event) {


    function Circle(x, y, dx, dy, radius, randomColor) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.randomColor = randomColor
        this.draw = function () {
            c.fillStyle = this.randomColor;
            c.beginPath();
            c.arc((this.x - 100), (this.y - 70), this.radius, 0, 2 * Math.PI)

            c.stroke();
            c.fill();
            this.update();
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth - 105 || (this.x - 100) - this.radius < 0) {
                this.dx = -this.dx
                i++
            }
            if (this.y + this.radius > innerHeight - 70 || this.y - this.radius < 70) {
                this.dy = -this.dy
                i++
            }

            this.x += this.dx;
            this.y += this.dy;
        }
    }



    console.log("outside1")
    let randomColor = "#" + Math.floor(Math.random() * 25542195).toString(16);
    console.log(randomColor)
    let x = event.clientX;
    let y = event.clientY;

    let speed=5;
    let angle=Math.floor(Math.random()*360);
    let rad=angle*(Math.PI/180);

    dx=Math.cos(rad)*speed;
    dy=Math.sin(rad)*speed

    let radius = 20;


     circle.push(new Circle(x,y,dx,dy,radius,randomColor))

    
    if(!intervalID) {
        intervalID =  setInterval(animate,(20-(range.value/5)));
        setInterval(getCollition,(1000+(20-(range.value/5))));
    }
    animate();

}
function animate(){
       c.clearRect(0,0,innerWidth,innerHeight);
        for(let i=0;i<circle.length;i++) {
            circle[i].draw();
        }
        console.log("outside4")
    }

function changeSpeed(k){
    output.innerHTML = k+"%";
    if(playing)
    {
        clearInterval(intervalID);
        intervalID = setInterval(animate,(20-(k/5)));
        console.log(k)
    }
}

function pause(){
    clearInterval(intervalID);
    playing=false;
}

function play(){
    
    clearInterval(intervalID);
  intervalID = setInterval(animate,(20-(range.value/5)));
  playing = true;
}

function getCollition(){
    collition.innerHTML = i;
    i=0
}