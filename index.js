let xp = 9001;
let heroi = "Goku";

if (xp <= 1000) {
    console.log(`O herói de nome ${heroi} está no level: Ferro` );
} else if (xp >= 1001 && xp <= 2000) {
    console.log(`O herói de nome ${heroi} está no level: Bronze`);
} else if (xp >= 2001 && xp <= 5000) {
    console.log(`O herói de nome ${heroi} está no level: Prata ouro`);
} else if (xp >= 5001 && xp <= 8000) {
    console.log(`O herói de nome ${heroi} está no level: Diamante`);
} else if (xp >= 8001 && xp <= 9000) {
    console.log(`O herói de nome ${heroi} está no level: Imortal`);
}else{
    console.log(`O herói de nome ${heroi} está no level: Ascenddente`);
}
