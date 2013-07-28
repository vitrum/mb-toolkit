$(document).ready(function(){
	var pagebody = $("#pagebody");
	var themenu  = $("#navmenu");
	var topbar   = $("#toolbarnav");
	var content  = $("#content");
	var viewport = {
    	width  : $(window).width(),
    	height : $(window).height()
	};
	// retrieve variables as 
	// viewport.width / viewport.height
	
	function openme() { 
		$(function () {
		    // topbar.animate({
		    //    left: "290px"
		    // }, { duration: 300, queue: false });
		    // pagebody.animate({
		    //    left: "290px"
		    // }, { duration: 300, queue: false });
			topbar.css({'left':'200px' });
			pagebody.css({'left':'200px'});
		});
	}
	
	function closeme() {
		var closeme = $(function() {
	    	// topbar.animate({
	     //        left: "0px"
	    	// }, { duration: 180, queue: false });
	    	// pagebody.animate({
	     //        left: "0px"
	    	// }, { duration: 180, queue: false });
	    	topbar.css({'left':'0px'});
	    	pagebody.css({'left':'0px' });
		});
	}

	// checking whether to open or close nav menu
	$("#menu-btn").live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		
		if(leftval == "0px") {
			openme();
		}
		else { 
			closeme(); 
		}
	});
	
	// loading page content for navigation
	$("a.navlink").live("click", function(e){
		e.preventDefault();
		var linkurl     = $(this).attr("href");
		var linkhtmlurl = linkurl.substring(1, linkurl.length);
		
		var imgloader   = '<center style="margin-top: 30px;"><img src="img/preloader.gif" alt="loading..." /></center>';
		
		closeme();
		
		$(function() {
			topbar.css("top", "0px");
			window.scrollTo(0, 1);
		});
		
		content.html(imgloader);
		
		setTimeout(function() { content.load(linkhtmlurl, function() { /* no callback */ }) }, 1200);
	});

  	var shakeTimes = 10, newColor=255;
	window.addEventListener('shake', shakeEventDidOccur, false);
		//define a custom method to fire when shake occurs.
		function shakeEventDidOccur () {
		//put your own code here etc.
	    $('.txt').append('<p>Shake me again!</p>');
	    newColor = newColor - 30;
	    if( newColor< 20){
	    	$('#content').css('background','gray');
	    	$('.txt').html('<img src="img/winner.png" />');
	    	$('#content h2').html('You Win!');
	    }else{
	    	$('#content').css('background','rgb(255,'+newColor+','+newColor+')');
	    }
	    
	}
	$(".reset").live("click", function(e){
		newColor=255;
		$('#content').css('background','rgb(255,255,255)');
		$('.txt').html('');
		$('#content h2').html('Let\'s go!');
		closeme();
	})


});