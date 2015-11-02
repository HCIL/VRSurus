Mousetrap.bind('1', function() { 
	if (surus.curState !== SURUS_SLAP_LEFT)	surus.slapLeft(); 
	surus.scanEnemy(surus.getOrientation()); 
}, 'keydown');

Mousetrap.bind('2', function() { 
	if (surus.curState !== SURUS_SLAP_RIGHT) surus.slapRight(); 
	surus.scanEnemy(surus.getOrientation()); 
}, 'keydown');

Mousetrap.bind('3', function() { 
	if (surus.curState !== SURUS_SPRAY) surus.spray(); 
	surus.scanEnemy(surus.getOrientation()); 
}, 'keydown');

Mousetrap.bind('4', function() { 
	if (surus.curState !== SURUS_THRUST) surus.thrust(); 
	surus.scanEnemy(surus.getOrientation()); 
}, 'keydown');

Mousetrap.bind('6', function() { 
	factory.build(150.0, surus.getOrientation() ); 
}, 'keydown')

Mousetrap.bind('7', function() { 
	peasant.build(100.0, surus.getOrientation() ); 
}, 'keydown')

Mousetrap.bind('8', function() { 
	garbage.build(); 
}, 'keydown')

Mousetrap.bind('space', function() { 
	audio.howl.play(); 
}, 'keydown');

Mousetrap.bind('shift+1', function() { 
	audio.sew.play(); 
}, 'keydown');


Mousetrap.bind('shift+2', function() { 
	audio.sew2.play(); 
}, 'keydown');

Mousetrap.bind('a', function() { 
	surus.leftwards(); 
}, 'keydown');

Mousetrap.bind('d', function() { 
	surus.rightwards(); 
}, 'keydown');
