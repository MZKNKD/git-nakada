const word1 = ["code", "apple", "peach"];
const word2 = ["data", "orange", "grape"];

function lengthJudge() { 
    for(i=0;i<word1.length;i++){
        if(word1[i].length === word2[i].length){
            console.log('○');
        } else {
            console.log('×');
        }
    }
}

lengthJudge();

