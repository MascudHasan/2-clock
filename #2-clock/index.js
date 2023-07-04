 setInterval( setClock, 1000)

 const hourHand = document.querySelector('[data-hour-hand]');
 const minuteHand = document.querySelector('[data-minute-hand]')
 const secondHand = document.querySelector('[data-second-hand]')

 function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const MinutesRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (MinutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, MinutesRatio)
    setRotation(hourHand, hoursRatio)
 }
 
 function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
 }