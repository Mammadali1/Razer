import { stCards, stLeft, stCircle, stRight, stCard, blackBasket, buyBtn, inc, dec, basketIcon } from "./query.js"


export function basketHide() {
    basketIcon.addEventListener('click', () => {
        blackBasket.classList.toggle('hide_basket')

    })
}





let stChange = -40


export function stNext() {
    stRight.addEventListener('click', () => {
        console.log('salam');
        stChange = stChange + 240

        if (stChange > 680) {
            stChange = -40


        }
        stCards.style.marginLeft = -stChange + 'px'

        if (stChange == -40) {
            stCircle[3].classList.remove('st_select')
            stCircle[2].classList.remove('st_select')
            stCircle[1].classList.remove('st_select')
            stCircle[0].classList.add('st_select')

        } else if (stChange == 200) {
            stCircle[0].classList.remove('st_select')
            stCircle[1].classList.add('st_select')
            stCircle[2].classList.remove('st_select')
            stCircle[3].classList.remove('st_select')



        } else if (stChange == 440) {
            stCircle[0].classList.remove('st_select')
            stCircle[1].classList.remove('st_select')
            stCircle[2].classList.add('st_select')
            stCircle[3].classList.remove('st_select')



        } else if (stChange == 680) {
            stCircle[0].classList.remove('st_select')
            stCircle[1].classList.remove('st_select')
            stCircle[2].classList.remove('st_select')
            stCircle[3].classList.add('st_select')



        }

    })

}

export function stBack() {
    stLeft.addEventListener('click', () => {
        console.log('salam');
        stChange = stChange - 240

        if (stChange < -40) {
            stChange = 680


        }
        stCards.style.marginLeft = -stChange + 'px'

    })

}

export function stCicrleChange() {

    for (let i = 0; i < stCircle.length; i++) {
        stCircle[i].addEventListener('click', () => {
            console.log('salam');

            if (i == 0) {
                stCircle[3].classList.remove('st_select')
                stCircle[2].classList.remove('st_select')
                stCircle[1].classList.remove('st_select')
                stCircle[0].classList.add('st_select')
                stChange = -40

                stCards.style.marginLeft = -stChange + 'px'


            } else if (i == 1) {
                stCircle[0].classList.remove('st_select')
                stCircle[1].classList.add('st_select')
                stCircle[2].classList.remove('st_select')
                stCircle[3].classList.remove('st_select')
                stChange = 200

                stCards.style.marginLeft = -stChange + 'px'



            } else if (i == 2) {
                stCircle[0].classList.remove('st_select')
                stCircle[1].classList.remove('st_select')
                stCircle[2].classList.add('st_select')
                stCircle[3].classList.remove('st_select')
                stChange = 440
                stCards.style.marginLeft = -stChange + 'px'




            } else if (i == 3) {
                stCircle[0].classList.remove('st_select')
                stCircle[1].classList.remove('st_select')
                stCircle[2].classList.remove('st_select')
                stCircle[3].classList.add('st_select')
                stChange = 680
                stCards.style.marginLeft = -stChange + 'px'




            }



        })

    }


}

