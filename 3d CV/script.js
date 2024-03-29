// Turn pages when clicking next or prev button
const pageTurnBtns = document.querySelectorAll('.nextprev-btn');

pageTurnBtns.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);
        }
    };
});

// Contact me button action
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

// Create reverse index function
let totalpages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalpages - 1;
    }
}

// Back profile button action
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
};

// Opening animation
const coverRight = document.querySelector('.covr.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Cover right animation
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

// Page left or profile page animation
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200);

// All pages right animation
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});
function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails
  
    // Fetching values from inputs
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
  
    // Validating name
    var nameError = document.getElementById("nameError");
    if (name === "") {
      nameError.textContent = "Name is required";
      return false;
    } else {
      nameError.textContent = "";
    }
  
    // Validating email
    var emailError = document.getElementById("emailError");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email is required";
      return false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format";
      return false;
    } else {
      emailError.textContent = "";
    }
  
    // Validating message
    var messageError = document.getElementById("messageError");
    if (message === "") {
      messageError.textContent = "Message is required";
      return false;
    } else {
      messageError.textContent = "";
    }
  
    // If all validations pass, you can submit the form
    // Here you can add code to submit form data to server
  }

   // Submit form data to server
   fetch('www.shorifulshine@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then(response => {
    if (response.ok) {
      // Optionally, you can handle successful form submission here
      console.log('Form submitted successfully');
      // You can redirect the user or display a success message
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    // Handle errors during form submission
    console.error('Error:', error);
    // Optionally, display an error message to the user
  });
