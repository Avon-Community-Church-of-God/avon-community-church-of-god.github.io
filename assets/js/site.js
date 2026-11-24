// Mobile menu toggle and footer year
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Church forms: send to Formspree in the background and show a thank-you
// message on the page. Without JavaScript the form still posts normally.
(function () {
  var forms = document.querySelectorAll('form[data-formspree]');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (e) {
      if (!window.fetch || !window.FormData) return;
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var status = form.querySelector('.form-status');
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (status) { status.textContent = ''; status.className = 'form-status'; }
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (res.ok) {
            form.reset();
            var done = document.createElement('div');
            done.className = 'form-done';
            done.setAttribute('role', 'status');
            done.setAttribute('tabindex', '-1');
            done.innerHTML = '<h3></h3><p></p>';
            done.querySelector('h3').textContent = 'Message sent';
            done.querySelector('p').textContent = form.getAttribute('data-success') || 'Thank you! We will be in touch soon.';
            form.parentNode.replaceChild(done, form);
            done.focus();
          } else {
            var msg = (data && data.errors && data.errors.length)
              ? data.errors.map(function (x) { return x.message; }).join(' ')
              : 'Something went wrong sending your message.';
            throw new Error(msg);
          }
        });
      }).catch(function (err) {
        if (status) {
          status.className = 'form-status error';
          status.textContent = (err && err.message ? err.message + ' ' : '') +
            'Please try again, or email administration@avonchurch.org or call (317) 272-6289.';
        }
        if (btn) { btn.disabled = false; btn.textContent = label; }
      });
    });
  });
})();
