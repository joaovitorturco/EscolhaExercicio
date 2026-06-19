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
    const body = document.body;
    const btn_dark = document.getElementById("btn-dark");
    const btn_light = document.getElementById("btn-light")

    body.classList.toggle("dark");
    btn_dark.classList.toggle("display-none");
    btn_light.removeAttribute("display-none")
}


