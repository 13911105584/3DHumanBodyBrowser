$(document).ready(function () {
    var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
		  '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
          '<li> <a href="statistics.html" class="smoothScroll">Statistics</a></li>'+
          '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>';

		  $('#myList').html(content);
});

function toEnglish() {
  var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
      '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
          '<li> <a href="statistics.html" class="smoothScroll"> Statistics</a></li>'+
          '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>' ;

      $('#myList').html(content);
      $('#members').html('Team Members');
      $('#tagline').html('Lets get <strong>together!</strong>');
      $('#homehref').html('Human Anatomy');
    }

    function toSpanish() {
          var home = "casa";
          var body = "3D humano cuerpo";
          var stats = "Estadística";
          var contact = "Contáctenos";
          var members = "equipo miembros";
          var tagline = "Reunirse nos aquí";
          content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
        '<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
            '<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
            '<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';       
            $('#myList').html(content);           
            $('#members').html(members);
            $('#tagline').html(tagline);
             $('#homehref').html('Anatomía Humana');
    }

    function toTelugu() {
            var home = "హోం";
          var body = "3D మానవ శరీర";
          var stats = "గణాంకాలు";
          var contact = "మమ్మల్ని సంప్రదించండి";
          var members = "జట్టు సభ్యులు";
          var tagline = "మాకు తెలపండి మీ అభిప్రాయం";
          
          content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
        '<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
            '<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
            '<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';       
            $('#myList').html(content);
            $('#members').html(members);
            $('#tagline').html(tagline);
            $('#homehref').html('మానవ అనాటమీ');
    }


$('#spanish').click(function() {
  toSpanish();
});

$('#telugu').click(function() {
  toTelugu();
});

$('#english').click(function() {
  toEnglish();
});



// $('#mySelect').change(function() {
// 	var content = "";
// 	$('#myList').html(content);
// 	$('#tagline').html(content);
// 	$('#members').html(content);
// 	$('#homehref').html(content);
  
//     if ($(this).val() === '3') {		    	    
//         	var home = "హోం";
//         	var body = "3D మానవ శరీర";
//         	var stats = "గణాంకాలు";
//         	var contact = "మమ్మల్ని సంప్రదించండి";
//         	var members = "జట్టు సభ్యులు";
//         	var tagline = "మాకు తెలపండి మీ అభిప్రాయం";
        	
//         	content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
// 		  	'<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
//           	'<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
//           	'<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';		  	
//           	$('#myList').html(content);
//           	$('#members').html(members);
//       			$('#tagline').html(tagline);
//       			$('#homehref').html('మానవ అనాటమీ');
//     }
//     else if ($(this).val() === '2') {		    	    
//         	var home = "casa";
//         	var body = "3D humano cuerpo";
//         	var stats = "Estadística";
//         	var contact = "Contáctenos";
//         	var members = "equipo miembros";
//           var tagline = "Reunirse nos aquí";
//         	content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
// 		  	'<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
//           	'<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
//           	'<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';		  	
//           	$('#myList').html(content);          	
//           	$('#members').html(members);
//             $('#tagline').html(tagline);
// 			       $('#homehref').html('Anatomía Humana');
//     }
//     else {
//     	var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
// 		  '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
//           '<li> <a href="statistics.html" class="smoothScroll"> Statistics</a></li>'+
//           '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>' ;

// 		  $('#myList').html(content);
// 		  $('#members').html('Team Members');
//       $('#tagline').html('Lets get <strong>together!</strong>');
// 		  $('#homehref').html('Human Anatomy');
//     }
// });