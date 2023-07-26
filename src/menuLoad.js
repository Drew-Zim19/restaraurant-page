export function load(){

    const contentDiv = document.getElementById("content2");

    const drinksDiv = document.createElement('div');
    const beer = document.createElement('p');
    beer.textContent = 'Beer $8';
    drinksDiv.appendChild(beer);
    const soda = document.createElement('p');
    soda.textContent = 'Soda $3';
    drinksDiv.appendChild(soda);
    const water = document.createElement('p');
    water.textContent = 'Water Free';
    drinksDiv.appendChild(water);
    contentDiv.appendChild(drinksDiv);

    const appsDiv = document.createElement('div');
    const wings = document.createElement('p');
    wings.textContent = 'Wings $10';
    appsDiv.appendChild(wings);
    const salad = document.createElement('p');
    salad.textContent = 'Salad $9';
    appsDiv.appendChild(salad);
    contentDiv.appendChild(appsDiv);

    const entreeDiv = document.createElement('div');
    const cheesePizza = document.createElement('p');
    cheesePizza.textContent = 'Cheese Pizza $15';
    entreeDiv.appendChild(cheesePizza);
    const pepPizza = document.createElement('p');
    pepPizza.textContent = 'Pepperoni Pizza $19';
    entreeDiv.appendChild(pepPizza);
    contentDiv.appendChild(entreeDiv);

    document.body.appendChild(contentDiv);
}