'use strict';

const Sendbird = require('./Sendbird');

class Message extends Sendbird {
    constructor(apiToken, appIdOrRegion, version) {
        super(apiToken, 'messages', appIdOrRegion, version);
    }

    /**
        action: Send a message
        method: POST
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
            message_type:   string (MESG, FILE, ADMM)
            user_id:        string
            message:        string
            custom_type:    string (optional)
            data:           string (optional)
            make_as_read:   boolean (default: true)
        }
    */
    async send(params) {
        let req = this._makeParams('POST', 'send', [params.channel_type, params.channel_url], params);
        return await this._request(req);
    }

    /**
        action: List messages
        method: GET
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
            message_ts:     long (UINX milliseconds)
            prev_limit:     int (optional. default: 15, range: 0 ~ 200)
            next_limit:     int (optional. default: 15, range: 0 ~ 200)
            include:        boolean (default: true)
            reverse:        boolean (default: false)
            custom_type:    string (optional)
            message_type:   string (optional. MESG, FILE, ADMM)
            sender_id:      string (optional)
        }
    */
    async list(params) {
        let req = this._makeParams('GET', 'list', [params.channel_type, params.channel_url], params);
        return await this._request(req);
    }

    /**
        action: View the message
        method: GET
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
            message_id:     long
        }
    */
    async view(params) {
        let req = this._makeParams('GET', 'messageAction', [params.channel_type, params.channel_url, params.message_id]);
        return await this._request(req);
    }

    /**
        action: Edit the message
        method: PUT
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
            message_id:     long
            message_type:   string (MSEG, FILE, ADMM)
            message:        string
            custom_type:    string (optional)
            data:           string (optional)
        }
    */
    async edit(params) {
        let req = this._makeParams('PUT', 'messageAction', [params.channel_type, params.channel_url, params.message_id], params);
        return await this._request(req);
    }

    /**
        action: Delete the message
        method: DELETE
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
            message_id:     long
        }
    */
    async delete(params) {
        let req = this._makeParams('PUT', 'messageAction', [params.channel_type, params.channel_url, params.message_id]);
        return await this._request(req);
    }

    /**
        action: Mark messages as read
        method: PUT
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
            user_id:        string
        }
    */

    async asRead(params) {
        let req = this._makeParams('PUT', 'asRead', [params.channel_type, params.channel_url], params);
        return await this._request(req);
    }

    /**
        action: Get total message count
        method: GET
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
        }
    */
    async totalCount(params) {
        let req = this._makeParams('GET', 'totalCount', [params.channel_type, params.channel_url]);
        return await this._request(req);
    }

    /**
        action: Get unread message count
        method: GET
        params: {
            channel_type:   string (open_channels, group_channels)
            channel_url:    string
            user_ids:       string (ex. user_ids=user_id1,user_id2)
        }
    */
    async unreadCount(params) {
        let req = this._makeParams('GET', 'unreadCount', [params.channel_type, params.channel_url], params);
        return await this._request(req);
    }

    /**
        action: Add metadata
        method: POST
        params: {
            channel_type:       string (open_channels, group_channels)
            channel_url:        string
            message_id:         long
            sorted_metaarray:   array of objects
        }
    */
    async addMetadata(params) {
        let req = this._makeParams('POST', 'sortedMetaAction', [params.channel_type, params.channel_url, params.message_id], params);
        return await this._request(req);
    }

    /**
        action: Update metadata
        method: PUT
        params: {
            channel_type:       string (open_channels, group_channels)
            channel_url:        string
            message_id:         long
            sorted_metaarray:   array of objects
            mode:               string (add, remove)
            upsert:             boolean
        }
    */
    async updateMetadata(params) {
        let req = this._makeParams('PUT', 'sortedMetaAction', [params.channel_type, params.channel_url, params.message_id], params);
        return await this._request(req);
    }

    /**
        action: Remove metadata
        method: DELETE
        params: {
            channel_type:       string (open_channels, group_channels)
            channel_url:        string
            message_id:         long
            keys:               string (?keys=places,beverages)
        }
    */
    async removeMetadata(params) {
        let req = this._makeParams('DELETE', 'sortedMetaAction', [params.channel_type, params.channel_url, params.message_id], params);
        return await this._request(req);
    }
}

module.exports = Message;
