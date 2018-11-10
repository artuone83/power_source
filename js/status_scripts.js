const falcon = $('.millennium-falcon img');
const lightSaber = $('.lightsaber img');
const falconPower = $('.falcon-power');
const lightsaberPower = $('.lightsaber-power');
const totalPower = $('.total-power-value');
let falconPowerVal = 0;
let saberPowerVal = 0;
let totalPowerVal;
let interVal = setInterval(getPowerVal, 10000);

$(function(){
  interVal;

  falcon.click(function(e){
    $(this).toggleClass('green-border');
    falconPowerVal = Math.floor(Math.random() * 8); 
    falconPower.html(function() {
      return `${falconPowerVal} kW`;
    });
    totalPowerVal = falconPowerVal + saberPowerVal;
    totalPower.html(function() {
      return `${totalPowerVal} kW`;
    });
    $(this).toggleClass('yellow-bg');
    stopFunction();
  });

  lightSaber.click(function(e){
    $(this).toggleClass('green-border');
    saberPowerVal = Math.floor(Math.random() * 8);
    lightsaberPower.html(function() {
      return `${saberPowerVal} kw`;
    });
    totalPowerVal = saberPowerVal + falconPowerVal;
    totalPower.html(function() {
      return `${totalPowerVal} kW`;
    });
    $(this).toggleClass('yellow-bg');
  });
});
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
      return `${totalPowerVal} kW`;
    })
  });
  };

  function stopFunction() {
    clearInterval(interVal);
}
