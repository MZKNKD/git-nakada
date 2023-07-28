const levelJudge = (strike) => {
    if (strike>=5){
        console.log("初級");
    };
    if (strike>=2 && strike<5){
        console.log("中級");
    };
    if (strike<2){
        console.log("上級");
    };
}

levelJudge(1);
levelJudge(8);
levelJudge(4);

