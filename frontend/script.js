let rotacaoAtual = 0

const girar = () => {
    const roleta = document.getElementById("roleta");
    
    const giro = Math.floor(Math.random() * 360) + 4600;
    rotacaoAtual += giro;
    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;
}

window.addEventListener('keydown', (a) => {
    if (a.key === "Enter") {
        girar()
    }
})

const trocarTema = () => {
    const body = document.body
    const btn_dark = document.getElementById("btn-dark")
    const btn_light = document.getElementById("btn-light")

    
    if (getComputedStyle(body).backgroundColor === "rgb(255, 255, 255)") {

        btn_dark.classList.remove("display-inline-block")
        btn_dark.classList.add("display-none")

        body.classList.remove("light")
        body.classList.add("dark")

        btn_light.classList.remove("display-none")
        btn_dark.classList.add("display-inline-block")


    } else {

        body.classList.remove("dark")
        body.classList.add("light")

        btn_dark.classList.remove("display-none")
        btn_dark.classList.add("display-inline-block")

        btn_light.classList.add("display-none")
        btn_light.classList.remove("display-inline-block")
    }
}


