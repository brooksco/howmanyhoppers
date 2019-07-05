let hopperCount = 0;
let crossOriginProxy = '/ba-simple-proxy.php?url=';
if (window.location.hostname == 'localhost') {
	crossOriginProxy = '/howmanyhoppers/ba-simple-proxy.php?url=';
}

function collectionCall(url) {
	fetch(url).then(response => {
		return response.json();
	}).then(data => {
		console.log(data);
		const objects = data['contents']['group_objects']['results'];
		const next = data['contents']['group_objects']['next'];
		const hopperCountEl = document.querySelector('.hopper__count');

		objects.forEach(function (object) {
			if (object['artist_name'] == 'Edward Hopper') {
				hopperCount += 1;
				hopperCountEl.innerText = hopperCount;
			}
		});

		if (next) {
			collectionCall(crossOriginProxy + next);
		} else {
			hopperCountEl.innerText = hopperCount;
		}

	}).catch(err => {
    // Do something for an error here
    console.log(err);
});
}

document.addEventListener('DOMContentLoaded', function(event) { 
	collectionCall(crossOriginProxy + 'http://api.collection.whitney.org/groups/5/?page=1&format=json');
});