import { ssGridCards } from "./query.js"


export function getSsCard() {

    fetch("../jsons/ssJson.json")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(card => {
                ssGridCards.innerHTML += `
            
            <div class="ss_card">
            <div class="ss_img">
                <img src="${card.img}" alt="">
            </div>
            <h4 class="ss_h4">
                ${card.h4}
            </h4>
            <p class="ss_p">
                ${card.p}
            </p>
            <button class="ss_btn">VISIT STORE</button>


        </div>
            `

            })
        })

}

