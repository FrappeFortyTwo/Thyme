      //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
      var dropdown = document.getElementsByClassName("dropdown-btn");
      var i;

      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
      }
      
      /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
      function openNav() {
        document.getElementById("mySidenav").style.width = "80%";
        document.getElementById("mySidenav").style.transition = "1s";
      }

      /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0%";
        document.getElementById("mySidenav").style.transition = "1s";  
      }