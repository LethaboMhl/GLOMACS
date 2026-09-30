const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

function fillSearch(value){
  const input = document.getElementById('heroSearch');
  input.value = value;
  input.focus();
}

function searchCourses(){
  const query = document.getElementById('heroSearch').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.course-card');
  let found = 0;

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const visible = !query || title.includes(query);
    card.style.display = visible ? '' : 'none';
    if(visible) found++;
  });

  document.getElementById('courses').scrollIntoView({behavior:'smooth'});

  if(query && !found){
    setTimeout(() => alert(`No featured course matched "${query}". Try another category or use Find Training.`), 300);
  }
}

function handleFinder(event){
  event.preventDefault();
  const category = document.getElementById('finderCategory').value;
  if(category){
    fillSearch(category.split('&')[0].trim());
    searchCourses();
  } else {
    document.getElementById('courses').scrollIntoView({behavior:'smooth'});
  }
}
