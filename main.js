"use strict";

// Window
window.onload = (e)=>{
	
	const scene = document.querySelector("a-scene");

	const sound01 = document.getElementById("my_sound01");
	const btn01 = document.getElementById("my_btn01");
	
	btn01.addEventListener("click", (e)=>{
		const sound = sound01.components.sound;
		
		if(sound.isPlaying){
			sound.pauseSound();

		}else{
			sound.playSound();

		}
	});
}
