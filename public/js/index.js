setTimeout(function(){
	$.ajax({
		url: './user.action',
		type: 'get',
		data: {param1: 'value1'},
	})
	.done(function(data) {
		var html = data.map(function(item){
			return '<li>' + item + '</li>'
		}).join("")
		$("#user").html(html)
	})
	.fail(function() {
		console.log("error");
	})

	$.ajax({
		url: './list.action',
		type: 'post',
		headers: {
			'content-type':"application/json"
		},
		data: JSON.stringify(['POST 数据1', 'POST 数据2', 'POST 数据3',]),
	})
	.done(function(data) {
		var html = data.map(function(item){
			return '<li>' + item + '</li>'
		}).join("")
		$("#list").html(html)
	})
	.fail(function() {
		console.log("error");
	})
},1000)
