import appWriteAuthService from "../external/appwrite/appWriteAuthService"

class authService {

    constructor() {
        // this.autheServiceInterface = autheServiceInterface;
    }
    
    

    async register({email, password, name}) {
        return await appWriteAuthService.register({email, password, name});
    }

    async login({email, password}) {
        try {
            return await appWriteAuthService.login({email, password})
            
        } catch (error) {
            // console.log('Error from authService>>', {error});
            // return this.parseErrorMessage(error);
            // console.log('authservice catch block:' , error.response.message)
            throw error;
        }
    }

    async logout() {
        try {
            return await appWriteAuthService.logout();
        } catch (error) {
            throw error;
        }
    }

    async getCurrentLoggedInUserData() {
        try {
            return await appWriteAuthService.getCurrentUser();
        } catch (error) {
            throw error;
        }
    }


    parseErrorMessage(errorText){
        const text = JSON.stringify(errorText)
        const startIndx = text.indexOf('AppwriteException:');
        
        if(startIndx !== -1) {
            const endIndx = text.indexOf('at client')
            const errormsg = text.substring(startIndx + 'AppwriteException:'.length, endIndx).trim()
            return errormsg
        }

        return 'Unable to parse the error:' + text;
    }


}

const authServiceObj = new authService()
export default authServiceObj