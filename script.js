const musicaPaz = new Audio('https://www.solucoesdf.com.br/som/alegre.mp3');
const somTerror = new Audio('https://www.myinstants.com/media/sounds/creepy-ritual-chant.mp3'); // Simulando áudio local

function iniciarTudo() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('site-fake').style.display = 'block';
    musicaPaz.play();

    // 5 Segundos de paz antes do caos
    setTimeout(faseTerror, 5000);
}

function faseTerror() {
    musicaPaz.pause();
    document.getElementById('site-fake').style.display = 'none';
    document.getElementById('horror-overlay').style.display = 'flex';
    
    // Inicia o texto de culto em latim
    const ritual = document.getElementById('texto-ritual');
    ritual.innerText = "SANGUIS BIBIMUS... CORPUS EDIMUS... RIDEAT CANIS...";
    
    // Toca a música de terror (Ritual)
    somTerror.play();

    // Depois de 7 segundos encarando o Smile Dog, abre o YouTube e fecha
    setTimeout(() => {
        // Link do YouTube: Creepy Ritual Chant / Smile Dog Video
        window.open("http://www.youtube.com/watch?v=NIu-B51_rp0", "_blank");
        
        document.body.innerHTML = "<h1 style='color:white; background:black; height:100vh; display:flex; align-items:center; justify-content:center;'>EU ESTOU ATRÁS DE VOCÊ.</h1>";
        
        setTimeout(() => {
            window.close();
            window.location.href = "about:blank";
        }, 3000);
    }, 7000);
}
