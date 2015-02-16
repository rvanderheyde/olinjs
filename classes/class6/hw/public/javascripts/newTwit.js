var $btn = $('#postTwit');

$btn.click(function btnClick(event){
	var twitMessage = $('#twitMessage').val();
	console.log(twitMessage);
	if (twitMessage){
		$.post('homeTwit',{text: twitMessage}).done(onSuccess).error(onError)
	}
});

var onSuccess = function(data, status){

	var out = "<li>"+
		"<div id='author'>"+data.username+"</div>"+
		"<div id='text'>"+data.text+"</div>"+
		"</li>";
	$("#result").html(out);
};

var onError = function(data, status){
	console.log('Error' + data);
	console.log(status);
}