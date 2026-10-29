/* ============================================================
   RevZone – contact.js  (Contact page form handler)
   ============================================================ */

const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = contactForm.querySelector('[name=name]').value.trim();
    const email   = contactForm.querySelector('[name=email]').value.trim();
    const subject = contactForm.querySelector('[name=subject]').value.trim();
    const message = contactForm.querySelector('[name=message]').value.trim();

    if (!name || !email || !subject || !message) {
      formNote.style.color = '#e8252e';
      formNote.textContent = '⚠️ Please fill in all fields.';
      return;
    }

    // Simulate sending
    const submitBtn = contactForm.querySelector('button[type=submit]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    setTimeout(() => {
      formNote.style.color = '#4caf50';
      formNote.textContent = `✅ Message received, ${name}! We'll get back to you at ${email} soon.`;
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    }, 1400);
  });
}
