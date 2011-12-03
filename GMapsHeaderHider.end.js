var toggle = document.getElementById("paneltoggle2");
if ( toggle ) {
	alert( "I SEE TOGGLE" );
	var evt = document.createEvent("MouseEvents");
	evt.initEvent("click", false, true, true, true, window, 0, 0, 0, 0, 0, null, null, null, null, 0, null);
	toggle.dispatchEvent(evt);
}