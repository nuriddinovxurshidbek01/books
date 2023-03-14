"use strict";
let wrapper = document.querySelector(".wrapper");


books.forEach(item => {

    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.innerHTML = `
                <div class="imgList">
                        <img src="./images/a-Dolls-house.jpg" alt="book" class="main_img">
                        <button class="cost"><img class="basketShop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPlJREFUSEvNlNsVwUAQhr9UQAlUgA6ogA7wygM6oAJeeEUF6IAKUAEqQAWccZKcuCQ7SaxjXufy7b//zjpYDsfyfH4KuLlqLsAM6H1DXVCBB/DmVoB1WsinK+oCQ2AF1GwAssDZHZwHjmkgYSaLB/UUg3dASfrDAEVgmwJwAnJRAMnJKQoJIQOgbwI0gGlCgO+dadFkJzIxIRug7PWYACOgExPQdBf10WYCiFGHGICra64oVwGkaAlUlZA5IN75YVIghbLNCyXg7XvRALRPdg/I/jyFFqAU8F6mBYyBFjAB2i9jonLGV+TNCn7lr4eKyqkB1hVY9+B/AXdYBygZk/eVswAAAABJRU5ErkJggg=="/></button>
                </div>
                <h2 class=" boxTitle ">${item.title}</h2>
                <div class="infoBook ">
                        <p class="years ">${item.year}</p>
                        <p class="sahifa ">${item.pages}</p>
                 </div>
                 <div class="infoLangvich ">
                        <a href="# " class="wikipedia ">Wikipedia</a>
                        <p class="langvich ">${item.language}</p>
                </div>
`
    wrapper.append(box)
})