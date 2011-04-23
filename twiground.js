var Twiground = {
	checkTwitter: function(){
        var host = document.location.host;

        if (host != "twitter.com") {
            window.alert("Ops, looks like you aren't at twitter.com");
            new Error(":(");
        }
	},
    createGlobalNavLink: function(){
        var twiground = $("#global-nav-twiground");
        if (twiground) {
            twiground.remove(); 
        }
        $("<li id=\"global-nav-twiground\"><a href=\"#\">Timeline</a></li>").appendTo("#global-nav ul");
    },
    toggleBackground: function(){
        var twitground = $("#global-nav-twiground"),
            pageOuter = $("#page-outer").slideUp("slow", function(){
                twitground.click(function(){
                    pageOuter.slideDown("slow", function(){
                        twitground.html("Background");
                    });
                });
            });
    },
    reveal: function(){
        this.checkTwitter();
        this.createGlobalNavLink();
        this.toggleBackground();
    }
};
Twiground.reveal();