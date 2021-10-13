

const pDemo = document.getElementById('demo') 
const button = document.querySelector(".residentBtn")


function button_clicked() {
    axios.get('https://swapi.dev/api/planets/2')
        .then(response => {
            for (i=0; i<response.data.residents.length; i++) {
                axios.get(response.data.residents[i])
                .then(res => {
                    const person = document.createElement("li")
                    person.textContent=(res.data.name)
                    pDemo.appendChild(person)
                })
        }
    })
    .catch(error => {
        console.log(error)
    })
}

button.addEventListener("click", button_clicked)