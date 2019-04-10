function main()
{

  function video(video, width, height){
    this.video = document.getElementById(video);
    this.video.width = width;
    this.video.height = height;

    this.p_play = function(play){
      this.play = document.getElementById(play);
    }

    this.url = function(url){
      this.video.src = url;
    }

    this.principal = function(video4){
      video4.src  = this.video.src;
      video4.currentTime = this.video.currentTime;
    }

    this.styleput = function(){
      this.video.style.border = '3px solid black';
    }

    this.styleoff = function(){
      this.video.style.border = '0px';
    }

    this.muted = function(boolean){
      this.video.muted = boolean;
    }
  }

  var video1 = new video("video1",200,100);
  video1.url("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4");
  video1.p_play("play1");
  video1.play.onclick = () => {
    video1.principal(video4);
    video1.styleput();
    video2.styleoff();
    video3.styleoff();
  }
  video1.onmouseover = () => {
      video1.muted(false);
  }
  video1.onmouseout = () => {
      video1.muted(true);
    }

  var video2 = new video("video2",200,100);
  video2.url("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4");
  video2.p_play("play2");
  video2.play.onclick = () => {
    video2.principal(video4);
    video2.styleput();
    video1.styleoff();
    video3.styleoff();
  }

  var video3 = new video("video3",200,100);
  video3.url("https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4");
  video3.p_play("play3");
  video3.play.onclick = () => {
    video3.principal(video4);
    video3.styleput();
    video1.styleoff();
    video2.styleoff();
  }

  function hora(segundos){
     var d=new Date(segundos*1000);
     var hora = (d.getHours()==0)?23:d.getHours()-1;
     var hora = (hora<9)?"0"+hora:hora;
     var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
     var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
     return hora+":"+minuto+":"+segundo;
    }

  // VÍDEO PRINCIPAL
  video4 = document.getElementById("video4")
  video4.width = 600;
  video4.height= 400;
  video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"


//DURACIÓN DEL VÍDEO
 video4.addEventListener("timeupdate",function(ev){
   document.getElementById("tduracion").innerHTML = hora(video4.currentTime);
  },true);


//VÍDEO INICIAL EN LOOPING O NO
  var loop = document.getElementById('loop');

  loop.onclick = () => {
    console.log("looping!");
    video4.loop = true;
  }

  var noloop = document.getElementById("noloop");

  noloop.onclick = () => {
    console.log("no looping!")
    video4.loop = false;
  }

/*
- Si acaba el video y le das a loop ya no funciona
- no funciona el mute
-style no funciona meter los dos videos y quitarles el estilo
*/
}
