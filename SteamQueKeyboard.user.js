// ==UserScript==
// @name         Steam que via keyboard.
// @namespace    https://github.com/Plaer1/SteamQueKeyboardShortcuts/
// @version      0.3.3.3
// @description  lets you navigate you steam queue via the arrow keys
// @match        https://store.steampowered.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @copyright    Gnu GPL V2
// @require      https://code.jquery.com/jquery-3.6.3.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @grant        none
// ==/UserScript==


(function ($, undefined) {

	(function(){
		document.addEventListener('keydown', function(e) {

			'use strict';

			switch (e.keyCode) {

				//left
				case 37:

					if(document.querySelector("#add_to_wishlist_area").style.display == "none") {
						document.querySelector("#add_to_wishlist_area_success > a > span").click();
					}
					else {
						document.querySelector("#add_to_wishlist_area > a > span").click();
					}

					break;

				//up
				case 38:

					if (document.querySelector("#queueBtnFollow > div.btnv6_blue_hoverfade.btn_medium.queue_btn_inactive").style.display != "none") {
						// click to follow
						document.querySelector("#queueBtnFollow > div.btnv6_blue_hoverfade.btn_medium.queue_btn_inactive").click();
					} else {
						//Click to UNfollow
						document.querySelector("#queueBtnFollow > div.btnv6_blue_hoverfade.btn_medium.queue_btn_active").click();
					}

					break;

				//right
				case 39:

					//if in que, go next
					if (document.querySelector(".queue_sub_text") != null){
						document.querySelector(".btn_next_in_queue").click();
						break;
					}
					//if on a game page that isn't in the que, start que.
					if (document.querySelector("[data-tooltip-text='View and customize your personal Discovery Queue.']") != null){
						window.location.href = "https://store.steampowered.com/explore/next/0?snr=1_5_9__12";
						break;
					}
					//if at the end, restart que
					if (document.querySelector(".finish_queue_text") != null) {
						$.post( "https://store.steampowered.com/explore/next/discovery/",
						{
							"data": $("#next_in_queue_form").serialize(),
							"success": () => { window.location.href = `https://store.steampowered.com/explore/startnew/discovery/`
						},
						});
						break;
					}
					//if at que page with empty que, restart que (this often doesn't work)
					if (document.querySelector(".keepGoing") != null) {
						$.post( "https://store.steampowered.com/explore/next/discovery/",
						{
							"data": $("#next_in_queue_form").serialize(),
							"success": () => { window.location.href = `https://store.steampowered.com/explore/startnew/discovery/`
						},
						});
						break;
					}
					//if you aren't in the que, hop in bb.
					//if (document.querySelector(".discovery_queue_start_link") != null){
					//	document.querySelector(".discovery_queue_start_link").click();
					//	break;
					//}

					break;

				//down
				case 40:
					//if a game
					if (document.querySelector("#game_area_purchase > div.game_area_bubble.game_area_dlc_bubble") == null) {
						if (document.querySelector("#ignoreBtn > div.queue_control_button.queue_btn_ignore > div.btnv6_blue_hoverfade.btn_medium.queue_btn_inactive").style.display != "none") {
							document.querySelector("#ignoreBtn > div.queue_control_button.queue_btn_ignore > div.btnv6_blue_hoverfade.btn_medium.queue_btn_inactive").click();
						}
						else {
							document.querySelector("#ignoreBtn > div.queue_control_button.queue_btn_ignore > div.btnv6_blue_hoverfade.btn_medium.queue_btn_active").click();
						}
					}
					//if DLC
					if (document.querySelector("#game_area_purchase > div.game_area_bubble.game_area_dlc_bubble") != null) {
						if (document.querySelector("#ignoreBtn > div.queue_control_button.queue_btn_ignore > div.btnv6_blue_hoverfade.btn_medium.queue_btn_inactive").style.display != "none") {
							document.querySelector("#ignoreBtn > div.queue_control_button.queue_btn_ignore > div.btnv6_blue_hoverfade.btn_medium.queue_btn_inactive").click();
						}
						else {
							document.querySelector("#ignoreBtn > div.queue_control_button.queue_btn_ignore > div.btnv6_blue_hoverfade.btn_medium.queue_btn_active").click();
						}
					}
					break;

				default:
					//quit
					break;

			}
		}, false);
	})();
	// refreshes on que if you end up on the page between refreshes somehow
	if (document.querySelector(".discovery_queue_static").style.display == "block"){
		document.querySelector(".discovery_queue_overlay").click();
	}
	// refreshes on que "error"
	if (document.querySelector(".error") != null){
		location.reload();
	}
})(window.jQuery.noConflict(true));
