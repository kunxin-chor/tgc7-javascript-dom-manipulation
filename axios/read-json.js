fetch('data.json').then((r)=>{
    return r.json()
}).then(function(json){
    console.log(json);
})