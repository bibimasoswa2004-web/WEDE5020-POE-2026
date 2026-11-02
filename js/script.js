// Roodepoort Paws Rescue - Part 3

// MODAL - When adopt button clicked
function openAdoptModal(name){
  document.getElementById('adoptModal').style.display='block';
  document.getElementById('modalPetName').innerText=name;
}
function closeAdoptModal(){
  document.getElementById('adoptModal').style.display='none';
}

// ACCORDION - FAQ drops down
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.accordion-header').forEach(function(header){
    header.addEventListener('click', function(){
      var content = this.nextElementSibling;
      content.style.display = content.style.display==='block' ? 'none' : 'block';
    });
  });
});

// LIGHTBOX - Make dog photo big
function openLightbox(src){
  var lb = document.getElementById('lightbox');
  lb.style.display='flex';
  lb.querySelector('img').src=src;
}
function closeLightbox(){
  document.getElementById('lightbox').style.display='none';
}

// DYNAMIC PETS - Load from JavaScript
var pets = [
  {name:"Bella", type:"Dog", age:"2 years", img:"images/dog1.jpg"},
  {name:"Milo", type:"Cat", age:"1 year", img:"images/cat1.jpg"},
  {name:"Rocky", type:"Dog", age:"3 years", img:"images/dog2.jpg"}
];
function loadPets(){
  var box = document.getElementById('pets-container');
  if(!box) return;
  var html = "";
  for(var i=0;i<pets.length;i++){
    html += '<div class="pet-card" data-type="'+pets[i].type+'" data-name="'+pets[i].name.toLowerCase()+'">'
    + '<img src="'+pets[i].img+'" alt="'+pets[i].name+' '+pets[i].type+' adoption Roodepoort" onclick="openLightbox(\''+pets[i].img+'\')">'
    + '<h3>'+pets[i].name+'</h3><p>'+pets[i].type+' - '+pets[i].age+'</p>'
    + '<button onclick="openAdoptModal(\''+pets[i].name+'\')">Adopt '+pets[i].name+'</button></div>';
  }
  box.innerHTML=html;
}

// SEARCH - Filter pets
function searchPets(){
  var q = document.getElementById('searchInput').value.toLowerCase();
  var filter = document.getElementById('typeFilter').value;
  document.querySelectorAll('.pet-card').forEach(function(card){
    var name = card.dataset.name;
    var type = card.dataset.type;
    var show = name.includes(q) && (filter==='All' || type===filter);
    card.style.display = show ? 'block' : 'none';
  });
}

// MAP - Roodepoort map
function initMap(){
  var mapDiv = document.getElementById('map');
  if(!mapDiv) return;
  var map = L.map('map').setView([-26.1625, 27.8710], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([-26.1625, 27.8710]).addTo(map).bindPopup('Roodepoort Paws Rescue');
}

// FORM VALIDATION - ENQUIRY - cost & availability
function validateEnquiryForm(e){
  e.preventDefault();
  var name=document.getElementById('enqName').value.trim();
  var email=document.getElementById('enqEmail').value.trim();
  var phone=document.getElementById('enqPhone').value.trim();
  var service=document.getElementById('enqService').value;
  var msg=document.getElementById('enqMessage').value.trim();
  var err=document.getElementById('enqError');
  
  if(name.length<3){ err.innerText='Name must be 3 letters'; return; }
  if(email.indexOf('@')==-1){ err.innerText='Email must have @'; return; }
  if(phone.replace(/\s/g,'').length!=10){ err.innerText='Phone must be 10 digits'; return; }
  if(msg.length<10){ err.innerText='Message must be 10 letters'; return; }
  
  err.innerText='';
  // AJAX simulation
  fetch('https://jsonplaceholder.typicode.com/posts',{method:'POST', body:JSON.stringify({name,email})})
  .then(function(){
    var cost = service==='Adopt' ? 'R500 includes vaccine' : service==='Volunteer' ? 'Free training!' : 'R200/month sponsorship';
    document.getElementById('enqResponse').innerHTML='<h3>Thanks '+name+'!</h3><p>Cost: '+cost+'</p><p>Availability: Bella is available now!</p><p>We email you at '+email+'</p>';
    document.getElementById('enqResponse').style.display='block';
  });
}

// FORM VALIDATION - CONTACT - compile email
function validateContactForm(e){
  e.preventDefault();
  var name=document.getElementById('contactName').value;
  var email=document.getElementById('contactEmail').value;
  var type=document.getElementById('messageType').value;
  var msg=document.getElementById('contactMessage').value;
  var err=document.getElementById('contactError');
  if(!name || email.indexOf('@')==-1 || !msg){ err.innerText='Fill all fields, email needs @'; return; }
  err.innerText='';
  var to='info@roodepoortpawsrescue.co.za';
  var subject='Contact: '+type+' from '+name;
  var body='Name:'+name+' Email:'+email+' Type:'+type+' Message:'+msg;
  document.getElementById('contactResponse').innerHTML='<p>To: '+to+'</p><p>Subject: '+subject+'</p><p><a href="mailto:'+to+'?subject='+subject+'&body='+body+'">Send Email</a></p><p>We reply in 24h</p>';
  fetch('https://jsonplaceholder.typicode.com/posts',{method:'POST'});
}

document.addEventListener('DOMContentLoaded', function(){
  loadPets(); initMap();
  var ef=document.getElementById('enquiryForm'); if(ef) ef.addEventListener('submit', validateEnquiryForm);
  var cf=document.getElementById('contactForm'); if(cf) cf.addEventListener('submit', validateContactForm);
});
