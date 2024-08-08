AOS.init();

const dataEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
  const agora = new Date()
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampEvento - timeStampAtual;

  const dia = 1000 * 60 * 60 * 24;
  const horas = 1000 * 60 * 60;
  const minutos = 1000 * 60;
  const segundos = 1000;
//recuperando os dias até o evento
  const diasAteOEvento =  Math.floor(distanciaAteOEvento / dia );
  const horasAteOEvento = Math.floor((distanciaAteOEvento % dia ) / horas);
  const minutosAteOEvento = Math.floor((distanciaAteOEvento % horas) / minutos)
  const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutos) / segundos)

  
  console.log(diasAteOEvento);
  console.log(horasAteOEvento);
  console.log(minutosAteOEvento);
  console.log(segundosAteOEvento);

  document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

  if (distanciaAteOEvento <= 0) {
    clearInterval(contaHoras);
    document.getElementById('contador').innerHTML = 'Acabou, e estou empregado na Nu'
  }
},1000);

