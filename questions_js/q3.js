const calcShipFee = (weight) => {
    if (weight <6){
        console.log(500);
    }
    if (weight >=6) {
        console.log(500+(weight-5)*100);
    }
}

calcShipFee(6);
calcShipFee(4);
calcShipFee(25);