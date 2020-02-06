const storeName = "Flowers"

const product1 = "margaritas"
const product2 = "rosas"

const product1Price = 150
const product2Price = 300

const discountCode = "PROMO"
const discountAmount = .9

const userName = prompt(`¡Bienvenidx! ¿Cómo te llamás?`)
alert(`Bienvenidx, ${userName}. Productos en promoción hoy: ${product1} a $${product1Price} y ${product2} a $${product2Price}.`)

const wantProduct1 = confirm(`¿Querés comprar ${product1}?`)

if (wantProduct1){
    product1Amount = prompt(`¿Cuántas unidades querés?`)
} else {
    product1Amount = 0
}

const wantProduct2 = confirm(`¿Querés comprar ${product2}?`);

if (wantProduct2){
    product2Amount = prompt(`¿Cuántas unidades querés?`)
} else {
    product2Amount = 0
}

const wantToBuy = wantProduct1 || wantProduct2;

// LLEVA PRODUCTOS

if (wantToBuy){
    product1Total = product1Amount * product1Price;
    product2Total = product2Amount * product2Price;
    total = product1Total + product2Total;

    message = `Vas a llevar:\n
    -${product1Amount} ${product1}, $${product1Price} cada una: $${product1Total}\n
    -${product2Amount} ${product2}, $${product2Price} cada una: $${product2Total}\n
    -Total: $${total}`

    // alert(message)

    creditCard = confirm(message + `\n ¿Querés pagar con tarjeta de crédito?`)

    // PAGA CON TARJETA

    if (creditCard){
        payments = Number(prompt(`Podés pagar en 3, 6 o 12 cuotas. 
        -En 3 cuotas tenés 5% de interés.
        -En 6 cuotas tenés 10% de interés.
        -En 12 cuotas tenés 25% de interés.
        ¿En cuántas cuotas querés pagar?`))

        payments3 = (total * 1.05) / 3;
        payments6 = (total * 1.10) / 6;
        payments12 = (total * 1.25) / 12;

        if (payments === 3){
            hasCode = confirm(message + `, en ${payments} cuotas de $${payments3}. \n ¿Tenés un código de descuento?` )
        } else if (payments === 6){
            hasCode = confirm(message + `, en ${payments} cuotas de $${payments6}.\n
            ¿Tenés un código de descuento?` )
        } else if (payments === 12) {
            hasCode = confirm(message + `, en ${payments} cuotas de $${payments12}.\n
            ¿Tenés un código de descuento?` )
        } else {
            hasCode = confirm(message + `\n ¿Tenés un código de descuento?`)
        }

    // PAGA EN EFECTIVO

    } else {
        hasCode = confirm(`¿Tenés un código de descuento?`)
    }

    // CÓDIGO DE DESCUENTO

    if (hasCode){
        userCode =prompt(`Ingresá tu código:`)

        // CÓDIGO CORRECTO

        if (userCode === discountCode) {

            newTotal = total * discountAmount

            payments3 = (newTotal * 1.05) / 3;
            payments6 = (newTotal * 1.10) / 6;
            payments12 = (newTotal * 1.25) / 12;

            
            discountMessage = `\n Tu total con el descuento del 10% es $${newTotal}`

            alert(`Tu código ingresó correctamente.`)

            if (creditCard) {

                if (payments === 3){
                alert(message + discountMessage + `, en ${payments} cuotas de $${payments3}.`)
                } else if (payments === 6) {
                alert(message + discountMessage + `, en ${payments} cuotas de $${payments6}.`)
                } else if (payments === 12) {
                alert(message + discountMessage + `, en ${payments} cuotas de $${payments12}.`)
                }
            } else {
                alert(message + discountMessage)
            }

        // CÓDIGO INCORRECTO

        } else {
            alert(`El código ingresado no es correcto.`)

            if (creditCard) {
                if (payments === 3){
                    alert(message + ` en ${payments} cuotas de $${payments3}.`)
                } else if (payments === 6) {
                    alert(message  + ` en ${payments} cuotas de $${payments6}.`)
                } else if (payments === 12) {
                    alert(message + ` en ${payments} cuotas de $${payments12}.`)
                } 
            } else {
                alert(message)
            }
        }
    } else {
        if (creditCard) {
            if (payments === 3){
                alert(message + ` en ${payments} cuotas de $${payments3}.`)
            } else if (payments === 6) {
                alert(message  + ` en ${payments} cuotas de $${payments6}.`)
            } else if (payments === 12) {
                alert(message + ` en ${payments} cuotas de $${payments12}.`)
            } 
        } else {
            alert(message)
        }
    }

    // SALUDO DE DESPEDIDA

    alert(`Gracias por tu compra, ${userName}.`)
 
// NO LLEVA PRODUCTOS
    
} else {
    alert(`Gracias por tu visita, ${userName}.`)
}