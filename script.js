let DogImageDiv=document.getElementById('DogImage')
let NewDiv=document.getElementById('New')
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(json=>
    {console.log(json.message)
     DogImageDiv.innerHTML=`<img src='${json.message}'/>`
    }
    )
NewDiv.onclick=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(json=>
    {console.log(json.message)
     DogImageDiv.innerHTML=`<img src='${json.message}'/>`
    }
    )
}