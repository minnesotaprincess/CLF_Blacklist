var USERS_TO_HIDE = ["liar_jesus", "Limmuwd56", "rupestre", "rupostre", "balladromic"];


// Get the table of posts
var body = document.body;
var table = body.getElementsByClassName("fbod threads")[0];

if (table != undefined) {
	// Get all posts in the table
	var posts = table.getElementsByClassName("threadline normal");

	for (var i = 0; i < posts.length; i++) {
		var title = posts[i].getElementsByClassName("pln")[0];

		// If the post is by a blocked user
		for (var j = 0; j < USERS_TO_HIDE.length; j++) {
				if (title.text == USERS_TO_HIDE[j]) {
				// Hide the post
				posts[i].style.display="none";
				break;
			}
		}
	}
}