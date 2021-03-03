function sizeCost() {
    var size;
    size = document.getElementById("size").value;

    if (size = "small") {
        alert("Will Cost you KES 500/-");
        return false;
    } else if (size = "medium") {
        alert("Will Cost you KES 700/-");
        return false;
    } else if (size = "large") {
        alert("Will Cost you KES 1000/-");
        return false;
    }

};

function crustCost() {
    var crust;
    crust = document.getElementById("crust").value;

    if (crust = "crispy") {
        alert("A small crispy pizza costs KES 500/-");
        return false;
    } else if (crust = "stuffed") {
        alert("A Small stuffed pizza costs KES 800/-");
        return false;
    } else if (crust = "gluten-free") {
        alert("A small gluten-free pizza costs KES 1000/-");
        return false;
    }

};

function toppingsCost() {
    var toppings;
    crust = document.getElementById("toppings").value;

    if (toppings = "cheese") {
        alert("A small cheese-topped pizza costs 600/-");
        return false;
    } else if (toppings = "hawaian") {
        alert("A Small hawaian-topped pizza costs KES 700/-");
        return false;
    } else if (toppings = "none") {
        alert("A small pizza without toppings is KES 500/-");
        return false;
    }

};


function totalCost() {

    let total;
    var size_of_pizza = document.getElementById("size").value;
    var crust_of_pizza = document.getElementById("crust").value;
    var toppings_on_pizza = document.getElementById("toppings").value;
    var number_of_pizzas = document.getElementById("number-of-pizzas").value;
    var delivery = document.getElementById("delivery").value;

    switch (size_of_pizza) {
        case ("small"):
            switch (crust_of_pizza) {
                case ("crispy"):
                    switch (toppings_on_pizza) {
                        case ("cheese"):
                            switch (delivery) {
                                case ("yes"):
                                    total = (500 + 100 + 200) * number_of_pizzas;
                                    break;
                            }
                    }
            }
    }
    return total;
};