/* Code */

// Random Number Generator
function randNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Magic 8-Ball array of phrases
const phrases = [
    // Default Responses
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    // Credit: Wheel of Enormous Proportions
    "Have an umbrella handy. I will leave it at that.",
    "Nobody knows. But always remember, I am here for you.",
    "You're not ready for my truth!",
    "Love is the answer.",
    "Life is a dotted circle. I don't know what it means, but it sounds so wise.",
    "I have news! On second thought, I've said too much.",
    "Before I respond, you must bestow unto me a junk food sacrifice. Try again later.",
    "Let me just say: count your blessings.",
    "I'm tired of doing prophecy for everyone. What about my future?",
    "I will sleep on that one.",
    "The sun will rise in the east.",
    "Damn. I was not ready for that one.",
    "Oxygen and carbon dioxide are in your immediate future.",
    "Oh, speaking of that... I have no idea.",
    // Credit: me
    "You'd have to pay me to answer that question.",
    "Ummm.... next question...",
    "Let's keep this question unasked.",
    "I'm just a ball.. this is too much pressure",
    "100% without a doubt.",
    "If I were you, I wouldn't.",
    "Go see your therapist before you ask that question",
    "This is the real 8-ball ITS NOT ME ITS NOT ME ITS NOT ME",
    "I think what you're thinking is true.",
    "What would the Cold Duke of the North do?",
    "Would I ever play League? That's your answer.",
    "Would I ever watch Obsession? That's your answer.",
    "Think Mark, think! What will you have after 500 years?!",
    // Credit: Reddit Forums
    "YTA",
    "NTA",
    "Pay $1.99 for 5 more answers.",
    "Answer vague. Keep rubbing me",
    "You ARE the father!",
    "Absolutely, positively, unequivocally, definitely maybe.",
    "New Ball. Who this?",
    "Don't ask questions you don't want the answer to.",
    "Look it up on Google",
    "For best result, put me in your ass.",
];

function getBallPhrase() {
    max = phrases.length - 1;
    return phrases[randNumGen(0, max)];
}

const button = document.getElementById("shake-btn");

button.addEventListener("click", function()) {
    const randomPhrase = getBallPhrase();

    answerElement.textContent = randomPhrase;
}