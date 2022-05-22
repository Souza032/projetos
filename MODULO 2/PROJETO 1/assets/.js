
const elementoSituacao = document.querySelector('#mudarHumor'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 


elementoBtn.addEventListener('click', () => {
    
    if (elementoBtn.value == 'Inicio') {
        elementoImg.src = './assets/IMG/vegetaBrigao.webp'
        elementoSituacao.innerText = ' BRIGÃO' 
        elementoBtn.value = 'segundo' 
    } else if (elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/IMG/assustado.jpg' 
        elementoSituacao.innerText = ' ASSUSTADO' 
        elementoBtn.value = 'terceiro'  
    } else { 
        elementoImg.src = './assets/IMG/VEGETA TIKTOK.jpg' 
        elementoSituacao.innerText = 'TIKTOKER' 
        elementoBtn.value = 'Inicio' 
    }
})