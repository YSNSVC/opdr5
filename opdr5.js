/*
We're going to write a function that makes pizza (sadly, we're not going to actually make pizza).

create a new JavaScript file
first just check if you can run it with node
to take a step in the pizza-making process print the step to the console
think of a good clear name for your function first
think of at least three steps you need in your function
write the function
run the code, are you getting the result you expect? Why (not)?
now add code to call your function
now call your function three times
*/


const makePizza = function () {
    console.log("Put the Ingredients");
    console.log("Knead for about 4 minutes, on a floured surface, until dough is smooth and elastic. Add more flour, if needed. (If using RapidRise(R) Yeast, let dough rest, covered, for 10 minutes.");
    console.log("Divide dough in half. Pat each half (with floured hands) into a 12-inch greased pizza pan OR roll dough to fit pans.");
    console.log("For pizzas: Preheat oven to 425 degrees F.Top crusts with sauce, pepperoni and cheese.");
    console.log("Bake for 18 to 20 minutes until crusts are browned and cheese is bubbly.For best results, rotate pizza pans between top and bottom oven racks halfway through baking. ");
};

/*
makePizza();
makePizza();
makePizza();
/*

/*
Now we have a single function, but let's make another function! We also want to make sushi.
continue in the same JavaScript file
add a function that makes sushi, use a good name
call this function, check that it works
*/


const makeShushi = function () {
    console.log("Step 1");
    console.log("Step 2");
    console.log("Step 3");
    console.log("Step 5");
    console.log("Shushi is ready");
};

/*
makeShushi();
*/

//So now, let's for a minute pretend that we work in a restaurant and we get an order for three meals of sushi and two pizzas.
//change your code so that the output of your program is the steps for making sushi, three times and pizza two times


makeShushi();
makeShushi();
makeShushi();
makePizza();
makePizza();