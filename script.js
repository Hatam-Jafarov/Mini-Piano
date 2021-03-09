var keys = document.querySelectorAll('.p');
var audios = document.querySelectorAll('audio');


for(i = 0; i < keys.length; i++){
	keys[i].addEventListener('click', function(e){
		audios[i].play()
	})
}

