export function MenuAnimation(){
    Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            document.getElementById("menu").dataset.activeIndex = index;
        }
})
}
