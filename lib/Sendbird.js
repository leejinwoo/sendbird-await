'use strict';
const Request = require('request');
const Sprintf = require("sprintf-js").sprintf;
const Constant = require('./Constant');

class Sendbird {
    constructor(apiToken, type, appIdOrRegion = 'api', version = 'v3') {
        const subDomain = appIdOrRegion.startsWith('api') ? appIdOrRegion : `api-${appIdOrRegion}`;
        this.apiurl = `https://${subDomain}.sendbird.com/${version}/`;
        this.apiToken = apiToken;
        this.type = type;
    }

    async _request(params) {
         let reqData = {
            method: params.method || 'POST',
            headers: {
                'Api-Token': this.apiToken
            },
            url: this.apiurl + params.url
        };
        if (params.data) {
            reqData.body = JSON.stringify(params.data);
        }

        return await new Promise(function(resolve, reject) {
            let result = {
                error: null,
                data: null,
                message: null
            };
            try {
                Request(reqData, function (err, response, body) {
                    try {
                        if (err) {
                            reject(result);
                        } else {
                            let ret = null;
                            let statusCode = response ? response.statusCode : null;
                            let parseBody = body ? JSON.parse(body) : null;
                            if (response && response.statusCode !== 200) {
                                if (parseBody) {
                                    result.error = true;
                                    result.message = {
                                        code: parseBody.code,
                                        msg: parseBody.message
                                    };
                                }
                            } else if (!err && parseBody) {
                                try {
                                    ret = parseBody;
                                    if (ret.error) {
                                        result.error = ret.error;
                                        result.message = {
                                            code: ret.code,
                                            msg: ret.message
                                        };
                                    } else {
                                        result.data = ret;
                                    }
                                } catch (e) {
                                    result.error = true;
                                    result.message = {
                                        code: 9002,
                                        msg: 'System Error.'
                                    };
                                    console.error('parseBody Error');
                                    console.error(e);
                                    reject(result);
                                }
                            }
                            resolve(result);
                        }
                    } catch (e) {
                        console.error('request Error');
                        console.error(e);
                        reject(result);
                    }
                });
            } catch (e) {
                console.error('Promise reject');
                console.error(e);
                reject(result);
            }
        });
    }

    _makeParams(method, uri, uridata, params) {
        let URIs = Constant[this.type];
        let ret = {
            method: method,
            url: uridata ? Sprintf(URIs[uri], uridata) : URIs[uri]
        };

        if (uridata instanceof Object) {
            if (uridata.length === 2) {
                ret.url = Sprintf(URIs[uri], uridata[0], uridata[1]);
            } else if (uridata.length === 3) {
                ret.url = Sprintf(URIs[uri], uridata[0], uridata[1], uridata[2]);
            }
        }

        if (method !== 'GET' && params) {
            ret.data = params;
        }

        if (['GET', 'DELETE'].includes(method)) {
            let queryString = [];
            for (let p in params) {
                if (uridata instanceof Object) {
                    if (!uridata.includes(params[p])) {
                        queryString.push(p + '=' + params[p]);
                    }
                } else {
                    if (params[p] !== uridata) {
                        queryString.push(p + '=' + params[p]);
                    }
                }
            }

            if (queryString.length > 0) {
                ret.url += ('?' + queryString.join('&'));
            }
        }

        return ret;
    }
}

module.exports = Sendbird;
