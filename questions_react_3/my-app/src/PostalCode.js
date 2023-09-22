import React from 'react';

const PostalCode = props => {
  return (
    <>
      <form onSubmit={props.handleClick}>
        <label htmlFor="zip">郵便番号を入力してください</label>
        {//props.handleChange(e.target.value) を呼び出して、親コンポーネントから渡された handleChange 関数を実行
        }
        <input id="zip" type="text" name="zip" onChange={(e) => props.handleChange(e.target.value)} value={props.postalCode}/>
        <button>住所を取得</button>
        <br />
        <div className={props.errorMessage ? 'red' : ''}>{props.errorMessage}</div>
        <label htmlFor="address">住所</label>
        <input id="address" type="text" name="address" value={props.address}/>
      </form>
    </>
  );
};

export default PostalCode;
