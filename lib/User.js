'use strict';

const Sendbird = require('./Sendbird');

class User extends Sendbird {
    constructor(apiToken, regionIdentifier, version) {
        super(apiToken, 'users', regionIdentifier, version);
    }

    /**
        action: Create User
        method: POST
        params: {
            user_id:            string (required)
            nickname:           string (required)
            profile_url:        string (required)
            profile_file:       file,
            issue_access_token: boolean (optional. default:false)
        }
    */
    async create(params) {
        let req = this._makeParams('POST', 'create', null, params);
        return await this._request(req);
    }

    /**
        action: List users
        method: GET
        params: {
            token:          string (AppID)
            limit:          int (default: 10)
            active_mode:    string (default: activated)
            show_bot:       boolean (default: true)
            user_ids:       string (for example, url_encoded_id_1, url_encoded_id_2)
        }
    */
    async list(params) {
        let req = this._makeParams('GET', 'list', null, params);
        return await this._request(req);
    }

    /**
        action: View the user
        method: GET
        params: {
            user_id: string
        }
    */
    async view(params) {
        let req = this._makeParams('GET', 'view', params.user_id);
        return await this._request(req);
    }

    /**
        action: Update the user
        method: PUT
        params: {
            user_id:                        string
            nickname:                       string (optional)
            profile_url:                    string (optional)
            profile_file:                   file (optional)
            issue_access_token:             boolean (optional)
            is_active:                      boolean (optional)
            leave_all_when_deactivated:     boolean (optional)
        }
    */
    async update(params) {
        let req = this._makeParams('PUT', 'update', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Delete the user
        method: DELETE
        params: {
            user_id: string
        }
    */
    async delete(params) {
        let req = this._makeParams('DELETE', 'delete', params.user_id);
        return await this._request(req);
    }

    /**
        action: Get count of unread messages
        method: GET
        params: {
            user_id:        string
            custom_types:   list (optional) (ex. ["lobby", "door"])
        }
    */
    async unreadMessageCount(params) {
        let req = this._makeParams('GET', 'unreadMessageCount', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Get count of channels with unread messages
        method: GET
        params: {
            user_id:        string
            custom_types:   list
        }
    */
    async unreadChannelCount(params) {
        let req = this._makeParams('GET', 'unreadChannelCount', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Block the user
        method: POST
        params: {
            user_id:    string
            target_id:  string
        }
    */
    async block(params) {
        let req = this._makeParams('POST', 'block', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: List block users
        method: GET
        params: {
            user_id: string
        }
    */
    async blocklist(params) {
        let req = this._makeParams('GET', 'block', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Unblock the user
        method: DELETE
        params: {
            user_id:    string
            target_id:  string
        }
    */
    async unblock(params) {
        let req = this._makeParams('DELETE', 'unblock', [params.user_id, params.target_id]);
        return await this._request(req);
    }

    /**
        action: List ban channels
        method: GET
        params: {
            user_id:    string
            token:      string
            limit:      int (default: 10)
        }
    */
    async banChannels(params) {
        let req = this._makeParams('GET', 'banChannels', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: List muted channels
        method: GET
        params: {
            user_id:    string
            token:      string
            limit:      int (default: 10)
        }
    */
    async mutedChannels(params) {
        let req = this._makeParams('GET', 'mutedChannels', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Make all messages as read
        method: PUT
        params: {
            user_id: string
        }
    */
    async allMessageRead(params) {
        let req = this._makeParams('PUT', 'allMessageRead', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: List my group channels
        method: GET
        params: {
            user_id:                    string
            token:                      string
            limit:                      int (default: 10)
            show_empty:                 boolean (default: false)
            show_member:                boolean (default: false)
            show_read_receipt:          boolean (default: false)
            distinct_mode:              string (default: all)
            order:                      string (default: chronological)
            members_exactly_in:         string (for example, url_encoded_id_1, url_encoded_id_2)
            members_nickname_contains:  string (for example, url_encoded_nickname_1, url_encoded_nickname_2)
            members_include_in:         string (for example, url_encoded_id_1, url_encoded_id_2)
            query_type:                 string (default: AND)
            custom_type:                string
            channel_urls:               string (for example, url_encoded_channel_1, url_encoded_channel_2)
            crated_after:               long
            created_before:             long

        }
    */
    async groupChannels(params) {
        let req = this._makeParams('GET', 'groupChannels', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Register a device token
        method: POST
        params: {
            user_id:            string
            token_type:         string (ex. gcm, apns)
            gcm_reg_token:      string
            apns_device_token:  string
        }
    */
    async registerPushToken(params) {
        let req = this._makeParams('POST', 'registerPushToken', [params.user_id, params.token_type], params);
        return await this._request(req);
    }

    /**
        action: Unregister a device token
        method: DELETE
        params: {
            user_id:            string
            token_type:         string (ex. gcm, apns)
            token:              string
            isAll:              boolean
        }
    */
    async unregisterPushToken(params) {
        let req = null;
        if (params.isAll) {
            req = this._makeParams('DELETE', 'unregisterPushTokenAll', params.user_id, params);
        } else {
            req = this._makeParams('DELETE', 'unregisterPushToken', [params.user_id, params.token_type, params.token]);
        }
        return await this._request(req);
    }

    /**
        action: List device tokens
        method: GET
        params: {
            user_id:    string
            token_type: string
        }
    */
    async deviceTokens(params) {
        let req = this._makeParams('GET', 'deviceTokens', [params.user_id, params.token_type]);
        return await this._request(req);
    }

    /**
        action: Update push preferences
        method: PUT
        params: {
            user_id:        string
            do_not_disturb: boolean (optional)
            start_hour:     int (optional)
            start_min:      int (optional)
            end_hour:       int (optional)
            end_min:        int (optional)
            timezone:       string (optional ex. UTC, Aisa/Seoul, Europe/London, America/Los_Angeles)
        }
    */
    async updatePushPreferences(params) {
        let req = this._makeParams('PUT', 'pushPreferences', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Get push preferences
        method: GET
        params: {
            user_id: string
        }
    */
    async pushPreferences(params) {
        let req = this._makeParams('GET', 'pushPreferences', params.user_id);
        return await this._request(req);
    }

    /**
        action: Reset push preferences
        method: DELETE
        params: {
            user_id: string
        }
    */
    async deletePushPreferences(params) {
        let req = this._makeParams('DELETE', 'pushPreferences', params.user_id);
        return await this._request(req);
    }

    /**
        action: Update channel push preferences
        method: PUT
        params: {
            user_id:        string
            channel_url:    string
            enable:         boolean
        }
    */
    async updateChannelPushPreferences(params) {
        let req = this._makeParams('PUT', 'channelPushPreperences', [params.user_id, params.channel_url], params);
        return await this._request(req);
    }

    /**
        action: Get channel push preferences
        method: GET
        params: {
            user_id:        string
            channel_url:    string
        }
    */
    async channelPushPreferences(params) {
        let req = this._makeParams('GET', 'channelPushPreperences', [params.user_id, params.channel_url]);
        return await this._request(req);
    }

    /**
        action: Create a user metadata
        method: POST
        params: {
            user_id:    string
            metadata:   nested object (key: 128 bytes, value: 190 bytes)
        }
    */
    async createMetadata(params) {
        let req = this._makeParams('POST', 'metadata', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: List a user metadata
        method: GET
        params: {
            user_id:    string
            keys:       string (key1, key2, ..)
        }
    */
    async metadata(params) {
        let req = this._makeParams('GET', 'metadata', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: View a user metadata
        method: GET
        params: {
            user_id:    string
            key_name:   string
        }
    */
    async viewMetadata(params) {
        let req = this._makeParams('GET', 'metadataAction', [params.user_id, params.key_name]);
        return await this._request(req);
    }

    /**
        action: Update the user metadata
        method: PUT
        params: {
            user_id:    string
            metadata:   nested object
            upsert:     boolean (default: false)
        }
    */
    async updateMetadata(params) {
        let req = this._makeParams('PUT', 'metadata', params.user_id, params);
        return await this._request(req);
    }

    /**
        action: Delete the user metadata
        method: DELETE
        params: {
            user_id:    string
            key_name:   string (optional)
        }
    */
    async deleteMetadata(params) {
        let req = null;
        if (params.key_name) {
            req = this._makeParams('DELETE', 'metadataAction', [params.user_id, params.key_name]);
        } else {
            req = this._makeParams('DELETE', 'metadata', params.user_id);
        }
        return await this._request(req);
    }
}

module.exports = User;
