export const prohibitScroll = (e) => {
    if (["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(e.code)){
        e.preventDefault()
    }
}