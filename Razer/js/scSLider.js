import { scLeft, scRight, scCircle, scSlider } from './query.js'


let change = 0

export function scNext() {


    scRight.addEventListener('click', () => {
        change = change + 1399

        if (change > 1500) {
            change = 0
        }
        scSlider.style.marginLeft = -change + 'px'

        if (change == 0) {
            scCircle[1].classList.remove('sc_select')
            scCircle[0].classList.add('sc_select')
        } else if (change == 1399) {
            scCircle[0].classList.remove('sc_select')
            scCircle[1].classList.add('sc_select')
        }
    })




}
export function scBack() {

    scLeft.addEventListener('click', () => {
        change = change - 1399

        if (change < 0) {
            change = 1399
        }
        scSlider.style.marginLeft = -change + 'px'

        if (change == 0) {
            scCircle[1].classList.remove('sc_select')
            scCircle[0].classList.add('sc_select')
        } else if (change == 1399) {
            scCircle[0].classList.remove('sc_select')
            scCircle[1].classList.add('sc_select')
        }

    })



}


export function scCicrleChange() {

    for (let i = 0; i < scCircle.length; i++) {
        scCircle[i].addEventListener('click', () => {

            if (i == 0) {
                scCircle[1].classList.remove('sc_select')
                scCircle[0].classList.add('sc_select')
                change = 0
                scSlider.style.marginLeft = -change + 'px'

            } else if (i == 1) {
                scCircle[0].classList.remove('sc_select')
                scCircle[1].classList.add('sc_select')
                change = 1399

                scSlider.style.marginLeft = -change + 'px'


            }


        })

    }


}





