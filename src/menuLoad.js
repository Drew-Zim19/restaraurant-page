export function load(){

    const contentDiv = document.getElementById("content2");
    
    const drinksDiv = document.createElement('div');
    drinksDiv.textContent = 'Drinks:';
    const beer = document.createElement('h5');
    beer.textContent = 'Beer $8';
    drinksDiv.appendChild(beer);
    const soda = document.createElement('h5');
    soda.textContent = 'Soda $3';
    drinksDiv.appendChild(soda);
    const water = document.createElement('h5');
    water.textContent = 'Water Free';
    drinksDiv.appendChild(water);
    contentDiv.appendChild(drinksDiv);

    const appsDiv = document.createElement('div');
    appsDiv.textContent = 'Appetizers:';
    const wings = document.createElement('h5');
    wings.textContent = 'Wings $10';
    appsDiv.appendChild(wings);
    const salad = document.createElement('h5');
    salad.textContent = 'Salad $9';
    appsDiv.appendChild(salad);
    contentDiv.appendChild(appsDiv);

    const entreeDiv = document.createElement('div');
    entreeDiv.textContent = 'Entrees:';
    const cheesePizza = document.createElement('h5');
    cheesePizza.textContent = 'Cheese Pizza $15';
    entreeDiv.appendChild(cheesePizza);
    const pepPizza = document.createElement('h5');
    pepPizza.textContent = 'Pepperoni Pizza $19';
    entreeDiv.appendChild(pepPizza);
    contentDiv.appendChild(entreeDiv);

    document.body.appendChild(contentDiv);
}