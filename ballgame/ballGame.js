// var canvas = document.getElementById("img1");
// canvas.width=window.innerWidth-200;
// canvas.height=window.innerHeight-140;
// canvas.addEventListener('click',drawCircle,false);
// let running = false;
// let c=canvas.getContext("2d");
// circle = [];
// let animationFrame;
// let intervalID;
// let playing = true;
// let range=document.getElementById("myRange");
// var output = document.getElementById("demo");
// let isRandomX=true

// range.oninput = function() {
//     this.style.background = 'linear-gradient(to right, #080cc0 0%, #080cc0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
//   };

// function drawCircle(event){


//      function Circle(x,y,dx,dy,radius,randomColor){
//         this.x=x;
//         this.y=y;
//         this.dx=dx;
//         this.dy=dy;
//         this.radius=radius;
//         this.randomColor=randomColor
//         this.draw=function(){
//             c.fillStyle=this.randomColor;
//             c.beginPath();
//             c.arc((this.x-100),(this.y-70),this.radius,0,2*Math.PI)
//             c.stroke();
//             c.fill();
//             this.update();
//         }

//         this.update= function(){
//             if(this.x+this.radius > innerWidth-100|| (this.x-100)-this.radius<0)
//             {
//                 this.dx=-this.dx
//             }
//             if(this.y+this.radius > innerHeight-70||this.y-this.radius<70)
//             {
//                 this.dy=-this.dy
//             }

//             this.x += this.dx;
//             this.y += this.dy;
//             // console.log(this.x)
//             // console.log(this.x)
            
//        }
//      }



//     console.log("outside1")
//     let randomColor = "#" + Math.floor(Math.random() * 25542195).toString(16);
//     console.log(randomColor)
//     let x=event.clientX;
//     let y=event.clientY;
//     var num1 = Math.floor(Math.random()*3) + 1; 
//     num1 *= Math.floor(Math.random()*2) == 1 ? Math.random() : -1;
//     var num2 = Math.floor(Math.random()*3) + 1;
//     num2 *= Math.floor(Math.random()*2) == 1 ? 1 : -Math.random();
//     let dx= num1*2;
//     let dy= num2*2;
//     let radius=20;
    
//     circle.push(new Circle(x,y,dx,dy,radius,randomColor))

    
//     if(!intervalID) {
//         intervalID =  setInterval(animate,(20-(range.value/5)));
//     }
//     animate();

// }
// function animate(){
//         //console.log("outside2")
//         // if(animationFrame){
//         //     cancelAnimationFrame(animationFrame);
//         // }
//         // animationFrame = requestAnimationFrame(animate);
    
//        c.clearRect(0,0,innerWidth,innerHeight);
//         //console.log("outside3")
//         for(let i=0;i<circle.length;i++) {
//             // circle[i].draw();
//             circle[i].draw();
//            // console.log(circle);
//         }
//         console.log("outside4")
        
//       //  animate();
//     }

// function changeSpeed(k){
//     output.innerHTML = k+"%";
//     if(playing)
//     {
//         clearInterval(intervalID);
//         intervalID = setInterval(animate,(20-(k/5)));
//         console.log(k)
//     }
// }

// function pause(){
//     clearInterval(intervalID);
//     playing=false;
// }

// function play(){
    
//     clearInterval(intervalID);
//   intervalID = setInterval(animate,(20-(range.value/5)));
//   playing = true;
// }

// console.log("outside")







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
let isRandomX = true;
let playing=true;
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
            // c.fillText("", (this.x - 100), (this.y - 70));
            this.update();
        }

        this.update = function () {
            if (this.x + this.radius > innerWidth - 105 || (this.x - 100) - this.radius < 0) {
                this.dx = -this.dx
            }
            if (this.y + this.radius > innerHeight - 70 || this.y - this.radius < 70) {
                this.dy = -this.dy
            }

            this.x += this.dx;
            this.y += this.dy;
            console.log(this.x, this.y);
            // console.log(this.x)
            // console.log(this.x)

        }
    }



    console.log("outside1")
    let randomColor = "#" + Math.floor(Math.random() * 25542195).toString(16);
    console.log(randomColor)
    let x = event.clientX;
    let y = event.clientY;
    // var num1 = Math.floor(Math.random() * 3) + 1;
    // num1 *= Math.floor(Math.random() * 2) == 1 ? Math.random() : -1;
    // var num2 = Math.floor(Math.random() * 3) + 1;
    // num2 *= Math.floor(Math.random() * 2) == 1 ? 1 : -Math.random();
    // let dx = 3;
    // let dy = 3;
    if (isRandomX) {
        dx = (Math.random() * 3) * 3;
        dy = 10 - dx;
    }
    else {
        dy = (Math.random() * 3) * 3;
        dx = 10 - dy;
    }
    isRandomX = !isRandomX;

    let radius = 20;


     circle.push(new Circle(x,y,dx,dy,radius,randomColor))

    
    if(!intervalID) {
        intervalID =  setInterval(animate,(20-(range.value/5)));
    }
    animate();

}
function animate(){
        //console.log("outside2")
        // if(animationFrame){
        //     cancelAnimationFrame(animationFrame);
        // }
        // animationFrame = requestAnimationFrame(animate);
    
       c.clearRect(0,0,innerWidth,innerHeight);
        //console.log("outside3")
        for(let i=0;i<circle.length;i++) {
            // circle[i].draw();
            circle[i].draw();
           // console.log(circle);
        }
        console.log("outside4")
        
      //  animate();
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