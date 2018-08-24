# sendbird-await
Sendbird await module for Platform API

## Requirements
    node v8.4.0 Higher

## Installation
    npm install sendbird-await --save

## Usage
See [Sendbird Documentation](https://docs.sendbird.com/platform) for payload and response details.
You must provide your `API Token` when creating a new instance of `Sendbird` and it will be attached to all requests.

```javascript
const SendbirdAwait = require('sendbird-await');
let Sendbird = new SendbirdAwait(/* sendbird api token here */);
```

The `Sendbird` instance we just created has an entry for each endpoint in the [Sendbird Platform API](https://docs.sendbird.com/platform), it is an object with the endpoints methods.

[Sendbird.user](https://docs.sendbird.com/platform#user)
[Sendbird.openchannel](https://docs.sendbird.com/platform#open_channel)
[Sendbird.groupchannel](https://docs.sendbird.com/platform#group_channel)
[Sendbird.message](https://docs.sendbird.com/platform/messages)
[Sendbird.metadata](https://docs.sendbird.com/platform/channel_metadata)


### Example

To create a user you would simply need to have something like this:
```javascript
'use strict';

const SendbirdAwait = require('sendbird-await');
let Sendbird = new SendbirdAwait('<YOUR API TOKEN>');

class Test {
    async userList() {
        let users = await Sendbird.user.list();
        return users;
    }

    async userCreate() {
        let params = {
            user_id: 'nexus11',
            nickname: 'sendbirdFirstUser',
            profile_url: 'https://yourimages.location.url'
        };
        let user = await Sendbird.user.create(params);
        return user;
    }

    async createOpenChannel() {
        let params = {
            name: 'FirstOpenChannel'
        };
        let openChannel = await Sendbird.openchannel.create(params);
        return openChannel;
    }

    async createGroupChannel() {
        let params = {
            name: 'FirstGroupChannel',
            is_public: true
        };
        let groupChannel = await Sendbird.groupchannel.create(params);
        return groupChannel;
    }
    async sendMessage() {
        let params = {
            channel_type: 'group_channels',
            channel_url: '<Sendbird group channel name>' // ex) sendbird_group_channel_123456789_ABCDEFGHIJKLMNOPQRSTUVWXYZ,
            user_id: 'nexus11',
            message: 'Hi, First messgae!',
            message_type: 'MESG' //MESG, FILE, ADMM
        };
        let msg = await Sendbird.message.send(params);
        return msg;
    }
}

module.exports = new Test();

[test for NodeJS CLI]
$> node -e 'require("./Test").createOpenChannel()'
```

