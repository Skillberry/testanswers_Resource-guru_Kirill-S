const flatten = (data) => {
	const flatten = [];
	flat(data, flatten);
	console.log(flatten);
}

const flat = (data, arr) => {
	data.forEach(element => {
		if (Array.isArray(element)) {
			flat(element, arr);
		} else {
			arr.push(element);
		}
	});
}

flatten([1, [2, [3]], 4])