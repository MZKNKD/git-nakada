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


//ラジオボタン作成のため、divのid取得
const target = document.getElementById('target');

drinks.forEach((element)=>{
    const inputRadioButton = document.createElement("input");
    inputRadioButton.type = "radio";
    inputRadioButton.name = "radioButton";
    inputRadioButton.id = "radio_button";
    inputRadioButton.value = element.name;

    const drinkLabel = document.createElement("label");
    // drinkLabel.htmlFor = "radio";
    const text = document.createTextNode(element.name);
    //text.name = "textName";
    target.appendChild(drinkLabel);
    drinkLabel.appendChild(inputRadioButton);
    drinkLabel.appendChild(text);

    console.log(inputRadioButton);
});



//「購入する」ボタンのid取得
const buttonForm = document.getElementById("button_form");


//クリックしたら計算する
buttonForm.addEventListener('click', () => {

    var numberForm = document.getElementById("money_in").value;

    var drinkForm = document.getElementsByName("radioButton");

    var drinkFormArray = Array.from(drinkForm);

    var radio = "";

        for (let i = 0; i < drinkFormArray.length; i++){
            if (drinkFormArray[i].checked == true){
                radio = drinkFormArray[i].value;

                    //console.log(numberForm);
                    console.log(radio);
                    
                    const vendingMachine = (money, radio) => {
                        drinks.find((value)=>{
                            if (value.name === radio && money >= value.price) {
                                show.textContent = value.name+'を買いました。おつりは'+(money-value.price)+'円です';
                            } else if (value.name === radio){ 
                                show.textContent ='お金が足りません';
                            };
                        });
                    };

                    vendingMachine(numberForm, radio);
            } else if (drinkFormArray[i].value === false) {
                console.log("エラー")
            }
    
        } 

})