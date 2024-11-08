import UserInfo from "./UserInfo";

function ProfilePage ({ userData }) {
    const userData = useContext(UserContext);
    
    return <UserInfo userData={userData} />;
}

export default ProfilePage;