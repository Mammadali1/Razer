import { headerCards, cardTxt,headCard } from "./query.js"





export function getHeadImg() {
    fetch('../jsons/header.json')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(card => {
                headerCards.innerHTML += `
                <div class="head_card">
                <img class="card_img" src="${card.img}" alt="">
                <p class="card_txt">
                    ${card.txt}
                </p>
            </div>
    `
            });
        })

}





