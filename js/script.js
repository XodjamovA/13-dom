import {
    movies
} from '../modules/data.js'

let ul = document.querySelector('.promo__interactive-list')
let searchInp = document.querySelector('#search')
let poster = document.querySelector('.promo__bg')

let modal_ = document.querySelector('.modal_')
let modal__bg = document.querySelector('.modal__bg')
let img = document.querySelector('.modal__img')
let h3 = document.querySelector('.modal__h3')
let h1 = document.querySelector('.modal__h1')
let b = document.querySelector('.modal__b')
let span = document.querySelector('.modal__span')
let span1 = document.querySelector('.modal__span1')




searchInp.oninput = () => {
    let searchkey = searchInp.value.trim().toLowerCase()

    let filtered = movies.filter(item => {
        let title = item.Title.trim().toLowerCase()

        if (title.includes(searchkey)) {
            return item
        }
    })

    reload(filtered, searchkey)
}

reload(movies)

function reload(arr, val = "") {
    ul.innerHTML = ""
    showPoster(arr[0])
    let re = new RegExp(val, 'g')

    for (let item of arr) {
        let title = item.Title.toLowerCase().replace(re, `<b>${val}</b>`)

        let li = document.createElement('li')
        let del = document.createElement('div')

        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.innerHTML = title

        li.append(del)
        ul.append(li)

        li.onclick = () => {
            modal_.style.display = 'block'
            modal__bg.style.display = 'block'
            img.src = item.Poster
            h3.innerHTML = item.Genre
            h1.innerHTML = item.Title
            b.innerHTML = item.Plot
            // span.innerHTML = item.imdbRating
            // span1.innerHTML = item.Metascore
        }


        // a.innerHTML = item.Genre
        // a.filter = () => {
        //     a.innerHTML !== a.innerHTML
        // }



    }
}
modal__bg.onclick = () => {
    modal_.style.display = 'none'
    modal__bg.style.display = 'none'
}


let li2 = document.querySelectorAll('.promo__menu-list ul li')
li2.forEach = (item2 => {
    li2.classList.remove('promo__menu-item_active')
    item2.onclick = () => {
        li2.classList.add('promo__menu-item_active')
    }
    console.log(li2);
})



function showPoster(data) {
    poster.style.backgroundImage = `url(${data.Poster})`
}


class Rating {
    constructor(dom) {
        dom.innerHTML = '<svg width="110" height="20"></svg>';
        this.svg = dom.querySelector('svg');
        for (var i = 0; i < 5; i++)
            this.svg.innerHTML += `<polygon data-value="${i + 1}"
             transform="translate(${i * 22},0)" 
             points="10,1 4,19.8 19,7.8 1,7.8 16,19.8">`;
        this.svg.onclick = e => this.change(e);
        this.render();
    }

    change(e) {
        let value = e.target.dataset.value;
        value && (this.svg.parentNode.dataset.value = value);
        this.render();
    }

    render() {
        this.svg.querySelectorAll('polygon').forEach(star => {
            let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
            star.classList.toggle('active', on);
        });
    }
}

document.querySelectorAll('.rating').forEach(dom => new Rating(dom));



let max = arr.reduce((a, b) => a.imdbRating > b.imdbRating ? a : b).imdbRating


for (let item of arr) {
    let wPr = item.imdbRating * 100 / max

    document.write(`
       <div class="item" >
            <h3>Model: ${item.model}</h3>
            <span>Year: ${item.year}</span> <br>
            <div style="width: 50px; height: 50px; background-color: ${item.color};" ></div> <br>
            <span>
                Engine: 
                <div class="engine" >
                    <div style=" text-align:center; height: 100%; width: ${wPr}%; background: orange; " >${Math.round(wPr)}%</div>
                </div>
            </span> <br>
            <img src="${item.img}" alt="${item.model}" />
            <h3 style="color: red;" >Price: ${item.price}</h3>
       </div>
    `)
}

