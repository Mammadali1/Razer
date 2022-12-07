import { oneUpJs } from "./query.js"


export function getBoxInfo() {
    fetch("../jsons/boxInfo.json")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(data => {
                oneUpJs.innerHTML += `
            
            
            <p class="box_bold_single">${data.bold}</p>
            <p class="box_gray_single">${data.gray}</p>
            <div class="boxs_line"></div>

            
            `
            })
        })
}