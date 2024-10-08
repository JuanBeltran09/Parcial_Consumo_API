(()=>{
    fetch('https://starwars-n5ec-developuptcs-projects.vercel.app/')
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
})