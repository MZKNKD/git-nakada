// App.js
import logo from './logo.svg';
import './App.css';
import FormComponent from './FormComponent';
import PostalCode from './PostalCode';
import React, { useState } from 'react';

function App() {
  const [postalCode, setPostalCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [address, setAddress] = useState('');

  const zipcloudURL = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  const options = {
    method: 'GET'
  };

  const handleChange = (newPostalCode) => {
    setPostalCode(newPostalCode);
  };

  const handleClick = async e => {
    e.preventDefault()
    setErrorMessage(''); // Reset error message
    setAddress(''); // Reset address

    if (/^\d{7}$/.test(postalCode)) {  //.test:合致しているかどうかを検証し、結果として true を返す
      const searchURL = zipcloudURL + postalCode;
      console.log(searchURL);

      try {
        const response = await fetch(searchURL, options);
        const response2 = await response.json();

        if (response2.results === null) {
          setErrorMessage('該当する住所が見つかりませんでした');
        } else {
          console.log(response2.results[0].address1);
          const fullAddress = response2.results[0].address1 + response2.results[0].address2 + response2.results[0].address3;
          console.log(fullAddress);
          setAddress(fullAddress);
        }
      } catch (e) {
        console.log("エラー：", e.message);
        //setErrorMessage('エラーが発生しました');
      }
    } else {
      setErrorMessage('7桁の数字をハイフン無しで入力してください');
    }
  };

  return (
    <div className="App">
      <PostalCode
        postalCode={postalCode}
        handleChange={handleChange}
        handleClick={handleClick}
        errorMessage={errorMessage}
        address={address}
      />
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

export default App;