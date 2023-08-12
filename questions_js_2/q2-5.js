"use strict";

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




const buttonForm = document.getElementById("target");



buttonForm.addEventListener('click', () => {

    //動く
    var numberForm = document.getElementById("money_in").value;

    var drinkForm = document.getElementsByName("drink");
    var radio = "";

        for (let i = 0; i < drinkForm.length; i++){
            if (drinkForm[i].checked){
                radio = drinkForm[i].value;
            }
        }

    console.log(numberForm);
    console.log(radio);
    
    const vendingMachine = (money, item) => {
        drinks.find((value)=>{
            if (value.name === item && money >= value.price) {
                show.textContent = value.name+'を買いました。おつりは'+(money-value.price)+'円です';
            } else if (value.name === item){ 
                show.textContent ='お金が足りません';
            };
        });
    };

    vendingMachine(numberForm, radio);
})
