function getElementWidth(content, padding, border) {
    const numContent = Number.parseFloat(content);
    const numPadding = Number.parseFloat(padding);
    const numBorder = Number.parseFloat(border);
    let elementWidth = numContent + numPadding * 2 + numBorder * 2;
    console.log(elementWidth);
    return elementWidth;

}
let elementWidth = getElementWidth("50px", "8px", "4px");
elementWidth = getElementWidth("60px", "12px", "8.5px");
elementWidth = getElementWidth("200px", "0px", "0px");






