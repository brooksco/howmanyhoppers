var hopperCount = 0;

$(document).foundation();

$(document).ready(function() {
	collectionCall("https://crossorigin.me/http://collection.whitney.org/json/groups/5/?page=1&format=json");
});

function collectionCall(url) {
	$.getJSON(url, function(json){
		console.log(json);

		var objects = json['group_objects']['results'];
		var next = json['group_objects']['next'];

		objects.forEach(function (object) {
			if (object['artist_name'] == 'Edward Hopper') {
				hopperCount += 1;
				$('#hopper__count').html(hopperCount);
			}
		});

		if (next) {
			collectionCall('https://crossorigin.me/' + next);
		}

	});
}