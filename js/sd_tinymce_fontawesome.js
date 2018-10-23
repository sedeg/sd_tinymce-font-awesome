(function() {
	tinymce.PluginManager.add( 'sd_tinymce_fontawesome', function( editor, url ) {
		editor.addButton('sd_tinymce_fontawesome', {
			type: 'listbox',
			title: 'Insert Font Awesome Icon',
			text: 'Insert Icon',
			values: [
				{
					"value": "<span class=\"fa\">&#xf000<\/span>",
					"icon": " fa fa-glass"
				},
				{
					"value": "<span class=\"fa\">&#xf001<\/span>",
					"icon": " fa fa-music"
				},
				{
					"value": "<span class=\"fa\">&#xf002<\/span>",
					"icon": " fa fa-search"
				},
				{
					"value": "<span class=\"fa\">&#xf003<\/span>",
					"icon": " fa fa-envelope-o"
				},
				{
					"value": "<span class=\"fa\">&#xf004<\/span>",
					"icon": " fa fa-heart"
				},
				{
					"value": "<span class=\"fa\">&#xf005<\/span>",
					"icon": " fa fa-star"
				},
				{
					"value": "<span class=\"fa\">&#xf006<\/span>",
					"icon": " fa fa-star-o"
				},
				{
					"value": "<span class=\"fa\">&#xf007<\/span>",
					"icon": " fa fa-user"
				},
				{
					"value": "<span class=\"fa\">&#xf008<\/span>",
					"icon": " fa fa-film"
				},
				{
					"value": "<span class=\"fa\">&#xf009<\/span>",
					"icon": " fa fa-th-large"
				},
				{
					"value": "<span class=\"fa\">&#xf00a<\/span>",
					"icon": " fa fa-th"
				},
				{
					"value": "<span class=\"fa\">&#xf00b<\/span>",
					"icon": " fa fa-th-list"
				},
				{
					"value": "<span class=\"fa\">&#xf00c<\/span>",
					"icon": " fa fa-check"
				},
				{
					"value": "<span class=\"fa\">&#xf00d<\/span>",
					"icon": " fa fa-times"
				},
				{
					"value": "<span class=\"fa\">&#xf00e<\/span>",
					"icon": " fa fa-search-plus"
				},
				{
					"value": "<span class=\"fa\">&#xf010<\/span>",
					"icon": " fa fa-search-minus"
				},
				{
					"value": "<span class=\"fa\">&#xf011<\/span>",
					"icon": " fa fa-power-off"
				},
				{
					"value": "<span class=\"fa\">&#xf012<\/span>",
					"icon": " fa fa-signal"
				},
				{
					"value": "<span class=\"fa\">&#xf013<\/span>",
					"icon": " fa fa-cog"
				},
				{
					"value": "<span class=\"fa\">&#xf014<\/span>",
					"icon": " fa fa-trash-o"
				},
				{
					"value": "<span class=\"fa\">&#xf015<\/span>",
					"icon": " fa fa-home"
				},
				{
					"value": "<span class=\"fa\">&#xf016<\/span>",
					"icon": " fa fa-file-o"
				},
				{
					"value": "<span class=\"fa\">&#xf017<\/span>",
					"icon": " fa fa-clock-o"
				},
				{
					"value": "<span class=\"fa\">&#xf018<\/span>",
					"icon": " fa fa-road"
				},
				{
					"value": "<span class=\"fa\">&#xf019<\/span>",
					"icon": " fa fa-download"
				},
				{
					"value": "<span class=\"fa\">&#xf01a<\/span>",
					"icon": " fa fa-arrow-circle-o-down"
				},
				{
					"value": "<span class=\"fa\">&#xf01b<\/span>",
					"icon": " fa fa-arrow-circle-o-up"
				},
				{
					"value": "<span class=\"fa\">&#xf01c<\/span>",
					"icon": " fa fa-inbox"
				},
				{
					"value": "<span class=\"fa\">&#xf01d<\/span>",
					"icon": " fa fa-play-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf01e<\/span>",
					"icon": " fa fa-repeat"
				},
				{
					"value": "<span class=\"fa\">&#xf021<\/span>",
					"icon": " fa fa-refresh"
				},
				{
					"value": "<span class=\"fa\">&#xf022<\/span>",
					"icon": " fa fa-list-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf023<\/span>",
					"icon": " fa fa-lock"
				},
				{
					"value": "<span class=\"fa\">&#xf024<\/span>",
					"icon": " fa fa-flag"
				},
				{
					"value": "<span class=\"fa\">&#xf025<\/span>",
					"icon": " fa fa-headphones"
				},
				{
					"value": "<span class=\"fa\">&#xf026<\/span>",
					"icon": " fa fa-volume-off"
				},
				{
					"value": "<span class=\"fa\">&#xf027<\/span>",
					"icon": " fa fa-volume-down"
				},
				{
					"value": "<span class=\"fa\">&#xf028<\/span>",
					"icon": " fa fa-volume-up"
				},
				{
					"value": "<span class=\"fa\">&#xf029<\/span>",
					"icon": " fa fa-qrcode"
				},
				{
					"value": "<span class=\"fa\">&#xf02a<\/span>",
					"icon": " fa fa-barcode"
				},
				{
					"value": "<span class=\"fa\">&#xf02b<\/span>",
					"icon": " fa fa-tag"
				},
				{
					"value": "<span class=\"fa\">&#xf02c<\/span>",
					"icon": " fa fa-tags"
				},
				{
					"value": "<span class=\"fa\">&#xf02d<\/span>",
					"icon": " fa fa-book"
				},
				{
					"value": "<span class=\"fa\">&#xf02e<\/span>",
					"icon": " fa fa-bookmark"
				},
				{
					"value": "<span class=\"fa\">&#xf02f<\/span>",
					"icon": " fa fa-print"
				},
				{
					"value": "<span class=\"fa\">&#xf030<\/span>",
					"icon": " fa fa-camera"
				},
				{
					"value": "<span class=\"fa\">&#xf031<\/span>",
					"icon": " fa fa-font"
				},
				{
					"value": "<span class=\"fa\">&#xf032<\/span>",
					"icon": " fa fa-bold"
				},
				{
					"value": "<span class=\"fa\">&#xf033<\/span>",
					"icon": " fa fa-italic"
				},
				{
					"value": "<span class=\"fa\">&#xf034<\/span>",
					"icon": " fa fa-text-height"
				},
				{
					"value": "<span class=\"fa\">&#xf035<\/span>",
					"icon": " fa fa-text-width"
				},
				{
					"value": "<span class=\"fa\">&#xf036<\/span>",
					"icon": " fa fa-align-left"
				},
				{
					"value": "<span class=\"fa\">&#xf037<\/span>",
					"icon": " fa fa-align-center"
				},
				{
					"value": "<span class=\"fa\">&#xf038<\/span>",
					"icon": " fa fa-align-right"
				},
				{
					"value": "<span class=\"fa\">&#xf039<\/span>",
					"icon": " fa fa-align-justify"
				},
				{
					"value": "<span class=\"fa\">&#xf03a<\/span>",
					"icon": " fa fa-list"
				},
				{
					"value": "<span class=\"fa\">&#xf03b<\/span>",
					"icon": " fa fa-outdent"
				},
				{
					"value": "<span class=\"fa\">&#xf03c<\/span>",
					"icon": " fa fa-indent"
				},
				{
					"value": "<span class=\"fa\">&#xf03d<\/span>",
					"icon": " fa fa-video-camera"
				},
				{
					"value": "<span class=\"fa\">&#xf03e<\/span>",
					"icon": " fa fa-picture-o"
				},
				{
					"value": "<span class=\"fa\">&#xf040<\/span>",
					"icon": " fa fa-pencil"
				},
				{
					"value": "<span class=\"fa\">&#xf041<\/span>",
					"icon": " fa fa-map-marker"
				},
				{
					"value": "<span class=\"fa\">&#xf042<\/span>",
					"icon": " fa fa-adjust"
				},
				{
					"value": "<span class=\"fa\">&#xf043<\/span>",
					"icon": " fa fa-tint"
				},
				{
					"value": "<span class=\"fa\">&#xf044<\/span>",
					"icon": " fa fa-pencil-square-o"
				},
				{
					"value": "<span class=\"fa\">&#xf045<\/span>",
					"icon": " fa fa-share-square-o"
				},
				{
					"value": "<span class=\"fa\">&#xf046<\/span>",
					"icon": " fa fa-check-square-o"
				},
				{
					"value": "<span class=\"fa\">&#xf047<\/span>",
					"icon": " fa fa-arrows"
				},
				{
					"value": "<span class=\"fa\">&#xf048<\/span>",
					"icon": " fa fa-step-backward"
				},
				{
					"value": "<span class=\"fa\">&#xf049<\/span>",
					"icon": " fa fa-fast-backward"
				},
				{
					"value": "<span class=\"fa\">&#xf04a<\/span>",
					"icon": " fa fa-backward"
				},
				{
					"value": "<span class=\"fa\">&#xf04b<\/span>",
					"icon": " fa fa-play"
				},
				{
					"value": "<span class=\"fa\">&#xf04c<\/span>",
					"icon": " fa fa-pause"
				},
				{
					"value": "<span class=\"fa\">&#xf04d<\/span>",
					"icon": " fa fa-stop"
				},
				{
					"value": "<span class=\"fa\">&#xf04e<\/span>",
					"icon": " fa fa-forward"
				},
				{
					"value": "<span class=\"fa\">&#xf050<\/span>",
					"icon": " fa fa-fast-forward"
				},
				{
					"value": "<span class=\"fa\">&#xf051<\/span>",
					"icon": " fa fa-step-forward"
				},
				{
					"value": "<span class=\"fa\">&#xf052<\/span>",
					"icon": " fa fa-eject"
				},
				{
					"value": "<span class=\"fa\">&#xf053<\/span>",
					"icon": " fa fa-chevron-left"
				},
				{
					"value": "<span class=\"fa\">&#xf054<\/span>",
					"icon": " fa fa-chevron-right"
				},
				{
					"value": "<span class=\"fa\">&#xf055<\/span>",
					"icon": " fa fa-plus-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf056<\/span>",
					"icon": " fa fa-minus-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf057<\/span>",
					"icon": " fa fa-times-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf058<\/span>",
					"icon": " fa fa-check-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf059<\/span>",
					"icon": " fa fa-question-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf05a<\/span>",
					"icon": " fa fa-info-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf05b<\/span>",
					"icon": " fa fa-crosshairs"
				},
				{
					"value": "<span class=\"fa\">&#xf05c<\/span>",
					"icon": " fa fa-times-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf05d<\/span>",
					"icon": " fa fa-check-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf05e<\/span>",
					"icon": " fa fa-ban"
				},
				{
					"value": "<span class=\"fa\">&#xf060<\/span>",
					"icon": " fa fa-arrow-left"
				},
				{
					"value": "<span class=\"fa\">&#xf061<\/span>",
					"icon": " fa fa-arrow-right"
				},
				{
					"value": "<span class=\"fa\">&#xf062<\/span>",
					"icon": " fa fa-arrow-up"
				},
				{
					"value": "<span class=\"fa\">&#xf063<\/span>",
					"icon": " fa fa-arrow-down"
				},
				{
					"value": "<span class=\"fa\">&#xf064<\/span>",
					"icon": " fa fa-share"
				},
				{
					"value": "<span class=\"fa\">&#xf065<\/span>",
					"icon": " fa fa-expand"
				},
				{
					"value": "<span class=\"fa\">&#xf066<\/span>",
					"icon": " fa fa-compress"
				},
				{
					"value": "<span class=\"fa\">&#xf067<\/span>",
					"icon": " fa fa-plus"
				},
				{
					"value": "<span class=\"fa\">&#xf068<\/span>",
					"icon": " fa fa-minus"
				},
				{
					"value": "<span class=\"fa\">&#xf069<\/span>",
					"icon": " fa fa-asterisk"
				},
				{
					"value": "<span class=\"fa\">&#xf06a<\/span>",
					"icon": " fa fa-exclamation-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf06b<\/span>",
					"icon": " fa fa-gift"
				},
				{
					"value": "<span class=\"fa\">&#xf06c<\/span>",
					"icon": " fa fa-leaf"
				},
				{
					"value": "<span class=\"fa\">&#xf06d<\/span>",
					"icon": " fa fa-fire"
				},
				{
					"value": "<span class=\"fa\">&#xf06e<\/span>",
					"icon": " fa fa-eye"
				},
				{
					"value": "<span class=\"fa\">&#xf070<\/span>",
					"icon": " fa fa-eye-slash"
				},
				{
					"value": "<span class=\"fa\">&#xf071<\/span>",
					"icon": " fa fa-exclamation-triangle"
				},
				{
					"value": "<span class=\"fa\">&#xf072<\/span>",
					"icon": " fa fa-plane"
				},
				{
					"value": "<span class=\"fa\">&#xf073<\/span>",
					"icon": " fa fa-calendar"
				},
				{
					"value": "<span class=\"fa\">&#xf074<\/span>",
					"icon": " fa fa-random"
				},
				{
					"value": "<span class=\"fa\">&#xf075<\/span>",
					"icon": " fa fa-comment"
				},
				{
					"value": "<span class=\"fa\">&#xf076<\/span>",
					"icon": " fa fa-magnet"
				},
				{
					"value": "<span class=\"fa\">&#xf077<\/span>",
					"icon": " fa fa-chevron-up"
				},
				{
					"value": "<span class=\"fa\">&#xf078<\/span>",
					"icon": " fa fa-chevron-down"
				},
				{
					"value": "<span class=\"fa\">&#xf079<\/span>",
					"icon": " fa fa-retweet"
				},
				{
					"value": "<span class=\"fa\">&#xf07a<\/span>",
					"icon": " fa fa-shopping-cart"
				},
				{
					"value": "<span class=\"fa\">&#xf07b<\/span>",
					"icon": " fa fa-folder"
				},
				{
					"value": "<span class=\"fa\">&#xf07c<\/span>",
					"icon": " fa fa-folder-open"
				},
				{
					"value": "<span class=\"fa\">&#xf07d<\/span>",
					"icon": " fa fa-arrows-v"
				},
				{
					"value": "<span class=\"fa\">&#xf07e<\/span>",
					"icon": " fa fa-arrows-h"
				},
				{
					"value": "<span class=\"fa\">&#xf080<\/span>",
					"icon": " fa fa-bar-chart"
				},
				{
					"value": "<span class=\"fa\">&#xf081<\/span>",
					"icon": " fa fa-twitter-square"
				},
				{
					"value": "<span class=\"fa\">&#xf082<\/span>",
					"icon": " fa fa-facebook-square"
				},
				{
					"value": "<span class=\"fa\">&#xf083<\/span>",
					"icon": " fa fa-camera-retro"
				},
				{
					"value": "<span class=\"fa\">&#xf084<\/span>",
					"icon": " fa fa-key"
				},
				{
					"value": "<span class=\"fa\">&#xf085<\/span>",
					"icon": " fa fa-cogs"
				},
				{
					"value": "<span class=\"fa\">&#xf086<\/span>",
					"icon": " fa fa-comments"
				},
				{
					"value": "<span class=\"fa\">&#xf087<\/span>",
					"icon": " fa fa-thumbs-o-up"
				},
				{
					"value": "<span class=\"fa\">&#xf088<\/span>",
					"icon": " fa fa-thumbs-o-down"
				},
				{
					"value": "<span class=\"fa\">&#xf089<\/span>",
					"icon": " fa fa-star-half"
				},
				{
					"value": "<span class=\"fa\">&#xf08a<\/span>",
					"icon": " fa fa-heart-o"
				},
				{
					"value": "<span class=\"fa\">&#xf08b<\/span>",
					"icon": " fa fa-sign-out"
				},
				{
					"value": "<span class=\"fa\">&#xf08c<\/span>",
					"icon": " fa fa-linkedin-square"
				},
				{
					"value": "<span class=\"fa\">&#xf08d<\/span>",
					"icon": " fa fa-thumb-tack"
				},
				{
					"value": "<span class=\"fa\">&#xf08e<\/span>",
					"icon": " fa fa-external-link"
				},
				{
					"value": "<span class=\"fa\">&#xf090<\/span>",
					"icon": " fa fa-sign-in"
				},
				{
					"value": "<span class=\"fa\">&#xf091<\/span>",
					"icon": " fa fa-trophy"
				},
				{
					"value": "<span class=\"fa\">&#xf092<\/span>",
					"icon": " fa fa-github-square"
				},
				{
					"value": "<span class=\"fa\">&#xf093<\/span>",
					"icon": " fa fa-upload"
				},
				{
					"value": "<span class=\"fa\">&#xf094<\/span>",
					"icon": " fa fa-lemon-o"
				},
				{
					"value": "<span class=\"fa\">&#xf095<\/span>",
					"icon": " fa fa-phone"
				},
				{
					"value": "<span class=\"fa\">&#xf096<\/span>",
					"icon": " fa fa-square-o"
				},
				{
					"value": "<span class=\"fa\">&#xf097<\/span>",
					"icon": " fa fa-bookmark-o"
				},
				{
					"value": "<span class=\"fa\">&#xf098<\/span>",
					"icon": " fa fa-phone-square"
				},
				{
					"value": "<span class=\"fa\">&#xf099<\/span>",
					"icon": " fa fa-twitter"
				},
				{
					"value": "<span class=\"fa\">&#xf09a<\/span>",
					"icon": " fa fa-facebook"
				},
				{
					"value": "<span class=\"fa\">&#xf09b<\/span>",
					"icon": " fa fa-github"
				},
				{
					"value": "<span class=\"fa\">&#xf09c<\/span>",
					"icon": " fa fa-unlock"
				},
				{
					"value": "<span class=\"fa\">&#xf09d<\/span>",
					"icon": " fa fa-credit-card"
				},
				{
					"value": "<span class=\"fa\">&#xf09e<\/span>",
					"icon": " fa fa-rss"
				},
				{
					"value": "<span class=\"fa\">&#xf0a0<\/span>",
					"icon": " fa fa-hdd-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0a1<\/span>",
					"icon": " fa fa-bullhorn"
				},
				{
					"value": "<span class=\"fa\">&#xf0f3<\/span>",
					"icon": " fa fa-bell"
				},
				{
					"value": "<span class=\"fa\">&#xf0a3<\/span>",
					"icon": " fa fa-certificate"
				},
				{
					"value": "<span class=\"fa\">&#xf0a4<\/span>",
					"icon": " fa fa-hand-o-right"
				},
				{
					"value": "<span class=\"fa\">&#xf0a5<\/span>",
					"icon": " fa fa-hand-o-left"
				},
				{
					"value": "<span class=\"fa\">&#xf0a6<\/span>",
					"icon": " fa fa-hand-o-up"
				},
				{
					"value": "<span class=\"fa\">&#xf0a7<\/span>",
					"icon": " fa fa-hand-o-down"
				},
				{
					"value": "<span class=\"fa\">&#xf0a8<\/span>",
					"icon": " fa fa-arrow-circle-left"
				},
				{
					"value": "<span class=\"fa\">&#xf0a9<\/span>",
					"icon": " fa fa-arrow-circle-right"
				},
				{
					"value": "<span class=\"fa\">&#xf0aa<\/span>",
					"icon": " fa fa-arrow-circle-up"
				},
				{
					"value": "<span class=\"fa\">&#xf0ab<\/span>",
					"icon": " fa fa-arrow-circle-down"
				},
				{
					"value": "<span class=\"fa\">&#xf0ac<\/span>",
					"icon": " fa fa-globe"
				},
				{
					"value": "<span class=\"fa\">&#xf0ad<\/span>",
					"icon": " fa fa-wrench"
				},
				{
					"value": "<span class=\"fa\">&#xf0ae<\/span>",
					"icon": " fa fa-tasks"
				},
				{
					"value": "<span class=\"fa\">&#xf0b0<\/span>",
					"icon": " fa fa-filter"
				},
				{
					"value": "<span class=\"fa\">&#xf0b1<\/span>",
					"icon": " fa fa-briefcase"
				},
				{
					"value": "<span class=\"fa\">&#xf0b2<\/span>",
					"icon": " fa fa-arrows-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf0c0<\/span>",
					"icon": " fa fa-users"
				},
				{
					"value": "<span class=\"fa\">&#xf0c1<\/span>",
					"icon": " fa fa-link"
				},
				{
					"value": "<span class=\"fa\">&#xf0c2<\/span>",
					"icon": " fa fa-cloud"
				},
				{
					"value": "<span class=\"fa\">&#xf0c3<\/span>",
					"icon": " fa fa-flask"
				},
				{
					"value": "<span class=\"fa\">&#xf0c4<\/span>",
					"icon": " fa fa-scissors"
				},
				{
					"value": "<span class=\"fa\">&#xf0c5<\/span>",
					"icon": " fa fa-files-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0c6<\/span>",
					"icon": " fa fa-paperclip"
				},
				{
					"value": "<span class=\"fa\">&#xf0c7<\/span>",
					"icon": " fa fa-floppy-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0c8<\/span>",
					"icon": " fa fa-square"
				},
				{
					"value": "<span class=\"fa\">&#xf0c9<\/span>",
					"icon": " fa fa-bars"
				},
				{
					"value": "<span class=\"fa\">&#xf0ca<\/span>",
					"icon": " fa fa-list-ul"
				},
				{
					"value": "<span class=\"fa\">&#xf0cb<\/span>",
					"icon": " fa fa-list-ol"
				},
				{
					"value": "<span class=\"fa\">&#xf0cc<\/span>",
					"icon": " fa fa-strikethrough"
				},
				{
					"value": "<span class=\"fa\">&#xf0cd<\/span>",
					"icon": " fa fa-underline"
				},
				{
					"value": "<span class=\"fa\">&#xf0ce<\/span>",
					"icon": " fa fa-table"
				},
				{
					"value": "<span class=\"fa\">&#xf0d0<\/span>",
					"icon": " fa fa-magic"
				},
				{
					"value": "<span class=\"fa\">&#xf0d1<\/span>",
					"icon": " fa fa-truck"
				},
				{
					"value": "<span class=\"fa\">&#xf0d2<\/span>",
					"icon": " fa fa-pinterest"
				},
				{
					"value": "<span class=\"fa\">&#xf0d3<\/span>",
					"icon": " fa fa-pinterest-square"
				},
				{
					"value": "<span class=\"fa\">&#xf0d4<\/span>",
					"icon": " fa fa-google-plus-square"
				},
				{
					"value": "<span class=\"fa\">&#xf0d5<\/span>",
					"icon": " fa fa-google-plus"
				},
				{
					"value": "<span class=\"fa\">&#xf0d6<\/span>",
					"icon": " fa fa-money"
				},
				{
					"value": "<span class=\"fa\">&#xf0d7<\/span>",
					"icon": " fa fa-caret-down"
				},
				{
					"value": "<span class=\"fa\">&#xf0d8<\/span>",
					"icon": " fa fa-caret-up"
				},
				{
					"value": "<span class=\"fa\">&#xf0d9<\/span>",
					"icon": " fa fa-caret-left"
				},
				{
					"value": "<span class=\"fa\">&#xf0da<\/span>",
					"icon": " fa fa-caret-right"
				},
				{
					"value": "<span class=\"fa\">&#xf0db<\/span>",
					"icon": " fa fa-columns"
				},
				{
					"value": "<span class=\"fa\">&#xf0dc<\/span>",
					"icon": " fa fa-sort"
				},
				{
					"value": "<span class=\"fa\">&#xf0dd<\/span>",
					"icon": " fa fa-sort-desc"
				},
				{
					"value": "<span class=\"fa\">&#xf0de<\/span>",
					"icon": " fa fa-sort-asc"
				},
				{
					"value": "<span class=\"fa\">&#xf0e0<\/span>",
					"icon": " fa fa-envelope"
				},
				{
					"value": "<span class=\"fa\">&#xf0e1<\/span>",
					"icon": " fa fa-linkedin"
				},
				{
					"value": "<span class=\"fa\">&#xf0e2<\/span>",
					"icon": " fa fa-undo"
				},
				{
					"value": "<span class=\"fa\">&#xf0e3<\/span>",
					"icon": " fa fa-gavel"
				},
				{
					"value": "<span class=\"fa\">&#xf0e4<\/span>",
					"icon": " fa fa-tachometer"
				},
				{
					"value": "<span class=\"fa\">&#xf0e5<\/span>",
					"icon": " fa fa-comment-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0e6<\/span>",
					"icon": " fa fa-comments-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0e7<\/span>",
					"icon": " fa fa-bolt"
				},
				{
					"value": "<span class=\"fa\">&#xf0e8<\/span>",
					"icon": " fa fa-sitemap"
				},
				{
					"value": "<span class=\"fa\">&#xf0e9<\/span>",
					"icon": " fa fa-umbrella"
				},
				{
					"value": "<span class=\"fa\">&#xf0ea<\/span>",
					"icon": " fa fa-clipboard"
				},
				{
					"value": "<span class=\"fa\">&#xf0eb<\/span>",
					"icon": " fa fa-lightbulb-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0ec<\/span>",
					"icon": " fa fa-exchange"
				},
				{
					"value": "<span class=\"fa\">&#xf0ed<\/span>",
					"icon": " fa fa-cloud-download"
				},
				{
					"value": "<span class=\"fa\">&#xf0ee<\/span>",
					"icon": " fa fa-cloud-upload"
				},
				{
					"value": "<span class=\"fa\">&#xf0f0<\/span>",
					"icon": " fa fa-user-md"
				},
				{
					"value": "<span class=\"fa\">&#xf0f1<\/span>",
					"icon": " fa fa-stethoscope"
				},
				{
					"value": "<span class=\"fa\">&#xf0f2<\/span>",
					"icon": " fa fa-suitcase"
				},
				{
					"value": "<span class=\"fa\">&#xf0a2<\/span>",
					"icon": " fa fa-bell-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0f4<\/span>",
					"icon": " fa fa-coffee"
				},
				{
					"value": "<span class=\"fa\">&#xf0f5<\/span>",
					"icon": " fa fa-cutlery"
				},
				{
					"value": "<span class=\"fa\">&#xf0f6<\/span>",
					"icon": " fa fa-file-text-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0f7<\/span>",
					"icon": " fa fa-building-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0f8<\/span>",
					"icon": " fa fa-hospital-o"
				},
				{
					"value": "<span class=\"fa\">&#xf0f9<\/span>",
					"icon": " fa fa-ambulance"
				},
				{
					"value": "<span class=\"fa\">&#xf0fa<\/span>",
					"icon": " fa fa-medkit"
				},
				{
					"value": "<span class=\"fa\">&#xf0fb<\/span>",
					"icon": " fa fa-fighter-jet"
				},
				{
					"value": "<span class=\"fa\">&#xf0fc<\/span>",
					"icon": " fa fa-beer"
				},
				{
					"value": "<span class=\"fa\">&#xf0fd<\/span>",
					"icon": " fa fa-h-square"
				},
				{
					"value": "<span class=\"fa\">&#xf0fe<\/span>",
					"icon": " fa fa-plus-square"
				},
				{
					"value": "<span class=\"fa\">&#xf100<\/span>",
					"icon": " fa fa-angle-double-left"
				},
				{
					"value": "<span class=\"fa\">&#xf101<\/span>",
					"icon": " fa fa-angle-double-right"
				},
				{
					"value": "<span class=\"fa\">&#xf102<\/span>",
					"icon": " fa fa-angle-double-up"
				},
				{
					"value": "<span class=\"fa\">&#xf103<\/span>",
					"icon": " fa fa-angle-double-down"
				},
				{
					"value": "<span class=\"fa\">&#xf104<\/span>",
					"icon": " fa fa-angle-left"
				},
				{
					"value": "<span class=\"fa\">&#xf105<\/span>",
					"icon": " fa fa-angle-right"
				},
				{
					"value": "<span class=\"fa\">&#xf106<\/span>",
					"icon": " fa fa-angle-up"
				},
				{
					"value": "<span class=\"fa\">&#xf107<\/span>",
					"icon": " fa fa-angle-down"
				},
				{
					"value": "<span class=\"fa\">&#xf108<\/span>",
					"icon": " fa fa-desktop"
				},
				{
					"value": "<span class=\"fa\">&#xf109<\/span>",
					"icon": " fa fa-laptop"
				},
				{
					"value": "<span class=\"fa\">&#xf10a<\/span>",
					"icon": " fa fa-tablet"
				},
				{
					"value": "<span class=\"fa\">&#xf10b<\/span>",
					"icon": " fa fa-mobile"
				},
				{
					"value": "<span class=\"fa\">&#xf10c<\/span>",
					"icon": " fa fa-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf10d<\/span>",
					"icon": " fa fa-quote-left"
				},
				{
					"value": "<span class=\"fa\">&#xf10e<\/span>",
					"icon": " fa fa-quote-right"
				},
				{
					"value": "<span class=\"fa\">&#xf110<\/span>",
					"icon": " fa fa-spinner"
				},
				{
					"value": "<span class=\"fa\">&#xf111<\/span>",
					"icon": " fa fa-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf112<\/span>",
					"icon": " fa fa-reply"
				},
				{
					"value": "<span class=\"fa\">&#xf113<\/span>",
					"icon": " fa fa-github-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf114<\/span>",
					"icon": " fa fa-folder-o"
				},
				{
					"value": "<span class=\"fa\">&#xf115<\/span>",
					"icon": " fa fa-folder-open-o"
				},
				{
					"value": "<span class=\"fa\">&#xf118<\/span>",
					"icon": " fa fa-smile-o"
				},
				{
					"value": "<span class=\"fa\">&#xf119<\/span>",
					"icon": " fa fa-frown-o"
				},
				{
					"value": "<span class=\"fa\">&#xf11a<\/span>",
					"icon": " fa fa-meh-o"
				},
				{
					"value": "<span class=\"fa\">&#xf11b<\/span>",
					"icon": " fa fa-gamepad"
				},
				{
					"value": "<span class=\"fa\">&#xf11c<\/span>",
					"icon": " fa fa-keyboard-o"
				},
				{
					"value": "<span class=\"fa\">&#xf11d<\/span>",
					"icon": " fa fa-flag-o"
				},
				{
					"value": "<span class=\"fa\">&#xf11e<\/span>",
					"icon": " fa fa-flag-checkered"
				},
				{
					"value": "<span class=\"fa\">&#xf120<\/span>",
					"icon": " fa fa-terminal"
				},
				{
					"value": "<span class=\"fa\">&#xf121<\/span>",
					"icon": " fa fa-code"
				},
				{
					"value": "<span class=\"fa\">&#xf122<\/span>",
					"icon": " fa fa-reply-all"
				},
				{
					"value": "<span class=\"fa\">&#xf123<\/span>",
					"icon": " fa fa-star-half-o"
				},
				{
					"value": "<span class=\"fa\">&#xf124<\/span>",
					"icon": " fa fa-location-arrow"
				},
				{
					"value": "<span class=\"fa\">&#xf125<\/span>",
					"icon": " fa fa-crop"
				},
				{
					"value": "<span class=\"fa\">&#xf126<\/span>",
					"icon": " fa fa-code-fork"
				},
				{
					"value": "<span class=\"fa\">&#xf127<\/span>",
					"icon": " fa fa-chain-broken"
				},
				{
					"value": "<span class=\"fa\">&#xf128<\/span>",
					"icon": " fa fa-question"
				},
				{
					"value": "<span class=\"fa\">&#xf129<\/span>",
					"icon": " fa fa-info"
				},
				{
					"value": "<span class=\"fa\">&#xf12a<\/span>",
					"icon": " fa fa-exclamation"
				},
				{
					"value": "<span class=\"fa\">&#xf12b<\/span>",
					"icon": " fa fa-superscript"
				},
				{
					"value": "<span class=\"fa\">&#xf12c<\/span>",
					"icon": " fa fa-subscript"
				},
				{
					"value": "<span class=\"fa\">&#xf12d<\/span>",
					"icon": " fa fa-eraser"
				},
				{
					"value": "<span class=\"fa\">&#xf12e<\/span>",
					"icon": " fa fa-puzzle-piece"
				},
				{
					"value": "<span class=\"fa\">&#xf130<\/span>",
					"icon": " fa fa-microphone"
				},
				{
					"value": "<span class=\"fa\">&#xf131<\/span>",
					"icon": " fa fa-microphone-slash"
				},
				{
					"value": "<span class=\"fa\">&#xf132<\/span>",
					"icon": " fa fa-shield"
				},
				{
					"value": "<span class=\"fa\">&#xf133<\/span>",
					"icon": " fa fa-calendar-o"
				},
				{
					"value": "<span class=\"fa\">&#xf134<\/span>",
					"icon": " fa fa-fire-extinguisher"
				},
				{
					"value": "<span class=\"fa\">&#xf135<\/span>",
					"icon": " fa fa-rocket"
				},
				{
					"value": "<span class=\"fa\">&#xf136<\/span>",
					"icon": " fa fa-maxcdn"
				},
				{
					"value": "<span class=\"fa\">&#xf137<\/span>",
					"icon": " fa fa-chevron-circle-left"
				},
				{
					"value": "<span class=\"fa\">&#xf138<\/span>",
					"icon": " fa fa-chevron-circle-right"
				},
				{
					"value": "<span class=\"fa\">&#xf139<\/span>",
					"icon": " fa fa-chevron-circle-up"
				},
				{
					"value": "<span class=\"fa\">&#xf13a<\/span>",
					"icon": " fa fa-chevron-circle-down"
				},
				{
					"value": "<span class=\"fa\">&#xf13b<\/span>",
					"icon": " fa fa-html5"
				},
				{
					"value": "<span class=\"fa\">&#xf13c<\/span>",
					"icon": " fa fa-css3"
				},
				{
					"value": "<span class=\"fa\">&#xf13d<\/span>",
					"icon": " fa fa-anchor"
				},
				{
					"value": "<span class=\"fa\">&#xf13e<\/span>",
					"icon": " fa fa-unlock-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf140<\/span>",
					"icon": " fa fa-bullseye"
				},
				{
					"value": "<span class=\"fa\">&#xf141<\/span>",
					"icon": " fa fa-ellipsis-h"
				},
				{
					"value": "<span class=\"fa\">&#xf142<\/span>",
					"icon": " fa fa-ellipsis-v"
				},
				{
					"value": "<span class=\"fa\">&#xf143<\/span>",
					"icon": " fa fa-rss-square"
				},
				{
					"value": "<span class=\"fa\">&#xf144<\/span>",
					"icon": " fa fa-play-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf145<\/span>",
					"icon": " fa fa-ticket"
				},
				{
					"value": "<span class=\"fa\">&#xf146<\/span>",
					"icon": " fa fa-minus-square"
				},
				{
					"value": "<span class=\"fa\">&#xf147<\/span>",
					"icon": " fa fa-minus-square-o"
				},
				{
					"value": "<span class=\"fa\">&#xf148<\/span>",
					"icon": " fa fa-level-up"
				},
				{
					"value": "<span class=\"fa\">&#xf149<\/span>",
					"icon": " fa fa-level-down"
				},
				{
					"value": "<span class=\"fa\">&#xf14a<\/span>",
					"icon": " fa fa-check-square"
				},
				{
					"value": "<span class=\"fa\">&#xf14b<\/span>",
					"icon": " fa fa-pencil-square"
				},
				{
					"value": "<span class=\"fa\">&#xf14c<\/span>",
					"icon": " fa fa-external-link-square"
				},
				{
					"value": "<span class=\"fa\">&#xf14d<\/span>",
					"icon": " fa fa-share-square"
				},
				{
					"value": "<span class=\"fa\">&#xf14e<\/span>",
					"icon": " fa fa-compass"
				},
				{
					"value": "<span class=\"fa\">&#xf150<\/span>",
					"icon": " fa fa-caret-square-o-down"
				},
				{
					"value": "<span class=\"fa\">&#xf151<\/span>",
					"icon": " fa fa-caret-square-o-up"
				},
				{
					"value": "<span class=\"fa\">&#xf152<\/span>",
					"icon": " fa fa-caret-square-o-right"
				},
				{
					"value": "<span class=\"fa\">&#xf153<\/span>",
					"icon": " fa fa-eur"
				},
				{
					"value": "<span class=\"fa\">&#xf154<\/span>",
					"icon": " fa fa-gbp"
				},
				{
					"value": "<span class=\"fa\">&#xf155<\/span>",
					"icon": " fa fa-usd"
				},
				{
					"value": "<span class=\"fa\">&#xf156<\/span>",
					"icon": " fa fa-inr"
				},
				{
					"value": "<span class=\"fa\">&#xf157<\/span>",
					"icon": " fa fa-jpy"
				},
				{
					"value": "<span class=\"fa\">&#xf158<\/span>",
					"icon": " fa fa-rub"
				},
				{
					"value": "<span class=\"fa\">&#xf159<\/span>",
					"icon": " fa fa-krw"
				},
				{
					"value": "<span class=\"fa\">&#xf15a<\/span>",
					"icon": " fa fa-btc"
				},
				{
					"value": "<span class=\"fa\">&#xf15b<\/span>",
					"icon": " fa fa-file"
				},
				{
					"value": "<span class=\"fa\">&#xf15c<\/span>",
					"icon": " fa fa-file-text"
				},
				{
					"value": "<span class=\"fa\">&#xf15d<\/span>",
					"icon": " fa fa-sort-alpha-asc"
				},
				{
					"value": "<span class=\"fa\">&#xf15e<\/span>",
					"icon": " fa fa-sort-alpha-desc"
				},
				{
					"value": "<span class=\"fa\">&#xf160<\/span>",
					"icon": " fa fa-sort-amount-asc"
				},
				{
					"value": "<span class=\"fa\">&#xf161<\/span>",
					"icon": " fa fa-sort-amount-desc"
				},
				{
					"value": "<span class=\"fa\">&#xf162<\/span>",
					"icon": " fa fa-sort-numeric-asc"
				},
				{
					"value": "<span class=\"fa\">&#xf163<\/span>",
					"icon": " fa fa-sort-numeric-desc"
				},
				{
					"value": "<span class=\"fa\">&#xf164<\/span>",
					"icon": " fa fa-thumbs-up"
				},
				{
					"value": "<span class=\"fa\">&#xf165<\/span>",
					"icon": " fa fa-thumbs-down"
				},
				{
					"value": "<span class=\"fa\">&#xf166<\/span>",
					"icon": " fa fa-youtube-square"
				},
				{
					"value": "<span class=\"fa\">&#xf167<\/span>",
					"icon": " fa fa-youtube"
				},
				{
					"value": "<span class=\"fa\">&#xf168<\/span>",
					"icon": " fa fa-xing"
				},
				{
					"value": "<span class=\"fa\">&#xf169<\/span>",
					"icon": " fa fa-xing-square"
				},
				{
					"value": "<span class=\"fa\">&#xf16a<\/span>",
					"icon": " fa fa-youtube-play"
				},
				{
					"value": "<span class=\"fa\">&#xf16b<\/span>",
					"icon": " fa fa-dropbox"
				},
				{
					"value": "<span class=\"fa\">&#xf16c<\/span>",
					"icon": " fa fa-stack-overflow"
				},
				{
					"value": "<span class=\"fa\">&#xf16d<\/span>",
					"icon": " fa fa-instagram"
				},
				{
					"value": "<span class=\"fa\">&#xf16e<\/span>",
					"icon": " fa fa-flickr"
				},
				{
					"value": "<span class=\"fa\">&#xf170<\/span>",
					"icon": " fa fa-adn"
				},
				{
					"value": "<span class=\"fa\">&#xf171<\/span>",
					"icon": " fa fa-bitbucket"
				},
				{
					"value": "<span class=\"fa\">&#xf172<\/span>",
					"icon": " fa fa-bitbucket-square"
				},
				{
					"value": "<span class=\"fa\">&#xf173<\/span>",
					"icon": " fa fa-tumblr"
				},
				{
					"value": "<span class=\"fa\">&#xf174<\/span>",
					"icon": " fa fa-tumblr-square"
				},
				{
					"value": "<span class=\"fa\">&#xf175<\/span>",
					"icon": " fa fa-long-arrow-down"
				},
				{
					"value": "<span class=\"fa\">&#xf176<\/span>",
					"icon": " fa fa-long-arrow-up"
				},
				{
					"value": "<span class=\"fa\">&#xf177<\/span>",
					"icon": " fa fa-long-arrow-left"
				},
				{
					"value": "<span class=\"fa\">&#xf178<\/span>",
					"icon": " fa fa-long-arrow-right"
				},
				{
					"value": "<span class=\"fa\">&#xf179<\/span>",
					"icon": " fa fa-apple"
				},
				{
					"value": "<span class=\"fa\">&#xf17a<\/span>",
					"icon": " fa fa-windows"
				},
				{
					"value": "<span class=\"fa\">&#xf17b<\/span>",
					"icon": " fa fa-android"
				},
				{
					"value": "<span class=\"fa\">&#xf17c<\/span>",
					"icon": " fa fa-linux"
				},
				{
					"value": "<span class=\"fa\">&#xf17d<\/span>",
					"icon": " fa fa-dribbble"
				},
				{
					"value": "<span class=\"fa\">&#xf17e<\/span>",
					"icon": " fa fa-skype"
				},
				{
					"value": "<span class=\"fa\">&#xf180<\/span>",
					"icon": " fa fa-foursquare"
				},
				{
					"value": "<span class=\"fa\">&#xf181<\/span>",
					"icon": " fa fa-trello"
				},
				{
					"value": "<span class=\"fa\">&#xf182<\/span>",
					"icon": " fa fa-female"
				},
				{
					"value": "<span class=\"fa\">&#xf183<\/span>",
					"icon": " fa fa-male"
				},
				{
					"value": "<span class=\"fa\">&#xf184<\/span>",
					"icon": " fa fa-gratipay"
				},
				{
					"value": "<span class=\"fa\">&#xf185<\/span>",
					"icon": " fa fa-sun-o"
				},
				{
					"value": "<span class=\"fa\">&#xf186<\/span>",
					"icon": " fa fa-moon-o"
				},
				{
					"value": "<span class=\"fa\">&#xf187<\/span>",
					"icon": " fa fa-archive"
				},
				{
					"value": "<span class=\"fa\">&#xf188<\/span>",
					"icon": " fa fa-bug"
				},
				{
					"value": "<span class=\"fa\">&#xf189<\/span>",
					"icon": " fa fa-vk"
				},
				{
					"value": "<span class=\"fa\">&#xf18a<\/span>",
					"icon": " fa fa-weibo"
				},
				{
					"value": "<span class=\"fa\">&#xf18b<\/span>",
					"icon": " fa fa-renren"
				},
				{
					"value": "<span class=\"fa\">&#xf18c<\/span>",
					"icon": " fa fa-pagelines"
				},
				{
					"value": "<span class=\"fa\">&#xf18d<\/span>",
					"icon": " fa fa-stack-exchange"
				},
				{
					"value": "<span class=\"fa\">&#xf18e<\/span>",
					"icon": " fa fa-arrow-circle-o-right"
				},
				{
					"value": "<span class=\"fa\">&#xf190<\/span>",
					"icon": " fa fa-arrow-circle-o-left"
				},
				{
					"value": "<span class=\"fa\">&#xf191<\/span>",
					"icon": " fa fa-caret-square-o-left"
				},
				{
					"value": "<span class=\"fa\">&#xf192<\/span>",
					"icon": " fa fa-dot-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf193<\/span>",
					"icon": " fa fa-wheelchair"
				},
				{
					"value": "<span class=\"fa\">&#xf194<\/span>",
					"icon": " fa fa-vimeo-square"
				},
				{
					"value": "<span class=\"fa\">&#xf195<\/span>",
					"icon": " fa fa-try"
				},
				{
					"value": "<span class=\"fa\">&#xf196<\/span>",
					"icon": " fa fa-plus-square-o"
				},
				{
					"value": "<span class=\"fa\">&#xf197<\/span>",
					"icon": " fa fa-space-shuttle"
				},
				{
					"value": "<span class=\"fa\">&#xf198<\/span>",
					"icon": " fa fa-slack"
				},
				{
					"value": "<span class=\"fa\">&#xf199<\/span>",
					"icon": " fa fa-envelope-square"
				},
				{
					"value": "<span class=\"fa\">&#xf19a<\/span>",
					"icon": " fa fa-wordpress"
				},
				{
					"value": "<span class=\"fa\">&#xf19b<\/span>",
					"icon": " fa fa-openid"
				},
				{
					"value": "<span class=\"fa\">&#xf19c<\/span>",
					"icon": " fa fa-university"
				},
				{
					"value": "<span class=\"fa\">&#xf19d<\/span>",
					"icon": " fa fa-graduation-cap"
				},
				{
					"value": "<span class=\"fa\">&#xf19e<\/span>",
					"icon": " fa fa-yahoo"
				},
				{
					"value": "<span class=\"fa\">&#xf1a0<\/span>",
					"icon": " fa fa-google"
				},
				{
					"value": "<span class=\"fa\">&#xf1a1<\/span>",
					"icon": " fa fa-reddit"
				},
				{
					"value": "<span class=\"fa\">&#xf1a2<\/span>",
					"icon": " fa fa-reddit-square"
				},
				{
					"value": "<span class=\"fa\">&#xf1a3<\/span>",
					"icon": " fa fa-stumbleupon-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf1a4<\/span>",
					"icon": " fa fa-stumbleupon"
				},
				{
					"value": "<span class=\"fa\">&#xf1a5<\/span>",
					"icon": " fa fa-delicious"
				},
				{
					"value": "<span class=\"fa\">&#xf1a6<\/span>",
					"icon": " fa fa-digg"
				},
				{
					"value": "<span class=\"fa\">&#xf1a7<\/span>",
					"icon": " fa fa-pied-piper-pp"
				},
				{
					"value": "<span class=\"fa\">&#xf1a8<\/span>",
					"icon": " fa fa-pied-piper-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf1a9<\/span>",
					"icon": " fa fa-drupal"
				},
				{
					"value": "<span class=\"fa\">&#xf1aa<\/span>",
					"icon": " fa fa-joomla"
				},
				{
					"value": "<span class=\"fa\">&#xf1ab<\/span>",
					"icon": " fa fa-language"
				},
				{
					"value": "<span class=\"fa\">&#xf1ac<\/span>",
					"icon": " fa fa-fax"
				},
				{
					"value": "<span class=\"fa\">&#xf1ad<\/span>",
					"icon": " fa fa-building"
				},
				{
					"value": "<span class=\"fa\">&#xf1ae<\/span>",
					"icon": " fa fa-child"
				},
				{
					"value": "<span class=\"fa\">&#xf1b0<\/span>",
					"icon": " fa fa-paw"
				},
				{
					"value": "<span class=\"fa\">&#xf1b1<\/span>",
					"icon": " fa fa-spoon"
				},
				{
					"value": "<span class=\"fa\">&#xf1b2<\/span>",
					"icon": " fa fa-cube"
				},
				{
					"value": "<span class=\"fa\">&#xf1b3<\/span>",
					"icon": " fa fa-cubes"
				},
				{
					"value": "<span class=\"fa\">&#xf1b4<\/span>",
					"icon": " fa fa-behance"
				},
				{
					"value": "<span class=\"fa\">&#xf1b5<\/span>",
					"icon": " fa fa-behance-square"
				},
				{
					"value": "<span class=\"fa\">&#xf1b6<\/span>",
					"icon": " fa fa-steam"
				},
				{
					"value": "<span class=\"fa\">&#xf1b7<\/span>",
					"icon": " fa fa-steam-square"
				},
				{
					"value": "<span class=\"fa\">&#xf1b8<\/span>",
					"icon": " fa fa-recycle"
				},
				{
					"value": "<span class=\"fa\">&#xf1b9<\/span>",
					"icon": " fa fa-car"
				},
				{
					"value": "<span class=\"fa\">&#xf1ba<\/span>",
					"icon": " fa fa-taxi"
				},
				{
					"value": "<span class=\"fa\">&#xf1bb<\/span>",
					"icon": " fa fa-tree"
				},
				{
					"value": "<span class=\"fa\">&#xf1bc<\/span>",
					"icon": " fa fa-spotify"
				},
				{
					"value": "<span class=\"fa\">&#xf1bd<\/span>",
					"icon": " fa fa-deviantart"
				},
				{
					"value": "<span class=\"fa\">&#xf1be<\/span>",
					"icon": " fa fa-soundcloud"
				},
				{
					"value": "<span class=\"fa\">&#xf1c0<\/span>",
					"icon": " fa fa-database"
				},
				{
					"value": "<span class=\"fa\">&#xf1c1<\/span>",
					"icon": " fa fa-file-pdf-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c2<\/span>",
					"icon": " fa fa-file-word-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c3<\/span>",
					"icon": " fa fa-file-excel-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c4<\/span>",
					"icon": " fa fa-file-powerpoint-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c5<\/span>",
					"icon": " fa fa-file-image-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c6<\/span>",
					"icon": " fa fa-file-archive-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c7<\/span>",
					"icon": " fa fa-file-audio-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c8<\/span>",
					"icon": " fa fa-file-video-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1c9<\/span>",
					"icon": " fa fa-file-code-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1ca<\/span>",
					"icon": " fa fa-vine"
				},
				{
					"value": "<span class=\"fa\">&#xf1cb<\/span>",
					"icon": " fa fa-codepen"
				},
				{
					"value": "<span class=\"fa\">&#xf1cc<\/span>",
					"icon": " fa fa-jsfiddle"
				},
				{
					"value": "<span class=\"fa\">&#xf1cd<\/span>",
					"icon": " fa fa-life-ring"
				},
				{
					"value": "<span class=\"fa\">&#xf1ce<\/span>",
					"icon": " fa fa-circle-o-notch"
				},
				{
					"value": "<span class=\"fa\">&#xf1d0<\/span>",
					"icon": " fa fa-rebel"
				},
				{
					"value": "<span class=\"fa\">&#xf1d1<\/span>",
					"icon": " fa fa-empire"
				},
				{
					"value": "<span class=\"fa\">&#xf1d2<\/span>",
					"icon": " fa fa-git-square"
				},
				{
					"value": "<span class=\"fa\">&#xf1d3<\/span>",
					"icon": " fa fa-git"
				},
				{
					"value": "<span class=\"fa\">&#xf1d4<\/span>",
					"icon": " fa fa-hacker-news"
				},
				{
					"value": "<span class=\"fa\">&#xf1d5<\/span>",
					"icon": " fa fa-tencent-weibo"
				},
				{
					"value": "<span class=\"fa\">&#xf1d6<\/span>",
					"icon": " fa fa-qq"
				},
				{
					"value": "<span class=\"fa\">&#xf1d7<\/span>",
					"icon": " fa fa-weixin"
				},
				{
					"value": "<span class=\"fa\">&#xf1d8<\/span>",
					"icon": " fa fa-paper-plane"
				},
				{
					"value": "<span class=\"fa\">&#xf1d9<\/span>",
					"icon": " fa fa-paper-plane-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1da<\/span>",
					"icon": " fa fa-history"
				},
				{
					"value": "<span class=\"fa\">&#xf1db<\/span>",
					"icon": " fa fa-circle-thin"
				},
				{
					"value": "<span class=\"fa\">&#xf1dc<\/span>",
					"icon": " fa fa-header"
				},
				{
					"value": "<span class=\"fa\">&#xf1dd<\/span>",
					"icon": " fa fa-paragraph"
				},
				{
					"value": "<span class=\"fa\">&#xf1de<\/span>",
					"icon": " fa fa-sliders"
				},
				{
					"value": "<span class=\"fa\">&#xf1e0<\/span>",
					"icon": " fa fa-share-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf1e1<\/span>",
					"icon": " fa fa-share-alt-square"
				},
				{
					"value": "<span class=\"fa\">&#xf1e2<\/span>",
					"icon": " fa fa-bomb"
				},
				{
					"value": "<span class=\"fa\">&#xf1e3<\/span>",
					"icon": " fa fa-futbol-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1e4<\/span>",
					"icon": " fa fa-tty"
				},
				{
					"value": "<span class=\"fa\">&#xf1e5<\/span>",
					"icon": " fa fa-binoculars"
				},
				{
					"value": "<span class=\"fa\">&#xf1e6<\/span>",
					"icon": " fa fa-plug"
				},
				{
					"value": "<span class=\"fa\">&#xf1e7<\/span>",
					"icon": " fa fa-slideshare"
				},
				{
					"value": "<span class=\"fa\">&#xf1e8<\/span>",
					"icon": " fa fa-twitch"
				},
				{
					"value": "<span class=\"fa\">&#xf1e9<\/span>",
					"icon": " fa fa-yelp"
				},
				{
					"value": "<span class=\"fa\">&#xf1ea<\/span>",
					"icon": " fa fa-newspaper-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1eb<\/span>",
					"icon": " fa fa-wifi"
				},
				{
					"value": "<span class=\"fa\">&#xf1ec<\/span>",
					"icon": " fa fa-calculator"
				},
				{
					"value": "<span class=\"fa\">&#xf1ed<\/span>",
					"icon": " fa fa-paypal"
				},
				{
					"value": "<span class=\"fa\">&#xf1ee<\/span>",
					"icon": " fa fa-google-wallet"
				},
				{
					"value": "<span class=\"fa\">&#xf1f0<\/span>",
					"icon": " fa fa-cc-visa"
				},
				{
					"value": "<span class=\"fa\">&#xf1f1<\/span>",
					"icon": " fa fa-cc-mastercard"
				},
				{
					"value": "<span class=\"fa\">&#xf1f2<\/span>",
					"icon": " fa fa-cc-discover"
				},
				{
					"value": "<span class=\"fa\">&#xf1f3<\/span>",
					"icon": " fa fa-cc-amex"
				},
				{
					"value": "<span class=\"fa\">&#xf1f4<\/span>",
					"icon": " fa fa-cc-paypal"
				},
				{
					"value": "<span class=\"fa\">&#xf1f5<\/span>",
					"icon": " fa fa-cc-stripe"
				},
				{
					"value": "<span class=\"fa\">&#xf1f6<\/span>",
					"icon": " fa fa-bell-slash"
				},
				{
					"value": "<span class=\"fa\">&#xf1f7<\/span>",
					"icon": " fa fa-bell-slash-o"
				},
				{
					"value": "<span class=\"fa\">&#xf1f8<\/span>",
					"icon": " fa fa-trash"
				},
				{
					"value": "<span class=\"fa\">&#xf1f9<\/span>",
					"icon": " fa fa-copyright"
				},
				{
					"value": "<span class=\"fa\">&#xf1fa<\/span>",
					"icon": " fa fa-at"
				},
				{
					"value": "<span class=\"fa\">&#xf1fb<\/span>",
					"icon": " fa fa-eyedropper"
				},
				{
					"value": "<span class=\"fa\">&#xf1fc<\/span>",
					"icon": " fa fa-paint-brush"
				},
				{
					"value": "<span class=\"fa\">&#xf1fd<\/span>",
					"icon": " fa fa-birthday-cake"
				},
				{
					"value": "<span class=\"fa\">&#xf1fe<\/span>",
					"icon": " fa fa-area-chart"
				},
				{
					"value": "<span class=\"fa\">&#xf200<\/span>",
					"icon": " fa fa-pie-chart"
				},
				{
					"value": "<span class=\"fa\">&#xf201<\/span>",
					"icon": " fa fa-line-chart"
				},
				{
					"value": "<span class=\"fa\">&#xf202<\/span>",
					"icon": " fa fa-lastfm"
				},
				{
					"value": "<span class=\"fa\">&#xf203<\/span>",
					"icon": " fa fa-lastfm-square"
				},
				{
					"value": "<span class=\"fa\">&#xf204<\/span>",
					"icon": " fa fa-toggle-off"
				},
				{
					"value": "<span class=\"fa\">&#xf205<\/span>",
					"icon": " fa fa-toggle-on"
				},
				{
					"value": "<span class=\"fa\">&#xf206<\/span>",
					"icon": " fa fa-bicycle"
				},
				{
					"value": "<span class=\"fa\">&#xf207<\/span>",
					"icon": " fa fa-bus"
				},
				{
					"value": "<span class=\"fa\">&#xf208<\/span>",
					"icon": " fa fa-ioxhost"
				},
				{
					"value": "<span class=\"fa\">&#xf209<\/span>",
					"icon": " fa fa-angellist"
				},
				{
					"value": "<span class=\"fa\">&#xf20a<\/span>",
					"icon": " fa fa-cc"
				},
				{
					"value": "<span class=\"fa\">&#xf20b<\/span>",
					"icon": " fa fa-ils"
				},
				{
					"value": "<span class=\"fa\">&#xf20c<\/span>",
					"icon": " fa fa-meanpath"
				},
				{
					"value": "<span class=\"fa\">&#xf20d<\/span>",
					"icon": " fa fa-buysellads"
				},
				{
					"value": "<span class=\"fa\">&#xf20e<\/span>",
					"icon": " fa fa-connectdevelop"
				},
				{
					"value": "<span class=\"fa\">&#xf210<\/span>",
					"icon": " fa fa-dashcube"
				},
				{
					"value": "<span class=\"fa\">&#xf211<\/span>",
					"icon": " fa fa-forumbee"
				},
				{
					"value": "<span class=\"fa\">&#xf212<\/span>",
					"icon": " fa fa-leanpub"
				},
				{
					"value": "<span class=\"fa\">&#xf213<\/span>",
					"icon": " fa fa-sellsy"
				},
				{
					"value": "<span class=\"fa\">&#xf214<\/span>",
					"icon": " fa fa-shirtsinbulk"
				},
				{
					"value": "<span class=\"fa\">&#xf215<\/span>",
					"icon": " fa fa-simplybuilt"
				},
				{
					"value": "<span class=\"fa\">&#xf216<\/span>",
					"icon": " fa fa-skyatlas"
				},
				{
					"value": "<span class=\"fa\">&#xf217<\/span>",
					"icon": " fa fa-cart-plus"
				},
				{
					"value": "<span class=\"fa\">&#xf218<\/span>",
					"icon": " fa fa-cart-arrow-down"
				},
				{
					"value": "<span class=\"fa\">&#xf219<\/span>",
					"icon": " fa fa-diamond"
				},
				{
					"value": "<span class=\"fa\">&#xf21a<\/span>",
					"icon": " fa fa-ship"
				},
				{
					"value": "<span class=\"fa\">&#xf21b<\/span>",
					"icon": " fa fa-user-secret"
				},
				{
					"value": "<span class=\"fa\">&#xf21c<\/span>",
					"icon": " fa fa-motorcycle"
				},
				{
					"value": "<span class=\"fa\">&#xf21d<\/span>",
					"icon": " fa fa-street-view"
				},
				{
					"value": "<span class=\"fa\">&#xf21e<\/span>",
					"icon": " fa fa-heartbeat"
				},
				{
					"value": "<span class=\"fa\">&#xf221<\/span>",
					"icon": " fa fa-venus"
				},
				{
					"value": "<span class=\"fa\">&#xf222<\/span>",
					"icon": " fa fa-mars"
				},
				{
					"value": "<span class=\"fa\">&#xf223<\/span>",
					"icon": " fa fa-mercury"
				},
				{
					"value": "<span class=\"fa\">&#xf224<\/span>",
					"icon": " fa fa-transgender"
				},
				{
					"value": "<span class=\"fa\">&#xf225<\/span>",
					"icon": " fa fa-transgender-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf226<\/span>",
					"icon": " fa fa-venus-double"
				},
				{
					"value": "<span class=\"fa\">&#xf227<\/span>",
					"icon": " fa fa-mars-double"
				},
				{
					"value": "<span class=\"fa\">&#xf228<\/span>",
					"icon": " fa fa-venus-mars"
				},
				{
					"value": "<span class=\"fa\">&#xf229<\/span>",
					"icon": " fa fa-mars-stroke"
				},
				{
					"value": "<span class=\"fa\">&#xf22a<\/span>",
					"icon": " fa fa-mars-stroke-v"
				},
				{
					"value": "<span class=\"fa\">&#xf22b<\/span>",
					"icon": " fa fa-mars-stroke-h"
				},
				{
					"value": "<span class=\"fa\">&#xf22c<\/span>",
					"icon": " fa fa-neuter"
				},
				{
					"value": "<span class=\"fa\">&#xf22d<\/span>",
					"icon": " fa fa-genderless"
				},
				{
					"value": "<span class=\"fa\">&#xf230<\/span>",
					"icon": " fa fa-facebook-official"
				},
				{
					"value": "<span class=\"fa\">&#xf231<\/span>",
					"icon": " fa fa-pinterest-p"
				},
				{
					"value": "<span class=\"fa\">&#xf232<\/span>",
					"icon": " fa fa-whatsapp"
				},
				{
					"value": "<span class=\"fa\">&#xf233<\/span>",
					"icon": " fa fa-server"
				},
				{
					"value": "<span class=\"fa\">&#xf234<\/span>",
					"icon": " fa fa-user-plus"
				},
				{
					"value": "<span class=\"fa\">&#xf235<\/span>",
					"icon": " fa fa-user-times"
				},
				{
					"value": "<span class=\"fa\">&#xf236<\/span>",
					"icon": " fa fa-bed"
				},
				{
					"value": "<span class=\"fa\">&#xf237<\/span>",
					"icon": " fa fa-viacoin"
				},
				{
					"value": "<span class=\"fa\">&#xf238<\/span>",
					"icon": " fa fa-train"
				},
				{
					"value": "<span class=\"fa\">&#xf239<\/span>",
					"icon": " fa fa-subway"
				},
				{
					"value": "<span class=\"fa\">&#xf23a<\/span>",
					"icon": " fa fa-medium"
				},
				{
					"value": "<span class=\"fa\">&#xf23b<\/span>",
					"icon": " fa fa-y-combinator"
				},
				{
					"value": "<span class=\"fa\">&#xf23c<\/span>",
					"icon": " fa fa-optin-monster"
				},
				{
					"value": "<span class=\"fa\">&#xf23d<\/span>",
					"icon": " fa fa-opencart"
				},
				{
					"value": "<span class=\"fa\">&#xf23e<\/span>",
					"icon": " fa fa-expeditedssl"
				},
				{
					"value": "<span class=\"fa\">&#xf240<\/span>",
					"icon": " fa fa-battery-full"
				},
				{
					"value": "<span class=\"fa\">&#xf241<\/span>",
					"icon": " fa fa-battery-three-quarters"
				},
				{
					"value": "<span class=\"fa\">&#xf242<\/span>",
					"icon": " fa fa-battery-half"
				},
				{
					"value": "<span class=\"fa\">&#xf243<\/span>",
					"icon": " fa fa-battery-quarter"
				},
				{
					"value": "<span class=\"fa\">&#xf244<\/span>",
					"icon": " fa fa-battery-empty"
				},
				{
					"value": "<span class=\"fa\">&#xf245<\/span>",
					"icon": " fa fa-mouse-pointer"
				},
				{
					"value": "<span class=\"fa\">&#xf246<\/span>",
					"icon": " fa fa-i-cursor"
				},
				{
					"value": "<span class=\"fa\">&#xf247<\/span>",
					"icon": " fa fa-object-group"
				},
				{
					"value": "<span class=\"fa\">&#xf248<\/span>",
					"icon": " fa fa-object-ungroup"
				},
				{
					"value": "<span class=\"fa\">&#xf249<\/span>",
					"icon": " fa fa-sticky-note"
				},
				{
					"value": "<span class=\"fa\">&#xf24a<\/span>",
					"icon": " fa fa-sticky-note-o"
				},
				{
					"value": "<span class=\"fa\">&#xf24b<\/span>",
					"icon": " fa fa-cc-jcb"
				},
				{
					"value": "<span class=\"fa\">&#xf24c<\/span>",
					"icon": " fa fa-cc-diners-club"
				},
				{
					"value": "<span class=\"fa\">&#xf24d<\/span>",
					"icon": " fa fa-clone"
				},
				{
					"value": "<span class=\"fa\">&#xf24e<\/span>",
					"icon": " fa fa-balance-scale"
				},
				{
					"value": "<span class=\"fa\">&#xf250<\/span>",
					"icon": " fa fa-hourglass-o"
				},
				{
					"value": "<span class=\"fa\">&#xf251<\/span>",
					"icon": " fa fa-hourglass-start"
				},
				{
					"value": "<span class=\"fa\">&#xf252<\/span>",
					"icon": " fa fa-hourglass-half"
				},
				{
					"value": "<span class=\"fa\">&#xf253<\/span>",
					"icon": " fa fa-hourglass-end"
				},
				{
					"value": "<span class=\"fa\">&#xf254<\/span>",
					"icon": " fa fa-hourglass"
				},
				{
					"value": "<span class=\"fa\">&#xf255<\/span>",
					"icon": " fa fa-hand-rock-o"
				},
				{
					"value": "<span class=\"fa\">&#xf256<\/span>",
					"icon": " fa fa-hand-paper-o"
				},
				{
					"value": "<span class=\"fa\">&#xf257<\/span>",
					"icon": " fa fa-hand-scissors-o"
				},
				{
					"value": "<span class=\"fa\">&#xf258<\/span>",
					"icon": " fa fa-hand-lizard-o"
				},
				{
					"value": "<span class=\"fa\">&#xf259<\/span>",
					"icon": " fa fa-hand-spock-o"
				},
				{
					"value": "<span class=\"fa\">&#xf25a<\/span>",
					"icon": " fa fa-hand-pointer-o"
				},
				{
					"value": "<span class=\"fa\">&#xf25b<\/span>",
					"icon": " fa fa-hand-peace-o"
				},
				{
					"value": "<span class=\"fa\">&#xf25c<\/span>",
					"icon": " fa fa-trademark"
				},
				{
					"value": "<span class=\"fa\">&#xf25d<\/span>",
					"icon": " fa fa-registered"
				},
				{
					"value": "<span class=\"fa\">&#xf25e<\/span>",
					"icon": " fa fa-creative-commons"
				},
				{
					"value": "<span class=\"fa\">&#xf260<\/span>",
					"icon": " fa fa-gg"
				},
				{
					"value": "<span class=\"fa\">&#xf261<\/span>",
					"icon": " fa fa-gg-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf262<\/span>",
					"icon": " fa fa-tripadvisor"
				},
				{
					"value": "<span class=\"fa\">&#xf263<\/span>",
					"icon": " fa fa-odnoklassniki"
				},
				{
					"value": "<span class=\"fa\">&#xf264<\/span>",
					"icon": " fa fa-odnoklassniki-square"
				},
				{
					"value": "<span class=\"fa\">&#xf265<\/span>",
					"icon": " fa fa-get-pocket"
				},
				{
					"value": "<span class=\"fa\">&#xf266<\/span>",
					"icon": " fa fa-wikipedia-w"
				},
				{
					"value": "<span class=\"fa\">&#xf267<\/span>",
					"icon": " fa fa-safari"
				},
				{
					"value": "<span class=\"fa\">&#xf268<\/span>",
					"icon": " fa fa-chrome"
				},
				{
					"value": "<span class=\"fa\">&#xf269<\/span>",
					"icon": " fa fa-firefox"
				},
				{
					"value": "<span class=\"fa\">&#xf26a<\/span>",
					"icon": " fa fa-opera"
				},
				{
					"value": "<span class=\"fa\">&#xf26b<\/span>",
					"icon": " fa fa-internet-explorer"
				},
				{
					"value": "<span class=\"fa\">&#xf26c<\/span>",
					"icon": " fa fa-television"
				},
				{
					"value": "<span class=\"fa\">&#xf26d<\/span>",
					"icon": " fa fa-contao"
				},
				{
					"value": "<span class=\"fa\">&#xf26e<\/span>",
					"icon": " fa fa-500px"
				},
				{
					"value": "<span class=\"fa\">&#xf270<\/span>",
					"icon": " fa fa-amazon"
				},
				{
					"value": "<span class=\"fa\">&#xf271<\/span>",
					"icon": " fa fa-calendar-plus-o"
				},
				{
					"value": "<span class=\"fa\">&#xf272<\/span>",
					"icon": " fa fa-calendar-minus-o"
				},
				{
					"value": "<span class=\"fa\">&#xf273<\/span>",
					"icon": " fa fa-calendar-times-o"
				},
				{
					"value": "<span class=\"fa\">&#xf274<\/span>",
					"icon": " fa fa-calendar-check-o"
				},
				{
					"value": "<span class=\"fa\">&#xf275<\/span>",
					"icon": " fa fa-industry"
				},
				{
					"value": "<span class=\"fa\">&#xf276<\/span>",
					"icon": " fa fa-map-pin"
				},
				{
					"value": "<span class=\"fa\">&#xf277<\/span>",
					"icon": " fa fa-map-signs"
				},
				{
					"value": "<span class=\"fa\">&#xf278<\/span>",
					"icon": " fa fa-map-o"
				},
				{
					"value": "<span class=\"fa\">&#xf279<\/span>",
					"icon": " fa fa-map"
				},
				{
					"value": "<span class=\"fa\">&#xf27a<\/span>",
					"icon": " fa fa-commenting"
				},
				{
					"value": "<span class=\"fa\">&#xf27b<\/span>",
					"icon": " fa fa-commenting-o"
				},
				{
					"value": "<span class=\"fa\">&#xf27c<\/span>",
					"icon": " fa fa-houzz"
				},
				{
					"value": "<span class=\"fa\">&#xf27d<\/span>",
					"icon": " fa fa-vimeo"
				},
				{
					"value": "<span class=\"fa\">&#xf27e<\/span>",
					"icon": " fa fa-black-tie"
				},
				{
					"value": "<span class=\"fa\">&#xf280<\/span>",
					"icon": " fa fa-fonticons"
				},
				{
					"value": "<span class=\"fa\">&#xf281<\/span>",
					"icon": " fa fa-reddit-alien"
				},
				{
					"value": "<span class=\"fa\">&#xf282<\/span>",
					"icon": " fa fa-edge"
				},
				{
					"value": "<span class=\"fa\">&#xf283<\/span>",
					"icon": " fa fa-credit-card-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf284<\/span>",
					"icon": " fa fa-codiepie"
				},
				{
					"value": "<span class=\"fa\">&#xf285<\/span>",
					"icon": " fa fa-modx"
				},
				{
					"value": "<span class=\"fa\">&#xf286<\/span>",
					"icon": " fa fa-fort-awesome"
				},
				{
					"value": "<span class=\"fa\">&#xf287<\/span>",
					"icon": " fa fa-usb"
				},
				{
					"value": "<span class=\"fa\">&#xf288<\/span>",
					"icon": " fa fa-product-hunt"
				},
				{
					"value": "<span class=\"fa\">&#xf289<\/span>",
					"icon": " fa fa-mixcloud"
				},
				{
					"value": "<span class=\"fa\">&#xf28a<\/span>",
					"icon": " fa fa-scribd"
				},
				{
					"value": "<span class=\"fa\">&#xf28b<\/span>",
					"icon": " fa fa-pause-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf28c<\/span>",
					"icon": " fa fa-pause-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf28d<\/span>",
					"icon": " fa fa-stop-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf28e<\/span>",
					"icon": " fa fa-stop-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf290<\/span>",
					"icon": " fa fa-shopping-bag"
				},
				{
					"value": "<span class=\"fa\">&#xf291<\/span>",
					"icon": " fa fa-shopping-basket"
				},
				{
					"value": "<span class=\"fa\">&#xf292<\/span>",
					"icon": " fa fa-hashtag"
				},
				{
					"value": "<span class=\"fa\">&#xf293<\/span>",
					"icon": " fa fa-bluetooth"
				},
				{
					"value": "<span class=\"fa\">&#xf294<\/span>",
					"icon": " fa fa-bluetooth-b"
				},
				{
					"value": "<span class=\"fa\">&#xf295<\/span>",
					"icon": " fa fa-percent"
				},
				{
					"value": "<span class=\"fa\">&#xf296<\/span>",
					"icon": " fa fa-gitlab"
				},
				{
					"value": "<span class=\"fa\">&#xf297<\/span>",
					"icon": " fa fa-wpbeginner"
				},
				{
					"value": "<span class=\"fa\">&#xf298<\/span>",
					"icon": " fa fa-wpforms"
				},
				{
					"value": "<span class=\"fa\">&#xf299<\/span>",
					"icon": " fa fa-envira"
				},
				{
					"value": "<span class=\"fa\">&#xf29a<\/span>",
					"icon": " fa fa-universal-access"
				},
				{
					"value": "<span class=\"fa\">&#xf29b<\/span>",
					"icon": " fa fa-wheelchair-alt"
				},
				{
					"value": "<span class=\"fa\">&#xf29c<\/span>",
					"icon": " fa fa-question-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf29d<\/span>",
					"icon": " fa fa-blind"
				},
				{
					"value": "<span class=\"fa\">&#xf29e<\/span>",
					"icon": " fa fa-audio-description"
				},
				{
					"value": "<span class=\"fa\">&#xf2a0<\/span>",
					"icon": " fa fa-volume-control-phone"
				},
				{
					"value": "<span class=\"fa\">&#xf2a1<\/span>",
					"icon": " fa fa-braille"
				},
				{
					"value": "<span class=\"fa\">&#xf2a2<\/span>",
					"icon": " fa fa-assistive-listening-systems"
				},
				{
					"value": "<span class=\"fa\">&#xf2a3<\/span>",
					"icon": " fa fa-american-sign-language-interpreting"
				},
				{
					"value": "<span class=\"fa\">&#xf2a4<\/span>",
					"icon": " fa fa-deaf"
				},
				{
					"value": "<span class=\"fa\">&#xf2a5<\/span>",
					"icon": " fa fa-glide"
				},
				{
					"value": "<span class=\"fa\">&#xf2a6<\/span>",
					"icon": " fa fa-glide-g"
				},
				{
					"value": "<span class=\"fa\">&#xf2a7<\/span>",
					"icon": " fa fa-sign-language"
				},
				{
					"value": "<span class=\"fa\">&#xf2a8<\/span>",
					"icon": " fa fa-low-vision"
				},
				{
					"value": "<span class=\"fa\">&#xf2a9<\/span>",
					"icon": " fa fa-viadeo"
				},
				{
					"value": "<span class=\"fa\">&#xf2aa<\/span>",
					"icon": " fa fa-viadeo-square"
				},
				{
					"value": "<span class=\"fa\">&#xf2ab<\/span>",
					"icon": " fa fa-snapchat"
				},
				{
					"value": "<span class=\"fa\">&#xf2ac<\/span>",
					"icon": " fa fa-snapchat-ghost"
				},
				{
					"value": "<span class=\"fa\">&#xf2ad<\/span>",
					"icon": " fa fa-snapchat-square"
				},
				{
					"value": "<span class=\"fa\">&#xf2ae<\/span>",
					"icon": " fa fa-pied-piper"
				},
				{
					"value": "<span class=\"fa\">&#xf2b0<\/span>",
					"icon": " fa fa-first-order"
				},
				{
					"value": "<span class=\"fa\">&#xf2b1<\/span>",
					"icon": " fa fa-yoast"
				},
				{
					"value": "<span class=\"fa\">&#xf2b2<\/span>",
					"icon": " fa fa-themeisle"
				},
				{
					"value": "<span class=\"fa\">&#xf2b3<\/span>",
					"icon": " fa fa-google-plus-official"
				},
				{
					"value": "<span class=\"fa\">&#xf2b4<\/span>",
					"icon": " fa fa-font-awesome"
				},
				{
					"value": "<span class=\"fa\">&#xf2b5<\/span>",
					"icon": " fa fa-handshake-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2b6<\/span>",
					"icon": " fa fa-envelope-open"
				},
				{
					"value": "<span class=\"fa\">&#xf2b7<\/span>",
					"icon": " fa fa-envelope-open-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2b8<\/span>",
					"icon": " fa fa-linode"
				},
				{
					"value": "<span class=\"fa\">&#xf2b9<\/span>",
					"icon": " fa fa-address-book"
				},
				{
					"value": "<span class=\"fa\">&#xf2ba<\/span>",
					"icon": " fa fa-address-book-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2bb<\/span>",
					"icon": " fa fa-address-card"
				},
				{
					"value": "<span class=\"fa\">&#xf2bc<\/span>",
					"icon": " fa fa-address-card-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2bd<\/span>",
					"icon": " fa fa-user-circle"
				},
				{
					"value": "<span class=\"fa\">&#xf2be<\/span>",
					"icon": " fa fa-user-circle-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2c0<\/span>",
					"icon": " fa fa-user-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2c1<\/span>",
					"icon": " fa fa-id-badge"
				},
				{
					"value": "<span class=\"fa\">&#xf2c2<\/span>",
					"icon": " fa fa-id-card"
				},
				{
					"value": "<span class=\"fa\">&#xf2c3<\/span>",
					"icon": " fa fa-id-card-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2c4<\/span>",
					"icon": " fa fa-quora"
				},
				{
					"value": "<span class=\"fa\">&#xf2c5<\/span>",
					"icon": " fa fa-free-code-camp"
				},
				{
					"value": "<span class=\"fa\">&#xf2c6<\/span>",
					"icon": " fa fa-telegram"
				},
				{
					"value": "<span class=\"fa\">&#xf2c7<\/span>",
					"icon": " fa fa-thermometer-full"
				},
				{
					"value": "<span class=\"fa\">&#xf2c8<\/span>",
					"icon": " fa fa-thermometer-three-quarters"
				},
				{
					"value": "<span class=\"fa\">&#xf2c9<\/span>",
					"icon": " fa fa-thermometer-half"
				},
				{
					"value": "<span class=\"fa\">&#xf2ca<\/span>",
					"icon": " fa fa-thermometer-quarter"
				},
				{
					"value": "<span class=\"fa\">&#xf2cb<\/span>",
					"icon": " fa fa-thermometer-empty"
				},
				{
					"value": "<span class=\"fa\">&#xf2cc<\/span>",
					"icon": " fa fa-shower"
				},
				{
					"value": "<span class=\"fa\">&#xf2cd<\/span>",
					"icon": " fa fa-bath"
				},
				{
					"value": "<span class=\"fa\">&#xf2ce<\/span>",
					"icon": " fa fa-podcast"
				},
				{
					"value": "<span class=\"fa\">&#xf2d0<\/span>",
					"icon": " fa fa-window-maximize"
				},
				{
					"value": "<span class=\"fa\">&#xf2d1<\/span>",
					"icon": " fa fa-window-minimize"
				},
				{
					"value": "<span class=\"fa\">&#xf2d2<\/span>",
					"icon": " fa fa-window-restore"
				},
				{
					"value": "<span class=\"fa\">&#xf2d3<\/span>",
					"icon": " fa fa-window-close"
				},
				{
					"value": "<span class=\"fa\">&#xf2d4<\/span>",
					"icon": " fa fa-window-close-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2d5<\/span>",
					"icon": " fa fa-bandcamp"
				},
				{
					"value": "<span class=\"fa\">&#xf2d6<\/span>",
					"icon": " fa fa-grav"
				},
				{
					"value": "<span class=\"fa\">&#xf2d7<\/span>",
					"icon": " fa fa-etsy"
				},
				{
					"value": "<span class=\"fa\">&#xf2d8<\/span>",
					"icon": " fa fa-imdb"
				},
				{
					"value": "<span class=\"fa\">&#xf2d9<\/span>",
					"icon": " fa fa-ravelry"
				},
				{
					"value": "<span class=\"fa\">&#xf2da<\/span>",
					"icon": " fa fa-eercast"
				},
				{
					"value": "<span class=\"fa\">&#xf2db<\/span>",
					"icon": " fa fa-microchip"
				},
				{
					"value": "<span class=\"fa\">&#xf2dc<\/span>",
					"icon": " fa fa-snowflake-o"
				},
				{
					"value": "<span class=\"fa\">&#xf2dd<\/span>",
					"icon": " fa fa-superpowers"
				},
				{
					"value": "<span class=\"fa\">&#xf2de<\/span>",
					"icon": " fa fa-wpexplorer"
				},
				{
					"value": "<span class=\"fa\">&#xf2e0<\/span>",
					"icon": " fa fa-meetup"
				}
			],
			onselect: function (e) {
				editor.insertContent(this.value());
			},
		});
	});
})();
