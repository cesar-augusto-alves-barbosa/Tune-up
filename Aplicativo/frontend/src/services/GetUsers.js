const getBtn = document.getElementById('getBtn');
const area = document.getElementById('area');



const getData = () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8080/usuarios/login/${email}/${senha}`);
    xhr.responseType = 'json';
    xhr.onload = () => {
        // const resposta = JSON.parse(xhr.response);
        const resposta = xhr.response;//pega o que retorna do get
        console.log(xhr.status);       
        if(xhr.status == 200) {
            console.log("foi")
            window.location.href="https://www.google.com";
        }else{
            console.log("ruim")
        }
    };
    xhr.send();

};


getBtn.addEventListener('click', getData);