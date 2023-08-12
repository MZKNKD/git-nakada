//よく使いそうな関数10個 function.txtを参考にしました


// 1. array.includes()
// 特定の要素の検索

const array1 = ['hokkaido', 'tokyo', 'kanagawa', 'kyoto', 'fukuoka', 'okinawa'];

const search1 = array1.includes('tokyo');
console.log(search1);

// 2. string.replace()　指定した文字列を置き換える

const str1 = '明日の天気予報は晴れです'
const strChanged = str1.replace('晴れ', '曇り');
console.log(strChanged);

// 3. array.slice() 指定した番号～最後まで取り出す
const slice = array1.slice(3);
console.log(slice);

// 4. array.concat()  2つ以上の配列を結合する
const array2 = ['usa', 'mexico', 'guatemala']; 
const array3 = ['uk', 'germany', 'spain', 'italy'];

const allArray = array1.concat(array2, array3);
console.log(allArray);

// 5. string.toLowerCase() 大文字を小文字に変換する
const str2 = 'WELCOME TO TOKYO 2023'
const lowerStr = str2.toLowerCase();
console.log(lowerStr);

// 6. map.delete()  Mapオブジェクトから指定した要素を削除する
const map1 = new Map();
map1.set(1, 'tea');
map1.set(2, 'coffee');
map1.set(3, 'water');

const deleteMap = map1.delete(2);
console.log(deleteMap);
console.log(map1);

// 7. Math.floor() 小数点部分を切り捨て
const calc = 10/7;
console.log(calc);
console.log(Math.floor(calc));

// 8. array.find(callback)  配列で条件を満たす最初の要素を検索
const array4 = [1, 2, 6, 10, 18];
const find1 = array4.find(e=>
    e > 5
);
console.log(find1);

// 9. array.map(callback)  新しい配列を作成

const map2 = array4.map(e => e*10);
console.log(map2);

// 10. array.indexOf()　指定された要素があるかどうかを検索し、あればインデックスを返す

const index1 = array1.indexOf('kyoto');
console.log(index1);

const index2 = array1.indexOf('aichi');
console.log(index2);