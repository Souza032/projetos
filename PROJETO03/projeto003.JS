
 //                                 PROJETO 003
 //                                 




const prompt = require(`prompt-sync`)();
async function main () 
{
    
//                          OBJETOS :
const personagem1 = 
{
    nome: `THOR`,
    kroner:  100,
    vida: 100,
    magia: 100,
    AumentoDekroner : function () 
    {
         this.kroner = this.kroner + 20
    },
    ReduçaoDekroner : function () 
    {
        this.kroner = this.kroner - 20
    },
    AumentoDevida : function () 
    {
        this.vida = this.vida + 20
    },
    ReduçaoDevida : function () 
   {
       this.vida = this.vida - 20
   },
    AumentoDemagia : function () 
    {   
       this.magia = this.magia + 20
    },
    ReduçaoDemagia : function () 
    {
        this.magia = this.magia - 20
    },
};

// objeto para personagens de batalha:

const inimgos =
{
    criaturaDeHell : `criatura de Hell` ,
    Escanor : `Escanor` ,
    Baldor : `Baldor` ,
} 


//                                  VARIAVEIS : 

// variavel de tempo 
let dias = 1
async function tempo () {
    while (dias!=0)

   return dias = dias * Math.floor(Math.random()*9)
}
// variavel de probabilidade
let probabilidade = Math.floor(Math.random()*20)

// variavel aleatoria
let hd = []



//                                  FUNCTIONS :

function kroner(s = prompt()) 
{
    if (s == 2) 
    {
        personagem1.ReduçaoDekroner();
    } 
        else 
        { 
            personagem1.AumentoDekroner(); 
        };
};

function vida(s = prompt()) 
{
    if (s == 2) 
    {
        personagem1.ReduçaoDevida();
    } 
        else 
        {   
            personagem1.AumentoDevida(); 
        }
};

function magia(s = prompt()) 
{
    if (s == 2) 
    {
        personagem1.ReduçaoDemagia();
    }
        else 
        { 
            personagem1.AumentoDemagia(); 
        }
};


//          funçao de status :

async function status(status) 
{
    console.log(`deseja verificar o status do personagem ? [digite "exibir"]`)
    status = prompt().toLowerCase()

    if (status == `exibir`) 
    {
        console.log(`
                    Status "THOR" -->
                    vida : ${personagem1.vida}
                    kroner : ${personagem1.kroner}  
                    magia : ${personagem1.magia}`);
    }
    else {}
};


//           funçao para probabilidade :
   pb = () => {return probabilidade = probabilidade * 3}
  



//           função de golpe do inimigo :
function golpe (Golpe) 
{
    Golpe = Math.floor(Math.random()*20)

    if (Golpe <= 5)
    {   console.log(`Voce sofreu um golpe forte!!`)
        console.log `VIDA - 35`
        personagem1.vida = personagem1.vida -35
    
            if (golpe >= 10)
            {   console.log(`Voce sofreu um golpe fraco!!`)
                console.log `VIDA - 35`
                personagem1.vida = personagem1.vida -20
            }
    }
};


//                   função de batalha 1 : 

 async function batalha1 (inimigo)
 {  
        console.log( `\n Seu inimigo é ${inimigo} digite P para atacar ou F para fugir :`)
        let escolha = prompt().toUpperCase()

        
        while (escolha != `F` && escolha != `P`)  
        {    
                console.log(`vc inseriu algo diferente das opções apresentadas, por favor tente novamente :`)
                escolha = prompt().toUpperCase()
        }
                if ( escolha ==`F`) 
                { 
                    console.log (`Voce fugiu !!`)
                    console.log (`mas foi atacado pelas costas `)
                    console.log `VIDA - 35`
                    console.log()
                    personagem1.vida = personagem1.vida - 35;
                } 

            if (escolha ==`P`)
            {
                    do if  (escolha == `P`)
                     { console.log `magia - 20`
                         magia(2)
                         golpe()
                         pb()
                         console.log(`o seu inimigo ainda esta vivo, ataque novamente ou tente fugir!!`)
                         escolha  =  prompt().toUpperCase()
                         xp = 10
                     } 
          
                        while (probabilidade <= 2){ probabilidade = pb()}
                        if (escolha !== `F`)
                        {
                            console.log(` \n Você venceu a batalha contra ${inimigo} !!\n`) 
                        }

                                    if ( escolha ==`F`) 
                                    { 
                                        console.log (`Voce fugiu !!`)
                                        console.log (`mas foi atacado pelas costas `)
                                        console.log `VIDA - 35`
                                        console.log()
                                        personagem1.vida = personagem1.vida - 35;
                                    } 
            }       
            
} ;

//                    função de batalha 2 : 

async function batalha2 (inimigo)
{  
    console.log( `\n Seu inimigo é ${inimigo} digite P para atacar ou F para fugir :`)
    let escolha = prompt().toUpperCase()

        while (escolha != `F` && escolha != `P`)  
        {    
            console.log(`vc inseriu algo diferente das opções apresentadas, por favor tente novamente :`)
            escolha = prompt().toUpperCase()
        }
            if (escolha == `F`)
            {       console.log(`Você fugiu !!\n`)
                    console.log(`BALDOR SE CONSAGRA REI DE ASGARD E VOCÊ FOI BANIDO PARA SEMPRE !!!!`)
                    prompt();
            }

                if (escolha == `P`)
                {   
                    do if  (escolha == `P`)
                    {   
                        console.log `magia - 20`
                        magia(2)
                        golpe(2)
                        pb(probabilidade*3)
                        console.log(`o seu inimigo ainda esta vivo, ataque novamente ou tente fugir!!`)
                        let escolha  =  prompt().toUpperCase()

                        if ( escolha == `F`)
                        { 
                                console.log (`\nVoce fugiu !!\n`)
                                console.log(`\nBALDOR SE CONSAGRA REI DE ASGARD E VOCÊ FOI BANIDO PARA SEMPRE !!!!\n`);
                                break
                        }
                       
                        if (escolha == `P`)
                        {
                            if (personagem1.vida > 0)  
                            {
                                console.log             `Baldor morre!`
                                console.log ()
                                console.log (`\nPARABENS !! VOCÊ CONSEGUIU VENCER A BATALHA E TODOS OS DESAFIOS DA SUA JORNADA.\n`)
                                console.log(`\n  =====>   VOCÊ É O NOVO REI DE ASGARD !!!\n`)
                                break
                            } 
                        };







                    }  
                    while (probabilidade <= 2){ probabilidade = pb()}

                    
                }

                            
                            
}



//                  funçao de deslocamento1 :

async function deslocamento1 (deslocamento)
{
    deslocamento = Math.floor(Math.random()*20)
    if (deslocamento < 55 )
    {
        vida(2)
        
        console.log (
            `\nVocê sofreu um dano de uma das criaturas de Hell!! 
            Deseja enfrentar-la ou fugir ?? `)

        console.log `VIDA - 20`

        console.log (`\n Digite SIM se quer enfrentar-la ou NAO se quer fugir: `)
        jk = prompt ().toUpperCase()

        while (jk != `SIM` && jk != `NAO`)
        {
            console.log(`vc inseriu algo diferente das opções apresentadas, por favor tente novamente :`)
            jk = prompt().toUpperCase()

        }
        if (jk == `SIM`)
        {
            batalha1(inimgos.criaturaDeHell)
            return hd.push(-1)
        }
         else {
                 console.log(` Voce conseguiu recuar sem mais danos!\n`)
                 return hd.push(1)
              }
    }

               
    
         
}  
    
//                         função de compra :  
async function compra(compra)
{
            console.log(`Ao chegar em midgard THOR encontra seu antigo aliado TYR que oferece a ele algumas de suas poções de recuperação: `);
            console.log(`                   
        POÇÃO #Raio do Trovão = full status [- 80 kroners]
        POÇÃO #yggdrazil = +20 vida [- 40 kroners]
        POÇÃO #king OF The Gods = full status +120 [- 120 Kroners]`)

            console.log(`
            \nDeseja trocar seus KRONERs ? 
            [1] Raio do Trovão
            [2] yggdrazil
            [3] king OF The Gods
            [4] nenhuma`)

        compra = +prompt()

        while ((compra !== 1 && compra !== 2 && compra !== 3 && compra !== 4))
        {
            console.log(`vc inseriu algo diferente dos numereos de compra, por favor tente novamente :`);
            compra = +prompt()

        }
            if (compra == 1)
            {   console.log `kroner - 80 `;
                console.log(`compra efetuada \n`)
                personagem1.kroner = 20
                personagem1.magia = 100 
                personagem1.vida = 100
            } 

            if (compra == 2)
            {   console.log `kroner - 40 `;
                console.log(`compra efetuada \n`)
                personagem1.kroner = 60
                personagem1.vida = 100 
            } 

            if (compra == 3)
            { 
                console.log(`Você não tem essa quantidade de KRONERs agora !! deseja iniciar um desafio para ganhar 20 kroners???`);
                let res = prompt( `SIM ou NAO: ` ).toUpperCase()

                    if (res !== `SIM` && res !== `NAO` ) 
                    {
                        while (res !== `SIM` && res !== `NAO`) 
                        {
                                console.log(`vc inseriu algo diferente de SIM ou NAO, por favor tente novamente :`);
                                res = prompt().toUpperCase()
                        }   
                    };

            if (res == `SIM`)
            { 
                    batalha1(inimgos.Escanor)
    
                    if ( xp == 10)
                    {
                        console.log (` Parabens você venceu a batalha!!`)
                        console.log `kroner +20 `
                        console.log(`compra efetuada \n`)
                        personagem1.kroner = 0
                        personagem1.magia = 120 
                        personagem1.vida = 120
                    }

                else 
                { 
                    console.log(`Você fugiu !!`);
                }
            
            }
    }
    
            if (compra == 4) {}
          
};






//                 exibiçao do console -> "oq ta acontecendo : "
console.clear()

//                          introdução ###
console.log (`\n                "BEM VINDO(A) A SUA NOVA AVENTURA EM HELL"\n`)

console.log (` Apos o falecimento de Odin todos em Asgard se perguntam quem será o novo rei ??
No salão de serimonial de Asgard os filhos de Odin se reunem para discutir como ficara a coroa devido o ocorrido com seu pai. 
THOR um dos filhos, se pronuncia : "o posto de rei deve ficar com o mais forte, ou seja Eu"

Muita expectativa era criada para que Thor se tornasse o governante de Asgard, todos já o reverenciavam como futuro rei de Asgard, ele só não contava com uma coisa....
Chega ao salão o filho mais velho de Odin, 'Baldor',  que ao adentrar senta-se no trono do seu falecido pai e diz "Eu concordo com vc meu irmão, a coroa realente deve pertencer ao mais forte.... Mas quem lhe disse que esse é vc?"

Um silencio no salão toma conta, todos percebem tal intmidação da parte de Baldor. Thor pega seu martelo e antes mesmo que pudesse agir contra seu irmão é atacado por diversas criaturas vindas do submundo os quais o imobilizam.
Baldor cai na gargalhada e referencia estar aliado com o submundo de Hell, para a tomada do trono de Asgard. Thor recebe um golpe na cabeça e desmaia.......


`)

console.log(`... ${personagem1.nome} acorda em hell dias depois do acontecido.`)
console.log(`tecle ENTER para continuar`) + prompt(``)
console.clear()

console.log(`
                    Status "THOR" -->
                      vida : ${personagem1.vida}
                      kroner : ${personagem1.kroner}  
                      magia : ${personagem1.magia}`);
console.log()

//                      Primeira parte da historia : 
console.log(` \nTHOR em busca de vigança contra seu irmão inicia sua jornada para retornar a Asgard. Há um longo caminho a sua esquerda, claro e aberto, deseja seguir por ele ou prefere seguir pelo caminho escuro a sua direita?  
`);
console.log ` A = esquerda / D = direita`;

let lk =  prompt(``).toUpperCase(); 
while (lk != `A` && lk != `D`) 
{
    console.log(` Você iseriu uma tecla que não correspode a uma direção! Tente Novamente :\n  `)
    console.log ` A = esquerda / D = direita`;
    lk = prompt().toUpperCase();
};


//                      variaçao de deslocamento 
                if ( lk == `A`)
                {
                    deslocamento1()
                    status()
                    prompt(`\ntecle enter para continuar`)
                    console.clear()
                    console.log()
                    tempo()
                    console.log(`ja se passaram : ${dias} dias \n`)
                        
                }
                else if (lk == `D`)
                {
                    deslocamento1()
                    status()
                    prompt(`tecle enter para continuar`)
                    console.clear()
                    console.log()
                    tempo()
                    console.log(`ja se passaram : ${dias} dias \n`)
                };


//                                ### ESTAGIO 2 :
if (hd >= 1)
{
    console.log `Após avançar sem mais danos Thor encontra uma passagem que o levará.....`
    prompt()
    console.log (`\nTHOR chega a midgard!!! \n`)
    compra()
    console.log();
    console.log();
    status()
    console.log();
    tempo()
    console.log(`ja se passaram : ${dias} dias \n`)
    prompt(`\ntecle enter para continuar: `)
    console.clear()
}

else if (hd >= -1 )
{
    console.log `Após sofrer dano Thor avança e encontra uma passagem que o levará.....`
    prompt()
    console.log (`\nTHOR chega a midgard!!! \n`)
    compra()
    console.log();
    console.log();
    status()
    console.log();
    tempo()
    console.log(`ja se passaram : ${dias} dias \n`)
    prompt(`\ntecle enter para continuar: `)
    console.clear()

}

//                              #### ESTAGIO 3 :

tempo()
console.log ` Ao continuar sua jornada THOR consegue chegar a passagem de volta para Asgard...`
console.log(`\nja se passaram : ${dias} dias \n`)

console.log(` THOR chega aos portões de Asgard !!!!! \n`)
console.log(` ...Baldor convoca as criaturas de hell para impedir sua entrada, ao avista-lo travam uma batalha...\n`)
batalha1(inimgos.criaturaDeHell)
status()
prompt(`\ntecle enter para continuar: `)
console.clear()

console.log ` Depois da batalha nos portões de Asgard... Thor entra em Asgard e encontra seu irmão Baldor sentado no trono de Asgard. Baldor se pronuncia "junte-se a mim meu irmão e poderemos governar Asgard juntos e conquistar outros reinos".  Thor percebe que todos seus aliados foram mortos por Baldor... `

console.log ( `\n Thor ataca seu irmão Baldor sem piedade e a batalha de vingança se inicia !!!!!!!`)
batalha2(inimgos.Baldor)
if (personagem1.vida <= 0 )
{           console.log(`\nVocê falhou na missão de proteger Asgard\n`);
            console.log()
            console.log`THOR MORREU!!!`;

}
if (personagem1.magia <= 0 )
{           console.log(`\nVocê esta sem magia e não pode contiuar a luta!!\n`);
            console.log()
            console.log`THOR MORREU!!!`
            console.log();
            console.log (`VIDA = ${personagem1.vida}`)

}

if (dias == 0){dias = dias + 35}

console.log (`tempo total de aventura ${dias} dias\n`)


}
main()


