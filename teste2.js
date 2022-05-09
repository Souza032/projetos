 const prompt = require (`prompt-sync`)();



//  const personagem1 = {
//     nome: `thor`,
//     força: 100,
//     vida: 100,
//     magia: 100,
//     AumentoDeForça : function () {
//          this.força = this.força + 20
//     },
//     ReduçaoDeForça : function () {
//         this.força = this.força - 20
//     },
//     AumentoDevida : function () {
//         this.vida = this.vida + 20
//    },
//    ReduçaoDevida : function () {
//        this.vida = this.vida - 20
//    },
//    AumentoDemagia : function () {
//     this.magia = this.magia + 20
// },
// ReduçaoDemagia : function () {
//    this.magia = this.magia - 20
// },
// };

// function força(s = prompt()) {
//     if (s == 2) {
//         personagem1.ReduçaoDeForça();
//     } else { personagem1.AumentoDeForça(); };

//     console.log(personagem1.força);
// };

// function vida(s = prompt(``)) {
//     if (s == 2) {
//         personagem1.ReduçaoDevida();
//     } else { personagem1.AumentoDevida(); }

//     console.log(personagem1.vida);
// };

// function magia(s = prompt(``)) {
//     if (s == 2) {
//         personagem1.ReduçaoDemagia();
//     } else { personagem1.AumentoDemagia(); }

//     console.log(personagem1.magia);
// };





// async function deslocamento1 (deslocamento){

//         deslocamento = Math.floor(Math.random()*20)

//         console.log(deslocamento);
//         if (deslocamento < 10 ){
//             console.log(` Você sofreu um dano de um inimigo!! 
//  Deseja enfrentar-lo ou retornar ?? `)
//             let escolha  = console.log(` \nDigite R para retornar ou
//  P para enfrentarlo usando magia`)
//             prompt().toLocaleUpperCase()
//             if  (escolha == `P`){ 
//                 console.log(`jajjs`);


            
//             }
//         }else {

//             console.log(`
            
//             `);
//         }
// }

// deslocamento1(


// )

// let probabilidade = []

// function pb () {
    
//     return probabilidade.push(Math.floor(Math.random()*20))
// }

// pb()
// while (probabilidade < 3) {
//     pb()
//     console.log (probabilidade)}


// } 
// funçao de deslocamento2 :


// async function deslocamento2 (deslocamento){
//     deslocamento = Math.floor(Math.random()*20)
//     if (deslocamento < 15 ){
//         console.log(` 
// [vida - 20]
// Você sofreu um dano de um inimigo!! 
// Deseja enfrentar-lo ou retornar ?? `)
//         console.log(` \nDigite R para retornar ou
// P para enfrentarlo usando magia`)
//  let escolha  =  prompt().toLocaleUpperCase()
//     if  (escolha == `P`)
//          { console.log(`[magia - 20]`
//          )
//         magia(2)
//         console.log (personagem1.magia)
//         pb()
//         }  if (probabilidade >= 5){console.log(`o seu inimigo ainda esta vivo, ataque novamente ou tente fugir!!`);}
//     ;}  
    
    
    
    
    
    
    
    
//     else {
//         console.log(` Voce conseguiu avançar sem nenhum dano! 
//         `);
//     }  
// } 








