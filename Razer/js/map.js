import { blockIframe } from "./query.js"




export function getMap() {
    blockIframe.innerHTML = `
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d60713101.42416614!2d-14.5673126!3d21.7557247!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2s!4v1670145266736!5m2!1str!2s"
    width="100%" height="450" style="border-radius:20px; border:0; allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
    `
}
