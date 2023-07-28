const cost = [1500, 2000, 5000];
const member = [15, 18, 9];


//costとmemberどうしをかけ合わせて、
//sumの配列を作ったり、sum[i]を定義したかったのですが、
//やり方が分からず、console.logの中身を　cost[i]*member[i]　としました

const calcSum = (i) => {
    for(i=0;i<cost.length;i++){
        console.log(cost[i]*member[i]+"円");
    };
};

calcSum(0);



// const sum = cost.map(function(){
//     console.log(sum);
// });



// ;

// const calcSum = (i) => {
//     for(i=0;i<cost.length;i++){
//         console.log(sum[i]+"円");
//     }
// }



// calcSum(0);