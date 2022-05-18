let dictionary = new Array();

function adaugareCuvant() {
	let currentSave = document.getElementById('saveWord').value;
	dictionary.push(currentSave); 
	return false;
}

function cautareCuvant() {
	let currentSearch = document.getElementById('searchWord').value;
	if (dictionary.includes(currentSearch)) {
		alert("Word found!");
	} else {
		alert("Word not found!");
	}
	return false;
}