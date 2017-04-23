import * as $ from 'jquery';
import * as request from 'request';

class ServicioFrontend {
    private readonly APIURL: string;
    private readonly URL: {
        User: "/user",
        Authenticate: "/user/authenticate",
        Register: "/user/register"

    };
    private Type: UserType;
    constructor(options: ServicioOptions) {
        this.APIURL = options.ApiUrl;
        this.Type = options.Type;
    }
    public getAPIKey(email: string, password: string): APIResponse {
        const options: request.CoreOptions = {
            baseUrl: this.APIURL + this.URL[UserType[this.Type]] + this.URL.Authenticate
        };
        
        return new APIResponse(false, "Unknown error");
    }
}

class ServicioOptions {
    public ApiUrl: string;
    public Type: UserType;
    constructor(apiUrl: string, userType: UserType) {
        this.ApiUrl = apiUrl;
        this.UserType = UserType;
    }
}

class APIResponse {
    public Message: string;
    public Success: boolean;
    constructor(success: boolean, message: string, attributes?: object) {
        this.Message = message;
        this.Success = success;
        Object.assign(this, attributes);
    }
}

enum UserType {
    User,
    Vendor
}