const prompt = require(`prompt-sync`)();
async function main () {
    

const personagem1 = {
    nome: `THOR`,
    kroner:  100,
    vida: 100,
    magia: 100,
    AumentoDekroner : function () {
         this.kroner = this.kroner + 20
    },
    ReduçaoDekroner : function () {
        this.kroner = this.kroner - 20
    },
    AumentoDevida : function () {
        this.vida = this.vida + 20
   },
   ReduçaoDevida : function () {
       this.vida = this.vida - 20
   },
   AumentoDemagia : function () {
    this.magia = this.magia + 20
},
ReduçaoDemagia : function () {
   this.magia = this.magia - 20
},
};

function kroner(s = prompt()) {
    if (s == 2) {
        personagem1.ReduçaoDekroner();
    } else { personagem1.AumentoDekroner(); };

    // console.log(personagem1.kroner);
};

function vida(s = prompt(``)) {
    if (s == 2) {
        personagem1.ReduçaoDevida();
    } else { personagem1.AumentoDevida(); }

    // console.log(personagem1.vida);
};

function magia(s = prompt(``)) {
    if (s == 2) {
        personagem1.ReduçaoDemagia();
    } else { personagem1.AumentoDemagia(); }

    //console.log(personagem1.magia);
};

// objeto para personagens de batalha:

let inimgos ={

    criaturaDeHell : `criatura de Hell` ,
    Escanor : `Escanor` ,
    Baldor : `Baldor` ,
    





} 





// variavel de tempo 
let dias = Math.floor(Math.random()*11)
async function tempo () {
    

   return dias = dias * 2
}

// funçao de status 
 async function status(status) {
    console.log(`deseja verificar o status do personagem ? [digite "exibir"]`)
    status = prompt().toLowerCase()
    if (status == `exibir`) {
        console.log(`Status "THOR" -->
vida : ${personagem1.vida}
kroner : ${personagem1.kroner}  
magia : ${personagem1.magia}`);
    }else {}
};


// funoçao para probabilidade:
let probabilidade = []

function pb () {
    return probabilidade.push(Math.floor(Math.random()*20))
}

let hd = []

 async function batalha1 (inimigo){   

    console.log( `\n Seu inimigo é ${inimigo} digite P para atacar ou F para fugir :`)
   let escolha = prompt().toUpperCase();
   
//    golpe = Math.floor(Math.random()*2)
//     if (golpe < 50){console.log (`Você sofreu um golpe forte `)
//     personagem1.vida = personagem1.vida  -50
//     console.log (`vida = ${personagem1.vida}`)
// } if (golpe > 10) {
//     console.log (`Você sofreu um golpe fraco `)
//     personagem1.vida = personagem1.vida -20
//     console.log (`vida = ` + personagem1.vida)}
            if (escolha == `F`){ console.log(`Você fugiu !!`)}


   do if  (escolha == `P`)
   { console.log `magia - 20`
  magia(2)
  console.log(`o seu inimigo ainda esta vivo, ataque novamente ou tente fugir!!`)
  let escolha  =  prompt().toUpperCase()
  pb() 

  if (personagem1.vida <= 0) {console.log(
    `                   vc morreu!!`)}

    
    console.log(`Você venceu a batalha contra ${inimigo}`)
  return escolha == `P`}
  
         while (probabilidade > 5){
           
        }

     
 } 



// funçao de deslocamento1 :
async function deslocamento1 (deslocamento){
    deslocamento = Math.floor(Math.random()*20)
    if (deslocamento < 55 ){
        vida(2)
        console.log `vida - 20`

        console.log (`\nVocê sofreu um dano de uma das criaturas de Hell!! 
Deseja enfrentar-la ou fugir ?? `)

        console.log(` \nDigite F para fugir ou
P para enfrentar-la usando magia`)

 let escolha  =  prompt().toUpperCase()
 while (escolha != `F` && escolha != `P`)  {    
      console.log(`vc inseriu algo diferente das opções apresentadas, por favor tente novamente :`)
      escolha = prompt().toUpperCase()}

        if ( escolha == `F`) { console.log(`Voce fugiu !!`)
            return hd.push(-1)}
 
        do if  (escolha == `P`)
         { console.log `magia - 20`
        magia(2)
        console.log(`o seu inimigo ainda esta vivo, ataque novamente ou tente fugir!!`)
        let escolha  =  prompt().toUpperCase()
        pb() 
                 if ( escolha == `F`) { console.log (`Voce fugiu !!`)
       break
        }
        
              }  while (probabilidade >= 5){}     
              }  else {
                console.log(` Voce conseguiu avançar sem nenhum dano! 
                `)
                 return hd++}
     

               
    
         
    }  
    
// função de compra :  
async function compra(compra){
console.log(`Ao chegar em midgard THOR encontra seu antigo aliado Baldor que oferece a ele algumas de suas poções de recuperação: `);
   console.log(`                   
POÇÃO #Raio do Trovão = full status [- 80 kroners]
POÇÃO #yggdrazil = +20 vida [- 40 kroners]
POÇÃO #king OF The Gods = full status +120 [- 120 Kroners]`)
console.log(`\nDeseja trocar seus KRONERs ? 
[1] Raio do Trovão
[2] yggdrazil
[3] king OF The Gods
[4] nenhuma`)
compra = +prompt()

         
               if (compra == 1){ console.log `kroner - 80 `;
            personagem1.kroner = 20
            personagem1.magia = 100 
            personagem1.vida = 100 } 

              if (compra == 2){ console.log `kroner - 40 `;
                personagem1.kroner = 60
                personagem1.vida = 100 } 

                 if (compra == 3){ 
                    console.log(`Você não tem essa quantidade de KRONERs agora !! deseja iniciar um desafio para ganhar 20 kroners???`);
                    let res = prompt( `SIM ou NÃO: ` ).toUpperCase()
                    if (res == `SIM`){ 
                        batalha1(inimgos.Escanor)
                
                        if ( escolha ==`P`){
                        console.log `kroner +20 `
                        console.log(`compra efetuada \n`)
                        personagem1.kroner = 0
                        personagem1.magia = 120 
                        personagem1.vida = 120}
                        else { console.log(`Você fugiu !!`);}
                        
                    }
                }
                
                if (compra == 4) { } 
while (compra != 1 && compra != 2 && compra !== 3 && compra != 4){
    console.log(`vc inseriu algo diferente dos numereos de compra, por favor tente novamente :`);
    compra = +prompt()
}}






// exibiçao do console -> "oq ta acontecendo : "
console.clear()
// introdução
console.log (`\n"BEM VINDO(A) A SUA NOVA AVENTURA EM HELL"`)

console.log (`


TEXTO

`)

console.log(`... ${personagem1.nome} acorda em hell dias depois da batalha com seu irmão BALDOR`)
console.log(`tecle ENTER para continuar`) + prompt(``)
console.clear()

console.log(`Status "THOR" -->
vida : ${personagem1.vida}
kroner : ${personagem1.kroner}  
magia : ${personagem1.magia}`);
console.log()

// Primeira parte da historia : 
console.log(` \nTHOR em busca de vigança contra seu irmão inicia sua jornada para retornar a Asgard. Há um longo caminho a sua esquerda, claro e aberto, deseja seguir por ele ou prefere seguir pelo caminho escuro a sua direita?  
`);
console.log ` A = esquerda / D = direita`;

let lk =  prompt(``).toUpperCase(); 
while (lk != `A` && lk != `D`) {console.log(` Você iseriu uma tecla que não correspode a uma direção! Tente Novamente :\n  `)
console.log ` A = esquerda / D = direita`;
lk = prompt().toUpperCase();};


// variaçao de deslocamento 
                if ( lk == `A`){
                    deslocamento1()
                    status()
                    prompt(`\ntecle enter para continuar`)
                    console.clear()
                        console.log()
                        tempo()
                        console.log(`ja se passaram : ${dias} dias \n`)
                        
                }
                else if (lk == `D`){
                    deslocamento1()
                        status()
                        prompt(`tecle enter para continuar`)
                    console.clear()
                        console.log()
                        tempo()
                        console.log(`ja se passaram : ${dias} dias \n`)
                };
// estagio 2 : 
if (hd >= 1){
console.log `Após avançar sem nenhum dano Thor encontra uma passagem que o levará.....`
prompt()
console.log (`\nTHOR chega a midgard!!! \n`)
    compra()
        console.log();
                status()
                prompt(`\ntecle enter para continuar: `)
                console.clear()
}
else if (hd >= -1 ){
    console.log `Após sofrer dano Thor avança e encontra uma passagem que o levará.....`
    prompt()
    console.log (`\nTHOR chega a midgard!!! \n`)
        compra()
            console.log();
                     status()
                     prompt(`\ntecle enter para continuar: `)
                     console.clear()

}

//estagio 3 
tempo()
console.log ` Ao continuar sua jornada THOR consegue chegar a passagem de volta para Asgard...`
console.log(`\nja se passaram : ${dias} dias \n`)

console.log(` Apos continuar sua jornada thor chega aos portões de Asgard \n`)
console.log(` Baldor convoca os guerreiros de hell para impedir sua entrada\n`)
batalha1(inimgos.criaturaDeHell)






if (personagem1.vida <= 0) {console.log(
`                   vc morreu!!`)

}
}
main()

















