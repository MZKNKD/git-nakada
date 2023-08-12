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

const vendingMachine = (money, item) => {
    drinks.find((value)=>{
        if (value.name === item && money >= value.price) {
            console.log(value.name+'を買いました。おつりは'+(money-value.price)+'円です');
        } else if (value.name === item){ 
            console.log('お金が足りません');
        };
    });

};

vendingMachine(1000, '緑茶');




        // } else if (value.name === item && money < value.price) {
        //     console.log('お金が足りません');
        // } else {
        //     console.log('該当なし');