var SPREADSHEET_ID_AND_TAB =
	'1qg2NQO9Qh_zjApjyMTMLcUorq8Ox2Al8x6_a1q42gSg/freshkill';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let ul = $(`<p>` + entry.Tags + `</p>`).appendTo('#tags');

				if (entry.Ready == 'show') {
					let section = $(
						`<span><h5>` +
							entry.Title +
							`</h5><h5>` +
							entry.Director +
							`</h5><h5>` +
							entry.Year +
							`</h5></span`
					).appendTo('#banner-title');

					let div = $(
						`<p>` +
							entry.EventDate +
							`</p><p>` +
							entry.EventLocation +
							`</p><a src="` +
							entry.TicketLink +
							`">` +
							entry.TicketPrice +
							`</a><a src="` +
							entry.CopresenterLink +
							`">` +
							entry.Copresenter +
							`</a><p>` +
							entry.Collaborators +
							`</p><p>`
					).appendTo('#banner-details');

					let img = $(
						`<img class="b__img" src="../film-stills/` +
							entry.FilmStills +
							`1.jpg" title="Film still: ` +
							entry.Title +
							`, ` +
							entry.Year +
							`" />`
					).appendTo('#banner-img');
				}

				
				
				

				let article = $(
					`<p>` +
						entry.EventDetails +
						`</p><span><a src="` +
						entry.CopresenterLink +
						`">` +
						entry.Copresenter +
						`</a><p>` +
						entry.Collaborators +
						`</p></span><p>` +
						entry.EventDescription +
						`</p><p>` +
						entry.SeriesTitle +
						`</p><p>` +
						entry.SeriesDescription +
						`</p>`
				).appendTo('#details');
			});
		}
	);
});
