"use strict";
let wrapper = document.querySelector(".wrapper");
let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".selektSort")
let elSearch = document.querySelector(".searchInfo");
let elAuthor = document.querySelector(".author");
let elSelect2 = document.querySelector(".selektAlphobit")

renderUi(books)

function renderUi(array) {


    array.forEach(item => {

        let box = document.createElement("div");
        box.setAttribute("class", "box");
        box.innerHTML = `
                <div class="imgList">
                        <img src="${item.imageLink}" alt="book" class="main_img">
                        <button class="cost"><img class="basketShop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPlJREFUSEvNlNsVwUAQhr9UQAlUgA6ogA7wygM6oAJeeEUF6IAKUAEqQAWccZKcuCQ7SaxjXufy7b//zjpYDsfyfH4KuLlqLsAM6H1DXVCBB/DmVoB1WsinK+oCQ2AF1GwAssDZHZwHjmkgYSaLB/UUg3dASfrDAEVgmwJwAnJRAMnJKQoJIQOgbwI0gGlCgO+dadFkJzIxIRug7PWYACOgExPQdBf10WYCiFGHGICra64oVwGkaAlUlZA5IN75YVIghbLNCyXg7XvRALRPdg/I/jyFFqAU8F6mBYyBFjAB2i9jonLGV+TNCn7lr4eKyqkB1hVY9+B/AXdYBygZk/eVswAAAABJRU5ErkJggg=="/></button>
                </div>
                <h2 class=" boxTitle "> ${item.author}:  ${item.title}</h2>
                <div class="infoBook ">
                        <p class="years ">${Math.abs(item.year)}</p>
                        <p class="sahifa ">${item.pages}</p>
                 </div>
                 <div class="infoLangvich ">
                        <a href="${item.link}" class="wikipedia ">Wikipedia</a>
                        <p class="langvich ">${item.language}</p>
                </div>
`
        wrapper.append(box)
    })
}

function sort() {
    let sortLanguage = [];
    books.forEach(item => {
        if (!sortLanguage.includes(item.language)) {
            sortLanguage.push(item.language);
        }
    })

    if (sortLanguage) {
        sortLanguage.forEach(item => {
            const newOption = document.createElement('option');
            newOption.textContent = item;
            elSelect.append(newOption);
        })
    }

    let sortAuthor = [];
    books.forEach(item => {
        if (!sortAuthor.includes(item.author)) {
            sortAuthor.push(item.author);
        }
    })

    if (sortAuthor) {
        sortAuthor.forEach(item => {
            const newAuthor = document.createElement('option');
            newAuthor.textContent = item;
            elAuthor.append(newAuthor);
        })
    }

}
sort();


elSelect.addEventListener('change', function(evt) {
    evt.preventDefault();
    let value = evt.target.value;
    wrapper.innerHTML = "";

    if (value == "all") {
        renderUi(books);
        search(books);
    } else {
        const selectValue = books.filter(item => {
            return value == item.language;
        });
        renderUi(selectValue);
        search(selectValue);
    }


});

elAuthor.addEventListener('change', (itm) => {
    itm.preventDefault();
    let value = itm.target.value;
    wrapper.innerHTML = " ";
    if (value == "author") {
        renderUi(books);
        search(books)
    } else {
        let selectAuters = books.filter(item => {
            return value == item.author;
        })
        renderUi(selectAuters);
        search(selectAuters);

    }

})

elSelect2.addEventListener('change', (evt) => {
    wrapper.innerHTML = "";
    let selectValues = evt.target.value;
    if (selectValues == "Aa-Zz") {
        AZ(books);
    } else if (selectValues == "Zz-Aa") {
        ZA(books)
    } else if (selectValues == "pagUp") {
        pagesUP(books);
    } else if (selectValues == "pagDown") {
        pagesDown(books)
    } else {
        renderUi(books);
    }
})

function AZ(array) {
    array.sort((a, b) => {
        if (a.author > b.author) {
            return 1;
        }
        if (a.author < b.author) {
            return -1;
        }
        return 0;
    })
    renderUi(array)
}

function ZA(array) {
    array.sort((a, b) => {
        if (a.author < b.author) {
            return 1;
        }
        if (a.author > b.author) {
            return -1;
        }
        return 0;
    })
    renderUi(array)
}

function pagesUP(array) {

    array.sort((a, b) => {
        array.innerHTML = ""
        return a.pages - b.pages;
    })
    renderUi(array);
}

function pagesDown(array) {

    array.sort((a, b) => {
        array.innerHTML = ""
        return b.pages - a.pages;
    })
    renderUi(array);
}






function search(array) {
    elSearch.addEventListener('keyup', (evt) => {

        evt.preventDefault();
        let value = evt.target.value;
        wrapper.innerHTML = "";

        const newItem = array.filter(item => {
            return item.title.includes(value);
        })
        renderUi(newItem);
    })
}
search(books);