                                            //PROJETO02
                                            //JOKENPO


   const prompt = require('prompt-sync')();                       
    let novamente = (`sim`)

    

    while (novamente === (`sim`)){
        
        
        console.log(`BEM VINDO AO JOKENPO!!! TECLE ENTER PARA CONTINUAR: `);
        prompt()
        console.log(`\n 
                         REGRAS:
        
        
        No jokenpô o papel ganha da pedra porque a embrulha; a tesoura ganha do papel porque o corta e a pedra, por sua vez, ganhar da tesoura porque a quebra. `);
        prompt(``);

        console.log(`\n Vamos jogar ? (tecle enter)`);
        prompt()
        
        console.clear()
        let jokenpo = {0: "PEDRA",
        1:"PAPEL",
        2:"TESOURA"}
        
        let vitoriasPc = 0 
        let vitoriasJogador = 0 
        
        let rodadas = +prompt("quantas rodadas vamos jogar? ")
        
        for (i = 0; i < rodadas; i++ ){
            console.log('\ndigite:\n [0]PEDRA\n [1]PAPEL\n [2]TESOURA\n')
            
            const escolhaJogador = +prompt(`PEDRA, PAPEL OU TESOURA?? `)
        
            const escolhaPc =  Math.floor(Math.random() * 3);
            console.log (`Voce jogou: ${jokenpo[escolhaJogador]}`)
            console.log (`o COMPUTADOR jogou: ${jokenpo[escolhaPc]}`)
        
            
            if (escolhaPc == 0 ){
                if (escolhaPc == escolhaJogador) {
                    console.log ("\n##EMPATOU")
                }if (escolhaJogador == 1) {
                    console.log ("\n##JOGADOR VENCEU!!")
                vitoriasJogador++}
                  if (escolhaJogador == 2) {
                        console.log ("\n##O COMPUTADOR VENCEU!!")
                    vitoriasPc++}
        
        
            }
        
                if (escolhaPc == 1 ){
                if (escolhaPc == escolhaJogador) {
                console.log ("\n##EMPATOU")
                 }if (escolhaJogador == 2) {
                console.log ("\n##JOGADOR VENCEU!!")
            vitoriasJogador++}
                     if (escolhaJogador == 0) {
                    console.log ("\n##O COMPUTADOR VENCEU!!")
                vitoriasPc++}
        
        }
        
          if (escolhaPc == 2 ){
            if (escolhaPc == escolhaJogador) {
            console.log ("\n##EMPATOU")
             }if (escolhaJogador == 0) {
            console.log ("\n##JOGADOR VENCEU!!")
                    vitoriasJogador++}
                 if (escolhaJogador == 1) {
                console.log ("\n##O COMPUTADOR VENCEU!!")
            vitoriasPc++}
                 } //console.clear()
                
        
                } 
        if (vitoriasJogador>vitoriasPc){
            console.log (`\n##PARABENS VC VENCEU A PARTIDA !!\n`)}
            else if (vitoriasJogador<vitoriasPc){
                console.log(` \n##AS MAQUINAS FORAM VITORIOSAS NOVAMENTE !!\n`)
            }else{ console.log (`\n##NINGUEM VENCEU ESSA PARTIDA\n`)}

            console.log (` \n##O JOGADOR VENCEU ${vitoriasJogador} RODADAS`)
            console.log (` \n##O COMPUTADOR VENCEU ${vitoriasPc} RODADAS`)


          
            console.log(`\n VOCE QUER INICIAR UMA NOVA PARTIDA? [SIM/NAO]\n`)
            novamente = prompt( `       `).toLocaleLowerCase()
        while(novamente!== `sim` && novamente!==`nao`){
            console.log(`\n VOCE QUER INICIAR UMA NOVA PARTIDA? [SIM/NAO]\n`)
           novamente = prompt(`     `).toLocaleLowerCase()

        }

    }




    
