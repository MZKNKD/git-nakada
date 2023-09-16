import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';
import PostalCode from './PostalCode';
import React, {useState} from 'react'


function App() {
  return (
    <div className="App">
      <GetAddress/>
      <FormComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const zipcloudURL = "https://zipcloud.ibsnet.co.jp/api/search?zipcode="

const options = {
  method: 'GET'
};

export const GetAddress = () => {
  const [postalCode, setPostalCode ] = useState({
    zip: ''
  })

  const handleChange = e =>{
    const {name, value} = e.target
    setPostalCode({
        ...postalCode,
        [name]: value,
    })
  }

  const handleClick = e => {
    e.preventDefault()

    const errorMessage = document.getElementById("error_message");
    let addressInput = document.getElementById("address")

    if(postalCode.zip.length === 7){
      const searchURL = zipcloudURL + postalCode.zip;
      console.log(searchURL);
      errorMessage.classList.add('red', 'remove');

      function getPostCode(searchURL, options){
          return fetch(searchURL, options)
          .then( response => response.json())
                  .then( response2 => {
                      if(response2.results === null){
                          errorMessage.classList.remove('remove');
                          errorMessage.textContent = '住所の検索ができませんでした';
                          addressInput.value = null
                      };

                      console.log(response2.results[0].address1);
                      var fullAddress = response2.results[0].address1 + response2.results[0].address2 + response2.results[0].address3;
                      console.log(fullAddress)
                      addressInput.value = fullAddress;

                  }).catch(e=>{
                      console.log("エラー：", e.message);
              });
          }
      
      async function getCode(searchURL, options){
          const response = await getPostCode(searchURL, options);
      }

      getCode(searchURL, options);
    } else {
        errorMessage.textContent = "7桁の数字をハイフン無しで入力してください";
        errorMessage.classList.remove('remove');
        errorMessage.classList.add('red')
        addressInput.value = null
    }
  }

  return(
    <>
      <PostalCode handleClick={handleClick} handleChange={handleChange}/>
    </>
  )
}

export default App;
