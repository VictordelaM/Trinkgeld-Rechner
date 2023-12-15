function calc () {
    let rechnung = document.querySelector("#rechnung").value
    let share = document.querySelector("#share").value
    let service = document.querySelector("#service").value
    let output = document.querySelector("#output")
    let tip = null
    switch (service) {
        case "1":
            tip = 0
            break
        case "2":
            tip = (rechnung / share)* 0.02
            break
        case "3":
            tip = (rechnung / share)* 0.05
            break
        case "4":
            tip = (rechnung / share)* 0.10
            break
        case "5":
            tip = (rechnung / share)* 0.15
            break
        case "6":
            tip = (rechnung / share)* 0.20
            break
        case "7":
            tip = (rechnung / share)* 0.25
            break
        case "8":
            tip = (rechnung / share)* 0.30
            break
        case "9":
            tip = (rechnung / share)* 0.40
            break
        case "10":
            tip = 10000000 
            break
    }
    output.textContent = `Du bezahlst ${((rechnung/share)+tip).toFixed(2)}€. Das sind ${tip.toFixed(2)}€ Trinkgeld`
}