const animeByGenre = {
  Action: [
    {
      title: 'Attack on Titan',
      why: 'Intense battles, huge twists, and one of anime\'s most gripping stories.'
    },
    {
      title: 'Jujutsu Kaisen',
      why: 'Fast-paced supernatural action with great animation and likable characters.'
    },
    {
      title: 'Demon Slayer',
      why: 'Beautiful visuals and emotional storytelling wrapped in sword-fighting action.'
    }
  ],
  Romance: [
    {
      title: 'Your Lie in April',
      why: 'A moving romance with music, growth, and heartfelt moments.'
    },
    {
      title: 'Toradora!',
      why: 'Funny, sweet, and full of character chemistry that keeps you hooked.'
    },
    {
      title: 'Kaguya-sama: Love Is War',
      why: 'Smart comedy and chaotic romance where every confession becomes a battle.'
    }
  ],
  Fantasy: [
    {
      title: 'Fullmetal Alchemist: Brotherhood',
      why: 'Rich world-building, excellent pacing, and deep themes about sacrifice.'
    },
    {
      title: 'Made in Abyss',
      why: 'An unforgettable adventure with mystery, beauty, and emotional depth.'
    },
    {
      title: 'Frieren: Beyond Journey\'s End',
      why: 'A reflective fantasy about time, memory, and what happens after the quest.'
    }
  ],
  Comedy: [
    {
      title: 'Gintama',
      why: 'Wild humor mixed with sudden serious arcs and surprisingly strong action.'
    },
    {
      title: 'The Disastrous Life of Saiki K.',
      why: 'Quick-fire jokes and clever parody make it perfect for casual watching.'
    },
    {
      title: 'Spy x Family',
      why: 'A wholesome and hilarious fake-family concept with broad appeal.'
    }
  ],
  'Slice of Life': [
    {
      title: 'Barakamon',
      why: 'Relaxing and funny with meaningful character development.'
    },
    {
      title: 'March Comes in like a Lion',
      why: 'A thoughtful, emotional story about healing and finding connection.'
    },
    {
      title: 'Violet Evergarden',
      why: 'Gorgeous animation and touching stories that explore human feelings.'
    }
  ],
  Thriller: [
    {
      title: 'Death Note',
      why: 'Mind games, moral conflict, and constant tension from episode one.'
    },
    {
      title: 'Steins;Gate',
      why: 'Slow-burn sci-fi thriller with a rewarding emotional payoff.'
    },
    {
      title: 'Monster',
      why: 'A mature psychological mystery with unforgettable villains and suspense.'
    }
  ]
};

const genreSelect = document.getElementById('genre');
const suggestBtn = document.getElementById('suggestBtn');
const resultSection = document.getElementById('result');

Object.keys(animeByGenre).forEach((genre) => {
  const option = document.createElement('option');
  option.value = genre;
  option.textContent = genre;
  genreSelect.appendChild(option);
});

function renderSuggestions(genre) {
  const options = animeByGenre[genre];

  if (!options) {
    resultSection.classList.remove('hidden');
    resultSection.innerHTML = '<p>Please select a genre first.</p>';
    return;
  }

  const picks = [...options]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  resultSection.innerHTML = `
    <h2>${genre} picks for you</h2>
    <ul>
      ${picks
        .map(
          (anime) => `<li><strong>${anime.title}</strong><br><span>Why watch: ${anime.why}</span></li>`
        )
        .join('')}
    </ul>
  `;
  resultSection.classList.remove('hidden');
}

suggestBtn.addEventListener('click', () => {
  renderSuggestions(genreSelect.value);
});
