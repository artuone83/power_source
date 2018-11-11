const falcon = $('.millennium-falcon img');
const lightSaber = $('.lightsaber img');
const falconPower = $('.falcon-power');
const lightsaberPower = $('.lightsaber-power');
const totalPower = $('.total-power-value');
let apiURL = 'https://challenge.codetain.com/api/v1/charging_status';
let falconURL = 'https://challenge.codetain.com/api/v1/charging_status?priority=falcon';
let saberURL = 'https://challenge.codetain.com/api/v1/charging_status?priority=lightsaber';
let falconPowerVal = 0;
let saberPowerVal = 0;
let totalPowerVal;
$(function(){
	let interVal = setInterval(getPowerVal, 10000);
	function setFalconPower() {
		falconPowerVal = Math.floor(Math.random() * 8); 
		falconPower.html(function() {
			return `${falconPowerVal} kW`;
		});		
	}
	function setSaberPower() {
		saberPowerVal = Math.floor(Math.random() * 8);
		lightsaberPower.html(function() {
			return `${saberPowerVal} kw`;
		});
	}
	function calcTotalPower() {
		totalPowerVal = falconPowerVal + saberPowerVal;
		totalPower.html(function() {
			return `${totalPowerVal} kW`;
		});
	}
	function getPowerVal() {  
			$.get(apiURL, function(data, status){          
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
	falcon.click(function(e){
		$(this).toggleClass('green-border');
		setFalconPower();
		calcTotalPower();
		$(this).toggleClass('yellow-bg');
		if(lightSaber.hasClass('yellow-bg')) {
			lightSaber.removeClass('yellow-bg');			
		}
		apiURL = falconURL;
	});
	lightSaber.click(function(e){
		$(this).toggleClass('green-border');		
		setSaberPower();
		calcTotalPower();
		$(this).toggleClass('yellow-bg');
		if(falcon.hasClass('yellow-bg')) {
			falcon.removeClass('yellow-bg');			
		}
		apiURL = saberURL;
	});
});