$(window).bind("load", page_loader)

$(window).on("load", page_loader)

  function page_loader() {
  	$('.windowLoad').fadeOut();
  	window.setTimeout( page_loader, 9200); //9.2 seconds
  }; 
  console.log(page_loader);
  $('.windowLoad').on({
	  'mousewheel': function(e) {
		  if (e.target.id == 'body') return;
		  e.preventDefault();
		  e.stopPropagation();
	  }
  });

//$(window).bind("load", fn)
//$(window).on("load", callback)


! function(t) {
    "use strict";
    t("a.page-scroll").bind("click", function(a) {
        var o = t(this);
        t("html, body").stop().animate({
            scrollTop: t(o.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), a.preventDefault()
    }), t("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), t(".navbar-collapse ul li a").click(function() {
        t(".navbar-toggle:visible").click()
    }), t("#mainNav").affix({
        offset: {
            top: 100
        }
    })
}(jQuery);