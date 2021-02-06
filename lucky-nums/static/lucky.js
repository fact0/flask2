const BASE_URL = "http://localhost:5001/api";
/** processForm: get data from form and make AJAX call to our API. */

$("#lucky-form").on("submit", async function (evt) {
	evt.preventDefault();
	let name = $("#name").val();
	let year = $("#year").val();
	let email = $("#email").val();
	let color = $("#color").val();

	const luckyNumResp = await axios.post(`${BASE_URL}/get-lucky-num`, {
		name,
		year,
		email,
		color,
	});
	handleResponse(luckyNumResp);
});

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
	if (resp.data.errors) {
		generateErrorHTML(resp);
	} else {
		let factResp = $(generateRespHTML(resp));
		$("#lucky-results").append(factResp);
	}
	$("#lucky-form").trigger("reset");
}

function generateRespHTML(resp) {
	return `
    <div>Your lucky number is ${resp.data.num.num}:  ${resp.data.num.fact}</div>
    <div>Your birth year ${resp.data.year.year}:  ${resp.data.year.fact}</div>`;
}

function generateErrorHTML(resp) {
	if (resp.data.errors.name) {
		nameError = `<div>${resp.data.errors.name}</div>`;
		$("#name-err").append(nameError);
	}
	if (resp.data.errors.email) {
		emailError = `<div>${resp.data.errors.email}</div>`;
		$("#email-err").append(emailError);
	}

	if (resp.data.errors.year) {
		yearError = `<div>${resp.data.errors.year}</div>`;
		$("#year-err").append(yearError);
	}

	if (resp.data.errors.color) {
		colorError = `<div>${resp.data.errors.color}</div>`;
		$("#color-err").append(colorError);
	}
}
