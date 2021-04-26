"use strict"

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    var html = '<tr class="coffee d-flex flex-row card flex-end" >';
    html += '<td class="d-inline-flex flex-row" style="font-size: xx-large; color: black; font-family: Apple SD Gothic Neo,sans-serif; font-weight: bold">' + coffee.name + '</td>';
    html += '<td class="d-inline-flex flex-row text-bottom" style=" font-size: large; color: gray; font-family: Apple SD Gothic Neo,sans-serif; font-weight: lighter; ">' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var searchCoffee = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast !== 'light' && selectedRoast !== 'medium' && selectedRoast !== 'dark') {
            filteredCoffees = coffees;
        } else if (coffee.roast === selectedRoast && ((coffee.name.toLowerCase()).includes(searchCoffee))) {
            filteredCoffees.push(coffee);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    });
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffees);
