import { shopSliderImg, shopLeft, shopRight } from "./query.js"




let shopChange = 0

export function getShopSlide(){
    fetch("../jsons/shopSliderImg.json")
    .then(resp=>resp.json())
    .then(data=>{
        data.forEach(card=>{
            shopSliderImg.innerHTML+=`
            
            <div class="shop_img_card">
                <img class="shop_img" src="${card.img}" alt="">
            </div>
            
            
            `
        })
    })
}



export function shopNext() {
    shopRight.addEventListener('click', () => {
        shopChange = shopChange + 219   

        if (shopChange > 1095) {
            shopChange = 0


        }
        shopSliderImg.style.marginLeft = -shopChange + 'px'



    })

}

export function shopBack() {
    shopLeft.addEventListener('click', () => {
        shopChange = shopChange - 219

        if (shopChange < 0) {
            shopChange = 1094


        }
        shopSliderImg.style.marginLeft = -shopChange + 'px'


    })

}
