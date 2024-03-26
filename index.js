import  {criarFila, inserirItemFila, retirarItemFila}  from './fila.js'

const fila = criarFila(3)

inserirItemFila(fila, "dado")
inserirItemFila(fila, "tabuleiro")
inserirItemFila(fila, "monopolly")

console.log("Fila", fila);

retirarItemFila(fila)
retirarItemFila(fila)

console.log("Fila", fila);