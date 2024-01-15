const information = document.querySelector("#info");
information.innerText = `This app is using:\nChrome: ${versions.chrome()}\nNode: ${versions.node()},\nElectron: ${versions.electron()}`;

const func = async () => {
    const response = await window.versions.ping();
    console.log(response);
}

func();