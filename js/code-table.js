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
						entry['ready'] +
						`"><img src="film-posters/` +
						entry['img file name'] +
						`" /><p>` +
						entry.title +
						`</p><p>` +
						entry.director +
						`</p><p>` +
						entry.year +
						`</p><ul>
					<li data-filter-type="` +
						entry.TAGupcoming +
						`" class="filter--upcoming"></li>
					<li data-filter-type="` +
						entry.TAGseries +
						`" class="filter--series"></li><li data-filter-type="` +
						entry.TAGonline +
						`" class="filter--online"></li><li data-filter-type="` +
						entry.TAGpast +
						`" class="filter--past"></li><li data-filter-type="` +
						entry.TAGoneoff +
						`" class="filter--oneoff"></li><li data-filter-type="` +
						entry.TAGirl +
						`" class="filter--irl"></li>
				</ul></div>`
				).appendTo('#listings');

				let details = $(
					`<details>
					<summary>
						<span>
						<p>` +
						entry.ptitle +
						`</p>
						<p>` +
						entry.partist +
						`</p>
						<p>` +
						entry.pdate +
						`</p>
					</span><p>` +
						entry.prole +
						`</p>
						</summary>
						<div><img src="` +
						entry.pimg +
						`" title="Project Image"><a href="` +
						entry.plink +
						`">View project</a><ul>` +
						entry.pdescription +
						`</ul></div>
						</details>`
				).appendTo('#project');

				// let details = $(
				// 	`<details><summary>` +
				// 		entry.project +
				// 		`</summary><ol><li>` +
				// 		entry.project +
				// 		`</li></ol></details>`
				// ).appendTo('#project');

				// let article = $(`<p>` + entry.bio + `</p>`).appendTo('#bio');
			});
		}
	);
});
