function main(){
  
  //--Función para mostrar el tiempo del vídeo
  function hora(segundos){
     var d=new Date(segundos*1000);
     var hora = (d.getHours()==0)?23:d.getHours()-1;
     var hora = (hora<9)?"0"+hora:hora;
     var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
     var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
     return hora+":"+minuto+":"+segundo;
    }

  //--Constructor de vídeos
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

    this.principal = function(video4, v1, v2){
      video4.src  = this.video.src;
      video4.currentTime = this.video.currentTime;
      this.video.style.border = '3px solid black';
      v1.style.border = '0px';
      v2.style.border = '0px';
    }

  }


  //--Vídeo 1
  var video1 = new video("video1",200,150);
  video1.url("video2.mp4");
  video1.p_play("play1");
  video1.play.onclick = () => {
    video1.principal(video4.video, video2.video,video3.video);
  }

  video1.video.onmouseover = () => {
    video1.video.muted = false;
    video1.video.play()
  }
  video1.video.onmouseout = () => {
      video1.video.muted = true;
      video1.video.play()
  }


  //Vídeo 2
  var video2 = new video("video2",200,150);
  video2.url("video1.mp4");
  video2.p_play("play2");
  video2.play.onclick = () => {
    video2.principal(video4.video, video1.video,video3.video);
  }

  video2.video.onmouseover = () => {
      video2.video.muted = false;
      video2.video.play()
  }
  video2.video.onmouseout = () => {
      video2.video.muted = true;
      video2.video.play()
  }

  //Vídeo 3
  var video3 = new video("video3",200,150);
  video3.url("video3.mp4");
  video3.p_play("play3");
  video3.play.onclick = () => {
    video3.principal(video4.video, video1.video,video2.video);
  }

  video3.video.onmouseover = () => {
      video3.video.muted = false;
      video3.video.play()
  }
  video3.video.onmouseout = () => {
      video3.video.muted = true;
      video3.video.play()
  }


  //--Vídeo principal
  video4 = new video("video4",600,400);
  video1.principal(video4.video, video2.video,video3.video);

  //--Duración del vídeo
 video4.video.addEventListener("timeupdate",function(ev){
   document.getElementById("tduracion").innerHTML = hora(video4.video.currentTime);
  },true);

  video4.video.onmouseover = () => {
    video4.video.muted = false;
    video4.video.play()
  }
  video4.video.onmouseout = () => {
      video4.video.muted = true;
      video4.video.play()
  }


  var loop = document.getElementById('loop');
  loop.onclick = () => {
    console.log("looping!");
    video4.video.loop = true;
  }

  var noloop = document.getElementById("noloop");
  noloop.onclick = () => {
    console.log("no looping!")
    video4.video.loop = false;
  }

}
