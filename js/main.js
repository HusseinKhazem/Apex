(function ($) {
    "use strict";


 
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
	
	



const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();


// Get FORM data

var templateParams = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("message").value
  };


   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_52p0tht';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

	
//WHTP FUNCTION

        // Get all elements with the class 'whatsapp-button'
        var buttons = document.getElementsByClassName('whatsapp-button');
        
        // Attach the click event listener to each button
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                var phoneNumber = this.getAttribute('data-phone');
                var defaultText = this.getAttribute('data-message');
                var message = encodeURIComponent(defaultText);
                var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message;
                window.open(whatsappURL, '_blank');
            });
        }







	




// Function to send email
function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form data
  var templateParams = {
    from_name : document.getElementById("name").value,
    email_id : document.getElementById("email").value,
    phone : document.getElementById("phone").value,
	message : document.getElementById("message").value
	
  };

  // Send email using EmailJS
  emailjs.send("service_xzwa6ev", "template_52p0tht", "templateParams")
    .then(function(response) {
      console.log("Email sent successfully!");
      document.getElementById("contact-form").reset(); // Reset the form
    }, function(error) {
      console.log("Failed to send email. Error:", error);
    });
}

// Attach event listener to the form submit event
document.getElementById("contact-form").addEventListener("submit", sendEmail);




//PREVENT ADDING OTHER THAN DIGITS INSIDE PHONE NUMBER TEXT BOX
function validatePhoneNumber(input) {
  var phoneNumber = input.value.replace(/\D/g, ''); // Remove non-digit characters from the input

  if (phoneNumber !== input.value) {
    alert('Please enter only digits for the phone number.');
    input.value = phoneNumber; // Update the input value to remove non-digit characters
  }
}

//REMOVE PAGE NAMES FROM URL EXAMPLE: WWW.APEXITSOLUTIONS.TECH/INDEX.HTML -- THIS BELOW CODE HIDES THE PAGE NAME FROM THE URL>> WWW>.APEXITSOLUTIONS.TECH
    if (location.pathname.endsWith(".html")) {
      var newUrl = location.href.replace(location.pathname, "/");
      window.history.replaceState({}, document.title, newUrl);
    }

    
})(jQuery);

