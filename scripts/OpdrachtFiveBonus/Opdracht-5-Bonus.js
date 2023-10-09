let userInput = prompt('Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]');
console.log(userInput);

const choice = prompt(`Je koos voor ${userInput}. Over welke functie wil je meer weten?
Voer een getal tussen de 0 en 4 in. 0: ${departments[userInput].jobs[0].title}
1: ${departments[userInput].jobs[1].title} 2: ${departments[userInput].jobs[2].title}
3: ${departments[userInput].jobs[3].title}`)


//  ----------------- Poging om error melding goed weer te geven, nog niet gelukt. Tips? ----------------
// if (userInput =! "marketing", "sales", "customer-service"){
//     document.getElementById('error-message').textContent = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen"
//
// }

document.getElementById('role-title').textContent = departments[userInput].jobs[[choice]].title;
document.getElementById('department-description').textContent = departments[userInput].description;
document.getElementById('role-description').textContent =departments[userInput].jobs[[choice]].description;