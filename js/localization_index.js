$(document).ready(function () {
    

    var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
		  '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
          '<li> <a href="statistics.html" class="smoothScroll">Statistics</a></li>'+
          '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>';          
		  $('#myList').html(content);
});



function toTelugu() {
  var home = "హోం";
          var body = "3D మానవ శరీర";
          var stats = "గణాంకాలు";
          var contact = "మమ్మల్ని సంప్రదించండి";
          var topic = "మానవ శరీర";
          var intro = " హ్యూమన్ అనాటమీ ప్రధానంగా మానవ శరీర స్వరూపం యొక్క శాస్త్రీయ అధ్యయనం. " +
                      "మానవ శరీరనిర్మాణం ఉప-విభజన మానవ శరీరం యొక్క సరైన కార్యాచరణకు కీలకం వీటిలో ప్రతి " +
                      "ఉప వ్యవస్థలు, అనేక లోకి ఉంది. ఈ వెబ్సైట్ DesignIt టీమ్ ద్వారా యూజర్ మానవ శరీర నిర్మాణ " +
                      "శాస్త్రం ఆలోచించడం అలాగే మానవులతో ప్రభావితం వ్యాధులు కొన్ని కొన్ని అంతర్దృష్టి పొందుటకు " +
                      "సహాయం ప్రయత్నంలో చేస్తుంది.";
          var learn = 'మరింత వివరాలు';
          
          content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
        '<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
            '<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
            '<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';       
            $('#myList').html(content);
            $('#intro').html(intro);
            $('#homehref').html('మానవ అనాటమీ');
            $('#topic').html(topic);
            $('#learn').html(learn);
}

function toSpanish() {
  var home = "casa";
          var body = "3D humano cuerpo";
          var stats = "Estadística";
          var contact = "Contáctenos";
          var topic = "Humano Cuerpo";
          var intro = "Anatomía humana es principalmente el estudio científico de la morfología del cuerpo humano. " +
                        "La anatomía humana se subdivide en una serie de subsistemas, cada uno de los cuales es crucial " +
                        "para el buen funcionamiento del cuerpo humano. A través de este sitio web el Equipo DesignIt hace " +
                        "un intento de ayudar al usuario a visualizar la anatomía humana, así como obtener una idea de algunas " +
                        "de las enfermedades que afectan a los seres humanos";

          var learn = 'Algo mas';
          content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
        '<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
            '<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
            '<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';       
            $('#myList').html(content);           
            $('#intro').html(intro);
             $('#homehref').html('Anatomía Humana');
             $('#topic').html(topic);
             $('#learn').html(learn);
}

function toEnglish() {
  var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
      '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
          '<li> <a href="statistics.html" class="smoothScroll"> Statistics</a></li>'+
          '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>' ;

          var intro = "Human Anatomy is primarily the scientific study of the morphology of the human body" +
                  "The human anatomy is sub-divided into a number of sub systems, each of which is crucial to the " +
                  "proper functioning of the human body. Through this website the DesignIt Team makes an attempt " +
                  "to help the user visualize the human anatomy as well as get some insight into some of the diseases which affect humans.";
      $('#myList').html(content);
      $('#intro').html(intro);
      $('#homehref').html('Human Anatomy');
      $('#topic').html('Human Anatomy');
      $('#learn').html('Learn More!');
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
// 	$('#intro').html(content);
// 	$('#homehref').html(content);
//   $('#topic').html(content);  
//     if ($(this).val() === '3') {		    	    
//         	var home = "హోం";
//         	var body = "3D మానవ శరీర";
//         	var stats = "గణాంకాలు";
//         	var contact = "మమ్మల్ని సంప్రదించండి";
//           var topic = "మానవ శరీర";
//         	var intro = " హ్యూమన్ అనాటమీ ప్రధానంగా మానవ శరీర స్వరూపం యొక్క శాస్త్రీయ అధ్యయనం. " +
//                       "మానవ శరీరనిర్మాణం ఉప-విభజన మానవ శరీరం యొక్క సరైన కార్యాచరణకు కీలకం వీటిలో ప్రతి " +
//                       "ఉప వ్యవస్థలు, అనేక లోకి ఉంది. ఈ వెబ్సైట్ DesignIt టీమ్ ద్వారా యూజర్ మానవ శరీర నిర్మాణ " +
//                       "శాస్త్రం ఆలోచించడం అలాగే మానవులతో ప్రభావితం వ్యాధులు కొన్ని కొన్ని అంతర్దృష్టి పొందుటకు " +
//                       "సహాయం ప్రయత్నంలో చేస్తుంది.";
        	
//         	content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
// 		  	'<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
//           	'<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
//           	'<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';		  	
//           	$('#myList').html(content);
//       			$('#intro').html(intro);
//       			$('#homehref').html('మానవ అనాటమీ');
//             $('#topic').html(topic);
//     }
//     else if ($(this).val() === '2') {		    	    
//         	var home = "casa";
//         	var body = "3D humano cuerpo";
//         	var stats = "Estadística";
//         	var contact = "Contáctenos";
//           var topic = "Humano Cuerpo";
//         	var intro = "Anatomía humana es principalmente el estudio científico de la morfología del cuerpo humano. " +
//                         "La anatomía humana se subdivide en una serie de subsistemas, cada uno de los cuales es crucial " +
//                         "para el buen funcionamiento del cuerpo humano. A través de este sitio web el Equipo DesignIt hace " +
//                         "un intento de ayudar al usuario a visualizar la anatomía humana, así como obtener una idea de algunas " +
//                         "de las enfermedades que afectan a los seres humanos";
//         	content = '<li><a href="index.html" class="smoothScroll">' + home + '</a></li>'+
// 		  	'<li><a href="human-body.html" class="smoothScroll">' + body + '</a></li>'+
//           	'<li> <a href="statistics.html" class="smoothScroll">' + stats +  '</a></li>' +
//           	'<li> <a href="contact-us.html" class="smoothScroll">' + contact + '</a></li>';		  	
//           	$('#myList').html(content);          	
//           	$('#intro').html(intro);
// 			       $('#homehref').html('Anatomía Humana');
//              $('#topic').html(topic);
//     }
//     else {
//     	var content = '<li><a href="index.html" class="smoothScroll">Home</a></li>' +
// 		  '<li><a href="human-body.html" class="smoothScroll">3D Human Body</a></li>'+
//           '<li> <a href="statistics.html" class="smoothScroll"> Statistics</a></li>'+
//           '<li> <a href="contact-us.html" class="smoothScroll"> Contact Us</a></li>' ;

//           var intro = "Human Anatomy is primarily the scientific study of the morphology of the human body" +
//                   "The human anatomy is sub-divided into a number of sub systems, each of which is crucial to the " +
//                   "proper functioning of the human body. Through this website the DesignIt Team makes an attempt " +
//                   "to help the user visualize the human anatomy as well as get some insight into some of the diseases which affect humans.";
// 		  $('#myList').html(content);
// 		  $('#intro').html(intro);
// 		  $('#homehref').html('Human Anatomy');
//       $('#topic').html('Human Anatomy');
//     }
// });