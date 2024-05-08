var mobileScrollScreen = document.getElementById('mobile-scroll-screen');
        var scrollLap = document.getElementById('scroll-lap');
    
        
        mobileScrollScreen.addEventListener('scroll', function () {
            scrollLap.scrollTop = mobileScrollScreen.scrollTop;
        });
    
        scrollLap.addEventListener('scroll', function () {
            mobileScrollScreen.scrollTop = scrollLap.scrollTop;
        });
    

        var stickySection = document.getElementById('sticky-section');
        var initialOffset = stickySection.offsetTop;

        window.onscroll = function () {

            scrollFunction();

            var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPosition > initialOffset) {
                // Check if the scroll position is less than 300 pixels from the initial offset
                if (scrollPosition < (initialOffset + 300)) {
                    stickySection.style.top = '30px';
                    stickySection.style.opacity = 100;
                } else {
                    // If it's more than 300 pixels, slowly hide the section
                    stickySection.style.opacity = 0; // Adjust the value for desired disappearance speed
                }
            } else {
                // If the scroll position is less than the initial offset, reset to sticky
                stickySection.style.top = '30px';
            }
        };


        document.addEventListener("DOMContentLoaded", function () {
            // Show the loader
            var loaderWrapper = document.querySelector(".loader-wrapper");
            loaderWrapper.style.display = "flex";
          
            setTimeout(function () {
              loaderWrapper.style.display = "none";
            }, 2000);
          });


        
        
        function scrollFunction() {
            var backupButton = document.querySelector('.backup-btn');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backupButton.style.display = 'block';
            } else {
                backupButton.style.display = 'none';
            }
        }
        
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }