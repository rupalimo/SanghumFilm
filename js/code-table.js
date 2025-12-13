var SPREADSHEET_ID_AND_TAB =
	'1qg2NQO9Qh_zjApjyMTMLcUorq8Ox2Al8x6_a1q42gSg/current';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let section = $(
					`<div class="program--item" data-confirm="` +
						entry.Ready +
						`"><ul>
					<li data-filter-type="` +
						entry.TagUpcoming +
						`" class="filter--upcoming"></li>
					<li data-filter-type="` +
						entry.TagSeries +
						`" class="filter--series"></li><li data-filter-type="` +
						entry.TagOnline +
						`" class="filter--online"></li>
				</ul><img src="film-posters/` +
						entry.ImgFileName +
						`" /><div class="program--details"><h4>` +
						entry.Title +
						`</h4><span><h5>` +
						entry.Director +
						`</h5><p>` +
						entry.Year +
						`</p></span></div></div>`
				).appendTo('#listings');
			});
		}
	);
});
