let Cliques = 0;

function mudarFrase() {
    Cliques++;
    const frase = document.getElementById("frase-do-dia");
    const corpo = document.getElementById("corpo");
    
    if (Cliques === 1) {
        frase.innerText = "A felicidade está dentro de você!";
    } 
    if (Cliques === 3) {
        // Começa a transição para o obscuro
        iniciarTerror();
    }
}

function iniciarTerror() {
    const corpo = document.getElementById("corpo");
    const frase = document.getElementById("frase-do-dia");
    const img = document.getElementById("emoji-principal");

    corpo.classList.add("escuro");
    frase.innerText = "Por que você ainda está aqui?";
    frase.style.color = "red";
    
    // Troca a imagem para algo sinistro depois de 3 segundos
    setTimeout(() => {
        img.src = "https://i.imgur.com/xGv6O9X.png"; // Aqui colocaríamos uma imagem de creepypasta
        document.body.classList.add("tremulo");
    }, 3000);

    // Fechar o site automaticamente depois de 10 segundos de terror
    setTimeout(() => {
        alert("VOCÊ NÃO DEVERIA TER ABERTO ESSA PASTA.");
        window.close(); // Tenta fechar a aba
        // Se o navegador bloquear o fechamento, a gente redireciona para um vídeo de susto
        window.location.href = "https://página-de-erro-preta.com"; 
    }, 10000);
}