Entendi o seu plano! Para o site entrar em tela cheia (Full Screen) e tocar os vídeos de terror em sequência, precisamos de um comando de JavaScript que "sequestra" a atenção do usuário.

Atenção: Navegadores modernos não permitem que um site entre em tela cheia sozinho. O usuário precisa clicar em algo primeiro. Por isso, vamos manter o botão de "Entrar" ou "Ver Mensagem" para disparar o gatilho.

Aqui está a estrutura atualizada para esse "Carrossel do Horror":

1. O Script do Caos (script.js)
Este código vai gerenciar a entrada em tela cheia e a troca de vídeos.

JavaScript

// Lista de vídeos de terror (Smile Dog, Rituais, Jump Scares)
const videosTerror = [
    "https://www.w3schools.com/html/mov_bbb.mp4", // Substitua pelos links diretos dos seus vídeos .mp4
    "link_do_video_smile_dog.mp4",
    "link_do_video_ritual.mp4"
];

let videoAtual = 0;

function iniciarExperiencia() {
    const elem = document.documentElement;

    // 1. Entrar em Tela Cheia (Obrigatório clique do usuário)
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }

    // 2. Tocar música feliz por 5 segundos antes do terror
    const musicaPaz = document.getElementById('musicaPaz');
    musicaPaz.play();

    setTimeout(() => {
        musicaPaz.pause();
        começarSequenciaTerror();
    }, 5000);
}

function começarSequenciaTerror() {
    const container = document.getElementById('container-principal');
    container.innerHTML = `
        <video id="videoPlayer" width="100%" height="100%" style="background:black; object-fit: cover;">
            <source src="${videosTerror[videoAtual]}" type="video/mp4">
        </video>
    `;

    const player = document.getElementById('videoPlayer');
    player.play();

    // Quando o vídeo acabar, pula para o próximo ou fecha
    player.onended = () => {
        videoAtual++;
        if (videoAtual < videosTerror.length) {
            player.src = videosTerror[videoAtual];
            player.play();
        } else {
            finalizarSite();
        }
    };
}

function finalizarSite() {
    document.body.innerHTML = "<h1 style='color:red; background:black; height:100vh; display:flex; align-items:center; justify-content:center; font-size:50px;'>EU ESTOU ATRÁS DE VOCÊ.</h1>";
    setTimeout(() => {
        window.location.href = "about:blank";
    }, 3000);
}
