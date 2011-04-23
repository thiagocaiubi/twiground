var Twiground = {
	checkTwitter: function(){
        var host = document.location.host;

        if (host != "twitter.com") {
            window.alert("Ops, looks like you aren't at twitter.com");
            new Error(":(");
        }
	},
    createGlobalNavLink: function(){
        $("<li><a id=\"global-nav-twiground\" href=\"#\">Timeline</a></li>").appendTo("#global-nav ul");
    },
    toggleBackground: function(){
        var twitground = $("#global-nav-twiground"),
            pageOuter = $("#page-outer").slideUp("slow", function(){
                twitground.click(function(){
                    pageOuter.slideDown("slow");
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