const form = document.getElementById("form");
const inputFile = document.getElementById("file");

const formData = new FormData();

const handleSubmit = (event) => {
    event.preventDefault();

    for (const file of inputFile.files) {
        formData.append("files", file);
    }

    fetch("http://127.0.0.1:5500/", {
        method: "post",
        body: formData,
    }).catch((error) => ("Something went wrong!", error));
};

form.addEventListener("submit", handleSubmit);