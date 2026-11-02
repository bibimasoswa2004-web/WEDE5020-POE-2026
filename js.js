document.getElementById('enquiryForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if(name.length < 3){ alert('Name must be at least 3 characters'); return; }
  if(!email.includes('@')){ alert('Enter valid email'); return; }
  alert('Thank you '+name+'! Your enquiry has been received. We will contact you within 24 hours.');
  this.reset();
});
console.log('Paws Rescue WEDE5020 - Pretoria CBD loaded');
