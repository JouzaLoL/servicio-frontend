import * as $ from 'jquery';
import * as request from 'request';

class ServicioFrontend {
    private readonly APIURL: string;
    private readonly URL: {
        [index: string]: string;
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
            baseUrl: this.APIURL + this.getUserUrl()
        };
        request(this.URL.Authenticate, options, (err, res, body) => {
            if (err) {
                throw err;
            }
            console.log(res);
            return JSON.parse(body);

        });
        return new APIResponse(false, "Unknown error");
    }
    private getUserUrl(): string {
        const type: string = UserType[this.Type];
        const url: string = this.URL[type];
        return url;
    }
}

class ServicioOptions {
    public ApiUrl: string;
    public Type: UserType;
    constructor(apiUrl: string, userType: UserType) {
        this.ApiUrl = apiUrl;
        this.Type = userType;
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

export { ServicioFrontend, APIResponse, UserType,  };