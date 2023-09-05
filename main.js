let situacao = false;

function alertar() {
    const pagina = document.getElementsByTagName('body')[0].children[0]
    pagina.style.width = '2100px'
    console.log(pagina)
    console.log('antes')
    document.getElementById('RightPane').style.position = 'absolute';
    document.getElementById('RightPane').style.width = '1650px';
    document.getElementById('RightPane').style.zIndex = '99';
    document.getElementById('RightPane').style.backgroundColor = 'white';
    console.log('terminou')

    setTimeout(tabelas, 2000)


}

function tabelas() {
    // console.log('começou o tabelas')
    const collection = document.getElementsByClassName('report');
    // console.log(collection);
    for (let i = 0; i < collection.length; i++) {
        collection[i].id = `tabela${i}`
        // console.log(i)
    }
    const tabelaFila = document.getElementById(`tabela0`).children[0].children[0]
    // console.log(tabelaFila.children)

    const quantColuna = tabelaFila.children.length;

    // console.log(tabelaFila.length, 'numero do total de coluna')
    if (quantColuna == 6) {
        tabelaFila.innerHTML += '<th align="center" style="width: 236px"><div class="headerCellContainer"><div> Tecnico </div><div class="headerArrowIcon" style="transform: rotate(180deg)"></div></div></th>'
        // console.log(tabelaFila)
    }
    console.log('aqui começou')

    const tabelaLinha = document.getElementById(`tabela0`).children[0]
    console.log(tabelaLinha.children.length, 'tamanho')    
    
    console.log(tabelaLinha.children)

    // setTimeout(tabelas,500)

}

setTimeout(alertar, 5000)



