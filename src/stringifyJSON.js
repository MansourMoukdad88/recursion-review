// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


	// var obj = {a:1, b:2} ==> "{"a":1, "b":2}"
	// it should return an the (key/value pairs) of objects 
	// stop condition == to empty object 
// 1. Numbers 
// 2. Strings
// 3. Arrays
// 4. objects
// 5. undefined

// Sprint One

var stringifyJSON = function(obj) {
	while (obj !== -1) {
		if (typeof(obj) === "number") {
			return "" + stringifyJSON(obj);
		} else if (typeof(obj) === "undefined") {
			return null;
		} else if (obj ){

		}
	}
	return "{" + Object.keys(obj) +":" + something + "," + "}";
};

//==============
var stringifyJSON2 = function(obj) {
	if (typeof(obj) === "number") {		// number
		return "" + obj;
	} else if (typeof(obj) === "undefined") {	// undefined
		return "" + null;
	} else if (Array.isArray(obj)){	// array // there is an issue in string inside array
/*		for (var i = 0; i < obj.length; i++){
			return "[" + obj[i]  + "]" ;
		}*/
		var i = 0;
		return "[" + stringifyJSON2(obj[i]) + "]";
	} else if (!Array.isArray(obj) && typeof(obj) === "object") { // object

		if (Object.getOwnPropertyNames(obj).length === 0) {
			return obj
		} else {
			for (var key in obj) {
				var property = Object.keys(obj);
				var value = obj.key;
				//var value = obj.property;
			return "{" + '"' + stringifyJSON2(property) + /*stringifyJSON2(value) +*/ '"' + ":" + "}";
			}
		}
	}
};






