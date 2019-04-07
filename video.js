function main()
{

  function hora(segundos){
     var d=new Date(segundos*1000);
     var hora = (d.getHours()==0)?23:d.getHours()-1;
     var hora = (hora<9)?"0"+hora:hora;
     var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
     var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
     return hora+":"+minuto+":"+segundo;
    }

  // VÍDEO 1 REPRODUCIENDO
  video1 = document.getElementById("video1")
  video1.width = 200;
  video1.height= 100;
  play1 = document.getElementById('play1');
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";


  // VÍDEO 2 REPRODUCIENDO
  video2 = document.getElementById("video2")
  video2.width = 200;
  video2.height= 100;
  play2 = document.getElementById('play2');
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"

  // VÍDEO 3 REPRODUCIENDO
  video3 = document.getElementById("video3")
  video3.width = 200;
  video3.height= 100;
  play3 = document.getElementById('play3');
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

  // VÍDEO PRINCIPAL
  video4 = document.getElementById("video4")
  video4.width = 600;
  video4.height= 400;
  video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"

  //CAMBIANDO EL VÍDEO A REPRODUCIR
  play1.onclick = () => {
    console.log("Ver 1!")
    var t1 = video1.currentTime;
    video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
    video4.currentTime = t1;
  }

  play2.onclick = () => {
    console.log("Ver 2!")
    var t2 = video2.currentTime;
    video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
    video4.currentTime = t2;
  }

  play3.onclick = () => {
    console.log("Ver 3!")
    var t3 = video3.currentTime;
    video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
    video4.currentTime = t3;

  }


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


//CUANDO PASAS EL RATÓN EL VÍDEO TIENE SONIDO
  video1.onmouseover = () => {
    console.log("Mouse over!!")
    video1.muted = false;
  }

/*
- Si acaba el video y le das a loop ya no funciona
- no funciona el mute
*/
}
