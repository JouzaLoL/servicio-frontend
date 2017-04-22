import * as $ from 'jquery';

class ServicioFrontend {
    private readonly APIURL: String;
    constructor(options: ServicioOptions) {
        this.APIURL = options.ApiUrl;
    }
    public getAPIKey(email: String, password: String): APIResponse {

        return new APIResponse(false, "Unknown error");
    }
}

class ServicioOptions {
    ApiUrl: String;

}

class APIResponse {
    public Message: String;
    public Success: Boolean;
    constructor(success: Boolean, message: String, attributes?: Object) {
        this.Message = message;
        this.Success = success;
        Object.assign(this, attributes);
    }
}