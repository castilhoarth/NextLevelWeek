//procurar o botao
document.querySelector("#add-time").addEventListener('click', cloneField)
//quando clicar no botao


// executar uma acao
function cloneField() {
    var cont = 0;
  
   const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true)
    // node sao elementos html

    //limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento

        field.value = ""
    })

    //colocar na pagina, onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)    


}