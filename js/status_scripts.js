const falcon = $('.millennium-falcon');
const lightSaber = $('.lightsaber');
const falconPower = $('.falcon-power');
const lightsaberPower = $('.lightsaber-power');
const totalPower = $('.total-power-value');
let falconPowerVal;
let saberPowerVal;
let totalPowerVal;

$(function(){
  getPowerVal();    
  falcon.on('click', 'img', function(e){
    $(this).toggleClass('green-border');
    //powerValue(falconPower);

  });
  lightSaber.on('click', 'img', function(e){
    $(this).toggleClass('green-border');
    //powerValue(lightsaberPower);
  });
});
function powerValue(item) {
  item.html(function() {
    let power = Math.floor(Math.random() * 8);
    return `${power} kW`;
  })

}
/* function checkPowerVal (valueFrom, object) {
  if(valueFrom != 0) {
    object.addClass('green-border');
    object.removeClass('gray-border');
    
  }else {
    object.removeClass('green-border');
    object.addClass('gray-border');
  }
} */
function getPowerVal(){
  setInterval( function(){
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
  }, 3000);

}
