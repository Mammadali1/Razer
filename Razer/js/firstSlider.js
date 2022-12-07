
import { fs1Left, fs1Right, fs1Circle, fsSlider } from './query.js'

let change = 0

export function fsNext() {


    fs1Right.addEventListener('click', () => {
        change = change + 1170
        if (change > 2340) {
            change = 0
        }
        fsSlider.style.left = -change + 'px'

        if (change == 0) {
            fs1Circle[2].classList.remove('fs1_select')
            fs1Circle[1].classList.remove('fs1_select')
            fs1Circle[0].classList.add('fs1_select')
        } else if (change == 1170) {
            fs1Circle[0].classList.remove('fs1_select')
            fs1Circle[1].classList.add('fs1_select')
            fs1Circle[2].classList.remove('fs1_select')
        } else {
            fs1Circle[0].classList.remove('fs1_select')
            fs1Circle[1].classList.remove('fs1_select')
            fs1Circle[2].classList.add('fs1_select')

        }
    })




}
export function fsBack() {

    fs1Left.addEventListener('click', () => {
        change = change - 1170

        if (change < 0) {
            change = 2340
        }
        fsSlider.style.left = -change + 'px'

        if (change == 0) {
            fs1Circle[2].classList.remove('fs1_select')
            fs1Circle[1].classList.remove('fs1_select')
            fs1Circle[0].classList.add('fs1_select')
        } else if (change == 1170) {
            fs1Circle[0].classList.remove('fs1_select')
            fs1Circle[1].classList.add('fs1_select')
            fs1Circle[2].classList.remove('fs1_select')
        } else {
            fs1Circle[0].classList.remove('fs1_select')
            fs1Circle[1].classList.remove('fs1_select')
            fs1Circle[2].classList.add('fs1_select')

        }

    })



}


export function fsCicrleChange() {

    for (let i = 0; i < fs1Circle.length; i++) {
        fs1Circle[i].addEventListener('click', () => {

            if (i == 0) {
                fs1Circle[2].classList.remove('fs1_select')
                fs1Circle[1].classList.remove('fs1_select')
                fs1Circle[0].classList.add('fs1_select')
                change = 0
                fsSlider.style.left = -change + 'px'
            } else if (i == 1) {
                fs1Circle[0].classList.remove('fs1_select')
                fs1Circle[1].classList.add('fs1_select')
                fs1Circle[2].classList.remove('fs1_select')
                change = 1170

                fsSlider.style.left = -change + 'px'

            } else if (i == 2) {
                fs1Circle[0].classList.remove('fs1_select')
                fs1Circle[1].classList.remove('fs1_select')
                fs1Circle[2].classList.add('fs1_select')
                change = 2340

                fsSlider.style.left = -change + 'px'


            }


        })

    }


}

