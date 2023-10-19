// Initialize the variable
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItem=Array.from(document.getElementsByClassName("songItem"));
let masterSongName=document.getElementById("masterSongName");


let songs=[
    {songName:"Salam-e-Ishq",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"Salam-e",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"Salam",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"Salam-e-Ishq-song",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"e-Ishq",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"Salam-Ishq",filePath:"6.mp3",coverPath:"6.jpeg"},
]

songItem.forEach((element,i)=>{

   element.getElementsByTagName("img")[0].src=songs[i].coverPath; 
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName; 
})


//audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity=0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    
    // update seebar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
   
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllplays=()=>{
    
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");

    })
}



Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src=`${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    })
})


document.getElementById("forward").addEventListener("click",()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})


document.getElementById("backward").addEventListener("click",()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})