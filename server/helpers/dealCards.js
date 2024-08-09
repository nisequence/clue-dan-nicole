const Cards = require("./cards.json");
let organized = [];
let shuffled = [];
let dealt = {};
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
    let roomCardNum = Math.floor(Math.random()*9) + 10
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
    // console.log("Cards", cards);
    for (let i = 0; i < playerNames.length; i ++) {
        //* Create an array within the "dealt" object for each player's cards by name.
        dealt[playerNames[i]] = []
            //* Deal each player's cards, one at a time, nonsequentially
            for (let c = 0+i; c <= cards.length; c+=playerNames.length) {
                // console.log("c", c, cards[c]);
                if (cards[c] != undefined) {
                    dealt[playerNames[i]].push(cards[c]);
                    continue;
                } else {
                    // console.log("breaking for loop");
                    break;
                }
            }
    }
    console.log('dealt:',dealt)
}


organizeCards();
selectCase();
shuffleCards(organized);
console.log(Case);
dealCards(["Sally", "Joe"], shuffled);