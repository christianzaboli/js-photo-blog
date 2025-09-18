picApi = 'https://lanciweb.github.io/demo/api/pictures/';
const htmlBody = document.querySelector('.container');
console.log(htmlBody);

let accumuloPics = '';

axios.get(picApi)
.then(pics => {
    const pic = pics.data;
    pic.forEach(element => {
        accumuloPics += ` 
        <figure class="polaroid-contain" >
            <div class="polaroid-pin"></div>
            <img src="${element.url}" alt="${element.title}" class="polaroid-pic" id="${element.id}">
            <figcaption id="card"><span class="polaroid-date">${element.date}</span><br>
            ${element.title}</figcaption>
        </figure>`
    });
    htmlBody.innerHTML = accumuloPics

})
    .catch(error => {
        console.error(error)
});


