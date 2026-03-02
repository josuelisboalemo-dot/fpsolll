const mensagem = "SMILE_JPG_EXECUTED\n" +
                 "EU JA ESTOU AQUI.\n" +
                 "EU SEI ONDE VOCE MORA.\n" +
                 "NAO OLHE PARA TRAS.\n" +
                 "\n" +
                 "PASSE PARA 10 PESSOAS OU\n" +
                 "O SORRISO SERA A ULTIMA\n" +
                 "COISA QUE VOCE VERA.";

function ativarArmadilha() {
    const siteFalso = document.getElementById('site-falso');
    const container = document.getElementById('container-horror');
    const video = document.getElementById('videoTerror');
    const musica = document.getElementById('musicaPaz');

    // Tentar tela cheia (alguns celulares bloqueiam, mas tentamos)
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) docElm.requestFullscreen();
    else if (docElm.webkitRequestFullscreen) docElm.webkitRequestFullscreen();

    musica.pause();
    siteFalso.style.display = 'none';
    container.style.display = 'block';

    // FORÇAR DOWNLOAD DO ARQUIVO (Susto Extra no Mobile)
    const blob = new Blob(["EU ESTOU TE OBSERVANDO"], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "smile.jpg.txt";
    a.click();

    // PLAY NO VÍDEO
    video.volume = 1.0;
    video.play();

    video.onended = () => {
        video.style.display = 'none';
        iniciarDigitacao();
    };
}

function iniciarDigitacao() {
    const notepad = document.getElementById('fake-notepad-w11');
    const txt = document.getElementById('txt-digitando');
    notepad.style.display = 'block';

    let i = 0;
    function escrever() {
        if (i < mensagem.length) {
            txt.textContent += mensagem.charAt(i);
            i++;
            setTimeout(escrever, 70);
        } else {
            document.body.classList.add('shake-effect');
            setTimeout(() => {
                window.location.href = "https://www.google.com/search?q=smile+dog+real+photo";
            }, 5000);
        }
    }
    escrever();
}

// Iniciar música de paz ao primeiro toque na tela (exigência mobile)
document.addEventListener('touchstart', () => {
    document.getElementById('musicaPaz').play().catch(()=>{});
}, { once: true });
