// Configuração de sons e links
const musicaPaz = new Audio('https://www.solucoesdf.com.br/som/alegre.mp3'); 
const somTerror = new Audio('https://www.myinstants.com/media/sounds/creepy-noise.mp3');
const linkYoutubeTerror = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Substitua por um link de vídeo de terror real

window.onload = () => {
    musicaPaz.play();
    musicaPaz.loop = true;
};

function iniciarEvento() {
    // 1. TELA FICA PRETA DO NADA
    document.body.innerHTML = `<div id='preto' style='background:black; width:100vw; height:100vh; display:flex; align-items:center; justify-content:center;'>
        <img src='https://i.imgur.com/83p1H2t.gif' id='figura' style='display:none; width:300px;'>
        <h2 id='texto-culto' style='color:red; display:none; font-family:serif;'>Sanguis bibimus, corpus edimus...</h2>
    </div>`;
    musicaPaz.pause();

    // 2. APARECE A FIGURA E O TEXTO DE CULTO (Após 2 segundos no preto)
    setTimeout(() => {
        document.getElementById('figura').style.display = 'block';
        document.getElementById('texto-culto').style.display = 'block';
        somTerror.play();
    }, 2000);

    // 3. VOLTA AO "NORMAL" MAS PERTURBADO (Após 6 segundos)
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="background:#222; color:#eee; height:100vh; text-align:center; padding-top:50px;">
                <h1 style="color:red;">VOCÊ NÃO É BEM-VINDO</h1>
                <p>Nós estamos em... eu estou aí...</p>
                <img src="https://cursinhoparamedicina.com.br/wp-content/uploads/2016/10/smile.png" style="filter: invert(100%); width:100px;">
                <br><br>
                <button onclick="faseFinal()">CLIQUE PARA SAIR</button>
            </div>
        `;
    }, 8000);
}

function faseFinal() {
    // 4. ABRE O YOUTUBE DE TERROR
    window.open(linkYoutubeTerror, '_blank');

    // 5. MENSAGEM FINAL "ATRÁS DE VOCÊ"
    document.body.innerHTML = `
        <div style="background:black; color:white; height:100vh; display:flex; align-items:center; justify-content:center; flex-direction:column;">
            <h1 style="font-size:50px; letter-spacing: 15px;">EU ESTOU ATRÁS DE VOCÊ</h1>
            <p>Não olhe.</p>
        </div>
    `;

    // 6. FECHA TUDO
    setTimeout(() => {
        window.close();
        // Redirecionamento caso o browser bloqueie o window.close
        window.location.href = "about:blank";
    }, 4000);
}

// Inicia o processo quando o usuário clica em qualquer lugar (requisito do navegador para tocar áudio)
document.body.onclick = () => {
    setTimeout(iniciarEvento, 5000); // Começa 5 segundos depois que ele entra/clica
};
