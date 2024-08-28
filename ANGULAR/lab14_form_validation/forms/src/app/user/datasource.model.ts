// this file is used to save each user's information in an array
import { User } from "./user.model";

export class Datasource{
    private users:User[]

    // consturct an array with different users
    constructor() {
        this.users = new Array<User>(
            new User(1, 'Prof. Wu', 'hwu@qcc.cuny.edu'),
            new User(2, 'Prof. Smith', 'msmith@qcc.cuny.edu'),
        )
    }

    // define a getUser() method to return the array 'users'
    getUser():User[]{
        return this.users
    }
}