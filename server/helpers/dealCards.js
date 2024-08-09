const Cards = require("./cards.json");
let organized = [];
let shuffled = [];
let dealt = [];
let Case = {"suspect": undefined, "weapon": undefined, "room": undefined}

//TODO: input of # of players, output of which player has which card
//E.g. 3 players, Sam, Katie, and Fred

function selectCase() {
    //* Select a random suspect
    let susCardNum = Math.floor(Math.random()*6)
    // console.log(organized[susCardNum]);
    //* File suspect into the case
    Case.suspect = organized[susCardNum];
    //* Remove suspect from card selection
    organized.splice(susCardNum, 1)

    //* Select a random weapon
    let weapCardNum = Math.floor(Math.random()*6) + 5
    // console.log(organized[weapCardNum]);
    //* File weapon into the case
    Case.weapon = organized[weapCardNum];
    //* Remove weapon from card selection
    organized.splice(weapCardNum, 1)

    //* Select a random room
    let roomCardNum = Math.floor(Math.random()*6) + 10
    // console.log(organized[roomCardNum]);
    //* File room into the case
    Case.room = organized[roomCardNum];
    //* Remove room from card selection
    organized.splice(roomCardNum, 1)
}

function organizeCards() {
    let start = Cards.suspects;
    for (let x = 0; x < Cards.weapons.length; x++) {
        start.push(Cards.weapons[x])
    }
    for (let y = 0; y < Cards.rooms.length; y++) {
        start.push(Cards.rooms[y])
    }
    organized = start;
    //console.log(organized);
}
function shuffleCards() {
    for (let z = 0; z <= 20; z++) {
        //*Select a random card from the organized list of cards
        let addedCardNum = Math.floor(Math.random()*(organized.length))
        // console.log("Attempting to add card", addedCardNum, organized[addedCardNum], `max ${organized.length - 1} last card ${organized[organized.length - 1]}`);
        //* Break loop when organized array completes itself
        if (organized == []) {break}
        //* Confirm validity of selection before adding to deck
        else if (addedCardNum < organized.length) {
            shuffled.push(organized[addedCardNum]) // add valid card to shuffled array
            organized.splice(addedCardNum, 1) // remove valid card from organized array
            // console.log("Shuffled:", shuffled);
        //* Invalid selections are ignored, loop continues
        } else {continue}
    }
/*     console.log("Shuffled:", shuffled);
    console.log("Organized:", organized); */
}
function dealCards(playerNames, cards) {
    console.log("Cards", cards);
    let playerQuantity = playerNames.length;
    let cardsPer = Math.floor(cards.length/playerQuantity);
    let handOfCards = []
    for (let a = 0; a <= playerQuantity - 1; a++) {
        handOfCards = []
        for (let b = 0; b <= cards.length; b++) {
            console.log("b", b, cards[b]);
            if (cards[b] != undefined) {
                handOfCards.push(cards[b]);
                b+=1
            } else {break}
        }
        dealt.push(handOfCards)
    }

    return dealt
}


organizeCards();
selectCase();
shuffleCards(organized);
console.log(Case);
console.log(dealCards(["Sam", "Katie", "Fred", "Jessica"], shuffled));