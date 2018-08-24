'use strict';

const User = require('./lib/User');
const GroupChannel = require('./lib/GroupChannel');
const OpenChannel = require('./lib/OpenChannel');
const Message = require('./lib/Message');
const Metadata = require('./lib/Metadata');

class SendbirdAwait {
    constructor(apiToken) {
        this.user =         new User(apiToken);
        this.message =      new Message(apiToken);
        this.groupchannel = new GroupChannel(apiToken);
        this.openchannel =  new OpenChannel(apiToken);
        this.metadata =     new Metadata(apiToken);
    }
}

module.exports = SendbirdAwait;
