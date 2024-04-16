import siteconfig from "../../config/siteconfig";
import {Account, Client, ID} from "appwrite"


export class AppWriteAuthService {

    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(siteconfig.appwriteUrl)
            .setProject(siteconfig.appwriteProjectId)

        this.account = new Account(this.client);
    }

    async register({email, password, name}){
        
        try {
            const newuser = await this.account.create(ID.unique(), email, password, name)
            console.log('appwrAuthServ.inside register try: ' , newuser);
            if(newuser) {
                console.log('new user has been created', newuser)
                // do the next step
                return newuser;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        console.log('AppWrAuthService:login', password)
        try {
            const loggeduser = await this.account.createEmailSession(email, password)
            if(loggeduser) {
                console.log('Login success for user: ', loggeduser)
                return loggeduser;
            }
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }





}

const appWriteAuthService = new AppWriteAuthService();
export default appWriteAuthService