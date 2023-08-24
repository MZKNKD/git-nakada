"use strict";

const zipcloudURL = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

const button = document.getElementById('form_button');

const errorMessageNoData = document.getElementById('error_nodata');

const options = {
    method: 'GET'
};

const errorMessage = document.getElementById("error_message");

const postalNumber = document.getElementById('postcode_input').value;

button.addEventListener('click',()=>{

    const postalNumber = document.getElementById('postcode_input').value;

    if(postalNumber.length === 7){
        const searchURL = zipcloudURL + postalNumber;
        console.log(postalNumber);
        console.log(searchURL);
        errorMessage.classList.add('red', 'remove');
        //addressShow.textContent = postalNumber;
 
    
        function getPostCode(searchURL, options){
            return fetch(searchURL, options)
            .then( response => response.json())
                    .then( response2 => {
                        if(response2.results === null){
                            errorMessage.classList.remove('remove');
                            errorMessage.textContent = '住所の検索ができませんでした';
                        };

                        console.log(response2.results[0].address1);
                        var fullAddress = response2.results[0].address1 + response2.results[0].address2 + response2.results[0].address3;
                        address_input.value = fullAddress;


                    
                    }).catch(e=>{
                        console.log("エラー：", e.message);
                });
            }
        
        async function getCode(searchURL, options){
            const response = await getPostCode(searchURL, options);
            console.log(response);
        }
        getCode(searchURL, options);
    } else {
        errorMessage.textContent = "7桁の数字をハイフン無しで入力してください";
    }
})



// fetch(searchURL, options)
// .then( response => response.json())
// .then( response2 => {
//     console.log(response2.results[0].address1);
//     const fullAddress = response2.results[0].address1 + response2.results[0].address2 + response2.results[0].address3;
//     address_input.value = fullAddress;
// }).catch(e=>console.log("エラー：", e.message))
// } else if (postalNumber.length !== 7){
// errorMessage.textContent = "7桁の数字をハイフン無しで入力してください";