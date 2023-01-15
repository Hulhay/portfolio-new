const ProfileCardComponent = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-1/2">
                <img src="https://res.cloudinary.com/dalcly76v/image/upload/v1665909168/me-bw_jyibs2.webp" alt="profile" />
            </div>
            <div className="text-white text-base flex flex-col items-center py-6">
                <p className="font-bold text-xl">Syifa A Prasetyo</p>
                <p>Kab. Sleman</p>
                <p>Daerah Istimewa Yogyakarta</p>
            </div>
        </div>
    )
}

export default ProfileCardComponent