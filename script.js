// Sons de tensão (Drone de fundo e um sussurro)
const somAmbiente = new Audio('https://www.soundjay.com/ambient/sounds/creepy-background-01.mp3');
const somSusto = new Audio('https://www.myinstants.com/media/sounds/whisper-look-behind-you.mp3');

let faseTerror = false;

function iniciarTerrorReal() {
    if (faseTerror) return;
    faseTerror = true;

    // Toca o som de tensão bem baixinho e vai aumentando
    somAmbiente.loop = true;
    somAmbiente.volume = 0.1;
    somAmbiente.play();

    // 1. O site começa a "piscar" em preto e branco
    document.body.style.animation = "piscar 0.2s infinite";

    // 2. Mensagem que parece que o site sabe quem é você
    setTimeout(() => {
        document.getElementById("frase-do-dia").innerHTML = "Eu sei que você está sozinho no quarto...";
        document.getElementById("frase-do-dia").style.color = "red";
        document.getElementById("frase-do-dia").style.fontSize = "30px";
    }, 3000);

    // 3. O susto psicológico (O som de "Olhe para trás")
    setTimeout(() => {
        somSusto.play();
        document.body.style.filter = "invert(100%)"; // Inverte as cores da tela (fica bizarro)
    }, 7000);

    // 4. A Corrente Amaldiçoada (Aparece um formulário falso)
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="background:black; color:red; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <h1>ESTA É A CORRENTE DE MARIE LAVEAU</h1>
                <p>Você leu o que não devia. Agora o seu IP foi marcado.</p>
                <p>Envie este link para 10 pessoas ou as luzes da sua casa não acenderão amanhã.</p>
                <div style="border: 1px solid red; padding: 20px;">
                    <p>TEMPO RESTANTE: <span id="timer">60</span>s</p>
                </div>
                <img src="https://i.imgur.com/83p1H2t.gif" width="300"> 
            </div>
        `;
        iniciarContagem();
    }, 12000);
}

function iniciarContagem() {
    let tempo = 60;
    setInterval(() => {
        tempo--;
        document.getElementById("timer").innerText = tempo;
        if(tempo <= 0) {
            // O fechamento fatal que você pediu
            document.body.innerHTML = "<h1 style='color:white; text-align:center;'>CONEXÃO PERDIDA... ELES CHEGARAM.</h1>";
            setTimeout(() => { window.close(); }, 2000);
        }
    }, 1000);
}
