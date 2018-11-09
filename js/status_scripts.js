const falcon = $('.millennium-falcon img');
const lightSaber = $('.lightsaber img');
const falconPower = $('.falcon-power');
const lightsaberPower = $('.lightsaber-power');
const totalPower = $('.total-power-value');
let falconPowerVal;
let saberPowerVal;
let totalPowerVal;
let interVal = setInterval(getPowerVal,3000);

$(function(){
  interVal;    
  falcon.click(function(e){
    $(this).toggleClass('green-border');
    powerValue(falconPower);
    $(this).toggleClass('yellow-bg');
    stopFunction();
    

  });
  lightSaber.click(function(e){
    $(this).toggleClass('green-border');
    powerValue(lightsaberPower);
    $(this).toggleClass('yellow-bg');
  });
});
function powerValue(item) {
  item.html(function() {
    let power = Math.floor(Math.random() * 8);
    return `${power} kW`;
  })

}
function getPowerVal(){
  
    $.get("https://challenge.codetain.com/api/v1/charging_status", function(data, status){
    
    falconPowerVal = data.charging_status.falcon;
    saberPowerVal = data.charging_status.lightsaber;
    totalPowerVal = falconPowerVal + saberPowerVal;
    
    if(falconPowerVal != 0) {
      falcon.addClass('green-border');
      falcon.removeClass('gray-border');
      
    }else {
      falcon.removeClass('green-border');
      falcon.addClass('gray-border');
    }

    if(saberPowerVal !=0) {
      lightSaber.addClass('green-border');
      lightSaber.removeClass('gray-border');
    }else {
      lightSaber.removeClass('green-border');
      lightSaber.addClass('gray-border');
    }

    falconPower.html(function(){
      return `${falconPowerVal} kW`;
    });
    lightsaberPower.html(function(){
      return `${saberPowerVal} kW`;
    });
    totalPower.html(function(){
      return totalPowerVal;
    })
  });
  };

  function stopFunction() {
    clearInterval(interVal);
}
