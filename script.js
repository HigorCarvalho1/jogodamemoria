const linha = document.querySelector('.linha')
const int1 = document.querySelector('.int1')
const int2 = document.querySelector('.int2')
const int3 = document.querySelector('.int3')
const int4 = document.querySelector('.int4')
const int5 = document.querySelector('.int5')
const int6 = document.querySelector('.int6')
const int7 = document.querySelector('.int7')

const int11 = document.querySelector('.int11')
const int22= document.querySelector('.int22')
const int33 = document.querySelector('.int33')
const int44 = document.querySelector('.int44')
const int55 = document.querySelector('.int55')
const int66 = document.querySelector('.int66')
const int77 = document.querySelector('.int77')
const main = document.querySelector('.main')
const fundo = document.querySelector('.fundo')

const buttonPressAudio = new Audio('./audios/button.wav')
const music = new Audio('./audios/music.mp3')
music.loop

const button = document.querySelector('.button')
const buttonMusic = document.querySelector('.music')
const buttonMusic2 = document.querySelector('.music2')
const button2 = document.querySelector('.button2')

let fotoDeFundo = []
let contadorDeClicks = 0
let evento1 =[]
let evento2 =[]
let escondecarta = []
setTimeout(inicio,2000)
virarCarta1()
virarCarta11()
virarCarta2()
virarCarta22()
virarCarta3()
virarCarta33()
virarCarta4()
virarCarta44()
virarCarta5()
virarCarta55()
virarCarta6()
virarCarta66()
virarCarta7()
virarCarta77()
recomeçar()

registerControls()
buttonMusic.addEventListener('click', ()=>{
    music.pause()
    buttonMusic.classList.toggle('not')
    buttonMusic2.classList.toggle('not')
})
buttonMusic2.addEventListener('click', ()=>{
    music.play()
    buttonMusic2.classList.toggle('not')
    buttonMusic.classList.toggle('not')
})
button2.addEventListener('click', ()=>{
    buttonPressAudio.play()
        main.classList.remove('not')
        fundo.classList.add('not')
        fotoDeFundo = []
        music.pause()

        setTimeout(inicio,2000)
})


function registerControls() {
    linha.addEventListener('click', (event) => {
        contadorDeClicks++
        console.log(contadorDeClicks)
        if(contadorDeClicks == 1){
           evento1.push(event.target.dataset.action)
           fotoDeFundo.push(event.target.dataset.action)
            console.log(evento1)
            console.log(evento2)
            console.log(escondecarta)
            }else if(contadorDeClicks == 2){
                evento2.push(event.target.dataset.action)
                fotoDeFundo.push(event.target.dataset.action)
                console.log(evento1)
                console.log(evento2)
                console.log(escondecarta)
                if(evento1[0] === evento2[0]){
                    console.log('deu certo')
                    evento1 = []
                    evento2 = []
                    contadorDeClicks = 0
                    escondecarta = []

                }else if(evento1[0] !== evento2[0]){
                    console.log('deu super certo')
                    evento1 = []
                    evento2 = []
                    contadorDeClicks = 0

                    setTimeout(escondendocarta, 700)  
                    fotoDeFundo.splice(-2,2)

                    

                    
                }
             }
             setTimeout(planoDeFundo,3000)
        }) 
    
}
function virarCarta1(){
    int1.addEventListener('click', ()=>{
        int1.classList.toggle('light')
        escondecarta.push(int1)
        buttonPressAudio.play()
    })
}
function virarCarta11(){
    int11.addEventListener('click', ()=>{
        int11.classList.toggle('light')
        escondecarta.push(int11)
        buttonPressAudio.play()
    })
}
function virarCarta2(){
    int2.addEventListener('click', ()=>{
        int2.classList.toggle('light')
        escondecarta.push(int2)
        buttonPressAudio.play()
        
    })
}
function virarCarta22(){
    int22.addEventListener('click', ()=>{
        int22.classList.toggle('light')
        escondecarta.push(int22)
        buttonPressAudio.play()
        
    })
}
function virarCarta3(){
    int3.addEventListener('click', ()=>{
        int3.classList.toggle('light')
        escondecarta.push(int3)
        buttonPressAudio.play()
        
    })
}
function virarCarta33(){
    int33.addEventListener('click', ()=>{
        int33.classList.toggle('light')
        escondecarta.push(int33)
        buttonPressAudio.play()
        
    })
}

