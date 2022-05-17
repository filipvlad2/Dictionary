let Dictionary = new Array();

function adaugareCuvant() {
	Dictionary.push($('#saveWord').val() + ' ');
	//Clears the text box and prevents from reloading
	event.preventDefault(); 
	$('#saveWord').val() = '';
	return false;
}

function cautareCuvant() {
	let currentSearch = $('#searchWord').val();
	let wordFound;
	for (let i = 0; i < Dictionary.length; i++) {
		let result = Dictionary[i].match(currentSearch);
		if (result != null) {
			wordFound = 1;
			break;
		} else {
			wordFound = 0;
		}
	}
	if (wordFound == 1) {
		alert("Word found!");
	}else {
		alert("Word not found!");
	}
	return false;
}