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

var drinksOfForm = document.getElementsByName("drink");

drinksOfForm.forEach(element => {
    console.log(element);
});
