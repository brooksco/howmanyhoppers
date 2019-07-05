let hopperCount = 0;
let crossOriginProxy = '/ba-simple-proxy.php?url=';
if (window.location.hostname == 'localhost') {
	crossOriginProxy = '/howmanyhoppers/ba-simple-proxy.php?url=';
}

$(document).ready(function() {
	collectionCall(crossOriginProxy + "http://api.collection.whitney.org/groups/5/?page=1&format=json");
});

function collectionCall(url) {
	$.getJSON(url, function(json){
		console.log(json['contents']);

		var objects = json['contents']['group_objects']['results'];
		var next = json['contents']['group_objects']['next'];

		objects.forEach(function (object) {
			if (object['artist_name'] == 'Edward Hopper') {
				hopperCount += 1;
				$('.hopper__count').html(hopperCount);
			}
		});

		if (next) {
			collectionCall(crossOriginProxy + next);
		} else {
			$('.hopper__count').html(hopperCount);
		}

	});
}