function toggleMenu() {
      document.getElementById('nav-list').classList.toggle('active');
    }

    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

      if (!name || !email || !message) {
        alert('All fields are required.');
        return;
      }
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        return;
      }
      alert('Message sent successfully!');
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
    }

    function revealOnScroll() {
      const containers = document.querySelectorAll('.containers');
      const contact = document.querySelector('.contactme');
      const triggerBottom = window.innerHeight * 0.8;

      containers.forEach(cont => {
        const contTop = cont.getBoundingClientRect().top;
        if (contTop < triggerBottom) {
          cont.classList.add('show');
        }
      });

      const contactTop = contact.getBoundingClientRect().top;
      if (contactTop < triggerBottom) {
        contact.classList.add('show');
      }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();