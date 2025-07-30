export default function GameSection() {
    const games = [
        {
            name: "Elden Ring",
            image: "https://i.pinimg.com/1200x/61/f6/73/61f673cc38d2c9d1feef884ed61b3027.jpg",
            platform: "Steam",
            hours: 100,
            impression: "The most perfect game ever made, a masterpiece of open-world design. miss malenia",
            rating: 5
        },
        {
            name: "Sekiro: Shadows Die Twice",
            image: "https://i.pinimg.com/736x/2e/b2/63/2eb26377f1a06cc9b489aaed07446f82.jpg",
            platform: "Steam",
            hours: 90,
            impression: "GOATTT, the first souls-like game I played, and it was amazing.",
            rating: 5
        },
        {
            name: "Warcraft III Reforged",
            image: "https://i.pinimg.com/1200x/46/bf/35/46bf35c90e04be3487e16c1c484bff85.jpg",
            platform: "Blizzard",
            hours: 200,
            impression: "Goooddd remaster, bring back the nostalgia of my childhood",
            rating: 5
        },
                {
            name: "Valorant",
            image: "https://i.pinimg.com/1200x/39/dd/4d/39dd4da08ecccc0159d79598365e995e.jpg",
            platform: "Riot",
            hours: 300,
            impression: "the most harmful game, but if you play it with friends, it can be harmless",
            rating: 4
        },
    ];

    return (
        <section className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h1 className="text-4xl text-white font-bold mb-4">Game Spot</h1>
                <p className="text-md lg:text-xl text-gray-400 mb-8">
                    Game played by <span className="font-semibold text-gray-200">Raja React</span>.
                </p>
                <ul className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {games.map((game, i) => (
                        <li
                            key={i}
                            className="bg-white/10 dark:bg-gray-800/40 rounded-xl p-3 flex flex-col items-center border-2 border-dashed border-gray-700 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                        >
                            <img src={game.image} alt={game.name} className="w-24 h-24 object-cover rounded mb-2" />
                            <span className="font-semibold text-white mb-2">{game.name}</span>
                            <div className="grid grid-cols-2 w-full mb-1 gap-y-1">
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
                            <span className="hidden lg:block md:block text-xs text-gray-300 italic mt-2 text-center">{game.impression}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}