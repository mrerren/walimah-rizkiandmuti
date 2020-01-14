(function () {
  ("use strict");

  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("overflow offcanvas")) {
          $("body").removeClass("overflow offcanvas");
          $(".js-fh5co-nav-toggle").removeClass("active");
        }
      }
    });
  };

  var offcanvasMenu = function () {
    $("#page").prepend('<div id="fh5co-offcanvas" />');
    $("#page").prepend(
      '<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>'
    );
    var clone1 = $(".menu-1 > ul").clone();
    $("#fh5co-offcanvas").append(clone1);
    var clone2 = $(".menu-2 > ul").clone();
    $("#fh5co-offcanvas").append(clone2);

    $("#fh5co-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown");
    $("#fh5co-offcanvas")
      .find("li")
      .removeClass("has-dropdown");

    // Hover dropdown menu on mobile
    $(".offcanvas-has-dropdown")
      .mouseenter(function () {
        var $this = $(this);

        $this
          .addClass("active")
          .find("ul")
          .slideDown(500, "easeOutExpo");
      })
      .mouseleave(function () {
        var $this = $(this);
        $this
          .removeClass("active")
          .find("ul")
          .slideUp(500, "easeOutExpo");
      });

    $(window).resize(function () {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $(".js-fh5co-nav-toggle").removeClass("active");
      }
    });
  };

  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      var $this = $(this);
      overOff();
      $this.toggleClass("active");
      event.preventDefault();
    });
  };

  var overOff = function () {
    if ($("body").hasClass("overflow offcanvas")) {
      $("body").removeClass("overflow offcanvas");
    } else {
      $("body").addClass("overflow offcanvas");
    }
  };

  var lia = document.querySelectorAll(".tes");
  lia.forEach(function (e) {
    e.addEventListener("click", function () {
      if ($("body").hasClass("overflow offcanvas")) {
        $("body").removeClass("overflow offcanvas");
        $(".js-fh5co-nav-toggle").removeClass("active");
      }
    });
  });

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      }, {
        offset: "85%"
      }
    );
  };

  var dropdown = function () {
    $(".has-dropdown")
      .mouseenter(function () {
        var $this = $(this);
        $this
          .find(".dropdown")
          .css("display", "block")
          .addClass("animated-fast fadeInUpMenu");
      })
      .mouseleave(function () {
        var $this = $(this);

        $this
          .find(".dropdown")
          .css("display", "none")
          .removeClass("animated-fast fadeInUpMenu");
      });
  };

  var testimonialCarousel = function () {
    var owl = $(".owl-carousel-fullwidth");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true
    });
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate({
          scrollTop: $("html").offset().top
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  // Loading page
  var loaderPage = function () {
    $(".fh5co-loader").fadeOut("slow");
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  var counterWayPoint = function () {
    if ($("#fh5co-counter").length > 0) {
      $("#fh5co-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        }, {
          offset: "90%"
        }
      );
    }
  };

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  $(function () {
    mobileMenuOutsideClick();
    parallax();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    dropdown();
    testimonialCarousel();
    goToTop();
    loaderPage();
    counter();
    counterWayPoint();
  });
})();

$('#rsvp-submit').click(function () {
  $('.rsvp-name-error, .rsvp-email-error, .greeting-error').hide();
  var nameVal = $('input[name=name]').val();
  var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
  var emailVal = $('#email').val();
  var greetingVal = $('input[name=greeting]').val();

  if (nameVal == '' || nameVal == 'Your name *') {
    $('.rsvp-name-error').html('<i class="fa fa-exclamation"></i> Fill in your name first.').fadeIn();
    return false;
  }

  if (emailVal == "" || emailVal == "E-mail address*") {

    $('.rsvp-email-error').html('<i class="fa fa-exclamation"></i> Fill in your E-mail.').fadeIn();
    return false;

  } else if (!emailReg.test(emailVal)) {

    $('.rsvp-email-error').html('<i class="fa fa-exclamation"></i> E-mail is invalid.').fadeIn();
    return false;
  }

  if (greetingVal == '' || greetingVal == 'Greeting for the bride and groom') {
    $('.greeting-error').html('<i class="fa fa-exclamation"></i> Please give us wish.').fadeIn();
    return false;
  }

  function success() {
    $('.rsvp-box-hide').slideUp();
    $('.rsvp-message').html('<i style="color:black;">Thank you for filling in. We look forward to welcoming you!</i>').fadeIn();
  }

  function fail() {
    $('.btn btn-default btn-block').hide();
    $('.rsvp-message').html('<i style="color:red;"><div>Something went wrong, plesae try again!.</div></i>').fadeIn();
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzRFsvpbGDQ3tlI6UaWmOP4TRLJvwhRSo7hTSwa_GNrsiUMWmk/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => success())
      .catch(error => fail())
  })
});