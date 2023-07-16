let songList = [{
    title : "Gonna Be Good",
    artist : [{name:"Madeon"}],
    duration : 4000
},
{
    title : "Look at the sky",
    artist : [{name:"Porter Robinson"}],
    duration : 4000
},
{
    title : "Lost in the Echo",
    artist : [{name:"Linkin Park"}],
    duration : 4000
}
]

//console.log(songList)

//with promise

let promiseFetchLagu = new Promise((resolve,reject) => setTimeout(()=>{
    const data = songList
    if(data){
        resolve("success")
        console.log("sucess")
        sout()
    }else{
        reject("failed")
        console.log("failed")
    }
},3000))

promiseFetchLagu.then(function(message){
    console.log(songList)
}).catch(function(message){
    console.log("Fetch Failed")
})

function sout(){
    console.log("aku anak kambung")
}
//with async await
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ambilLagu(){
    try{
        const data = songList
        await timeout(4000)
        return data

    }catch(error){
        throw(error)
    }
}

async function main(){
    try{
        const data = await ambilLagu()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

main()