
function criaCard(nomeCarro,precoCarro){
    let $card = document.createElement("div")
        $card.classList.add("card borda-redonda")

    let $img =  document.createElement("img")
        $img.classList.add("wid95")
        $img.setAttribute("src","./imgs/carro.png")

    let $titulo =  document.createElement("h1")
        $titulo.innerText = nomeCarro
    
        
    let $preco =  document.createElement("p")
        $preco.classList.add("flex flexend")
        $preco.innerText = precoCarro

    $card.appendChild($img,$titulo,$preco)

    
}
function pesquisar(){    
    axios.get("assets/db.json").then(a=>{
        debugger
        console.log('a'+a)
    })


}

pesquisar()