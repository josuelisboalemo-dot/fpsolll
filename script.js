function ativarArmadilha() {
    const siteFalso = document.getElementById('site-falso');
    const containerHorror = document.getElementById('container-horror');
    const video = document.getElementById('videoTerror');
    const musicaPaz = document.getElementById('musicaPaz');
    const texto = document.getElementById('overlay-texto');

    // 1. Tenta colocar em Tela Cheia
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) docElm.requestFullscreen();
    else if (docElm.webkitRequestFullscreen) docElm.webkitRequestFullscreen();

    // 2. Desligar o clima de paz
    musicaPaz.pause();
    siteFalso.style.display = 'none';

    // 3. Ligar o horror (VÍDEO DO SMILE DOG)
    containerHorror.style.display = 'block';
    video.volume = 1.0; // Volume máximo
    
    // Tenta dar o play (crucial ter o arquivo terror1.mp4 na pasta)
    video.play().catch(e => {
        console.error("Erro ao tocar vídeo. Verifique se o nome está correto: terror1.mp4");
    });

    // 🔥 4. FORÇAR O DOWNLOAD DO ARQUIVO VAZIO (AQUI ESTÁ O QUE VOCÊ PEDIU)
    // Criamos um arquivo de texto vazio
    const nomeDoArquivo = "smile_jpg.txt"; // Usamos .txt para não ser bloqueado como vírus
    const conteudoVazio = ""; // Conteúdo do arquivo é uma string vazia

    const blob = new Blob([conteudoVazio], { type: "text/plain" });
    const urlDeDownload = window.URL.createObjectURL(blob);
    
    // Criamos um link escondido na memória e clicamos nele via código
    const linkTemporario = document.createElement("a");
    linkTemporario.href = urlDeDownload;
    linkTemporario.download = nomeDoArquivo;
    
    document.body.appendChild(linkTemporario);
    linkTemporario.click(); // Dispara o download (o navegador vai abrir a janela "Salvar Como")
    document.body.removeChild(linkTemporario);
    window.URL.revokeObjectURL(urlDeDownload); // Limpa a memória

    // 5. Mostrar texto de ritual no meio do vídeo
    setTimeout(() => {
        texto.style.display = 'block';
        texto.classList.add('shake-effect'); // Faz o texto tremer
    }, 3500);

    // 6. O que acontece quando o vídeo acabar
    video.onended = () => {
        document.body.innerHTML = `
            <div style="background:black; color:red; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:serif; text-align:center;">
                <h1 style="font-size:70px; animation: tremer 0.1s infinite;">EU ESTOU ATRÁS DE VOCÊ.</h1>
                <p style="color:white; font-size:25px; letter-spacing:15px;">Não olhe para trás.</p>
            </div>
        `;
        // Fecha ou limpa o site após 5 segundos de pânico final
        setTimeout(() => {
            window.location.href = "about:blank";
        }, 5000);
    };
}

// Ativar áudio de paz no primeiro movimento do mouse (contorna bloqueios)
document.body.addEventListener('mousemove', () => {
    document.getElementById('musicaPaz').play().catch(()=>{});
}, { once: true });