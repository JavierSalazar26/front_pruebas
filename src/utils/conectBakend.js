const configuration = require('../routes/Config');

const debug = configuration.debugMode;
const abortController = new AbortController();

class APIInvoker {

    getAPIHeader() {
        return {
            'Content-Type': 'application/json',
            'x-api-key': 'glfY312n9q5EHyMujh8OwBaWs4VNcStG',
        }
    }

    invokeGET(url, okCallback, failCallback) {
        const params = {
            method: 'get',
            headers: this.getAPIHeader()
        };
        this.invoke(url, okCallback, failCallback, params);
    }

    invokePOST(url, body, okCallback, failCallback) {
        const header = {...this.getAPIHeader()}
        const params = {
            method: 'post',
            headers: header,
            body: JSON.stringify(body)
        }
        this.invoke(url, okCallback, failCallback, params);
    }

    invokePUT(url, body, okCallback, failCallback) {
        const params = {
            method: 'put',
            headers: this.getAPIHeader(),
            body: JSON.stringify(body)
        }
        this.invoke(url, okCallback, failCallback, params);
    }

    invokePATCH(url, body, okCallback, failCallback) {
        const params = {
            method: 'patch',
            headers: this.getAPIHeader(),
            body: JSON.stringify(body)
        }
        this.invoke(url, okCallback, failCallback, params);
    }

    invokeDELETE(url, body, okCallback, failCallback) {
        const header = {...this.getAPIHeader()}
        const params = {
            method: 'delete',
            headers: header,
            body: JSON.stringify(body)
        }
        this.invoke(url, okCallback, failCallback, params);
    }

    invoke(url, okCallback, failCallback, params) {
        if(debug) {
            console.log(`Invoke => ${params.method}:${url}`);
            console.log(params.body);
        }

        fetch(`${configuration.api.host}${url}`, params, { signal: abortController.signal })
        .then((response) => response.json())
        .then((responseJson) => {
            if (debug) console.log('Invoke Response => ', JSON.stringify(responseJson));
            return responseJson;
        })
        .then((responseData) => {
            if (debug) console.log('Invoke Response => ', JSON.stringify(responseData));
            okCallback(responseData);
        });
    }
}
export default new APIInvoker();