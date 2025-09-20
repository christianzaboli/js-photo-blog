const picApi = 'https://lanciweb.github.io/demo/api/pictures/';
const htmlBody = document.querySelector('.container');
const fullPic = document.querySelector('.picture-focus');

// accumulo polaroids main section
let accumuloPics = '';
axios.get(picApi)
.then(pics => {
    const pic = pics.data;
    console.log(pic);
    
    // rotazione dei dati estrapolati dall'API
    pic.forEach(element => {
        accumuloPics += ` 
        <figure class="polaroid-contain" id='${element.id}'>
        <div class="polaroid-pin"></div>
        <img src="${element.url}" alt="${element.title}" class="polaroid-pic">
        <figcaption><span class="polaroid-date">${element.date}</span><br>
        ${element.title}</figcaption>
        </figure>`;
    });
    htmlBody.innerHTML = accumuloPics;
    
    // selezione di tutte le polaroid
    const figures = document.querySelectorAll('figure');
    console.log(figures);

    // click on polaroids -> full schermo
    figures.forEach(element => {
        const img = element.querySelector('img')
        element.addEventListener('click', () => {
            fullPic.classList.toggle('display-none');
            fullPic.innerHTML = `
                <button>Chiudi</button>
                <img src="${img.src}" alt="${img.title}" id="selected-pic">`;
            console.log(element);
            
            // function per il bottone di ritorno da fullscreen
            const returnButton = document.querySelector('button');
            returnButton.addEventListener('click', () => {
                fullPic.classList.toggle('display-none')});
        })
    });
})
.catch(error => {
    console.error(error)
});


