"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
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
    coffees.forEach(function(coffee) {
        if(selectedRoast !== 'light'&& selectedRoast !== 'medium'&&selectedRoast !== 'dark'){
        filteredCoffees = coffees;
        }
        else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
function searchCoffees(e) {
    var searchCoffee = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name === searchCoffee) {
            console.log(searchCoffee)
        }
    });

}
// filter coffees


// function filterCoffees(e) {
//     var searchBar = document.forms['coffees'].querySelector('input');
//     searchBar.addEventListener('keyup', function (e) {
//         var term = e.target.value.toLowerCase()
//         var title = array.getElementsByTagName('name')
//         Array.from(coffees).forEach(function (coffee) {
//             var coffeeName = coffees.name;
//             if (coffeeName.toLowerCase().indexOf(term) != -1) {
//                 title.style.display = 'block'
//             } else {
//                 title.style.display = 'none'
//             }
//         })
//     })
// }
// (function() {
//     // Get the body element (notice we need to use index 0 of the array!)
//     var bodyElement = document.getElementsByName('');
//
//     // Change the body font color
//     bodyElement.style.color = '#444'; // Dark grey
//
//     bodyElement.style.fontFamily = "Helvetica, Verdana, Sans-Serif";
// })();
// car.honk = function () {
//     alert("Honk! Honk!");
// };
// var name = coffees.name;
// name.style.color = 'red';
//
// document.getElementsByTagName(name).style.fontsize = "x-large"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('keyUp', searchCoffees);
