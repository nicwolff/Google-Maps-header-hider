if ( window.top === window ) {

//	if ( document.referrer.indexOf("maps.google.com") == -1 ) {

		document.addEventListener( "DOMNodeInserted", function (e) {

			var o = e.target;

			var header = document.getElementById("header");
			if ( header ) {

				var form = document.getElementById("q_form");
				form.style.display = "inline";
				form.style.position = "absolute";
				var field = document.getElementById("q_d");
				field.style["margin-top"] = "4px";
				field.style["margin-left"] = "1em";
				field = field.parentNode;
				field.style.display = "inline";
				field = field.parentNode;
				field.style.display = "inline";
				form.insertBefore(field, null);
				var search = document.getElementById("search");
				if ( search ) { search.parentNode.removeChild(search) }
				document.getElementById("gbz").lastChild.insertBefore(form, null);
				header.style.display = "none";
			}

		} );

//	}

}