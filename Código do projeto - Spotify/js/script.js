    /*
	@DEIVIDX_OFC
    */
       
       //VARIAVEIS
       var audioPlayer = document.getElementById('audioplayer');
       var loaded = false;
   
       var playBtn = document.getElementById('playBtn');
       var pauseBtn = document.getElementById('pauseBtn');
   
   
       //CONFIGURANDO O PAUSE DO BOTÃO
       pauseBtn.addEventListener('click',(e)=>{
           e.preventDefault();
   
           playBtn.style.display = "inline";
           pauseBtn.style.display = 'none';
           audioPlayer.pause();
           return false;
       });
   
   
       //CONFIGURANDO O PLAY DO BOTÃO
       playBtn.addEventListener('click',(e)=>{
           e.preventDefault();
   
           playBtn.style.display = "none";
           pauseBtn.style.display = "inline";
           audioPlayer.play();
           return false;
       });
   
       //CONFIGURANDO PLAYSONG
       const playSong = (file) => {
           if(loaded == false){
               audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3" />`;
               loaded = true;
           }
           
   
           audioPlayer.load();
   
           playBtn.style.display = "none";
           pauseBtn.style.display = "inline";
       }
   
       //CONFIGURANDO A MINHA CLASS
       document.querySelectorAll('.main__col').forEach(item =>{
   
       item.addEventListener('click',event=>{
           let image = item.getAttribute('data-image');
           let artist = item.getAttribute('data-artist');
           let song = item.getAttribute('data-song');
           let file = item.getAttribute('data-file');
   
   
           let playerArtistComponent = document.getElementsByClassName('player__artist');
   
           playerArtistComponent[0].innerHTML = `
               <img src="`+image+`" />
               <h3>`+artist+`<br/><span>`+song+`</span></h3>
   
           `;
   
   
           playSong(file);
       })
   
       });
   
       //CONFIGURANDO AUDIO
       audioPlayer.onloadstart = ()=>{
           alert('começou carregar.');
       }
       audioPlayer.oncanplaythrough = function(){
           alert('Can start playing video');
           audioPlayer.play();
           alert(audioPlayer.duration);
       };
   
       audioPlayer.addEventListener('timeupdate',(e)=>{
           var currenTime = audioPlayer.currenTime;
           console.log(currenTime);
       });

    /*
	@DEIVIDX_OFC
    */