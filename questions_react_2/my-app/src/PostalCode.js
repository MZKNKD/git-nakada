const PostalCode = props => {

    const URL = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

    return(<>
    <form  onSubmit={props.handleClick}>
    <label htmlFor="zip">郵便番号を入力してください</label>
    <input id="zip" type="text" name="zip" onChange={props.handleChange}/>
    <button>住所を取得</button><br/>
    <div id="error_message"></div>
    <label htmlFor="address">住所</label>
    <input id="address" type="text" name="address"/>
    </form>
    </>)
  }

export default PostalCode