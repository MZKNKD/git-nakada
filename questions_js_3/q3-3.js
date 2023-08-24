const form = document.getElementById("form_html");
const inputFile = document.getElementById("file");

const formData = new FormData();

//サーバーのアドレスを書く（今回は空欄にしました）
const url = '';

const post_options = {
    method: 'post',
    body: formData
};



const fileSubmit = () => {

    for (const file of inputFile.files) {
        formData.append("files", file);
    }

    fetch(url, post_options).catch((error) => ("エラーが発生しました", error));
};

form.addEventListener('submit', fileSubmit);
