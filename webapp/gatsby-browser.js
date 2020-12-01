export const onClientEntry = () => {
    document.getElementById('___loader').style.display = "flex";
}
export const onPreRouteUpdate = () => {
    document.getElementById('___loader').style.display = "flex";
}
export const onRouteUpdateDelayed = () => {
    document.getElementById('___loader').style.display = "flex";
}
export const onRouteUpdate = () => {
    setTimeout(function () {
        document.getElementById("___loader").style.display = "none"
    }, 500)
}