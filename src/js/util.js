/**
 * Empty content on a HTML element
 * @param {HTMLElement} element 
 */
 const emptyTxtContent = (element) =>{
    setTimeout(()=>{
        element.innerHTML ="";
    }, 2500);
}

/**
 * Remove gradually opacity of element
 * @param {HTMLElement} element 
 */
const changeOpacity = (element) =>{
    element.style.opacity = `0`;
    element.style.transition = `opacity 2s ease-in-out`;
}

export {emptyTxtContent, changeOpacity}