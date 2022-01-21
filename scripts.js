
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
        $preco.innerText = `R$ ${precoCarro}`

    $card.append($img,$titulo,$preco)
    return $card;    
}
function pesquisar(event){    
    let carrosEncontrados = []
    
    if(event){
        event.preventDefault()
    }
    axios.get("assets/db.json").then(({data})=>{
         
        let textoPesquisado = document.querySelector("input.pesquisa").value
            textoPesquisado = textoPesquisado.toLowerCase()

        let $grid = document.querySelector("section.gridcards")
        $grid.innerHTML =  ''

        for (const carro of data) {
            let isNomeParecido = carro.nome.toLowerCase().indexOf(textoPesquisado)>=0
            if(isNomeParecido){
                carrosEncontrados.push(carro)
                $grid.appendChild(criaCard(carro.nome,carro.preco))
            } 

        }  
        
    })


}

pesquisar()