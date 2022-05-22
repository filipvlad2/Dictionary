let dictionary = new Array();

function wordAdd() {
	let currentSave = document.getElementById('saveWord').value;
	dictionary.push(currentSave); 
	return false;
}

function wordSearch() {
	let currentSearch = document.getElementById('searchWord').value;
	if (dictionary.includes(currentSearch)) {
		alert("Word found!");
	} else {
		alert("Word not found!");
	}
	return false;
}