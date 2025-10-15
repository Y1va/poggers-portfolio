function openMenu() {
  const body = document.body;

  body.classList.add('open');
}

function closeMenu() {
  const body = document.body;

  body.classList.remove('open');
}

// Template ID
// template_ex2rdys

// Service ID
// service_2sm7ai9

// Public Key
// kyJxsGCEMFqgrCFQE

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector('.contact__form__loading');
  const form = document.querySelector('.contact__form');

  try {
    // Open up loading state
    loading.classList.remove('hidden');

    await emailjs.sendForm(
      'service_2sm7ai9',
      'template_ex2rdys',
      event.target,
      'kyJxsGCEMFqgrCFQE'
    );

    // Show success state
    form.reset();
    loading.classList.add('hidden');
    body.classList.add('success-open');

    setTimeout(() => {
      body.classList.remove('success-open');
    }, 5000);
  } catch {
    loading.classList.add('hidden');
    form.reset();
    alert(
      'An error has occured. Please try again later or contact me at ponzeadrian@gmail.com'
    );
  }
}
