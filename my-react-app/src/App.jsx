import { useState, useEffect } from 'react';
import './App.css';

// 1. Компонент Картки (Props)
const MovieCard = ({ title, year, category, image }) => (
  <div className="movie-card">
    <img src={image} alt={title} className="movie-image" />
    <div className="movie-info">
      <h3>{title}</h3>
      <span className="category">{category}</span>
      <p>Рік: {year}</p>
    </div>
  </div>
);

function App() {
  // 2. Стан (State)
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // 3. Побічні ефекти (Effect) - імітація запиту до API
  useEffect(() => {
    const data = [
      { id: 1, title: "Інтерстеллар", year: 2014, category: "Наукова фантастика", image: "https://placehold.co/300x450/007bff/white?text=Interstellar" },
      { id: 2, title: "Початок", year: 2010, category: "Екшн", image: "https://placehold.co/300x450/007bff/white?text=Inception" },
      { id: 3, title: "Темний лицар", year: 2008, category: "Драма", image: "https://placehold.co/300x450/007bff/white?text=The+Dark+Knight" },
      { id: 4, title: "Дюна", year: 2021, category: "Пригоди", image: "https://placehold.co/300x450/007bff/white?text=Dune" },
    ];

    setTimeout(() => {
      setMovies(data);
      setLoading(false);
    }, 1000);
  }, []);

  // 4. Логіка фільтрації
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>🎬 MovieCatalog</h1>
        <input
          type="text"
          placeholder="Пошук фільмів..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <main className="content">
        {loading ? (
          <div className="loader">Завантаження каталогу...</div>
        ) : (
          <div className="grid">
            {filteredMovies.length > 0 ? (
              filteredMovies.map(movie => (
                <MovieCard key={movie.id} {...movie} />
              ))
            ) : (
              <p className="no-results">Нічого не знайдено 🔍</p>
            )}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Лабораторна робота №6 — React Basics</p>
      </footer>
    </div>
  );
}

export default App;