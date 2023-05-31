let inp =document.querySelector('input')
let btn = document.querySelector(".btn")
let cityname = document.querySelector(".cityname")
let degree = document.querySelector(".degree")
let body = document.querySelector('body')

window.addEventListener("keyup" , e => {
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
    if(e.key == 'Enter'){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
        .then(res => res.json())
        .then(data => {
            let name = data?.name
            let temp = Math.floor(data?.main?.temp)
            cityname.innerHTML = name
            degree.innerHTML = temp + '°C'
            body.style.background = 
            'url(https://source.unsplash.com/1600x900/?' + inp.value + ')'
            inp.value = ''
        })
    }else{
        btn.onclick = () => {
            let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
            .then((res) => res.json())
            .then((data) => {
                let name = data?.name
                let temp = Math.floor(data?.main?.temp)
                cityname.innerHTML = name
                degree.innerHTML = temp + '°C'
                body.style.background = 
                'url(https://source.unsplash.com/1600x900/?' + inp.value + ')'
                inp.value = ''
            }).catch((err) => {
                alert("Enter incorrect information")
            })
        }
    }
})