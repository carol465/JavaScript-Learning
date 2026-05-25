/*Enunciado:
Recebes um array de viagens (trips), onde cada viagem é { distance, time } (km, horas).
Implementa:
averageSpeed(trips) — retorna a velocidade média global (distância total / tempo total). Arredonda a 2 casas decimais.
fastestTrip(trips) — retorna o objeto da viagem com maior velocidade individual (distance / time).
tripsAbove(trips, minSpeed) — retorna array de viagens com velocidade média acima de minSpeed.

Se trips estiver vazio, averageSpeed retorna 0 e fastestTrip retorna null.
*/

const trips=[
    {distance: 300, time: 3 },
    {distance: 700, time: 6 }
];

function averageSpeed(trips){
    let speed = 0;
    trips.forEach(trip =>{
        speed += trip.distance / trip.time;  
    })
    average = Math.round(speed/trips.length);
    return average;
}

function fastestTrip(trips){
    return trips.reduce((max, t) =>{
        if ((t.distance / t.time) > (max.distance / max.time)){
            return t;
        }
        else{
            return max;
        }
    });
}

function tripsAbove(trips, minSpeed){
return trips.filter(t => (t.distance / t.time) > minSpeed);
}


// Teste:
console.log(averageSpeed(trips));
console.log(fastestTrip(trips));
console.log(tripsAbove(trips, 20));