'use strict';

const Sendbird = require('./Sendbird');

class Metadata extends Sendbird {
    constructor(apiToken, appIdOrRegion, version) {
        super(apiToken, 'metadata', appIdOrRegion, version);
    }

    /**
        action: Create a channel metadata
        method: POST
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            metadata:       nested object (key: 128 bytes, value: 190 bytes)
        }
    */
    async create(params) {
        let req = this._makeParams('POST', 'metadata', [params.channel_type, params.channel_url], params);
        return await this._request(req);
    }

    /**
        action: View the channel metadata
        method: GET
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            key_name:       string
        }
    */
    async view(params) {
        let req = null;
        if (params.key_name) {
            req = this._makeParams('GET', 'metadataAction', [params.channel_type, params.channel_url, params.key_name]);
        } else {
            req = this._makeParams('GET', 'metadata', [params.channel_type, params.channel_url]);
        }
        return await this._request(req);
    }

    /**
        action: Update the channel metadata
        method: PUT
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            metadata:       nested object
            key_name:       string (optional)
            upsert:         boolean (default: false)
        }
    */
    async update(params) {
        let req = null;
        if (params.key_name) {
            req = this._makeParams('PUT', 'metadataAction', [params.channel_type, params.channel_url, params.key_name]);
        } else {
            req = this._makeParams('PUT', 'metadata', [params.channel_type, params.channel_url]);
        }
        return await this._request(req);
    }

    /**
        action: Delete the channel metadata
        method: DELETE
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            metadata:       nested object
            key_name:       string (optional)
        }
    */
    async delete(params) {
        let req = null;
        if (params.key_name) {
            req = this._makeParams('DELETE', 'metadataAction', [params.channel_type, params.channel_url, params.key_name]);
        } else {
            req = this._makeParams('DELETE', 'metadata', [params.channel_type, params.channel_url]);
        }
        return await this._request(req);
    }

    /**
        action: Create a channel metacounter
        method: POST
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            metacounter:    nested object
        }
    */
    async createCounter(params) {
        let req = this._makeParams('POST', 'metacounter', [params.channel_type, params.channel_url], params);
        return await this._request(req);
    }

    /**
        action: View the channel metacounter
        method: GET
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            key_name:       string (optional)
            keys:           string (optional. ex. keys=key1,key2,key3,...)
        }
    */
    async viewCounter(params) {
        let req = null;
        if (params.key_name) {
            req = this._makeParams('GET', 'metacounterAction', [params.channel_type, params.channel_url, params.key_name]);
        } else {
            req = this._makeParams('GET', 'metacounter', [params.channel_type, params.channel_url]);
        }
        return await this._request(req);
    }

    /**
        action: Update the channel metacounter
        method: PUT
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            metacounter:    nested object
            mode:           string (optional. [increase, decrease, set] default: set)
            upsert:         boolean (default: false)
            key_name:       string (optional)
        }
    */
    async updateCounter(params) {
        let req = null;
        if (params.key_name) {
            req = this._makeParams('PUT', 'metacounterAction', [params.channel_type, params.channel_url, params.key_name]);
        } else {
            req = this._makeParams('PUT', 'metacounter', [params.channel_type, params.channel_url]);
        }
        return await this._request(req);
    }

    /**
        action: Delete the channel metacounter
        method: DELETE
        params: {
            channel_type:   string (group_channels, open_channels)
            channel_url:    string
            key_name:       string (optional)
        }
    */
    async deleteCounter(params) {
        let req = null;
        if (params.key_name) {
            req = this._makeParams('DELETE', 'metacounterAction', [params.channel_type, params.channel_url, params.key_name]);
        } else {
            req = this._makeParams('DELETE', 'metacounter', [params.channel_type, params.channel_url]);
        }
        return await this._request(req);
    }
}

module.exports = Metadata;
