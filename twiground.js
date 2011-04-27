var Twiground = {
	checkTwitter: function(){
        var host = document.location.host;

        if (host != "twitter.com") {
            window.alert("Ops, looks like you aren't at twitter.com");
            new Error(":(");
        }
	},
    createGlobalNavLink: function(){
        var twiground = $("#global-nav-twiground"),
            pageOuter = $("#page-outer");
        if (twiground) {
            twiground.remove();
        }
        var x = $("<li id=\"global-nav-twiground\"><a href=\"#\">Twiground</a></li>").appendTo("#global-nav ul").click(function(){
            pageOuter.slideToggle("slow");
        });
    },
    reveal: function(){
        this.checkTwitter();
        this.createGlobalNavLink();
    }
};
Twiground.reveal();