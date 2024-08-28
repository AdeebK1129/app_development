// respository.model.ts file is used to set up all the elements needed to set up the form

import { User } from "./user.model";
import { Datasource } from "./datasource.model";

export class User_Repository{
    private datasource: Datasource
    private users: User[]

    constructor() {
        this.datasource = new Datasource()
        this.users = new Array<User>
        this.datasource.getUser().forEach(u => this.users.push(u))
    }

    // getters
    getUser():User[]{
        return this.users
    }

    getUserID(id:number):any{
        return this.users.find(u => u.id == id)
    }

    // setters
    addUser(user:User){
        this.users.push(user)
    }
}