"use strict";

// const moneyIn = document.forms.vending_machine.money.value;
// console.log(moneyIn);

// const money_in = document.getElementById('money_in');
// console.log(money_in);

// function calcChange (){
//     const test = document.getElementById('show');
//     test.textContent = '';
// }

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

    // const money = numberForm;
    // const item = radio;
    
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

    // const vendingMachine = (numberForm, radio) => {

    //     const show = document.getElementById("show");

    //     drinks.find(value => {
    //         if (value.name === radio && numberForm >= value.price) {
    //             show.textContent = value.name + "を買いました。おつりは" +(numberForm-value.price)+"円です";
    //         } else if (value.name === drinkForm){ 
    //             show.textContent = "お金が足りません";
    //         };
    //     });
    // };
})




        // const checkRadioValue = "";

        // for (let i = 0; i < document.vending_machine.drink.length-1; i++){
        //     if (document.vending_machine.drink[i].checked){
        //         // checkRadioValue = element.item[i].value;
        //     console.log('テスト中');
        //     }
        // }


        
//動く。表示し方
    //     console.log(nuumberForm);
    //     console.log(checkRadioValue);
    //     // const show = document.getElementById("show");
    //     // show.textContent = "テスト中";
    // });



    
// buttonForm.addEventListener('click', () => {

//     const nuumberForm = document.getElementById("money_in").value;

//     var drinkForm = document.getElementByName("drink").value;
//     var show = document.getElementById("show");

//     const checkRadioValue = "";

//         for (let i = 0; i < element.length; i++){
//             if (elements.item(i).checked){
//                 checkRadioValue = elements.item(i).value;
//             }
//         }
    
//     const vendingMachine = (numberForm, drinkForm) => {

//         drinks.find((value)=>{
//             if (value.name === drinkForm && numberForm >= value.price) {
//                 show.textContent = value.name + "を買いました。おつりは" +(numberForm-value.price)+"円です";
//             } else if (value.name === drinkForm){ 
//                 show.textContent = "お金が足りません";
//             };
//         });
    
//     };

// });
