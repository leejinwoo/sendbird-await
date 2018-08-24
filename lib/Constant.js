'use strict';
const USERS_PREFIX = 'users';
const MESSAGES_PREFIX = 'messages';
const OPENCHANNEL_PREFIX = 'open_channels';
const GROUPCHANNEL_PREFIX = 'group_channels';

const USERS = {
    create:                 USERS_PREFIX,
    list:                   USERS_PREFIX,
    view:                   USERS_PREFIX + '/%s',
    update:                 USERS_PREFIX + '/%s',
    delete:                 USERS_PREFIX + '/%s',
    unreadMessageCount:     USERS_PREFIX + '/%s/unread_message_count',
    unreadChannelCount:     USERS_PREFIX + '/%s/unread_channel_count',
    block:                  USERS_PREFIX + '/%s/block',
    unblock:                USERS_PREFIX + '/%s/block/%s',
    banChannels:            USERS_PREFIX + '/%s/ban',
    mutedChannels:          USERS_PREFIX + '/%s/mute',
    allMessageRead:         USERS_PREFIX + '/%s/mark_as_read_all',
    groupChannels:          USERS_PREFIX + '/%s/my_group_channels',
    registerPushToken:      USERS_PREFIX + '/%s/push/%s',
    unregisterPushToken:    USERS_PREFIX + '/%s/push/%s/%s',
    unregisterPushTokenAll: USERS_PREFIX + '/%s/push',
    deviceTokens:           USERS_PREFIX + '/%s/push/%s',
    pushPreferences:        USERS_PREFIX + '/%s/push_preference',
    channelPushPreperences: USERS_PREFIX + '/%s/push_preference/%s',
    metadata:               USERS_PREFIX + '/%s/metadata',
    metadataAction:         USERS_PREFIX + '/%s/metadata/%s'
};

const MESSAGES = {
    send:           '%s/%s/' + MESSAGES_PREFIX,
    list:           '%s/%s/' + MESSAGES_PREFIX,
    messageAction:  '%s/%s/' + MESSAGES_PREFIX + '/%s',
    asRead:         '%s/%s/' + MESSAGES_PREFIX + '/mark_as_read',
    totalCount:     '%s/%s/' + MESSAGES_PREFIX + '/total_count',
    unreadCount:    '%s/%s/' + MESSAGES_PREFIX + '/unread_count',
};

const OPEN_CHANNELS = {
    create:             OPENCHANNEL_PREFIX,
    list:               OPENCHANNEL_PREFIX,
    update:             OPENCHANNEL_PREFIX + '/%s',
    view:               OPENCHANNEL_PREFIX + '/%s',
    delete:             OPENCHANNEL_PREFIX + '/%s',
    listParticipants:   OPENCHANNEL_PREFIX + '/%s/participants',
    freeze:             OPENCHANNEL_PREFIX + '/%s/freeze',
    ban:                OPENCHANNEL_PREFIX + '/%s/ban',
    banAction:          OPENCHANNEL_PREFIX + '/%s/ban/%s',
    muteUser:           OPENCHANNEL_PREFIX + '/%s/mute',
    muteAction:         OPENCHANNEL_PREFIX + '/%s/mute/%s'
};

const GROUP_CHANNELS = {
    create:         GROUPCHANNEL_PREFIX,
    list:           GROUPCHANNEL_PREFIX,
    update:         GROUPCHANNEL_PREFIX + '/%s',
    view:           GROUPCHANNEL_PREFIX + '/%s',
    delete:         GROUPCHANNEL_PREFIX + '/%s',
    listMembers:    GROUPCHANNEL_PREFIX + '/%s/members',
    checkIfMember:  GROUPCHANNEL_PREFIX + '/%s/members/%s',
    inviteMembers:  GROUPCHANNEL_PREFIX + '/%s/invite',
    hide:           GROUPCHANNEL_PREFIX + '/%s/hide',
    join:           GROUPCHANNEL_PREFIX + '/%s/join',
    leave:          GROUPCHANNEL_PREFIX + '/%s/leave',
    freeze:         GROUPCHANNEL_PREFIX + '/%s/freeze',
    operators:      GROUPCHANNEL_PREFIX + '/%s/operators',
    ban:            GROUPCHANNEL_PREFIX + '/%s/ban',
    banAction:      GROUPCHANNEL_PREFIX + '/%s/ban/%s',
    muteUser:       GROUPCHANNEL_PREFIX + '/%s/mute',
    muteAction:     GROUPCHANNEL_PREFIX + '/%s/mute/%s'
};

const METADATA = {
    metadata:           '%s/%s/metadata',
    metadataAction:     '%s/%s/metadata/%s',
    metacounter:        '%s/%s/metacounter',
    metacounterAction:  '%s/%s/metacounter/%s'
};

module.exports = {
    users:          USERS,
    messages:       MESSAGES,
    open_channels:  OPEN_CHANNELS,
    group_channels: GROUP_CHANNELS,
    metadata:       METADATA
};
