const mensagem = document.getElementById('mensagem')

const apiConselho = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => {
        mensagem.innerHTML = data.slip.advice
    })
}
apiConselho()