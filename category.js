// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const genre = urlParams.get('genre') || 'all';

// Judul berdasarkan kategori
const titles = {
  sports: 'Live Sports',
  movies: 'Movies',
  series: 'TV Series',
  kids: 'Kids & Family' 
};

document.getElementById('category-title').textContent = titles[genre] || 'Content';

// Data dummy per kategori — PATH DIPERBAIKI
const categoryData = {
  sports: [
    { title: 'NBA Finals 2024', img: 'img/NBA.jpg' },
    { title: 'F1 Monaco GP', img: 'img/F1.jpg' },
    { title: 'UFC 300', img: 'img/UFC.jpg' },
    { title: 'Premier League', img: 'img/PremierLeague.jpg' }
  ],
  movies: [
    { title: 'Avengers: Endgame', img: 'img/EndGame.jpg' },
    { title: 'The Conjuring', img: 'img/Conjuring.jpg' },
    { title: 'Interstellar', img: 'img/Interstellar.jpg' },
    { title: 'The Godfather', img: 'img/The Godfather.jpg' }
  ],
  series: [
    { title: 'Stranger Things', img: 'img/Stranger Things.jpg' },
    { title: 'Game of Thrones', img: 'img/Game of Thrones.jpg' },
    { title: 'Breaking Bad', img: 'img/Breaking Bad.jpg' },
    { title: 'The Crown', img: 'img/The Crown.jpg' }
  ],
  kids: [
    { title: 'Peppa Pig', img: 'img/Peppa Pig.jpg' },
    { title: 'Bluey', img: 'img/Bluey.jpg' },
    { title: 'Sesame Street', img: 'img/Sesame Street.jpg' },
    { title: 'Paw Patrol', img: 'img/Paw Patrol.jpg' }
  ]
};

// Render konten
const grid = document.getElementById('category-grid');
const data = categoryData[genre] || categoryData.movies;

grid.innerHTML = data.map(item => `
  <div class="video-card">
    <img src="${item.img}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x450/333/fff?text=Image+Not+Found'">
    <div class="video-info">
      <h3>${item.title}</h3>
    </div>
  </div>
`).join('');