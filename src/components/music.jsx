export default function Music() {
    return (
        <section className="p-4 sm:ml-64 ">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/0TPQfgRLL61m33l4xqczrN?utm_source=generator"
                    width="100%"
                    height="635"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
        </section>
    )
}