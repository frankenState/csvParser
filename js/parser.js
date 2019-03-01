function $(id){
	return document.getElementById(id);
}

function toArray(str, delimeter){
	return str.split(delimeter);
}

function removeQuotes(array){
	return array.map( e => {
		 if (e.startsWith('"') && e.endsWith('"')){
		 	return e.substring( 1, e.length - 1)	
		 }
		 return e;
	});
}

function removeBlanks(array){
	return array.filter( e => e.length > 0);
}

function out(text) {
	$('output').value = text;
}

$('laravel').onclick = ((data) => {

	let input_text = $('input').value;

	let percolumn = toArray(input_text, "\n");

	let clean = [];

	// index zero as the column label
	// clean per column
	percolumn.map( row => {
		let header = toArray(row,",");

		// clean the header
		header = removeQuotes(header);

		// remove the blanks
		// clean headers
		header = removeBlanks(header);

		clean.push(header);

		return header;
	});

	// parse it into Laravel save()
	let model = $('entity').value;

	let code = `use App\\${ model };\n\n`;

	// get the header
	let header = clean[0];

	for ( let i = 1; i < clean.length; i++ ){

		code += `$${ model.toLowerCase() } = new ${ model }();\n`;

		let column = clean[i];

		for ( let j = 0; j < column.length; j++ ){

			code += `$${ model.toLowerCase() }->${ header[j] } = "${ column[j] }";\n`;

		}

		code += `$${ model.toLowerCase() }->save();\n`;

		code +='\n';

	}

	out(code);
});
