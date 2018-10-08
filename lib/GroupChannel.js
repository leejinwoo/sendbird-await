'use strict';

const Sendbird = require('./Sendbird');

class GroupChannel extends Sendbird {
    constructor(apiToken, regionIdentifier, version) {
        super(apiToken, 'group_channels', regionIdentifier, version);
    }

    /**
        action: Create channel
        method: POST
        params: {
            name:           string (optional)
            cover_url:      string (optional)
            cover_file:     file (optional)
            custom_type:    string (optional)
            data:           string (optional)
            user_ids[]:     list (optional)
            operator_ids[]: list (optional)
            is_distinct:    boolean (default: false)
            is_public:      boolean (default: false)
            is_ephemeral:   boolean (default: false)
        }
    */
    async create(params) {
        let req = this._makeParams('POST', 'create', null, params);
        return await this._request(req);
    }

    /**
        action: List channels
        method: GET
        params: {
            token:                      string (AppID)
            limit:                      int (default: 10)
            show_member:                boolean (default: false)
            show_read_receipt:          boolean (default: false)
            distinct_mode:              string (default: all)
            public_mode:                string (default: all)
            members_exactly_in:         string (for example, url_encoded_id_1, url_encoded_id_2)
            members_include_in:         string (for example, url_encoded_id_1, url_encoded_id_2)
            members_nickname_contains:  string (for example, url_encoded_nickname_1,url_encoded_nickname_2)
            query_type:                 string (default: AND)
            custom_type:                string
            channel_urls:               string (for example, url_encoded_channel_1, url_encoded_channel_2)
            created_after:              long (UNIX second)
            created_before:             long (UNIX second)
        }
    */
    async list(params) {
        let req = this._makeParams('GET', 'list', null, params);
        return await this._request(req);
    }

    /**
        action: Update the channel
        method: PUT
        params: {
            channel_url:    string (required)
            name:           string (optional)
            cover_url:      string (optional)
            cover_file:     file (optional)
            custom_type:    string (optional)
            data:           string (optional)
            user_ids[]:     list (optional)
            operator_ids[]: list (optional)
            is_distinct:    boolean (default: false)
            is_public:      boolean (default: false)
            is_ephemeral:   boolean (default: false)
        }
    */
    async update(params) {
        let req = this._makeParams('PUT', 'update', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: View the channel
        method: GET
        params: {
            channel_url:        string (required)
            show_read_receipt:  boolean (default: false)
            show_memher:        boolean (default: false)
        }
    */
    async view(params) {
        let req = this._makeParams('GET', 'view', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Delete the channel
        method: DELETE
        params: {
            channel_url: string (required)
        }
    */
    async delete(params) {
        let req = this._makeParams('DELETE', 'delete', params.channel_url);
        return await this._request(req);
    }

    /**
        action: List members
        method: GET
        params: {
            channel_url:    string (required)
            token:          string
            limit:          int (default: 10)
        }
    */
    async listMembers(params) {
        let req = this._makeParams('GET', 'listMembers', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Check if member
        method: GET
        params: {
            channel_url:    string (required)
            user_id:        string (required)
        }
    */
    async checkIfMember(params) {
        let req = this._makeParams('GET', 'checkIfMember', [params.channel_url, params.user_id]);
        return await this._request(req);
    }

    /**
        action: Invite members
        method: POST
        params: {
            channel_url:    string (required)
            user_ids[]:     list
        }
    */
    async inviteMembers(params) {
        let req = this._makeParams('POST', 'inviteMembers', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Hide the channel
        method: PUT
        params: {
            channel_url:            string (required)
            user_id:                string (required)
            hide_previous_messages: boolean (default: false)
        }
    */
    async hide(params) {
        let req = this._makeParams('PUT', 'hide', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Join the channel
        method: PUT
        params: {
            channel_url:    string (required)
            user_id:        string (required)
        }
    */
    async join(params) {
        let req = this._makeParams('PUT', 'join', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Leave the channel
        method: PUT
        params: {
            channel_url:    string (required)
            user_ids:       list
        }
    */
    async leave(params) {
        let req = this._makeParams('PUT', 'leave', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Freeze the channel
        method: PUT
        params: {
            channel_url: string (required)
            freeze: boolean
        }
    */
    async freeze(params) {
        let req = this._makeParams('PUT', 'freeze', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Add operators
        method: POST
        params: {
            channel_url: string (required)
            operator_ids[]: list
        }
    */
    async addOperators(params) {
        let req = this._makeParams('POST', 'operators', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: List operators
        method: GET
        params: {
            channel_url:    string (required)
            token:          string
            limit:          int (default: 10)
        }
    */
    async operators(params) {
        let req = this._makeParams('GET', 'operators', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Remove operators
        method: POST
        params: {
            channel_url:    string (required)
            operator_ids[]: list
        }
    */
    async removeOperators(params) {
        let req = this._makeParams('DELETE', 'operators', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Ban the user
        method: POST
        params: {
            channel_url:    string (required)
            user_id:        string (required)
            seconds:        int (optional. default: -1(10years))
            description:    string (optional. limit 250bytes)
        }
    */
    async ban(params) {
        let req = this._makeParams('POST', 'ban', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: List banned users
        method: GET
        params: {
            channel_url: string (required)
        }
    */
    async banList(params) {
        let req = this._makeParams('GET', 'ban', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: Update the ban
        method: PUT
        params: {
            channel_url:    string (required)
            banned_user_id: string
            seconds:        int (if set to -1, 10years)
            description:    string (optional)
        }
    */
    async updateBan(params) {
        let req = this._makeParams('PUT', 'banAction', [params.channel_url, params.banned_user_id], params);
        return await this._request(req);
    }

    /**
        action: View the ban
        method: GET
        params: {
            channel_url:    string (required)
            banned_user_id: string
        }
    */
    async viewBan(params) {
        let req = this._makeParams('GET', 'banAction', [params.channel_url, params.banned_user_id], params);
        return await this._request(req);
    }

    /**
        action: Unban to user
        method: DELETE
        params: {
            channel_url:    string (required)
            banned_user_id: string
        }
    */
    async unban(params) {
        let req = this._makeParams('DELETE', 'banAction', [params.channel_url, params.banned_user_id], params);
        return await this._request(req);
    }

    /**
        action: Mute the user
        method: POST
        params: {
            channel_url:    string (required)
            user_id:        string
        }
    */
    async muteUser(params) {
        let req = this._makeParams('POST', 'muteUser', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: List muted users
        method: GET
        params: {
            channel_url: string (required)
        }
    */
    async mutedList(params) {
        let req = this._makeParams('GET', 'muteUser', params.channel_url, params);
        return await this._request(req);
    }

    /**
        action: View the mute
        method: GET
        params: {
            channel_url:    string (required)
            muted_user_id:  string
        }
    */
    async viewMuteUser(params) {
        let req = this._makeParams('GET', 'muteAction', [params.channel_url, params.muted_user_id], params);
        return await this._request(req);
    }

    /**
        action: Unmute the user
        method: DELETE
        params: {
            channel_url:    string (required)
            muted_user_id:  string
        }
    */
    async unmuteUser(params) {
        let req = this._makeParams('DELETE', 'muteAction', [params.channel_url, params.muted_user_id], params);
        return await this._request(req);
    }
}

module.exports = GroupChannel;
