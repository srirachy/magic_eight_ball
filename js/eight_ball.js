//initialize body element, call build skeleton, then initialize elements from skeleton
const theBody = document.getElementsByTagName('body')[0];
//call build skeleton to create html components
buildSkeleton();
const theHeader = document.getElementsByTagName('header')[0];
const theMain = document.getElementsByTagName('main')[0];
const theFooter = document.getElementsByTagName('footer')[0];

//create ball divider
const ballDiv = document.createElement('div');
ballDiv.id = 'answers';
sectOne.append(ballDiv);
//ballImg
const ballImg = document.createElement('img');
ballImg.id = 'eightball';
ballDiv.append(ballImg);
ballImg.src = './img/magic8ball_start.png';
ballImg.alt = 'Idle magic eightball image';
//user input
const userInput = document.createElement("input");
userInput.id = 'theInput'
userInput.setAttribute("type", "text");
userInput.setAttribute("placeholder", "Ask me anything!");
sectOne.append(userInput);
//ask button
const askButton = document.createElement("button");
askButton.id = 'askButton';
askButton.textContent = 'meow';
sectOne.append(askButton);
//yeet button
const yeetButton = document.createElement("button");
yeetButton.id = 'yeetButton';
yeetButton.textContent = 'yeet'
sectOne.append(yeetButton);

//build out the template using template literal 
function buildSkeleton(){
    const skeleton = `
    <header>
    </header>

    <main>
        <section id="sectOne">
        </section>
        <aside>
        <audio id="yeet">
            <source src="./media/Yeet-sound-effect.mp3" type="audio/mpeg">
        </audio>
    </aside>
    </main>

    <footer>
    </footer>`

    //insert skeleton at the end of the body tag
    theBody.insertAdjacentHTML('beforeend', skeleton);
}

//ask button functionality
askButton.addEventListener('click',() => {
    ballImg.classList.add('shakeIt');
    ballImg.src = './img/magic8ball_start.png';
    ballImg.alt = 'Magic eightball in motion';
    setTimeout(() => {
        ballImg.classList.remove('shakeIt');
        const rNum = getRandomNum();
        console.log(rNum);
        const rImg = getImgName(rNum);
        const rAccText = getAccText(rNum);
        ballImg.src = rImg;
        ballImg.alt = rAccText;
    }, 1000)
});

//yeet button functionality
yeetButton.addEventListener('click', () => {
    yellYeet();
    ballImg.classList.add('yeetIt');
    ballImg.src = './img/magic8ball_start.png';
    ballImg.alt = 'Magic eightball thrown';
    yeetButton.disabled = true;
    setTimeout(() => {
        ballImg.classList.remove('yeetIt');
        ballImg.classList.add('rollIn');
        setTimeout(() => {
            ballImg.classList.remove('rollIn');
            const rNum = getRandomNum();
            console.log(rNum);
            const rImg = getImgName(rNum);
            const rAccText = getAccText(rNum);
            ballImg.src = rImg;
            ballImg.alt = rAccText;
        }, 3000)
    }, 500)
    yeetButton.disabled = false;
}
);

//  play yeet sound
const yellYeet = () => {
    let yeet = document.getElementById("yeet");
    yeet.play();
    return;
}

//tenary to create string name of image ft math.random to generate random number between 1-20
const getRandomNum = () => {
    //(max - min) + 1 + min == 20 + 1 cuz - min + min = 0
    return Math.floor(Math.random() * 20 + 1);
};

//generate string to retrieve random image
const getImgName = (randoNum) => {
    return `./img/magic8ball_${randoNum}.png`;
};

//return text for accessibility
const getAccText = (randoNum) => {
    switch(randoNum){
        case 1:
            return 'Eightball says: It is certain';
        case 2:
            return 'Eightball says: It is decidedly so';
        case 3:
            return 'Eightball says: Without a doubt';
        case 4:
            return 'Eightball says: Yes, definitely';
        case 5:
            return 'Eightball says: You may rely on it';
        case 6:
            return 'Eightball says: As I see it, yes';
        case 7:
            return 'Eightball says: Most likely';
        case 8:
            return 'Eightball says: Outlook good';
        case 9:
            return 'Eightball says: Yes';
        case 10:
            return 'Eightball says: Signs point to yes';
        case 11:
            return 'Eightball says: Reply hazy try again';
        case 12:
            return 'Eightball says: Ask again later';
        case 13:
            return 'Eightball says: Better not tell you now';
        case 14:
            return 'Eightball says: Cannot predict now';
        case 15:
            return 'Eightball says: Concentrate and ask again';
        case 16:
            return 'Eightball says: Do not count on it';
        case 17:
            return 'Eightball says: My reply is no';
        case 18:
            return 'Eightball says: My sources say no';
        case 19:
            return 'Eightball says: Outlook not so good';
        case 20:
            return 'Eightball says: Very doubtful';
        default:
            return 'This should never happen';

    }
};