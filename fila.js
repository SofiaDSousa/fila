export function criarFila(tamanho = 10){

 return [... new Array (tamanho)]

}

export function  inserirItemFila (fila,item){
    const spacePosition = fila.indexOf(undefined);
    if(spacePosition === -1){
     console.log("Esta cheio");
     return; 
    }    
     
    fila[spacePosition] = item;
 }

// 

export function retirarItemFila (fila){
    if(fila[0] == undefined) {
        return
    }

    let itemPegado = fila[0]

    for(let i = 0; i < fila.length; i++) {
        fila[i] = fila[i + 1]
    }

    return itemPegado
 }