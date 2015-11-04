//loops through a collection & calls a function with each element in the collection
function each(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	}
	else {
		for (var prop in collection) {
			callback(collection[prop]);
		}
	}
}

//returns a new array
function map(collection, callback) {
	mapped = [];
	each(collection, function(element) {
		mapped.push(callback(element));
	});
	return mapped;
}

//returns a filtered array
function filter(collection, callback) {
	filtered = [];

	each(collection, function(element) {
		if (callback(element)) {
			filtered.push(element);
		}
	});

	return filtered;
}

//returns a single value
function reduce(collection, callback) {
	var accumulator;

	each(collection, function(element) {
		if (accumulator === undefined) {
			accumulator = element;
		}
		else {
			accumulator = callback(accumulator,element);
		}
	});

	return accumulator;
}

var arrayOfNumbers = [1,2,3,4,5];
var modifiedArray = map(arrayOfNumbers, function(number) {
    return number + 5;
}); //[6,7,8,9,10]

var numbers = [1,2,-4,6,-12,24,2,-9]
var positiveNumbers = filter(numbers, function(number) {
    return number > 0;
}); //[1,2,6,24,2]

var numbers = [2,5,3,6,5]
var reducedNumber = reduce(numbers, function(sum, number) {
    return sum + number;
}); //21

var numbers = [2,4,7,2]
var reducedNumber = reduce(numbers, function(mult, number) {
    return mult*number;
}); //112