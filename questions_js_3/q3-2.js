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

    let numberForm = document.getElementById("money_in").value;

    const drinkForm = document.getElementsByName("radioButton");

    const drinkFormArray = Array.from(drinkForm);

    //計算結果表示場所
    const show = document.getElementById("show");

    //バリデーションメッセージ表示場所
    const showMessage = document.getElementById("show_message");

    let radio = "";
    const errorMessage = "飲み物を選んでください";

        for (let i = 0; i < drinkFormArray.length; i++){
            if (drinkFormArray[i].checked){
                radio = drinkFormArray[i].value;
                showMessage.classList.add('remove');

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

        
        } else if (drinkFormArray[i].checked.length == 0) {
            return errorMessage;
        }
        showMessage.textContent = errorMessage;
        showMessage.classList.add('red');
    }
})