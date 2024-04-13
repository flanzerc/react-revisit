import appWriteAuthService from "../external/appwrite/appWriteAuthService"

class authService {

    constructor() {
        // this.autheServiceInterface = autheServiceInterface;
    }

    async register({email, password, name}) {
        return await appWriteAuthService.register({email, password, name});
    }

    async login({email, password}) {
        return await appWriteAuthService.login({email, password})
    }

}

const authServiceObj = new authService()
export default authServiceObj