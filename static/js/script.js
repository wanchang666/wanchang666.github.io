! function(j) {
	j(window).on("load", function() {
		j("#status").fadeOut(), j("#preloader").delay(350).fadeOut("slow"), j("body").delay(350).css({
			overflow: "visible"
		})
	}), skrollr.init({
		smoothScrolling: !0
	});
	var z = j(".video");
	z.length > 0 && z.magnificPopup({
		type: "iframe",
		iframe: {
			markup: '<style>.mfp-iframe-holder .mfp-content {max-width: 900px;height:500px}</style><div class="mfp-iframe-scaler" ><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div></div>'
		}
	});
	var p = j(".counter");
	p.length > 0 && p.counterUp({
		delay: 20,
		time: 3000
	}), j(".scrollBoth").length > 0 && j(".scrollBoth").multiscroll({
		verticalCentered: !0,
		scrollingSpeed: 700,
		easing: "easeInQuart",
		menu: !1,
		sectionsColor: [],
		navigation: !0,
		navigationPosition: "right",
		navigationColor: "#000",
		navigationTooltips: [],
		loopBottom: !1,
		loopTop: !1,
		css3: !1,
		paddingTop: 0,
		paddingBottom: 0,
		normalScrollElements: null,
		scrollOverflow: !1,
		scrollOverflowOptions: null,
		keyboardScrolling: !0,
		touchSensitivity: 5,
		sectionSelector: ".ms-section",
		leftSelector: ".ms-left",
		rightSelector: ".ms-right",
		onLeave: function(a, d, c) {},
		afterLoad: function(a, c) {},
		afterRender: function() {},
		afterResize: function() {}
	});
	var w = j(".swiper-container");
	if (w.length > 0) {
		new Swiper(w, {
			effect: "coverflow",
			loop: !0,
			centeredSlides: !0,
			autoplay: 2000,
			speed: 2000,
			slidesPerView: "auto",
			coverflow: {
				rotate: 0,
				stretch: 80,
				depth: 200,
				modifier: 1,
				slideShadows: !1
			}
		})
	}
	var y = j(".parallaxie");
	y.length > 0 && y.parallaxie({
		speed: 0.975
	});
	var b = j(".quote-wrapper");
	b.length > 0 && b.owlCarousel({
		loop: !0,
		autoplayTimeout: 3500,
		nav: !1,
		margin: 20,
		responsive: {
			320: {
				items: 1
			},
			481: {
				items: 2
			},
			991: {
				items: 3
			},
			1200: {
				items: 4
			},
			1920: {
				items: 5
			}
		}
	}), (new WOW).init(), j(".mailchimp").length > 0 && j(".mailchimp").ajaxChimp({
		language: "es",
		callback: function(a) {
			"success" === a.result ? (j(".subscription-success").html(a.msg).fadeIn(1000), j(
					".subscription-error").fadeOut(500)) : "error" === a.result && j(".subscription-error")
				.html(a.msg).fadeIn(1000)
		},
		url: "https://gmail.us8.list-manage.com/subscribe/post?u=dd00a6e222a827748e67dd5d6&amp;id=5f045a38b3"
	}), j.ajaxChimp.translations.es = {
		submit: "Submitting...",
		0: "We have sent you a confirmation email",
		1: "Please enter a value",
		2: "An email address must contain a single @",
		3: "The domain portion of the email address is invalid (the portion after the @: )",
		4: "The username portion of the email address is invalid (the portion before the @: )",
		5: "This email address looks fake or invalid. Please enter a real email address"
	};
	var q = j(".right-nav a, .demo a");

	function v(a) {
		j(a.target).prev(".panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
	}
	q.length > 0 && q.on("click", function(d) {
		if (j(document).off("scroll"), location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//,
			"") || location.hostname == this.hostname) {
			var a = j(this.hash),
				c = j(".navbar").height() - 2;
			if ((a = a.length ? a : j("[name=" + this.hash.slice(1) + "]")).length) {
				return j("html,body").animate({
					scrollTop: a.offset().top - c
				}, 1000), !1
			}
		}
	}), j(".panel-group").on("hidden.bs.collapse", v), j(".panel-group").on("shown.bs.collapse", v);
	var x = document.getElementById("filt-monthly"),
		f = document.getElementById("filt-hourly"),
		h = document.getElementById("switcher"),
		u = document.getElementById("monthly"),
		k = document.getElementById("hourly");
	x.addEventListener("click", function() {
		h.checked = !1, x.classList.add("toggler--is-active"), f.classList.remove("toggler--is-active"), u
			.classList.remove("none"), k.classList.add("none")
	}), f.addEventListener("click", function() {
		h.checked = !0, f.classList.add("toggler--is-active"), x.classList.remove("toggler--is-active"), u
			.classList.add("none"), k.classList.remove("none")
	}), h.addEventListener("click", function() {
		f.classList.toggle("toggler--is-active"), x.classList.toggle("toggler--is-active"), u.classList.toggle(
			"none"), k.classList.toggle("none")
	})
}(jQuery);
