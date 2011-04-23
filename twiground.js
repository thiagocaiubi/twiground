var Twiground = {
    ratio: .9,
	url: function(text){
		var e=/((http|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+\.[^\"#?\s]+)(#[\w\-]+)?/;
		if (text.match(e)) {
			return  {
				url: RegExp['$&'],
                		protocol: RegExp.$2,
                		host:RegExp.$3,
                		path:RegExp.$4,
                		file:RegExp.$6,
                		hash:RegExp.$7
			}['url'];
		}
	},
	image: function(){
        var host = document.location.host;

        if (host != "twitter.com") {
            window.alert("Ops, looks like you aren't at twitter.com");
            new Error(":(");
        }

        var img = $("body").css('backgroundImage');
        return this.url(img);
	},
    reveal: function(){
        var image = $("<img src=\""+ this.image() +"\"/>");
        $("<div />")
            .css({
                position: "absolute", 
                left: "0",
                top: "0",
                zIndex: "99999"
            })  
            .html(image)
            .click(function(){
                alert(this);
            })
            .appendTo(document.body);
    }
}
Twiground.reveal();
