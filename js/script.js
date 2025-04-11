
  $(function () {
    // WhatsApp URLs for desktop and mobile
    var hrefs = [
      "https://web.whatsapp.com/send?phone=918169027914", // Desktop
      "https://api.whatsapp.com/send?phone=918169027914" // Mobile
    ];
  
    // Function to update hrefs
    function updateWhatsAppHref() {
      var isMobile = $(window).width() < 767.98; // Check if width is less than 768px
      $(".set-url-target").attr("href", hrefs[isMobile ? 1 : 0]); // Update href
    }
  
    // Attach resize event with debounce
    $(window)
      .on("resize", function () {
        clearTimeout(this.resizeTimer); // Clear previous timer
        this.resizeTimer = setTimeout(updateWhatsAppHref, 200); // Debounce
      })
      .trigger("resize"); // Trigger on page load
  });
  

  document.getElementById("header").innerHTML =
  ` <nav  class="navbar navbar-expand-lg bg-light HomePage0">
  <div class="container header">
  <a class="navbar-brand" href="index.html">
   <img src="../image/VarniLogo.avif" alt="Varni Digital Logo">
  </a>
  <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                    <a class="nav-link" aria-current="page" href ="index.html"
                        >Home</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html">About Us </a>
                    </li>
                
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"></path></svg>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="OEM_AndWhiteLabeling.html">OEM & White Labeling</a></li>
                        <li><a class="dropdown-item" href="edgeTouchSwitch.html">Edge Touch Switch</a></li>
                        <li><a class="dropdown-item" href="touchSwitchPanel.html">Touch Switch Panel</a></li>
                        <li><a class="dropdown-item" href="hotelAutomation.html">Hotel Automation</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="gallery.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact</a>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>`;


            function highlightActiveLink() {
              let currentPath = window.location.pathname;
              let currentFile = currentPath.split('/').pop() || 'index.html';
              currentFile = currentFile.split('?')[0]; // remove query strings
            
              const navLinks = document.querySelectorAll('.nav-link, .dropdown-item'); // include dropdown items
              
              navLinks.forEach(link => {
                const href = link.getAttribute('href')?.split('?')[0]; // safe getAttribute
                if (!href || href === '#') return; // skip non-page links
                
                if (href === currentFile) {
                  link.classList.add('active');
                  
                  // Also highlight parent <li> if it's a dropdown (optional)
                  const parentDropdown = link.closest('.dropdown');
                  if (parentDropdown) {
                    const toggleLink = parentDropdown.querySelector('.nav-link.dropdown-toggle');
                    toggleLink?.classList.add('active');
                  }
                } else {
                  link.classList.remove('active');
                }
              });
            }
            
            
            document.addEventListener('DOMContentLoaded', () => {
              if (typeof loadContent === 'function') {
                loadContent(() => {
                  highlightActiveLink();
                });
              } else {
                highlightActiveLink(); // fallback if header is already there
              }
            });

            document.getElementById("footer").innerHTML =`
            <div class="container ">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-3 col-sm-6 mb-4 mb-md-0">
              <a class="footer-brand" href="index.html">
                <img src="image/VarniLogo.avif" alt="Varni Digital logo">
              </a>
              <p>
                In Corporated in the year 2013, in Vadodara (Gujarat, India), we “Varni Digital Pvt. Ltd.” is the renowned manufacturer and supplier of an enhanced quality product.
              </p>
            </div>
        
         
        
            <!-- Contact Info -->
            <div class="col-lg-3 col-sm-6 emailSec">
              <h5 class="fourthH centerStyle">Get In Touch</h5>
        
              <ul class="contact-info">
                <li>
                  <h6 class="fifthH"><i class="fa-solid fa-phone" aria-hidden="true"></i> Call</h6>
                  <a href="tel:+916354710794"> +91 63547 10794</a>
                  <span> or </span>
                  <a href="tel:+917990909711">  +91 79909 09711</a>
                </li>
                <li>
                  <h6 class="fifthH"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Email</h6>
                  <a class="emailAnchor" href="ABC@gmail.com">ABC@gmail.com</a>
                </li>
                <li>
                  <h6 class="fifthH"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Address</h6>
                  <a class="locationLink" target="_blank" href="https://maps.app.goo.gl/j55ADo6KSAyyb6Nt5">TF-A1-22, Akshar Pavilion Mall, Near Priya Cinema,Vasna Bhyali Main Road, Vadodara,3914109</a>
                </li>
               
              </ul>
            </div>
  
            <div class="col-md-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH centerStyle">Recently Updated products</h5>
              <div class="footerLinkWrap">
                <ul>
                  <li>
                    <a href="#"><i class="fa-solid fa-angles-right"></i>customize</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-solid fa-angles-right"></i>manufacturer</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-solid fa-angles-right"></i>water resistant</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-solid fa-angles-right"></i>sock proof</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-solid fa-angles-right"></i>smarthome</a>
                  </li>
                
                </ul>
              </div>
          
            </div>
          </div>
        </div>
      </div>
      <div class="f-bottom effect">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center">
                  2025 All Rights Reserved by Verni Digital | Developed by <a href="http://www.shriiitrackingsolution.com/" target="_blank"><b>Shriii&nbsp;Tracking&nbsp;Solution</b></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`


            