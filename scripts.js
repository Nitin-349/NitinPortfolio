  function toggleReadMore() {
        var aboutText = document.getElementById('about-text');
        var btn = document.getElementById('read-more-btn');

        if (aboutText.classList.contains('collapsed')) {
            aboutText.classList.remove('collapsed');
            aboutText.classList.add('expanded');
            btn.innerText = 'Read Less';
        } else {
            aboutText.classList.remove('expanded');
            aboutText.classList.add('collapsed');
            btn.innerText = 'Read More';
        }
    }
    const roles = ["Software Engineer", "Web Developer", "Programmer"];
    let currentRole = 0;
    const roleContainer = document.getElementById("role-container");

    function changeRole() {
        roleContainer.textContent = roles[currentRole];
        currentRole = (currentRole + 1) % roles.length; 
    }
    setInterval(changeRole, 2000);
        changeRole();

    const images = ["DSC_6182.JPG", "IMG-20240519-WA0022.JPG", "IMG_4100.JPG"];
let currentImageIndex = 0;

const headerElement = document.getElementById("home");

function changeImage() {
    headerElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;  
}

setInterval(changeImage, 3000);

changeImage();

function validateForm() {
        document.getElementById('error-msg').style.display = 'none';
        document.getElementById('error-msg').innerText = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            showError('Please enter your name.');
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('Please enter a valid email address.');
            return false;
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(mobile)) {
            showError('Please enter a valid 10-digit mobile number.');
            return false;
        }

        if (message === '') {
            showError('Please enter your message or question.');
            return false;
        }

        return true;
    }
    function showError(message) {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'block';
        errorMsg.innerText = message;
    }

