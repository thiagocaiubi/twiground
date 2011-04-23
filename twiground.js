var Twiground = {
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
    facebox: function(){
        var link = document.createElement("link");
        link.media = "screen";
        link.type = "text/css";
        link.rel = "stylesheet"
        link.href = "https://github.com/thiagocaiubi/facebox/raw/master/src/facebox.css";
        $(link).appendTo(document.head);
        console.log(link.readyStateChange);
        
        var script = document.createElement("script");
        script.src = "https://github.com/thiagocaiubi/facebox/raw/master/src/facebox.js";
        $(script).appendTo(document.body);
        
    },
    reveal: function(){
        //this.facebox();
        var image = $("<img src=\""+ this.image() +"\"/>");
        $("<div />")
            .css({
                position: "absolute", 
                left: "0",
                top: "0",
                zIndex: "99999"
            })  
            .html(image).appendTo(document.body);
    }
}
Twiground.reveal();
