
const stCards = document.querySelector('.st_cards');
const stCard = document.querySelector('.st_card');
const buyBtn = document.querySelectorAll('.st_card_buy_btn')
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const blackBasket = document.querySelector('.black_basket')
const basketList = document.querySelector('.basket_list')
const saySpan = document.querySelector('.say_span');




function stCardsFunc() {
    fetch('../jsons/stSlider.json')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(card => {
                stCards.innerHTML += `
                
                <div class="st_card">
                <div class="st_top_btns">
                    <button class="st_top_white_btn">${card.whiteBtn}</button>
                    <button class="st_top_blue_btn">${card.blueBtn}</button>
                </div>
                <div class="st_card_img">
                    <img src="${card.img}" alt="">
                </div>
                <div class="st_card_rate">
                    <p class="st_info_star">
                        ${card.rateLeft}
                    </p>


                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.735 5.74351L9.41582 0.763584C9.25215 0.412139 8.74785 0.412139 8.58418 0.763584L6.26501 5.74351C6.1983 5.88674 6.06125 5.98537 5.9031 6.00394L0.404567 6.64965C0.0165227 6.69522 -0.139317 7.17026 0.147574 7.43304L4.21278 11.1565C4.3297 11.2636 4.38205 11.4232 4.35102 11.5779L3.27191 16.9569C3.19575 17.3365 3.60375 17.6301 3.94472 17.4411L8.77633 14.7624C8.9153 14.6853 9.0847 14.6853 9.22367 14.7624L14.0553 17.4411C14.3963 17.6301 14.8042 17.3365 14.7281 16.9569L13.649 11.5779C13.6179 11.4232 13.6703 11.2636 13.7872 11.1565L17.8524 7.43304C18.1393 7.17026 17.9835 6.69522 17.5954 6.64965L12.0969 6.00394C11.9388 5.98537 11.8017 5.88674 11.735 5.74351Z"
                            fill="#F2C94C" />
                    </svg>


                    <p class="st_info_star">
                        ${card.rateRight}
                    </p>



                </div>
                <div class="st_card_info">
                    <h4>
                        ${card.h4Name}
                    </h4>
                </div>
                <div class="st_card_buy">
                    <div class="st_price">
                        <p class="price_top">
                            ${card.priceTop}
                        </p>
                        <p class="price_bottom">
                            ${card.priceBottom}
                        </p>
                    </div>
                    <button onclick="addToCard(event,${card.id})" class="st_card_buy_btn">BUY</button>
                </div>
            </div>

                `
            })
        })
}
stCardsFunc()



var basket = [


]



function showList(basket) {
    let arr = [];

    blackBasket.innerHTML = '';
    basket.forEach(data => {
        blackBasket.innerHTML += `
        
        <div class="basket_list">
            <img  src="${data.img}" alt="">
            <h4 class="basket_h4">${data.h4Name}</h4>
            <p class="price">$${data.priceTop * data.count}</p>
            <p class="count">${data.count}</p>
            <button name="inc" class="inc" onclick="editProducts(event,${data.id})">+</button>
            <button name="dec" class="dec" onclick="editProducts(event,${data.id})">-</button>
        </div>
           
        `
        arr.push(data.count);
    })


    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    }
    saySpan.innerHTML = `    ${x}`


    

}







function addToCard(e, id) {
    const checkPr = basket.find(data => data.id === +id);
    if (checkPr) {
        checkPr.count += 1
    } else {
        fetch("../jsons/stSlider.json")
            .then(resp => resp.json())
            .then(data => {
                const pr = data.find(x => x.id === +id)
                pr.count = 1;
                basket.push(pr)
                if (pr.count = 1) {

                    showList(basket)

                }

            })


    }
    showList(basket)

    localStorage.setItem('basket', JSON.stringify(basket))
}

function editProducts(e, id) {
    console.log(e.target);

    const checkPr = basket.find(data => data.id === +id);
    checkPr.count = event.target.name === 'inc' ? checkPr.count + 1 : checkPr.count - 1


    if (checkPr.count === 0) {
        let index = basket.findIndex(data => data.id === +id)
        basket.splice(index, 1);
    }

    showList(basket)
    localStorage.setItem('basket', JSON.stringify(basket))
}



if (localStorage.getItem('basket')) {
    basket = JSON.parse(localStorage.getItem('basket'))
}
window.addEventListener('load', () => {
    showList(basket)
})



// window.addEventListener("mouseup", function (e) {
//     console.log(e.target);
//     if (e.target !== blackBasket) {
//         blackBasket.classList.add("hide_basket")
//     }
// })

