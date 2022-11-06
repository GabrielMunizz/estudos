function createGame(player1, player2, player3, player4, player5, player6, player7, player8) {
    return `
    <li><img src="./assets/Bandeiras/icon=${player1}.svg" alt="${player1}">
                        <strong>07:00</strong>
                        <img src="./assets/Bandeiras/icon=${player2}.svg" alt="${player2}"></li>

                        <li><img src="./assets/Bandeiras/icon=${player3}.svg" alt="${player3}">
                            <strong>10:00</strong>
                            <img src="./assets/Bandeiras/icon=${player4}.svg" alt="${player4}"></li>

                            <li><img src="./assets/Bandeiras/icon=${player5}.svg" alt="${player5}">
                                <strong>13:00</strong>
                                <img src="./assets/Bandeiras/icon=${player6}.svg" alt="${player6}"></li>

                                <li><img src="./assets/Bandeiras/icon=${player7}.svg" alt="${player7}">
                                    <strong>16:00</strong>
                                    <img src="/assets/Bandeiras/icon=${player8}.svg" alt="${player8}">
                                    </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
                <h2>${date}<span>${day}</span></h2>
                <ul>
                  ${games}                                                           
                </ul>
            </div>

    `
}

document.querySelector("#cards").innerHTML = 

        
            createCard("24/11","quinta", createGame("switzerland", "cameroon", "uruguay", "south korea", "portugal", "ghana", "brazil", "serbia") ) +
            createCard("28/11", "Segunda", createGame("cameroon", "serbia", "south korea", "ghana", "brazil", "switzerland", "portugal", "uruguay")) +
            createCard("02/12", "Sexta", createGame("south korea", "portugal", "ghana", "uruguay", "serbia", "switzerland", "cameroon", "brazil"))
        
        