// Declare my variables
var cpuSelectedPokemon = "";
var lettersInSelectedPokemon = [];
var letterGuessed= "";
var wrongGuess = [];
var numberOfBlanks = 0;
var currentPokemon = [];

// Declare my counters
var numberofGuesses = 16;
var numberOfWins = 0;
var numberOfLoses = 0;

// List of Pokemon, orignial 150
var pokemonList150 = [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash',
    'nidoran',
    'nidorina',
    'nidoqueen',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb',
    'electrode',
    'exeggcute',
    'exeggutor',
    'cubone',
    'marowak',
    'hitmonlee',
    'hitmonchan',
    'lickitung',
    'koffing',
    'weezing',
    'rhyhorn',
    'rhydon',
    'chansey',
    'tangela',
    'kangaskhan',
    'horsea',
    'seadra',
    'goldeen',
    'seaking',
    'staryu',
    'starmie',
    'mrmime',
    'scyther',
    'jynx',
    'electabuzz',
    'magmar',
    'pinsir',
    'tauros',
    'magikarp',
    'gyarados',
    'lapras',
    'ditto',
    'eevee',
    'vaporeon',
    'jolteon',
    'flareon',
    'porygon',
    'omanyte',
    'omastar',
    'kabuto',
    'kabutops',
    'aerodactyl',
    'snorlax',
    'articuno',
    'zapdos',
    'moltres',
    'dratini',
    'dragonair',
    'dragonite',
    'mewtwo',
    'mew'
];

document.onkeyup = function(event){
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    letterChecker(letterGuessed);
    endResult();

}

function gameStart(){
    cpuSelectedPokemon = pokemonList150[Math.floor(Math.random() * pokemonList150.length)];

    lettersInSelectedPokemon = cpuSelectedPokemon.split("");
    
    numberOfBlanks = lettersInSelectedPokemon.length;
    
    numberofGuesses = 16;
    currentPokemon = [];

    for (var index = 0; index < numberOfBlanks.length; index++) {
        currentPokemon.push("_");
        
    }

    document.getElementById("numGuessLeft").innerHTML = numberofGuesses;
    document.getElementById("currentWord").innerHTML = currentPokemon.join(" ");

    wrongGuess = [];
    document.getElementById("wrongGuess").innerHTML= wrongGuess.join(" ");

}

function letterChecker(params) {

    var letterInWord = false;

    for (var index = 0; index < numberOfBlanks; index++) {
        
        if (cpuSelectedPokemon[index] === params) {
            
            letterInWord = true;

        }
        
    }

    if (letterInWord) {

        for (var i = 0; i < numberOfBlanks; i++) {
            
            if (cpuSelectedPokemon[i] === params) {
                
               currentPokemon[i] = params;

            }

        }
        
    } 
    
    else {

        if (pokemonList150.indexOf(params) > -1) {
            
        } else {
            wrongGuess.push(params);
            numberofGuesses--;
            
        }
       
    }
    
}

function endResult() {

    document.getElementById("numGuessLeft").innerHTML = numberofGuesses;
    document.getElementById("currentWord").innerHTML = currentPokemon.join(" ");
    document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ");

    if (lettersInSelectedPokemon.toString() === currentPokemon.toString()) {

        numberOfWins++;

        //display the pokemon

        document.getElementById("numWins").innerHTML = numberOfWins;

        gameStart();
               
    } 
    
    else if(numberofGuesses === 0) {

        numberOfLoses++;

        document.getElementById("numLoses").innerHTML = numberOfLoses;

        gameStart();
        
    }
    
}

gameStart();


