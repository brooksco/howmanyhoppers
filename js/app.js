function collectionCall(url) {
	fetch(url).then(response => {
		console.log(response);
		return response.json();
	}).then(data => {
		document.querySelector('.hopper__count').innerText = data.meta.total;
	}).catch(err => {
    console.log(err);
});
}

document.addEventListener('DOMContentLoaded', function(event) { 
	collectionCall('https://whitney.org/api/artworks?q%5Bartist_text_cont%5D=hopper%20edward&q%5Bon_view_true%5D=1');

	const dateDay = new Date().getDay();
	const bodyClass = 'gradient-' + dateDay;
	document.body.classList.add(bodyClass);
});