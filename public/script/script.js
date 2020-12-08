function cpf(mask, input){ 
    const vetMask = mask.split("");
    const nanCpf = input.value.replace(/\D/g, "");
    const cursor = input.selectionStart;
    const tecla = (window.event) ? event.keyCode : event.which; 

    for (let i= 0; i < nanCpf.length ; i++) {
        vetMask.splice(vetMask.indexOf("_"), 1, nanCpf[i]);
        
    }
    input.value = vetMask.join("");
     
    if(tecla != 37 && (cursor == 3 ||cursor == 7 ||cursor == 11)){
        input.setSelectionRange(cursor+1, cursor+1);
    } else{
        input.setSelectionRange(cursor, cursor);
    }
    
}


/* obserações

vetMask.indexOf("_");
Retorna a posição do elemento do input
Ex: 
 const string = "Diogo Almeida"
 alert(vetMask.indexOf("o"));
 Salva e Roda!!
===========================
Para que não apareça virgula no vetor
no complemento adicionar .join("");
===========================
O uso do .setSelectionRange();
Saber a posição do cursor
Ex: 
   const string = "Diogo Almeida";
   input.value = string;
   input.setSelectionRange(1, 4);
Salve e Rode!   
===========================
|| Significa ou em outras palavras or
===========================
input.setSelectionRange(cursor, cursor);

o incremento "cursor, cursor" = Consiguimos corrigir algum erro na linha.
*/