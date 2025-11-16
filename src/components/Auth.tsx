const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError('Please enter a valid email');
    return;
  }

  // Create a hidden iframe
  const iframe = document.createElement('iframe');
  iframe.name = 'mailchimp-frame';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  // Create a hidden form targeting the iframe
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://happyeverafter.us8.list-manage.com/subscribe/post?u=916fc2dd75b286d5de0c5593c&id=b1da420c53&f_id=00f17be1f0';
  form.target = 'mailchimp-frame';

  const emailInput = document.createElement('input');
  emailInput.type = 'hidden';
  emailInput.name = 'EMAIL';
  emailInput.value = email;

  // Add a hidden "redirect" field to return to your app
  const redirectInput = document.createElement('input');
  redirectInput.type = 'hidden';
  redirectInput.name = 'redirect';
  redirectInput.value = window.location.href; // or just '/' for root

  form.appendChild(emailInput);
  form.appendChild(redirectInput);
  document.body.appendChild(form);
  form.submit();

  // Clean up
  setTimeout(() => {
    document.body.removeChild(form);
    document.body.removeChild(iframe);
  }, 1000);

  // Immediately log in the user and proceed
  onAuthSuccess({ email });
};
