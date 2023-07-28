const firstFee = 410;
const addFee = 90;
const firstDistance = 300;

const calcFee = (distance) => {
    if(distance){
    console.log(firstFee+addFee*Math.trunc(distance/firstDistance)+"円");
    };
};

calcFee(300);
calcFee(1000);
calcFee(3000);