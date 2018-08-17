function onDeposit(pervVznos, procStavka, termInYears) {
    let total = pervVznos;
    for (i = 0; i < termInYears; i++) {
        total = total * (100 + procStavka) / 100;
    }
    return total;
};

let pervVznos = 100;//+prompt("Первонач взнос");
let procStavka = 5;//+prompt("проц ставка в процентах");
let termInYears = 10;//+prompt("Срок в годах");

console.log(onDeposit(pervVznos, procStavka, termInYears));
