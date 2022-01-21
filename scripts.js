
function criaCard(nomeCarro,precoCarro){
    let $card = document.createElement("div")
        $card.classList.add("card","borda-redonda")

    let $img =  document.createElement("img")
        $img.classList.add("wid95")
        $img.setAttribute("src","./imgs/carro.png")

    let $titulo =  document.createElement("h1")
        $titulo.innerText = nomeCarro
    
        
    let $preco =  document.createElement("p")
        $preco.classList.add("flex","flexend")
        $preco.innerText = precoCarro

    $card.appendChild($img,$titulo,$preco)
    return $card;    
}
function pesquisar(){    
    let carrosEncontrados = []
    axios.get("assets/db.json").then(({data})=>{
         
        let textoPesquisado = document.querySelector("input.pesquisa").value
            textoPesquisado = textoPesquisado.toLowerCase()

        let $grid = document.querySelector("section.gridcards")
        $grid.innerHTML =  ''

        for (const carro of data) {
            let isNomeParecido = carro.nome.toLowerCase().indexOf(textoPesquisado)>=0
            if(isNomeParecido){
                //debugger
                $grid.appendChild(criaCard(carro.nome,carro.preco))
            } 

        }

        let m=0
        
    })


}

pesquisar()