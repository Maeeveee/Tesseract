export default function GameSection() {
    const games = [
        {
            name: "Elden Ring",
            image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
            platform: "Steam",
            hours: 120,
            impression: "Open world yang luas, boss fight menantang, grafis memukau!",
            rating: 5 // rating maksimal 5
        },
        {
            name: "Valorant",
            image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Valorant_logo.png",
            platform: "Riot",
            hours: 300,
            impression: "FPS kompetitif, teamwork penting, seru bareng teman.",
            rating: 4
        },
        // Tambahkan game lain di sini
    ];

    return (
        <section className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h1 className="text-4xl text-white font-bold mb-4">Game Spot</h1>
                <p className="text-md lg:text-xl text-gray-400 mb-8">
                    Game played by <span className="font-semibold text-gray-200">Raja React</span>.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {games.map((game, i) => (
                        <li
                            key={i}
                            className="bg-white/10 dark:bg-gray-800/40 rounded-xl p-3 flex flex-col items-center border-2 border-dashed border-gray-700 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                        >
                            <img src={game.image} alt={game.name} className="w-24 h-24 object-cover rounded mb-2" />
                            <span className="font-semibold text-white mb-2">{game.name}</span>
                            <div className="grid grid-cols-2 w-full mb-1">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-400">Play Hour</span>
                                    <span className="text-xs text-gray-300">{game.hours}h</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-400">Rating</span>
                                    <span className="text-xs text-yellow-400">
                                        {"★".repeat(game.rating)}
                                        <span className="text-gray-500">{'★'.repeat(5 - game.rating)}</span>
                                    </span>
                                </div>
                            </div>
                            <span className="text-xs text-gray-300 italic mt-2 text-center">{game.impression}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}