function virarCarta4(){
    int4.addEventListener('click', ()=>{
        int4.classList.toggle('light')
        escondecarta.push(int4)
        buttonPressAudio.play()
       
    })
}
function virarCarta44(){
    int44.addEventListener('click', ()=>{
        int44.classList.toggle('light')
        escondecarta.push(int44)
        buttonPressAudio.play()
        
    })
}
function virarCarta5(){
    int5.addEventListener('click', ()=>{
        int5.classList.toggle('light')
        escondecarta.push(int5)
        buttonPressAudio.play()
       
    })
}
function virarCarta55(){
    int55.addEventListener('click', ()=>{
        int55.classList.toggle('light')
        escondecarta.push(int55)
        buttonPressAudio.play()
        
    })
}
function virarCarta6(){
    int6.addEventListener('click', ()=>{
       int6.classList.toggle('light')
       escondecarta.push(int6)
       buttonPressAudio.play()
       
    })
}
function virarCarta66(){
    int66.addEventListener('click', ()=>{
        int66.classList.toggle('light')
        escondecarta.push(int66)
        buttonPressAudio.play()
        
    })
}
function virarCarta7(){
    int7.addEventListener('click', ()=>{
        int7.classList.toggle('light')
        escondecarta.push(int7)
        buttonPressAudio.play()
       
    })
}
function virarCarta77(){
    int77.addEventListener('click', ()=>{
        int77.classList.toggle('light')
        escondecarta.push(int77)
        buttonPressAudio.play()
        
    })
}
function escondendocarta(){
    escondecarta[0].classList.remove('light')
    escondecarta[1].classList.remove('light')
    escondecarta = []
}
function recomeçar(){
    button.addEventListener('click', ()=>{
        buttonPressAudio.play()
        int1.classList.remove('light')
        int11.classList.remove('light')
        int2.classList.remove('light')
        int22.classList.remove('light')
        int3.classList.remove('light')
        int33.classList.remove('light')
        int4.classList.remove('light')
        int44.classList.remove('light')
        int5.classList.remove('light')
        int55.classList.remove('light')
        int6.classList.remove('light')
        int66.classList.remove('light')
        int7.classList.remove('light')
        int77.classList.remove('light')
        main.classList.remove('not')
        fundo.classList.add('not')
        fotoDeFundo = []
        music.pause()
        
    })
}
function planoDeFundo(){
    if(fotoDeFundo.length == 14){
        main.classList.add('not')
        fundo.classList.remove('not')
        music.play()
      }
}
function inicio(){
    int1.classList.remove('light')
        int11.classList.remove('light')
        int2.classList.remove('light')
        int22.classList.remove('light')
        int3.classList.remove('light')
        int33.classList.remove('light')
        int4.classList.remove('light')
        int44.classList.remove('light')
        int5.classList.remove('light')
        int55.classList.remove('light')
        int6.classList.remove('light')
        int66.classList.remove('light')
        int7.classList.remove('light')
        int77.classList.remove('light')

}

    
        //lista de imagens
// let img1 = document.querySelector('.img1')
// let img2 = document.querySelector('.img2')
// let img3 = document.querySelector('.img3')
// let img4 = document.querySelector('.img4')
// let images = [
//     img1,
//     img2,
//     img3,
//     img4,
// ]
// let flippedCards =[];
// let matchedCards = []
// let gamecontainer = document.querySelector('.linha')
// let resultElement = document.querySelector('#result')

//  function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const j = Math.floor(Math.random() * (i + 1))
//         const temp = array[i]
//         array[i]= array[j]
//         array[j] = temp
//     }
// }

//  function startgame(){
//     flippedCards = [];
//     matchedCards = [];
//     resultElement.innerText=``
    
//     shuffle(images)

//     gamecontainer.innerHTML =``

//     images.forEach((image, index) =>{
//         const card = document.createElement('div')
//         card.className = 'card'
//         card.style.backgroundImage = `url(${image})`
//         card.setAttribute('data-index', index);
//         card.onclick = flipcard
//         gamecontainer.appendChild(card);
//     })
// }

//  function flipcard(){
//     const card = this
//     if(flippedCards.length<2 && !flippedCards.includes(card)){
//         flippedCards.push(card)
//         card.style.backgroundImage = `url(${images[parseInt(card.getAttribute('data-index'))]})`
    
//     if(flippedCards.length===2){
//         setTimeout(checkmatch, 1000)
//     }
// }
// }

//  function checkmatch(){
//     const [card1, card2] = flippedCards

//     if(card1.style.backgroundImage === card2.style.backgroundImage){
//         matchedCards.push(card1, card2);
        
//     }
//     if(matchedCards.length === images.length){
//         resultElement.innerText = "Parabéns! Você encontrou todas as imagens"
//     }
//     else{
//         card1.style.backgroundImage = ""
//         card2.style.backgroundImage = ""
//     }
//     flippedCards = []
// }
// function restartGame() {
//     startgame();
// }
// function restart(){
//     const restart = document.querySelector('.restart')
//     restart.addEventListener('click', restartGame())
// }
// restart()

// document.addEventListener('DOMContentLoaded', startgame)
