const drinks = 
[
    {
    name: 'コーラ',
    price: 150
    },
    {
    name: '緑茶',
    price: 120
    },
    {
    name: '水',
    price: 80
    },
    {
    name: 'コーヒー',
    price: 180    
    }
];

// var drinksOfForm = document.getElementsByName("drink");

// drinksOfForm.forEach(element => {
//     console.log(element);
// });

const target = document.getElementById('target');

drinks.forEach((element)=>{
    const inputRadioButton = document.createElement("input");
    inputRadioButton.type = "radio";
    inputRadioButton.name = "radioButton";
    inputRadioButton.id = "radio_button";

    const drinkLabel = document.createElement("label");
    // drinkLabel.htmlFor = "radio";
    text = document.createTextNode(element.name);
    target.appendChild(drinkLabel);
    drinkLabel.appendChild(inputRadioButton);
    drinkLabel.appendChild(text);
});

