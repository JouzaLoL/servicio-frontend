import * as request from 'request';
class ServicioFrontend {
    constructor(options) {
        this.APIURL = options.ApiUrl;
        this.Type = options.Type;
    }
    getAPIKey(email, password) {
        const options = {
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
    getUserUrl() {
        const type = UserType[this.Type];
        const url = this.URL[type];
        return url;
    }
}
class ServicioOptions {
    constructor(apiUrl, userType) {
        this.ApiUrl = apiUrl;
        this.Type = userType;
    }
}
class APIResponse {
    constructor(success, message, attributes) {
        this.Message = message;
        this.Success = success;
        Object.assign(this, attributes);
    }
}
var UserType;
(function (UserType) {
    UserType[UserType["User"] = 0] = "User";
    UserType[UserType["Vendor"] = 1] = "Vendor";
})(UserType || (UserType = {}));
export { ServicioFrontend, APIResponse, UserType, };
