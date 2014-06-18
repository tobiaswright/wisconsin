console.log("hi")
console.log("instagram", instagram);
console.log("statues", twitterStatuses)
console.log("users", twitterusers);
console.log("pearson", pearson)

//for our datepicker
$('.input-daterange').datepicker({});



//Fixed header			
$(window).on("scroll", function() {

	var $ourWindow = $(window).scrollTop();

	if ( $ourWindow >= 190 ) {
		$(".scrollheader").addClass("navbar-fixed-top notop");
		$("#content").addClass("addtop");
	}

	if ( $ourWindow <= 190 ) {
		$(".scrollheader").removeClass("navbar-fixed-top notop");
		$("#content").removeClass("addtop");
	}
});


			
//status updates
var randomFromInterval = function(from,to) {
	return Math.floor(Math.random()*(to-from+1)+from);
}

var starters = ["Why didn't anyone tell me Wisconsin is so ","Wisconsin is ", "I like #wisconsin, it's ", "I really like Wisconsin, it's ", "Love me some WS, wonderfully "]
var statuses = [];

for ( var i = 0; i < 10; i++) {
	var adjectiveIndex = randomFromInterval(0, pearson.results.length-1);
	var starterIndex = randomFromInterval(0, starters.length-1);
	var status = starters[starterIndex]+pearson.results[adjectiveIndex].headword;
	statuses.push(status);
}

source = $("#statuses").html();
template = Handlebars.compile(source);
$("#status").html(template(statuses))

//instagram
var instaImage = [];

for ( var i = 0; i < 19; i++) {
	var image = instagram.data[i].images.low_resolution.url
	instaImage.push(image)
}

source = $("#instaImages").html();
template = Handlebars.compile(source);
$("#instagram").html(template(instaImage));

//misc
var newFriends = [];

for ( var i = 0; i < 5; i++) {
	var name = twitterusers[i].name,
		image = twitterusers[i].profile_image_url;
	newFriends.push({name:name,image:image})
}

source = $("#newFriends").html();
template = Handlebars.compile(source);
$("#misc").html(template(newFriends));



//Clickies
$("li").on("click", function() {
	if ($(this).hasClass("checked")) {
		$(this).removeClass("checked")
	} else {
		$(this).addClass("checked");
	}
})

$("#done").click(function() {
	window.location = "done.html";
})
