const dogs = 
[
    {
    name: '太郎',
    weight: 25,
    color: 'gray'
    },
    {
    name: 'ぽんた',
    weight: 18,
    color: 'white'
    },
    {
    name: 'もこ',
    weight: 23,
    color: 'brown'
    }
];

//体重20kg以上の犬を取得
const dogList = dogs.filter(item => item.weight > 20);

console.log(dogList);

//新しいリストを作成
const newDogList = dogs.map(item=>item.name);

console.log(newDogList);