
//event listener
document.getElementById("random").onclick = () =>{
    const number = Math.ceil(Math.random()* 10)
    fetch(`https://swapi.dev/api/people/${number}/`)
    .then(response => response.json())
    .then(data => {
        const name = document.getElementById("name")
        name.innerText = data['name']
        console.log(data["name"])
        const height = document.getElementById("height")
        height.innerText = data['height']
        console.log(data["height"])
        const mass = document.getElementById("mass")
        mass.innerText = data['mass']
        console.log(data["mass"])
    })
}