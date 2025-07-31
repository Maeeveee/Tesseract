import { useState } from "react";

export default function GameSection() {
    const games = [
        {
            name: "Elden Ring",
            image: "https://i.pinimg.com/1200x/61/f6/73/61f673cc38d2c9d1feef884ed61b3027.jpg",
            platform: "Steam",
            hours: 100,
            impression: "The most perfect game ever made, a masterpiece of open-world design. miss u malenia",
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
            name: "Horizon Zero Dawn",
            image: "https://i.pinimg.com/1200x/5e/bb/76/5ebb763c6a56b927630a1ed1326f0772.jpg",
            platform: "Steam",
            hours: 54,
            impression: "very good story telling and world building, i wish i could play with better devices and i also wanna play the sequel",
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
            name: "Stardew Valley",
            image: "https://i.pinimg.com/736x/04/20/b2/0420b2b75dc2ec25bc65b93ab6f9c4ca.jpg",
            platform: "Steam",
            hours: 185,
            impression: "this game has stolen many hours of my life, especially during the two-month break of my college holiday. I will always recommend this game to anyone",
            rating: 5
        },
        {
            name: "Balatro",
            image: "https://i.pinimg.com/736x/24/4f/89/244f89128661170dccbdf77881db1103.jpg",
            platform: "Steam",
            hours: 56,
            impression: "most greatest card game ever, the art style is so unique and the gameplay is very fun",
            rating: 5
        },
        {
            name: "Dead Cells",
            image: "https://i.pinimg.com/736x/9a/06/c4/9a06c40cbeff77df4e57c0827c9dd804.jpg",
            platform: "Steam",
            hours: 70,
            impression: "best roguelike game ever, the gameplay is so smooth and addictive",
            rating: 4
        },
        {
            name: "Hades",
            image: "https://i.pinimg.com/736x/b7/10/29/b71029d7d28e76f40c30102c28c6fa9b.jpg",
            platform: "Steam",
            hours: 27,
            impression: "pretty good roguelike game, i want to play the sequel",
            rating: 4
        },
        {
            name: "Splendor",
            image: "https://i.pinimg.com/736x/54/47/95/544795d2f6af6c35197d82f63fd47b89.jpg",
            platform: "Steam",
            hours: 12,
            impression: "this game has become one of my all-time favorite board games. After losing twice in a row to \"someone\", I’m now ready to claim my throne back",
            rating: 4
        },
        {
            name: "Supermarket Simulator",
            image: "https://i.pinimg.com/736x/40/9b/5e/409b5e8a180bcb3b6c3fcb8ff003a888.jpg",
            platform: "Steam",
            hours: 21,
            impression: "very like this simulation game, the gameplay is very fun and addictive, i can play this game for hours",
            rating: 4
        },
        {
            name: "Valorant",
            image: "https://i.pinimg.com/1200x/39/dd/4d/39dd4da08ecccc0159d79598365e995e.jpg",
            platform: "Riot",
            hours: 790,
            impression: "the most harmful game, but if you play it with friends, it can be harmless",
            rating: 4
        },
        {
            name: "Warframe",
            image: "https://i.pinimg.com/736x/6b/de/3d/6bde3dd1efb3a7846434161e76bdc27d.jpg",
            platform: "Steam",
            hours: 598,
            impression: "during the pandemic, this game became my friend and helped me heal from something deadly",
            rating: 4
        },
    ];

    const [showCount, setShowCount] = useState(6);
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const displayedGames = isMobile ? games.slice(0, showCount) : games;

    return (
        <section className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="p-6">
                <h1 className="text-4xl text-white font-bold mb-4">Game Spot</h1>
                <p className="text-md lg:text-xl text-gray-400 mb-8">
                    Game played by <span className="font-semibold text-gray-200">Raja React</span>.
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayedGames.map((game, i) => (
                        <li
                            key={i}
                            className="bg-white/10 dark:bg-gray-800/40 rounded-xl p-3 flex flex-col items-center border-2 border-dashed border-gray-700 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                        >
                            <img src={game.image} alt={game.name} className="w-24 h-24 object-cover rounded mb-2" />
                            <span className="font-semibold text-white mb-2 text-center">{game.name}</span>
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
                {isMobile && showCount < games.length && (
                    <div className="flex justify-center mt-4">
                        <button
                            className="px-6 py-2 rounded-xl font-semibold border-2 border-gray-700 bg-white/10 dark:bg-gray-600/40 text-gray-300 hover:bg-white/20 hover:dark:bg-gray-600/60 hover:text-white transition-all duration-200"
                            onClick={() => setShowCount(showCount + 6)}
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}