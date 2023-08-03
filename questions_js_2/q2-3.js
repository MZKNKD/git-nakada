//自動販売機の関数

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

//console.log(drinks[0].price);

const vendingMachine = (money, i) => {
    if (money > drinks[i].price){
        console.log(drinks[i].name+'を買いました。おつりは'+(money-drinks[i].price)+'円です');
    } else {
        console.log('お金が足りません');
    }
}

vendingMachine(20, 1);