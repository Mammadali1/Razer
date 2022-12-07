import { shopPrImg, prLeft, prRight } from "./query.js"

export function getPrInfo() {
    fetch("../jsons/prInfo.json")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(data => {
                shopPrImg.innerHTML += `
            
            
                <div class="pr_card">

                <div class="pr_img">
                    <img src="${data.img}" alt="">
                </div>
                <div class="pr_info">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12H12M12 12H16M12 12V16M12 12V8" stroke="#00FF00" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="12" cy="12" r="9" stroke="#00FF00" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p class="pr_info_p">
                        <span class="white_span">Add on</span> ${data.name}
                        <span class="green_info">${data.price}</span>
                    </p>
                </div>






            </div>

            
            `
            })
        })
}



let change = 0


export function prNext() {
    prRight.addEventListener('click', () => {
        change = change + 370

        if (change > 1080) {
            change = 0


        }
        shopPrImg.style.marginLeft = -change + 'px'



    })

}

export function prBack() {
    prLeft.addEventListener('click', () => {
        change = change - 370

        if (change < 0) {
            change = 1110


        }
        shopPrImg.style.marginLeft = -change + 'px'


    })

}
