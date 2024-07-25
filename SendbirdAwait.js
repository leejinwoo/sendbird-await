'use strict';

const User = require('./lib/User');
const GroupChannel = require('./lib/GroupChannel');
const OpenChannel = require('./lib/OpenChannel');
const Message = require('./lib/Message');
const Metadata = require('./lib/Metadata');

class SendbirdAwait {
    constructor(apiToken, appIdOrRegion = 'api', version = 'v3') {
        this.user =         new User(apiToken, appIdOrRegion, version);
        this.message =      new Message(apiToken, appIdOrRegion, version);
        this.groupchannel = new GroupChannel(apiToken, appIdOrRegion, version);
        this.openchannel =  new OpenChannel(apiToken, appIdOrRegion, version);
        this.metadata =     new Metadata(apiToken, appIdOrRegion, version);
    }
}

module.exports = SendbirdAwait;
