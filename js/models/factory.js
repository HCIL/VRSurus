'use strict';
function initFactory() {
	factory = new THREE.SEA3D({
		autoPlay : false, 	// Auto play animations
		container : scene	// Container to add models
	});
	
	factory.ready = false; 
	factory.isBuilding = false; 
	factory.isWorking = false; 
	factory.isDestroyed = false; 
	factory.radius = 0.0; 
	factory.degree = 0.0; 
	factory.sid = 0; 
	
	factory.build = function(R, theta) {
		factory.radius = R; 
		factory.degree = theta; 
		factory.isBuilding = true; 
		factory.isWorking = true; 
		factory.isDestroyed = false; 
		for (var i = 0; i < factory.meshes.length; i++) {
			if (factory.meshes[i]) {
				factory.meshes[i].position.set(R * Math.cos(theta), -45, R * Math.sin(theta) ); 
				factory.meshes[i].scale.set(5, 5, 5);
				factory.meshes[i].visible = true; 
			}				
		}
		
		for (var i = 0; i < factory.meshes.length; i++) {
			if (factory.meshes[i].animation) {
				factory.meshes[i].animation.timeScale = 3.0;
				factory.meshes[i].animation.play("root");
			}
		}
		setTimeout(function(){ factory.work() }, 7750);
	}
	
	factory.vanish = function() {
		for (var i = 0; i < factory.meshes.length; i++) {
			if (factory.meshes[i]) {
				factory.meshes[i].visible = false; 
			}
		}
	}
	
	factory.die = function() {
		factory.isDestroyed = true; 
		factory.isWorking = false; 
		setTimeout(function(){ factory.vanish(); }, 1500);
	}
	
	factory.work = function() {
		factory.isBuilding = false; 
		factory.isWorking = true; 
		factory.isDestroyed = false; 
		for (var i = 0; i < factory.meshes.length; i++) {
			if (factory.meshes[i].animation) {
				factory.meshes[i].animation.timeScale = 1.0;
				factory.meshes[i].animation.play("work");
			}
		}
	}
	
	factory.onComplete = function( e ) {
		checkLoading(); 
		console.log( "factory loading:", factory.file.timer.elapsedTime + "ms" );
	};
	
	factory.load( Paras.factory.fileName );
}
