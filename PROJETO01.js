                                    //PROJETO 01###
                                

console.clear()
const prompt = require('prompt-sync')();
console.log(`                            ##O CAMPONES      \n`)
console.log('Nas famílias camponesas, todos trabalhavam muito. Além de cuidar das terras do senhor do feudo, homens, mulheres e crianças faziam à colheita, moíam os grãos e construíam pontes, estradas, estábulos e moinhos. Ao mesmo tempo, cultivavam seus lotes e cuidavam dos animais e dos trabalhos artesanais e domésticos. Um jovem camponês se destacava na arte da guerra, e vivia a guerrear com os feudos vizinhos em busca de fama e gloria. Certo dia o senhor feudal de sua vila o contratou para resgatar sua filha que havia sido sequestrada por um de seus maiores inimigos Camponês parte em busca da princesa, durante sua aventura ele se depara com diversos inimigos, mas seus adversários não são páreos para o jovem camponês obstinado em sua missão. Após dias de percurso ele encontra a torre a qual a princesa se encontra, ao chegar na torre lá estava seu maior inimigo, seu irmão que havia ido para outa vila e jurado vingança contra seu irmão por inveja de suas conquistas. Os dois travam uma batalha, o jovem camponês ao se encontrar em desespero de perder a batalha contra seu inimigo se lembra de quando lutavam quando jovens e seu pai lhe dizia que algum dia seria necessário alcançar todo o potencial para evitar a morte. Ao receber um golpe de seu irmão, ele suspira e ri, despertando um poder oculto que o faz não sentir os golpes de seu irmão. No fim de sua batalha com seu maior inimigo o camponês se consagra vitorioso, e retorna a vila. Ao chegar ele diz ao senhor feudal "Essa foi minha ultima jornada..."'
)
prompt(`\ntecle enter para continuar `)
console.clear()
let perguntas = [

prompt  (`voce percorreu sua jornada sem sofrer danos?  `).toLowerCase(),

prompt (`voce matou todos os inimigos?  `).toLowerCase(),

prompt (`voce se lembrou de resgatar a princesa?    `).toLowerCase(),

prompt (`voce liberou todo seu potencial durante sua jornada?   `).toLowerCase(),

prompt (`voce encontrou seu arqui inimigo?  `).toLowerCase()]; 


let respostas = perguntas

console.clear()
console.log()



{   
    if (respostas[0,1,2,3,4]!==`sim`|| respostas[0,1,2,3,4]!==`nao`){

    while 
        (respostas[0,1,2,3,4]!==`sim`&& respostas[0,1,2,3,4]!==`nao`){ 
        console.log('\n\n')
        console.log (`  Você inseriu uma resposta diferente de [sim]/[nao],
        por favor tente novamente.\n\n`.toUpperCase())
        console.log('\n')
        prompt(console.log ('tecle ENTER para recomeçar'))
        let perguntas = [
    
            prompt  (`voce percorreu sua jornada sem sofrer danos?  `).toLowerCase(),
            
            prompt (`voce matou todos os inimigos?  `).toLowerCase(),
            
            prompt (`voce se lembrou de resgatar a princesa?    `).toLowerCase(),
            
            prompt (`voce liberou todo seu potencial durante sua jornada?   `).toLowerCase(),
            
            prompt (`voce encontrou seu arqui inimigo?  `).toLowerCase()]
         console.clear()
            
            respostas=perguntas
    
    
            if(respostas[0]==='nao'){
        
                for (i=0; i<respostas.length ; i++ ){
            
            }
                if (respostas[1]==`sim`){--i}
                if (respostas[2]==`sim`){--i}
                if (respostas[3]==`sim`){--i}
                if (respostas[4]==`sim`){--i}
            
            
           };
 
             if(respostas[0]==='sim'){
     
             for (i=0; i<respostas.length ; i++ ){
         
         }
             if (respostas[1]==`nao`){--i}
             if (respostas[2]==`nao`){--i}
             if (respostas[3]==`nao`){--i}
             if (respostas[4]==`nao`){--i}
         
          if (i==4){console.log(`\n     Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`)}
         else if (i==3){console.log(`\n     Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`)}
         else if (i==2){console.log(`\n     Você falha, mas ainda consegue fugir da situação.`)}
         else if (i==1){console.log(`\n     Você falha, mas ainda consegue fugir da situação.`)}
         else if (i==5){console.log(`\n     Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`)}
           


     }}}


    else if(respostas[0]==='sim'){
   
    for (i=0; i<respostas.length ; i++ ){

}
            if (respostas[1]==`nao`){--i}
            if (respostas[2]==`nao`){--i}
            if (respostas[3]==`nao`){--i}
            if (respostas[4]==`nao`){--i}


 
  
         if (i==4){console.log(`\n      Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`)}
        else if (i==3){console.log(`\n      Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`)}
        else if (i==2){console.log(`\n      Você falha, mas ainda consegue fugir da situação.`)}
        else if (i==1){console.log(`\n      Você falha, mas ainda consegue fugir da situação.`)}
        else if (respostas[0&&1&&2&&3&&4] ===`sim`){console.log(`\n     Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`)}
   
}

       if (respostas[0]==='nao'){
        for (respostas[0]==='nao'; respostas ; respostas++){
        for (i=0; i<respostas.length ; i++){
}
            if (respostas[1]==`sim`){--i}
            if (respostas[2]==`sim`){--i}
            if (respostas[3]==`sim`){--i}
            if (respostas[4]==`sim`){--i}

if (i==4){console.log(`\n           Você falha, mas ainda consegue fugir da situação.\n`)}
else if (i==3){console.log(`\n      Você falha, mas ainda consegue fugir da situação.\n`)}
else if (i==2){console.log(`\n      Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.\n`)}
else if (i==1){console.log(`\n      Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.\n`)}
else if (respostas[0&&1&&2&&3&&4] ===`nao`){console.log(`\n         Você falha miseravelmente!!\n`)}
}

}};

console.log()
console.log()
console.log()
