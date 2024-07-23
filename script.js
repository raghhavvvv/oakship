window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.getElementById("requestQuoteBtn").addEventListener("click", function() {
    var form = document.getElementById("quoteForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
});
window.addEventListener('scroll', function() {
    var header = document.querySelector('header.sticky');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
document.addEventListener('DOMContentLoaded', function() {
    const baseDiv = document.getElementById('baseDiv');
    const verticalDivs = document.querySelectorAll('.verticalDiv');

    verticalDivs.forEach(div => {
        div.addEventListener('mouseover', function() {
            const bgImage = this.getAttribute('data-bg');
            baseDiv.style.backgroundImage = `url('${bgImage}')`;
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var closeCross = document.getElementById('closeFormCross');
    if (closeCross) {
        closeCross.addEventListener('click', function() {
            document.getElementById('quoteForm').style.display = 'none';
        });
    }
});
window.addEventListener("load", function() {
    const form = document.getElementById('form2');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Thank You!");
      })
    });
  });
function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
window.addEventListener("load", function() {
    const form = document.getElementById('form3');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Thank You, we will get in touch with you soon!");
      })
    });
  });
const backgroundImages = [
    'slider1.png',
    'slider2.png',
    'slider3.png',
    'slider4.png'
];

let currentImageIndex = 0;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
}

// Set initial background
document.body.style.backgroundImage = `url('${backgroundImages[0]}')`;

// Start changing background after the first interval
setTimeout(() => {
    changeBackground();
    setInterval(changeBackground, 5000); // Change image every 5 seconds after the first change
}, 5000);
