
(function (){ 
	"use strict";
	var app = {

		myDefaultTime: 300000,
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
			console.log(min ,sec , typeof(min));
			if (min == "" && sec ==""){
				this.seconde = this.myDefaultTime; 
				this.updateView();
			}
			else{
				this.seconde = parseInt(min*1000, 10)*60 + parseInt(sec*1000, 10);
			}
			this.tempsTottal = this.seconde;
		
		},

		start:function(){
			clearInterval(this.intervalID);
			this.recupTemps();
			this.explosion();	
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

			if(this.pause === false)
			{ 
				clearInterval(this.intervalID);
				this.pause = true;
				console.log(this.pause);
			}else{
				this.pause = false;
				this.start();
				console.log(this.pause);
			}
			console.log(clearInterval);

		},
		reset:function(){
			return this.recupTemps();
			console.log(seconde);
		},

		decrement:function(){
			console.log(app.seconde, typeof(app.seconde));
			this.seconde= this.seconde-1000;
			this.updateView();
			app.barreDeProgression();
			if(this.seconde===0){
				clearInterval(this.intervalID);
				this.playvideo();
			}

		},


		updateView:function(){
			var seconde = parseInt(this.seconde/1000%60, 10);
			var minutes = parseInt(this.seconde/1000/60, 10);
			$('#timer').html(minutes);
			$('#seconde').html(seconde);

		},

	
        explosion:function(){
        $(document).click(function(){
            $('#progressbargrey').toggle("explode",{pieces: 18}, 800);
            $('#start').toggle("explode",{pieces: 18}, 800);
            $('#pause').toggle("explode",{pieces: 18}, 800);
            $('#reset').toggle("explode",{pieces: 18}, 800);
            $('#input').toggle("explode",{pieces: 18}, 800);
           return
        });
        },
};





	app.init();


})();