import { getDatabase, ref, set } from "firebase/database";

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
}

export default Database;
