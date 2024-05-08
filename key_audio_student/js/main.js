const str = "qwertzui";

const allSounds = {
    'q' : 'audio/A0.mp3',
    'w' : 'audio/A1.mp3',
    'e' : 'audio/A2.mp3',
    'r' : 'audio/A3.mp3',
    't' : 'audio/A4.mp3',
    'z' : 'audio/A5.mp3',
    'u' : 'audio/A6.mp3',
    'i' : 'audio/A7.mp3'

};//das ist ein Objekte

function playAudio(path){
    const sound = new Audio();
    sound.src = path;
    sound.play();
}

function createField(){
    
    const le = str.length;
    const cont = document.querySelector('#container');


    for(let i=0; i<le;i++){
        const div = document.createElement('div');
        div.innerText = str[i];
        div.className = 'passiv';
        div.id = str[i];
        cont.append(div);
        
    }

}

function pressKeyDown(e){
    //str.includes(e.key)
    if(!str.includes(e.key)){return}


    playAudio(allSounds[e.key])
    console.log(e.key)
    document.querySelector(`#${e.key}`).className = 'aktiv';

}

function keyReset(e){
    if(!str.includes(e.key)){return}
    
    document.querySelector(`#${e.key}`).className = 'passiv';

}

createField();
document.addEventListener('keydown',pressKeyDown);
document.addEventListener('keyup',keyReset);