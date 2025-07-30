import ProfileCard from './profileCard'
import IntroSection from './introSection'
import ProjectSection from './projectSection'

export default function Dashboard() {

    return (
        <div className="p-4 sm:ml-64">
            <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="flex flex-col md:flex-row">
                    <div className="flex justify-center items-center my-7 md:ml-7 w-full md:w-auto">
                        <ProfileCard
                            name="Rizal Abrar Fahmi"
                            title="Raja React"
                            handle="Maeve"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="/avatar.png"
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={false}
                            onContactClick={() => console.log('Contact clicked')}
                            className="pc-card--small"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center my-7">
                        <h1 className="text-4xl font-bold text-amber-50 text-center mb-4">Wassup Bro</h1>
                        <p className="text-gray-400 text-md lg:text-xl text-center md:ml-6 md:text-left p-3 ">
                            through this website i want to show u my <span className='underline text-gray-200'>grand</span> <span className='underline text-gray-200'> design</span>. which is a <span className='underline text-gray-200'>portofolio</span> and also a <span className='underline text-gray-200'>kanban</span> and also a <span className='underline text-gray-200'>notes</span> and also a <span className='underline text-gray-200'>playlist</span> and also a <span className='underline text-gray-200'>game</span> . And i want to share all my project i have done here.
                        </p>
                    </div>
                <span className='hidden lg:flex items-end justify-end text-gray-400 m-4'>look down there</span>
                </div>
            </div>
            <IntroSection />
            <ProjectSection />
        </div >
    )
}