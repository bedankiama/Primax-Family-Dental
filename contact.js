const form = document.querySelector('.contact-form form');
const whatsappNumber = "+254713403101";

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page refresh

  // Get values from form
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const phone = form.querySelector('input[type="tel"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  // Validate required fields
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Create professional WhatsApp message
  const text = `📝 NEW MESSAGE – PRIMAX FAMILY DENTAL

👤 Contact Details
* Name: ${name}
* Phone: ${phone || 'N/A'}
* Email: ${email}

💬 Message
${message}

—
Sent via Primax Family Dental Website`;

  // Open WhatsApp
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');

  // Reset form
  form.reset();
});
