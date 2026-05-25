/*Enunciado:
Implementa calculateDemerits(speed, speedLimit) que calcula pontos de penalização por excesso de velocidade.
Regras:
Se speed <= speedLimit → 0 pontos.
Se speed > speedLimit → 1 ponto por cada 5 km/h acima do limite (arredondado para baixo).
Se acumular mais de 12 pontos, a função deve lançar Error("License suspended").

Implementa também a função licenseStatus(totalPoints) que recebe um total de pontos acumulados e retorna:
"clean" se 0 pontos.
"warning" se 1–6 pontos.
"danger" se 7–11 pontos.
"suspended" se >= 12 pontos.
*/

function calculateDemerits(speed, speedLimit) {
    if (speed <= speedLimit) return 0;

    const difference = speed - speedLimit;
    const totalPoints = parseInt(difference / 5); // em vez de usar math.floor, uso o parseInt para colocar inteiro

    if (totalPoints >= 12) throw new Error("License suspended");

    return totalPoints;
}

function licenseStatus(totalPoints) {
    if (totalPoints === 0) return "clean";
    else if (totalPoints <= 6) return "warning";
    else if (totalPoints <= 11) return "danger";
    else return "suspended";
}

// Testes:
console.log(calculateDemerits(1, 70)); 
console.log(calculateDemerits(50, 70));   
console.log(licenseStatus(0));            
console.log(licenseStatus(5));           
console.log(licenseStatus(9));           
console.log(licenseStatus(12));          