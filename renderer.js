const information = document.querySelector("#info");
information.innerText = `This app is using:\nChrome: ${versions.chrome()}\nNode: ${versions.node()},\nElectron: ${versions.electron()}`;

const func = async () => {
    const response = await window.versions.ping();
    console.log(response);
}

func();

document.querySelector("#new_file").addEventListener("click",() => {
    window.logging.logged();
});

// let testthis = window.location.pathname.split("/");
// let currentpage = testthis[testthis.length - 1];


// if (currentpage === "index.html") {
//     window.location.replace("pages/sign-in.html");
// }

const get_pokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const gotit = await response.json();
    console.log(gotit);
}

get_pokemon();