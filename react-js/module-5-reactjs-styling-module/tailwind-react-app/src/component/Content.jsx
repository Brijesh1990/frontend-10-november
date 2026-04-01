import React from 'react'
const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dhurandhar_%28soundtrack_album_cover%29.jpg",
    audio: "https://p.scdn.co/mp3-preview/6d1d7e91.mp3",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    image: "https://i.scdn.co/image/ab67616d00001e02223959c7eed1c5ea8a5a09eb",
    audio: "https://p.scdn.co/mp3-preview/7a1b2c3d.mp3",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWZ4_cHM342n6cCoCAWuxcVm_wnbzF9_XMg&s",
    audio: "https://p.scdn.co/mp3-preview/3f4e5d6c.mp3",
  },

  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a8/Dhurandhar_%28soundtrack_album_cover%29.jpg",
    audio: "https://p.scdn.co/mp3-preview/6d1d7e91.mp3",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    image: "https://i.scdn.co/image/ab67616d00001e02223959c7eed1c5ea8a5a09eb",
    audio: "https://p.scdn.co/mp3-preview/7a1b2c3d.mp3",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWZ4_cHM342n6cCoCAWuxcVm_wnbzF9_XMg&s",
    audio: "https://p.scdn.co/mp3-preview/3f4e5d6c.mp3",
  },
];


export default function Content() {
  const playAudio = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

return (
    <main className="p-4 md:p-6 space-y-10 w-1/2 mx-auto">

      {/* TRENDING SONGS */}
      <section className='w-230'>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Trending songs</h2>
          <button className="text-sm text-gray-400 hover:text-white">
            Show all
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide  w-230">

          {songs.map((song, i) => (
            <div key={i} className="min-w-[230px] group cursor-pointer">
              <div className="relative">
                <img
                  src={song.image} alt='img'
                  className="rounded-lg mb-2" style={{width:"100%", height:"220px"}}
                />

                {/* PLAY BUTTON */}
                <button
                  onClick={() => playAudio(song.audio)}
                  className="absolute bottom-2 right-2 bg-green-500 w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                >
                  ▶
                </button>
              </div>

              <h3 className="text-sm font-semibold">{song.title}</h3>
              <p className="text-xs text-gray-400">{song.artist}</p>
            </div>
          ))}

        </div>
      </section>

      {/* POPULAR ARTISTS */}
      <section>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Popular artists</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto w-230">

          {[
            {
              name: "Arijit Singh",
              img: "https://i.scdn.co/image/ab67616d0000b273627b5b17cb48f6e6956b842e",
            },
            {
              name: "A.R. Rahman",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qMGdn3HrxGgF3xq7Q3kV4q8MDzfjkzksgw&s",
            },

             {
              name: "A.R. Rahman",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qMGdn3HrxGgF3xq7Q3kV4q8MDzfjkzksgw&s",
            },

             {
              name: "A.R. Rahman",
              img: "https://c.saavncdn.com/470/Arijit-Singh-All-Time-Hits-Hindi-2023-20230515203522-500x500.jpg",
            },

             {
              name: "A.R. Rahman",
              img: "https://c.saavncdn.com/470/Arijit-Singh-All-Time-Hits-Hindi-2023-20230515203522-500x500.jpg",
            },

             {
              name: "A.R. Rahman",
              img: "https://c.saavncdn.com/470/Arijit-Singh-All-Time-Hits-Hindi-2023-20230515203522-500x500.jpg",
            },
          ].map((artist, i) => (
            <div key={i} className="min-w-[140px] text-center">
              <img
                src={artist.img}
                className="rounded-full mb-2 w-[140px] h-[140px] object-cover"
              />
              <h3 className="text-sm font-semibold">{artist.name}</h3>
              <p className="text-xs text-gray-400">Artist</p>
            </div>
          ))}

        </div>
      </section>

      {/* ALBUMS */}
      <section>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Popular albums</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto  w-230">

          {[
            {
              title: "Divide",
              artist: "Ed Sheeran",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsQXKAHXJUZsIN2wAL5C8hASv-YLqalWB1w&s",
            },
            {
              title: "Future Nostalgia",
              artist: "Dua Lipa",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk7hyymLZUYskXbnzIPkhhkz6Cp1nC7PMZw&s",
            },

             {
              title: "Divide",
              artist: "Ed Sheeran",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsQXKAHXJUZsIN2wAL5C8hASv-YLqalWB1w&s",
            },
            {
              title: "Future Nostalgia",
              artist: "Dua Lipa",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk7hyymLZUYskXbnzIPkhhkz6Cp1nC7PMZw&s",
            },

             {
              title: "Divide",
              artist: "Ed Sheeran",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsQXKAHXJUZsIN2wAL5C8hASv-YLqalWB1w&s",
            },
            {
              title: "Future Nostalgia",
              artist: "Dua Lipa",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk7hyymLZUYskXbnzIPkhhkz6Cp1nC7PMZw&s",
            },
          ].map((album, i) => (
            <div key={i} className="min-w-[160px]">
              <img src={album.img} className="rounded-lg mb-2" />
              <h3 className="text-sm font-semibold">{album.title}</h3>
              <p className="text-xs text-gray-400">{album.artist}</p>
            </div>
          ))}

        </div>
      </section>

      {/* RADIO */}
      <section>
        <h2 className="text-xl font-bold mb-4">Popular radio</h2>

        <div className="flex gap-4 overflow-x-auto">

          {["Arijit Singh", "KK", "Shreya Ghoshal"].map((name, i) => (
            <div
              key={i}
              className="min-w-[180px] p-4 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <h3 className="font-semibold">{name}</h3>
              <p className="text-xs text-white/80">Radio • Spotify</p>
            </div>
          ))}

        </div>
      </section>

      {/* CHARTS */}
      <section>
        <h2 className="text-xl font-bold mb-4">Featured Charts</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            "Top Songs Global",
            "Top Songs India",
            "Top 50 Global",
            "Top 50 India",
            "Viral 50",
          ].map((chart, i) => (
            <div
              key={i}
              className="p-4 rounded-lg h-[120px] flex items-end font-bold bg-gradient-to-br from-green-400 to-blue-500"
            >
              {chart}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}