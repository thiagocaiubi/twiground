# Twiground

### Have you ever visit a twitter profile and was interested in view the whole background?
	That's it! Twiground let's you hide the timeline and view the profile background!

### How to use:
	Just drag and drop [Twiground](javascript: var Twiground={checkTwitter:function(){var a=document.location.host;if(a!="twitter.com"){window.alert("Ops, looks like you aren't at twitter.com");new Error(":(")}},createGlobalNavLink:function(){var a=$("#global-nav-twiground");if(a){a.remove()}$('<li id="global-nav-twiground"><a href="#">Timeline</a></li>').appendTo("#global-nav ul")},toggleBackground:function(){var b=$("#global-nav-twiground"),a=$("#page-outer").slideUp("slow",function(){b.click(function(){a.slideDown("slow",function(){b.html("Background")})})})},reveal:function(){this.checkTwitter();this.createGlobalNavLink();this.toggleBackground()}};Twiground.reveal();) next your address bar, point your browser to any twitter account and click Twiground!

Have fun!!!
