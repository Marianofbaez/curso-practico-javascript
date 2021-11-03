//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioconDescuento(precio,descuento) {         //"precio" reemplaza a "precioOriginal"
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioconDescuento(priceValue, discountValue);

    const resultP = document.getElementById ("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//console.log ({
//    precioOriginal,
//   descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento,
//});