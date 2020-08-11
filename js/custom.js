var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
}

var not_index_bg = document.getElementsByClassName("not-index-bg");
if (not_index_bg.length != 0) {
	not_index_bg[0].style.background = "transparent";
}

var card_archive = document.querySelector("#aside_content > div.card-widget.card-archives > div > div > span")
card_archive.innerHTML = "時間軸"

var page_archive = document.querySelector("#site_title")
if (page_archive.innerHTML == "歸檔") {
	page_archive.innerHTML = "時間軸"
}
