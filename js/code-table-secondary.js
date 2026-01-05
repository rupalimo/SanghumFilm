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
							`</p>`
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

				let p = $(
					`<p data-confirm="` +
						entry.EventDescription +
						`">` +
						entry.EventDescription +
						`</p>`
				).appendTo('#film-description');

				let div = $(
					`<span><p data-confirm="` +
						entry.Duration +
						`">` +
						entry.Duration +
						`</p><p data-confirm="` +
						entry.Country +
						`">` +
						entry.Country +
						`</p><p data-confirm="` +
						entry.Language +
						`">` +
						entry.Language +
						`</p></span><a href="` +
						entry.TrailerLink +
						`" data-confirm="` +
						entry.TrailerLink +
						`">Trailer</a><p data-confirm="` +
						entry.DirectorBio +
						`">` +
						entry.DirectorBio +
						`</p>`
				).appendTo('#film-meta');

				let span = $(
					`<img data-confirm="` +
						entry.FilmStills +
						`" class="secondary__img" src="../film-stills/` +
						entry.FilmStills +
						`2.jpg" title="Film still: ` +
						entry.Title +
						`, ` +
						entry.Year +
						`" /><img data-confirm="` +
						entry.FilmStills +
						`" class="secondary__img" src="../film-stills/` +
						entry.FilmStills +
						`3.jpg" title="Film still: ` +
						entry.Title +
						`, ` +
						entry.Year +
						`" /><img data-confirm="` +
						entry.FilmStills +
						`" class="secondary__img" src="../film-stills/` +
						entry.FilmStills +
						`4.jpg" title="Film still: ` +
						entry.Title +
						`, ` +
						entry.Year +
						`" /><p data-confirm="` +
						entry.DirectorBio +
						`">` +
						entry.DirectorBio +
						`</p>`
				).appendTo('#dir-bio');
			});
		}
	);
});
