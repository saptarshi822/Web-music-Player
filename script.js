console.log("Hello welcome to Gnash");
let songindex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay')
let ProgressBar = document.getElementById('ProgressBar');
let pgif= document.getElementById('pgif')
let songitems= Array.from(document.getElementsByClassName('songitem'))
let masterSongName = document.getElementById('masterSongName');

let songs=[ 
    
    { songname: "Mortals", filepath:'1.mp3',coverpath:"mortals.jpg"},
    { songname: "On & On", filepath:"2.mp3",coverpath:"cp1.jpg"},
    { songname: "Disfigure-Blank", filepath:"3.mp3",coverpath:"cp2.jpg"},
    { songname: "Lemon Fight - Stronger", filepath:"4.mp3",coverpath:"cp3.jpg"},
    { songname: "We Are", filepath:"5.mp3",coverpath:"cp4.jpg"},
    { songname: "Elektronomia - Sky High", filepath:"6.mp3",coverpath:"cp5.jpg"},
    { songname: "Janji - Heroes Tonight", filepath:"7.mp3",coverpath:"cp6.jpg"}

    
];
songitems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

})

masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        pgif.style.opacity=1;
    }
    else{
    audioelement.pause();
    masterplay.classList.remove('fa-pause-circle')
    masterplay.classList.add('fa-play-circle')
    pgif.style.opacity=0;
    }

})

audioelement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    // console.log(progress);
    progressbar.value = progress;
})
progressbar.addEventListener('change', ()=>{
    audioelement.currentTime = progressbar.value * audioelement.duration/100;

})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")

})
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        // masterSongName.innerText = songs[songindex-1].songname;
        songindex=parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioelement.src=`${songindex}.mp3`
        audioelement.currentTime=0;
        audioelement.play();
        pgif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{

    if(songindex>=7){
        songindex=1;
    }
    else{
    songindex = songindex + 1;
    }
    audioelement.src=`${songindex}.mp3`
    audioelement.currentTime=0;
    // masterSongName.innerText = songs[songindex-1].songname;
    audioelement.play();
    pgif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{

    if(songindex<=1){
        songindex=7;
    }
    else{
    songindex = songindex - 1;
    }
    audioelement.src=`${songindex}.mp3`
    audioelement.currentTime=0;
    audioelement.play();
    // masterSongName.innerText = songs[songindex].songname;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementsByClassName('songname')