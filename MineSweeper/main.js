var tabla = []
var redovi = 8;
var kolone = 8;
var brojMina  = 10
var lokacijaMina = [];
var zastavica = false;
var gameOver = false;


window.onload = function(){
    startGame()
    
}

function bombLocation(){
    let ostatakMina= brojMina  
    while(ostatakMina > 0){
        let i = Math.floor(Math.random() * redovi)
        let j = Math.floor(Math.random() * kolone)
        let id = i.toString() + '-' + j.toString()
        if(!lokacijaMina.includes(id)){
            lokacijaMina.push(id);
            ostatakMina -= 1
        }
    }
}
function bombReveal(){
    for(let i=0;i<redovi;i++){
        for(let j=0;j<kolone;j++){
            let polje = tabla[i][j]
            if(lokacijaMina.includes(polje.id)){
                polje.innerText = "💣"
                polje.style.backgroundColor = "red"
            }
        }
        
    }
    
}
function reset() {
    const playAgainBtn = document.getElementById('play-again');
    playAgainBtn.removeEventListener('click', resetGame); // Uklanjanje prethodnog listener-a
    playAgainBtn.addEventListener('click', resetGame);
}
function resetGame(){
        document.getElementById('board').innerHTML = ''
        tabla = []
        lokacijaMina = []
        gameOver = false;
        startGame()
        
}

function startGame(){
    document.getElementById('mines-count').innerText = brojMina
    document.getElementById('flag-button').addEventListener('click',flagToggle)
    
    bombLocation()
    for(let i=0; i<redovi; i++){
        var red = []
        for(let j=0; j<kolone; j++){
            let polje = document.createElement('div');
            polje.id = i.toString() + '-' + j.toString()
            polje.addEventListener('click',clickTile)
            document.getElementById('board').append(polje)
            red.push(polje)
        }
        tabla.push(red)
    }
    reset()
}

function flagToggle(){
    if(zastavica){
        zastavica = false 
        document.getElementById('flag-button').style.backgroundColor = 'lightgray'
    }else{
        zastavica = true;
        document.getElementById('flag-button').style.backgroundColor = 'darkgray'

    }
}

function clickTile(){
    if (gameOver) return;
    let polje = this
    if(zastavica){
        if(polje.innerText == ""){
            polje.innerText = "🚩"
        }else if(polje.innerText == "🚩"){
            polje.innerText = ""
        }
    }if(lokacijaMina.includes(polje.id)){
        bombReveal()
        gameOver = true;
        return;
    }
    let split = polje.id.split('-')
   let i = parseInt(split[0])
    j = parseInt(split[1])
    showTile(i,j)
}

    function showTile(i,j){
        if(i<0 || i>=redovi || j<0 || j >= kolone){
            return;
        }
         if(tabla[i][j].classList.contains('tile-clicked')){
            return;
        }
        tabla[i][j].classList.add('tile-clicked')
        let mineFound = 0

        mineFound += revealTile(i-1,j-1)
        mineFound += revealTile(i-1,j)
        mineFound += revealTile(i-1,j+1)

        mineFound += revealTile(i,j-1)
        mineFound += revealTile(i,j-1)

        mineFound += revealTile(i+1,j-1)
        mineFound += revealTile(i+1,j)
        mineFound += revealTile(i+1,j+1)
        if(mineFound > 0){
            tabla[i][j].innerText = mineFound
            tabla[i][j].classList.add('x' + mineFound.toString())
        }else{
            showTile(i-1,j-1)
            showTile(i-1,j)
            showTile(i-1,j+1)

            showTile(i,j-1)
            showTile(i,j+1)

            showTile(i+1,j-1)
            showTile(i+1,j)
            showTile(i+1,j+1)
        }
    }
    function revealTile(i,j){
        if(i < 0 || i>=redovi || j < 0 || j >= kolone){
            return 0; 
        }else if(lokacijaMina.includes(i.toString() + "-" + j.toString())){
            return 1;
        }
        return 0;
    }


  























 