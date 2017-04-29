import * as $ from 'jquery';
import * as request from 'request';

class ServicioFrontend {
    private readonly APIURL: string;
    private readonly URL: {
        [index: string]: string
    };
    private Type: UserType;
    constructor(options: ServicioOptions) {
        this.APIURL = options.ApiUrl;
        this.Type = options.Type;
        this.URL = {
            authenticate: "/authenticate",
            register: "/register",
        };
    }
    public getAPIKey(email: string, password: string): APIResponse {
        const options: request.CoreOptions = {
            baseUrl: this.APIURL + this.getUserUrl(),
            method: "GET",
            json: true,
            body: { email, password }

        };
        request(this.url('authenticate'), options, (err, res, body) => {
            if (err) {
                throw err;
            }
            console.log(res);
            return JSON.parse(body);

        });
        return new APIResponse(false, "Unknown error");
    }
    private getUserUrl(): string {
        switch (this.Type) {
            case UserType.User:
                return '/user';
            case UserType.Vendor:
                return '/vendor';
        }
    }
    private url(path: string): string {
        const url = this.URL[path];
        if (!url) {
            throw Error('API Url not found');
        }
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

export { ServicioFrontend, UserType, };