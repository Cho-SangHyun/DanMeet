import { getDatabase, ref, set, onValue } from "firebase/database";

class Database{
    constructor(){
        this.database = getDatabase();
    }

    async storeUserInfo(userId, nickname, classOf, major){
        await set(ref(this.database, 'users/' + userId), {
            nickname,
            classOf,
            major
        });
    }

    getUserInfo(userId, setUserInfo){
        const Ref = ref(this.database, 'users/' + userId);
        onValue(Ref, (snapshot) => {
            const data = snapshot.val();
            setUserInfo(data);
        });
    }
}

export default Database;
