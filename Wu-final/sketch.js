let stars = [];

let x = 0;
let y = 0;

function setup() {

    let canvas = createCanvas(windowWidth, windowHeight);

    canvas.position(0, 0);

    canvas.style('position', 'fixed');

    canvas.style('z-index', '-1');


for (let i = 0; i < 100; i++) {

    stars.push({

    x: random(width),

    y: random(height),

    size: random(2, 4)

    });

}

}

function draw() {

background(193, 246, 232);

noStroke();

fill(255);

for (let star of stars) {

    circle(

    star.x,

    star.y,

    star.size

    );

}

stroke(255);

strokeWeight(5);

line(

    x,

    y,

    x - 80,

    y - 80

);

x += 15;

y += 15;

if (x > width || y > height) {

    x = 0;

    y = 0;

}

}