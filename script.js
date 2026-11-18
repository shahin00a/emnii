function enterWebsite() {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("main").style.display = "flex";

    // YouTube Music

    document.getElementById("youtubeMusic").innerHTML = `

        <iframe
            width="1"
            height="1"
            src="https://www.youtube.com/embed/fxA7rFlmmf4?autoplay=1&loop=1&playlist=fxA7rFlmmf4"
            allow="autoplay; encrypted-media">
        </iframe>

    `;

}


/* LOAD SAVED NAMES */

const maleInput = document.getElementById("maleName");

const femaleInput = document.getElementById("femaleName");


function loadNames() {

    const male = localStorage.getItem("maleName");

    const female = localStorage.getItem("femaleName");

    if (male && female) {

        document.getElementById("loveName").innerText =
            male + " ❤️ " + female;

        maleInput.value = male;

        femaleInput.value = female;

    }

}

loadNames();



/* CHANGE NAME AND OPEN NEW PAGE */

function changeName() {

    let male = maleInput.value.trim();

    let female = femaleInput.value.trim();

    if (male !== "" && female !== "") {

        // Save Names

        localStorage.setItem("maleName", male);

        localStorage.setItem("femaleName", female);


        // Update New Page Messages

        document.getElementById("girlMessage").innerText =
            "I Love You " + female + " ❤️";

        document.getElementById("boyMessage").innerText =
            "I Love You " + male + " ❤️";


        // Change Page

        document.getElementById("main").style.display = "none";

        document.getElementById("lovePage").style.display = "flex";

    }

    else {

        alert("Please enter both names! ❤️");

    }

}



/* GO BACK */

function goBack() {

    document.getElementById("lovePage").style.display = "none";

    document.getElementById("main").style.display = "flex";

}



/* FALLING HEARTS ANIMATION */

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let hearts = [];


function resize() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resize);

resize();



class FallingHeart {

    constructor() {

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 15 + 8;

        this.speed = Math.random() * 1.5 + 0.5;

        this.opacity = Math.random() * 0.5 + 0.3;

    }


    update() {

        this.y += this.speed;

        this.x += Math.sin(this.y * 0.02) * 0.5;

        if (this.y > canvas.height + 20) {

            this.y = -20;

            this.x = Math.random() * canvas.width;

        }

    }


    draw() {

        ctx.globalAlpha = this.opacity;

        ctx.fillStyle = "#ff69b4";

        ctx.font = `${this.size}px Arial`;

        ctx.fillText("♥", this.x, this.y);

        ctx.globalAlpha = 1;

    }

}



/* CREATE HEARTS */

for (let i = 0; i < 45; i++) {

    hearts.push(new FallingHeart());

}



/* ANIMATION LOOP */

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(heart => {

        heart.update();

        heart.draw();

    });

    requestAnimationFrame(animate);

}

animate();