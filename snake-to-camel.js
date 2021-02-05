function snakeToCamel(str) {
	const regex = /_([a-z])/gm;
	let newString = str.replace(regex, (subst) => subst.toUpperCase());
	let finalString = newString.replace(/_/g, "");
	return finalString;
}
