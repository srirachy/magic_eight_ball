//initialize body element
const theBody = document.getElementsByTagName('body')[0];
//call build skeleton to create html components
buildSkeleton();
//create elements
const ballDiv = document.createElement('div');
const ballImg = document.createElement('img');
const inputContain = document.createElement('div');
const qHeader = document.createElement('h2');
const inputLabel = document.createElement('label');
const userInput = document.createElement('input');
const buttonContain = document.createElement('div');
const askButton = document.createElement('button');
const yeetButton = document.createElement('button');
//set ids
ballDiv.id = 'answers';
ballImg.id = 'eightball';
inputContain.id = 'inputDiv';
qHeader.id = 'qHeader';
inputLabel.id = 'inputLabel';
userInput.id = 'theInput';
buttonContain.id = 'buttonDiv';
askButton.id = 'askButton';
yeetButton.id = 'yeetButton';
//set attributes
inputLabel.setAttribute('for', 'theInput');
userInput.setAttribute('type', 'text');
userInput.setAttribute('placeholder', 'Enter Question');
//set text content
inputLabel.textContent = 'Ask Me Anything!';
askButton.textContent = 'Ask It';
yeetButton.textContent = 'Yeet It';
qHeader.textContent = "";
//append elements
sectOne.append(ballDiv);
ballDiv.append(ballImg);
sectTwo.append(inputContain);
inputContain.append(qHeader);
inputContain.append(inputLabel);
inputContain.append(userInput);
sectTwo.append(buttonContain);
buttonContain.append(askButton);
buttonContain.append(yeetButton);
//initialize buttons by id (mostly for toggle function)
const askButtonById = document.getElementById('askButton');
const yeetButtonById = document.getElementById('yeetButton');
const inputFieldById = document.getElementById('theInput');
const q = document.getElementById('qHeader');
//set to idle eight ball
ballImg.src = './img/magic8ball_start.png';
ballImg.alt = 'Idle magic eightball image';

//build out html baseline using template literal 
function buildSkeleton(){
    const skeleton = `
    <header>
        <h1>Magic Eight Ball</h1>
    </header>

    <main>
        <article id="theArticle">
            <section id="sectOne">
            </section>
            <section id="sectTwo">
            </section>
        </article>
        <aside>
            <audio id="shake">
                <source src="./media/shake.wav" type="audio/wav">
            </audio>
            <audio id="yeet">
                <source src="./media/yeet.mp3" type="audio/mpeg">
            </audio>
        </aside>
    </main>

    <footer>
        <div id="footer_container">
            <div id="footer_flex_parent">
                <div id="icon_section">
                    <a class="icons rounded-circle" href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-twitter fa-lg text-white"></i></a>
                    <a class="icons rounded-circle" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-facebook-f fa-lg"></i></a>
                    <a class="icons rounded-circle" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-instagram fa-lg"></i></a>
                    <a class="icons rounded-circle" href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-brands fa-discord fa-lg"></i></a>
                </div>
                <p id="text_section">
                    <span>&copy; srirachy. Design:</span>
                    <a class="hyperlink" href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a>
                    <span>. Images:</span>
                    <a class="hyperlink" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
                    <span class="text-white">.</span>
                </p>
            </div>
        </div>
    </footer>`;

    //load background image
    theBody.style.backgroundImage = "url(./img/bkg_img.jpg)";  
    //insert skeleton at the end of the body tag
    theBody.insertAdjacentHTML('beforeend', skeleton);
}

// event delegation for buttons
buttonContain.addEventListener('click', (event) => {
    if(event.target.matches('#askButton')){
        runAskButton();     //ask it
    } else if (event.target.matches('#yeetButton')){
        runYeetButton();    //yeet it
    }
});
//press enter button to ask it -- inspiration from izzy
theInput.addEventListener("keyup", function(event){
    if(event.code === 'Enter'){
        askButtonById.click();
    }
})

// ask button functionality
const runAskButton = () => {
    let isTrue = true;
    isTrue = checkQuestion();
    if (isTrue === true){
        setText();
        toggleItems();  //disable field & buttons
        playShakeSound();
        ballImg.classList.add('shakeIt');
        resetEightBall(askButton);
        //animation segment
        setTimeout(() => {
            ballImg.classList.remove('shakeIt');
            setEightBall();
            toggleItems();  //enable field & buttons
            resetField();
        }, 1000)
    }
};

// yeet button functionality
const runYeetButton = () => {
    let isTrue = true;
    isTrue = checkQuestion();
    if (isTrue === true){
        setText();
        toggleItems();  //disable field & buttons
        yellYeet();
        ballImg.classList.add('yeetIt');
        resetEightBall();
        //animation segment
        setTimeout(() => {
            ballImg.classList.remove('yeetIt');
            ballImg.classList.add('rollIn');
            setTimeout(() => {
                ballImg.classList.remove('rollIn');
                setEightBall();
                toggleItems();  //enable field & buttons
                resetField();
            }, 3000)
        }, 500)
    }
};

// check if there is any text within input field, trigger alert if none
const checkQuestion = () => {
    const userText = userInput.value;
    if (userText.length === 0){
        alert('Please enter a question');
        return false;
    }
    return true;
};

// set text to user input and add question mark if missing from user input
const setText = () => {
    const userText = userInput.value;
    const lastChar = userText.charAt(userText.length-1);
    if (lastChar === '?'){
        q.innerHTML = `The Question: ${userText}`;
    } else{
        q.innerHTML = `The Question: ${userText}?`;
    }
};

// reset input text field
const resetField = () => {
    userInput.value = "";
};

// toggle enable/disable button & field
const toggleItems = () => {
    //toggle buttons using ternary operator
    (askButtonById.disabled === true) ? askButtonById.disabled = false : askButtonById.disabled = true;
    (yeetButtonById.disabled === true) ? yeetButtonById.disabled = false : yeetButtonById.disabled = true;
    //toggle input field
    (inputFieldById.disabled === true) ? inputFieldById.disabled = false : inputFieldById.disabled = true;
};

// play eight ball shake sound
const playShakeSound = () => {
    theSound = document.getElementById('shake');
    theSound.play();
};

//  play yeet sound
const yellYeet = () => {
    let yeet = document.getElementById("yeet");
    yeet.play();
};

// reset eight ball (only happens only when eightball is shaken or thrown)
const resetEightBall = (theButton) => {
    ballImg.src = './img/magic8ball_start.png';
    if (theButton === askButton){
        ballImg.alt = 'Magic eightball is shaking';
    } else {
        ballImg.alt = 'Magic eightball is yeeted';
    }
};

// set eight ball to random image
const setEightBall = () => {
    const rNum = getRandomNum();
    const rImg = getImgName(rNum);
    const rAccText = getAccText(rNum);
    ballImg.src = rImg;
    ballImg.alt = rAccText;
};

//math.random to generate random number between 1-20
const getRandomNum = () => {
    //(max - min) + 1 + min == 20 + 1 cuz - min + min = 0
    return Math.floor(Math.random() * 20 + 1);
};

//generate string to retrieve random image using template literal
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