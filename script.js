function toggleMode() {
    const html = document.documentElement;
    
    html.classList.toggle('light');

    // pegar a tag img
    const img = document.querySelector('#profile img');

    // substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/pfp-bright-mode.jpg')

    } else {
        // se tiver sem o light mode, mantem a imagem normal
        img.setAttribute('src', './assets/pfp-dark-mode.jpg')
    }
}