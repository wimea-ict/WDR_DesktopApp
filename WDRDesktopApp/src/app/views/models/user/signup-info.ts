export class SignUpInfo {
    id: number;
    email: string;
    roles: string[];
    password: string;
    FirstName: string;
    SurName: string;

    constructor(id: number,  FirstName: string,SurName: string, email: string, password: string, roles: string) {
        this.id = id;
        this.FirstName = FirstName;
        this.SurName = SurName;
        this.email = email;
        this.password = password;
        this.roles = [roles];
    }

    
}
