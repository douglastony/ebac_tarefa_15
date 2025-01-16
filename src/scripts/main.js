AOS.init();

const dataDoEvento = new Date("Jun 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaOTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = (1000 * 60 * 60);
    const minutoEmMs = (1000 * 60);

    const diasAteoEvento =  Math.floor(distanciaAteoEvento / (diaEmMs));
    
    const horasAteoEvento =  Math.floor(distanciaAteoEvento % (diaEmMs) /(horaEmMs));
    
    const minutosAteoEvento =  Math.floor(distanciaAteoEvento % (horaEmMs) / (minutoEmMs));
    
    const segundosAteoEvento =  Math.floor(distanciaAteoEvento % (minutoEmMs) / (1000));
    
    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}h ${segundosAteoEvento}s`

    if (distanciaAteoEvento <0) {
        clearInterval(contaOTempo);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }

}, 1000);

