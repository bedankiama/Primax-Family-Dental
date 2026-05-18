const form = document.querySelector('.appointment-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll('input, select, textarea');

  const [
    fullName,
    phone,
    email,
    nationality,
    date,
    time,
    service,
    patientType,
    notes
  ] = inputs;

  const message = `
📅 *NEW APPOINTMENT REQUEST – PRIMAX FAMILY DENTAL*

👤 *Patient Details*
• Name: ${fullName.value}
• Phone: ${phone.value}
• Email: ${email.value || 'Not provided'}
• Nationality: ${nationality.value}

🦷 *Appointment Details*
• Service: ${service.value}
• Patient Type: ${patientType.value}
• Preferred Date: ${date.value}
• Preferred Time: ${time.value}

📝 *Additional Notes*
${notes.value || 'No additional notes provided.'}

—
Sent via Primax Family Dental Website
  `.trim();

  const whatsappNumber = '+2547113116911';
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
});
