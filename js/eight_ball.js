//create bare bones -- start by initializing body
//check way to refactor barebones section via slack
const theBody = document.getElementsByTagName('body')[0];
//header
const theHeader = document.createElement("header");
theBody.append(theHeader);
//main
const theMain = document.createElement("main");
theBody.append(theMain);
//footer
const theFoot = document.createElement("footer");
theBody.append(theFoot);

//sectionOne?
const sectOne = document.createElement("section");
sectOne.id = "sectOne";
theMain.append(sectOne);
//create ball divider
const ballDiv = document.createElement('div');
ballDiv.id = 'answers';
sectOne.append(ballDiv);
//ballImg
const ballImg = document.createElement('img');
ballDiv.append(ballImg);
ballImg.src = './img/magic8ball_start.png';
ballImg.alt = 'Idle magic eightball image'
//user input
const userInput = document.createElement("input");
userInput.id = 'theInput'
userInput.setAttribute("type", "text");
userInput.setAttribute("placeholder", "Ask me anything!");
sectOne.append(userInput);
//button
const askButton = document.createElement("button");
askButton.id = 'askButton';
askButton.textContent = 'meow';
sectOne.append(askButton);
//onclick funcion
document.getElementById('askButton').onclick = function() {
    const rNum = getRandomNum();
    const rImg = getImgName(rNum);
    const rAccText = getAccText(rNum);
    ballImg.src = rImg;
    ballImg.alt = rAccText;
};

//tenary to create string name of image ft math.random to generate random number between 1-20
const getRandomNum = () => {
    //(max - min) + 1 + min == (20 - 1 + 1) ) 1
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
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
}