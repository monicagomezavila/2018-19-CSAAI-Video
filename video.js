function main()
{
  console.log("Práctica vídeo CSAAI...")

  // VÍDEO 1 REPRODUCIENDO
  video1 = document.getElementById("video1")
  video1.width = 200;
  video1.height= 100;
  // VÍDEO 1 REPRODUCIENDO
  play1 = document.getElementById('play1');
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"


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
  video4.width = 400;
  video4.height= 200;
  video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"

  play1.onclick = () => {
    console.log("Ver 1!")
    //-- Indicar la fuente del vídeo
    video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  }

  play2.onclick = () => {
    console.log("Ver 2!")
    //-- Indicar la fuente del vídeo
    video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  }

  play3.onclick = () => {
    console.log("Ver 3!")
    //-- Indicar la fuente del vídeo
    video4.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"

  }

  video4.addEventListener("loadeddata",function(ev){
   document.getElementById("tduracion").innerHTML = video4.duration;
  },true);

}
