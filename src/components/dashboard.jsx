import ProfileCard from './profileCard'

export default function Dashboard() {

    return (
        <div className="p-4 sm:ml-64">
            <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="flex justify-center items-center my-7" style={{ overflow: 'visible' }}>
                    <ProfileCard
                        name="Rizal Abrar Fahmi"
                        title="Raja React"
                        handle="Maeve"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="../../public/avatar.jpg"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        className="pc-card--small" 
                    />
                </div>
            </div>
        </div>
    )
}