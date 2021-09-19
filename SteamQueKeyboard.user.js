// ==UserScript==
// @name       Steam que via keyboard.
// @namespace  https://github.com/Plaer1/SteamQueKeyboardShortcuts/
// @version    0.3.3
// @description  lets you navigate you steam queue via keybaord, specifically the arrow keys
// @match      https://store.steampowered.com/*
// @copyright  Gnu GPL V2
// ==/UserScript==

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
            //if in que go next
            if (document.querySelector("#nextInDiscoveryQueue > div.btn_next_in_queue.btn_next_in_queue_trigger") != null){
                document.querySelector("#nextInDiscoveryQueue > div.btn_next_in_queue.btn_next_in_queue_trigger").click();
                break;
            }
            //if the que needs re-started
            if (document.querySelector("#refresh_queue_btn") != null){
                document.querySelector("#refresh_queue_btn").click();
                break;
            }
            //if the que needs started, resume it bb
            if (document.querySelector("#discovery_queue_start_link") != null){
                document.querySelector("#discovery_queue_start_link").click();
                break;
            }
            //if you aren't in the que, hop in bb.
            if (document.querySelector("#queueActionsCtn > a") != null){
                document.querySelector("#queueActionsCtn > a").click();
                break;
            }
            //if all else fails refresh the damn page
            location.reload();
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
