
(function (){ 
	"use strict";
	var app = {

		seconde: null,
		pause: true,
		intervalID:null,
		reset:null,
		tempsTottal:null,
		init: function(){
			app.listeners();
		},

		listeners:function(){

			$('#start').on('click', this.start.bind(this));
			$('#pause').on('click', this.pause.bind(this));
			$('#reset').on('click', this.reset.bind(this));
			


		},

		recupTemps: function(){
			var min =$('#countMin').val();
			var sec =$('#countSecond').val();
			this.seconde = parseInt(min, 10)*60 + parseInt(sec, 10);
			this.tempsTottal = this.seconde;
			console.log(this.tempsTottal);
			console.log(this.seconde);
		},

		start:function(){
			clearInterval(this.intervalID);
			this.recupTemps();
			this.intervalID = setInterval(this.decrement.bind(this), 1000);
			if(this.seconde!=0){
				
				$('#iframe').html('');
			}

			
		},

		barreDeProgression:function(){
			var progress =(this.tempsTottal-this.seconde)*100/this.tempsTottal;
			$('#progressbarblue').css('width', progress +'%');
			$('#body').css('height', progress +'%');  
			console.log(progress);
		},


		playvideo: function(){
			var video=$('#iframe').append('<div id="iframe"><iframe width="422" height="240" src="https://www.youtube.com/embed/99AS1Rq5dIM?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');

		},

		pause:function(){

			if(this.pause ==false)
			{ 
				clearInterval(this.intervalID);
				this.pause = false;
				console.log(this.pause);
				return this.pause;


			}else{
				this.pause = true;
				this.start();
				console.log(this.pause);
				return this.pause;


			}
			console.log(clearInterval);

		},
		reset:function(){

			 return this.recupTemps();
			console.log(seconde);


		},

		decrement:function(){

			this.seconde--;
			this.updateView();
			app.barreDeProgression();
			if(this.seconde===0){
				clearInterval(this.intervalID);
				this.playvideo();
			}

		},


		updateView:function(){
			var seconde = parseInt(this.seconde%60, 10);
			var minutes = parseInt(this.seconde/60, 10);
			$('#timer').html(minutes +":");
			$('#seconde').html(seconde);

		},

	};








	app.init();


})();