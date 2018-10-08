'use strict';

const User = require('./lib/User');
const GroupChannel = require('./lib/GroupChannel');
const OpenChannel = require('./lib/OpenChannel');
const Message = require('./lib/Message');
const Metadata = require('./lib/Metadata');

class SendbirdAwait {
    constructor(apiToken, regionIdentifier = 'api', version = 'v3') {
        this.user =         new User(apiToken, regionIdentifier, version);
        this.message =      new Message(apiToken, regionIdentifier, version);
        this.groupchannel = new GroupChannel(apiToken, regionIdentifier, version);
        this.openchannel =  new OpenChannel(apiToken, regionIdentifier, version);
        this.metadata =     new Metadata(apiToken, regionIdentifier, version);
    }
}

module.exports = SendbirdAwait;
