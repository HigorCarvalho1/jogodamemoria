import * as variaveis from "./variaveis.js"
let contadorDeClicks = 0
let fotoDeFundo = []
let evento1 =[]
let evento2 =[]
let escondecarta = []



// registerControls()
export function events (){

    variaveis.buttonMusic.addEventListener('click', ()=>{
        variaveis.music.pause()
        variaveis.buttonMusic.classList.toggle('not')
        variaveis.buttonMusic2.classList.toggle('not')
    })
    variaveis.buttonMusic2.addEventListener('click', ()=>{
        variaveis.music.play()
        variaveis.buttonMusic2.classList.toggle('not')
        variaveis.buttonMusic.classList.toggle('not')
    })
    variaveis.button2.addEventListener('click', ()=>{
        variaveis.buttonPressAudio.play()
            variaveis.main.classList.remove('not')
            variaveis.fundo.classList.add('not')
            fotoDeFundo = []
            variaveis.music.pause()
    
            setTimeout(inicio,2000)
    })
    document.addEventListener('keydown', function(event) {
        // Exibe o código da tecla
        console.log('Código da tecla:', event.keyCode);
        console.log('Nome da tecla:', event.key);
      })
}
export function jogo (){

    window.addEventListener('load', () => {
    
            variaveis.linha.addEventListener('click', (event) => {
                contadorDeClicks++
                if(contadorDeClicks == 1){
                   evento1.push(event.target.dataset.action)
                   fotoDeFundo.push(event.target.dataset.action)
                    if(evento1[0] == undefined){
                        contadorDeClicks = 0
                        evento1 = []
                        fotoDeFundo = []
                    }
                    }else if(contadorDeClicks == 2){
                       evento2.push(event.target.dataset.action)
                       fotoDeFundo.push(event.target.dataset.action)
                        if(evento2[0] == undefined){
                           contadorDeClicks = 0
                            escondecarta[0].classList.remove('light')
                            evento1 = []
                            evento2 = []
                            fotoDeFundo.splice(-2,2)
                        }
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
                     setTimeout(planoDeFundo, 2000)
                }) 
            
        }
    )
}
export function eventosCartas(){
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
    hack()
}
function virarCarta1(){
    variaveis.int1.addEventListener('click', ()=>{
        variaveis.int1.classList.toggle('light')
        escondecarta.push(variaveis.int1)
        variaveis.buttonPressAudio.play()
    })
}
function virarCarta11(){
    variaveis.int11.addEventListener('click', ()=>{
        variaveis.int11.classList.toggle('light')
        escondecarta.push(variaveis.int11)
        variaveis.buttonPressAudio.play()
    })
}
function virarCarta2(){
    variaveis.int2.addEventListener('click', ()=>{
        variaveis.int2.classList.toggle('light')
        escondecarta.push(variaveis.int2)
        variaveis.buttonPressAudio.play()
        
    })
}
function virarCarta22(){
    variaveis.int22.addEventListener('click', ()=>{
        variaveis.int22.classList.toggle('light')
        escondecarta.push(variaveis.int22)
        variaveis.buttonPressAudio.play()
        
    })
}
function virarCarta3(){
    variaveis.int3.addEventListener('click', ()=>{
        variaveis.int3.classList.toggle('light')
        escondecarta.push(variaveis.int3)
        variaveis.buttonPressAudio.play()
        
    })
}
function virarCarta33(){
    variaveis.int33.addEventListener('click', ()=>{
        variaveis.int33.classList.toggle('light')
        escondecarta.push(variaveis.int33)
        variaveis.buttonPressAudio.play()
        
    })
}

function virarCarta4(){
    variaveis.int4.addEventListener('click', ()=>{
        variaveis.int4.classList.toggle('light')
        escondecarta.push(variaveis.int4)
        variaveis.buttonPressAudio.play()
       
    })
}
function virarCarta44(){
    variaveis.int44.addEventListener('click', ()=>{
        variaveis.int44.classList.toggle('light')
        escondecarta.push(variaveis.int44)
        variaveis.buttonPressAudio.play()
        
    })
}
function virarCarta5(){
    variaveis.int5.addEventListener('click', ()=>{
        variaveis.int5.classList.toggle('light')
        escondecarta.push(variaveis.int5)
        variaveis.buttonPressAudio.play()
       
    })
}
function virarCarta55(){
    variaveis.int55.addEventListener('click', ()=>{
        variaveis.int55.classList.toggle('light')
        escondecarta.push(variaveis.int55)
        variaveis.buttonPressAudio.play()
        
    })
}
function virarCarta6(){
    variaveis.int6.addEventListener('click', ()=>{
       variaveis.int6.classList.toggle('light')
       escondecarta.push(variaveis.int6)
       variaveis.buttonPressAudio.play()
       
    })
}
function virarCarta66(){
    variaveis.int66.addEventListener('click', ()=>{
        variaveis.int66.classList.toggle('light')
        escondecarta.push(variaveis.int66)
        variaveis.buttonPressAudio.play()
        
    })
}
function virarCarta7(){
    variaveis.int7.addEventListener('click', ()=>{
        variaveis.int7.classList.toggle('light')
        escondecarta.push(variaveis.int7)
        variaveis.buttonPressAudio.play()
       
    })
}
function virarCarta77(){
    variaveis.int77.addEventListener('click', ()=>{
        variaveis.int77.classList.toggle('light')
        escondecarta.push(variaveis.int77)
        variaveis.buttonPressAudio.play()
        
    })
}
function escondendocarta(){
    escondecarta[0].classList.remove('light')
    escondecarta[1].classList.remove('light')
    escondecarta = []
}
export function recomeçar(){

    variaveis.button.addEventListener('click', ()=>{
        variaveis.buttonPressAudio.play()
        variaveis.int1.classList.remove('light')
        variaveis.int11.classList.remove('light')
        variaveis.int2.classList.remove('light')
        variaveis.int22.classList.remove('light')
        variaveis.int3.classList.remove('light')
        variaveis.int33.classList.remove('light')
        variaveis.int4.classList.remove('light')
        variaveis.int44.classList.remove('light')
        variaveis.int5.classList.remove('light')
        variaveis.int55.classList.remove('light')
        variaveis.int6.classList.remove('light')
        variaveis.int66.classList.remove('light')
        variaveis.int7.classList.remove('light')
        variaveis.int77.classList.remove('light')
        atribuindoImagens()

        fotoDeFundo = []
        evento1 = []
        evento2 = []
        escondecarta = []
        contadorDeClicks = 0
       })
}
function planoDeFundo(){
    
    if(fotoDeFundo.length == 14){
        variaveis.main.classList.add('not')
        variaveis.fundo.classList.remove('not')
        variaveis.music.currentTime = 110
        variaveis.music.play()
      }
    
}
 export function inicio(){
        variaveis.int1.classList.remove('light')
        variaveis.int11.classList.remove('light')
        variaveis.int2.classList.remove('light')
        variaveis.int22.classList.remove('light')
        variaveis.int3.classList.remove('light')
        variaveis.int33.classList.remove('light')
        variaveis.int4.classList.remove('light')
        variaveis.int44.classList.remove('light')
        variaveis.int5.classList.remove('light')
        variaveis.int55.classList.remove('light')
        variaveis.int6.classList.remove('light')
        variaveis.int66.classList.remove('light')
        variaveis.int7.classList.remove('light')
        variaveis.int77.classList.remove('light')
        

}
function shuffleArray(array, callback) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];

        
        }
        callback()
  }

  
 export function atribuindoImagens(){
    shuffleArray(variaveis.imagens, ()=>{
        document.querySelector('.img1 ').src = variaveis.imagens[0]
        document.querySelector('.img11').src = variaveis.imagens[0]
        document.querySelector('.img2').src = variaveis.imagens[1]
        document.querySelector('.img22').src = variaveis.imagens[1]
        document.querySelector('.img3').src = variaveis.imagens[2]
        document.querySelector('.img33').src = variaveis.imagens[2]
        document.querySelector('.img4').src = variaveis.imagens[3]
        document.querySelector('.img44').src = variaveis.imagens[3]
        document.querySelector('.img5').src = variaveis.imagens[4]
        document.querySelector('.img55').src = variaveis.imagens[4]
        document.querySelector('.img6').src = variaveis.imagens[5]
        document.querySelector('.img66').src = variaveis.imagens[5]
        document.querySelector('.img7').src = variaveis.imagens[6]
        document.querySelector('.img77').src = variaveis.imagens[6]

    })
  }
  export function hack (){
    document.addEventListener('keydown', (event)=>{
        if(event.key === "Escape" || event.keyCode === 27){
            variaveis.main.classList.add('not')
            variaveis.fundo.classList.remove('not')
            variaveis.music.currentTime = 110
            variaveis.music.play()
        }
    })
    document.addEventListener('keydown', (event)=>{
      if(event.key === "F2"){
          variaveis.int1.classList.add('light')
          variaveis.int11.classList.add('light')
          variaveis.int2.classList.add('light')
          variaveis.int22.classList.add('light')
          variaveis.int3.classList.add('light')
          variaveis.int33.classList.add('light')
          variaveis.int4.classList.add('light')
          variaveis.int44.classList.add('light')
          variaveis.int5.classList.add('light')
          variaveis.int55.classList.add('light')
          variaveis.int6.classList.add('light')
          variaveis.int66.classList.add('light')
          variaveis.int7.classList.add('light')
          variaveis.int77.classList.add('light')
      }
    })
    document.addEventListener('keydown', (event)=>{
        if(event.key === "F4"){
            inicio()
        }
    })
}

  // esse codigo mostra  os nomes e os codigos da tecla pressionada 