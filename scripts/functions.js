/////////////////////
// Public API
/////////////////////

////////////////////////////////
// Admin Console. Directory API
///////////////////////////////

// Groups

endpoint.groups = {};

endpoint.groups.create = function(params) {
    return endpoint.post({
        path: '/directory/v1/groups',
        body: params
    });
};

endpoint.groups.update = function(params, groupKey) {
    return endpoint.put({
        path: '/directory/v1/groups/'+groupKey,
        body: params
    });
};

endpoint.groups.addAlias = function(params, groupKey) {
    return endpoint.post({
        path: '/directory/v1/groups/'+groupKey+'/aliases',
        body: params
    });
};

endpoint.groups.get = function(groupKey) {
    return endpoint.get({
        path: '/directory/v1/groups/'+groupKey
    });
};

endpoint.groups.deleteAlias = function(groupKey, aliasId) {
    return endpoint.delete({
        path: '/directory/v1/groups/'+groupKey+'/'+aliasId
    });
};

endpoint.groups.delete = function(groupKey) {
    return endpoint.delete({
        path: '/directory/v1/groups/'+groupKey
    });
};

endpoint.groups.getAllByDomain = function(domain, nextPageToken) {
    return endpoint.get({
        path: '/directory/v1/groups',
        params: {domain: domain, pageToken: nextPageToken}
    });
};

endpoint.groups.getAllForMember = function(userKey, nextPageToken) {
    return endpoint.get({
        path: '/directory/v1/groups',
        params: {userKey: userKey, pageToken: nextPageToken}
    });
};


endpoint.groups.getAllByCustomer = function(customerKey, nextPageToken) {
    return endpoint.get({
        path: '/directory/v1/groups',
        params: {customer: customerKey, pageToken: nextPageToken}
    });
};


endpoint.groups.getAllGroupAliases = function() {
    return endpoint.get({
        path: '/directory/v1/groups/aliases'
    });
};

endpoint.groups.members = {};

endpoint.groups.members.add = function(params, groupKey) {
    return endpoint.post({
        path: '/directory/v1/groups/'+groupKey+'/members',
        body: params
    });
};

endpoint.groups.members.update = function(params, groupKey, memberKey) {
    return endpoint.put({
        path: '/directory/v1/groups/'+groupKey+'/members/'+memberKey,
        body: params
    });
};

endpoint.groups.members.get = function(groupKey, memberKey) {
    return endpoint.get({
        path: '/directory/v1/groups/'+groupKey+'/members/'+memberKey
    });
};

endpoint.groups.members.getAll = function(groupKey, pageToken) {
    return endpoint.get({
        path: '/directory/v1/groups/'+groupKey+'/members/',
        params: {pageToken: nextPageToken}
    });
};

endpoint.groups.members.delete = function(groupKey, memberKey) {
    return endpoint.delete({
        path: '/directory/v1/groups/'+groupKey+'/members/'+memberKey
    });
};

// Structure

endpoint.orgUnits = {};

endpoint.orgUnits.create = function(params, myCustomer) {
    return endpoint.post({
        path: '/directory/v1/customer/'+myCustomer+'/orgunits',
        body: params
    });
};

endpoint.orgUnits.update = function(params, myCustomer, orgUnitPath) {
    return endpoint.put({
        path: '/directory/v1/customer/'+myCustomer+'/orgunits/'+orgUnitPath,
        body: params
    });
};

endpoint.orgUnits.get = function(myCustomer, orgUnitPath) {
    return endpoint.get({
        path: '/directory/v1/customer/'+myCustomer+'/orgunits/'+orgUnitPath
    });
};

endpoint.orgUnits.getAll = function(myCustomer, orgUnitPath) {
    return endpoint.get({
        path: '/directory/v1/customer/'+myCustomer+'/orgunits/'+orgUnitPath,
        params: {orgUnitPath: 'full', type: 'all'}
    });
};

endpoint.orgUnits.delete = function(myCustomer, orgUnitPath) {
    return endpoint.delete({
        path: '/directory/v1/customer/'+myCustomer+'/orgunits/'+orgUnitPath
    });
};

endpoint.roles = {};

endpoint.roles.getPrivileges = function(params, myCustomer) {
    return endpoint.get({
        path: '/directory/v1/customer/'+myCustomer+'/roles/ALL/privileges',
        params: params
    });
};

endpoint.roles.getRoles = function(params, myCustomer) {
    return endpoint.get({
        path: '/directory/v1/customer/'+myCustomer+'/roles',
        params: params
    });
};

endpoint.roles.create = function(params, myCustomer) {
    return endpoint.post({
        path: '/directory/v1/customer/'+myCustomer+'/roles',
        body: params
    });
};

endpoint.roles.createRoleAssignment = function(params, myCustomer) {
    return endpoint.post({
        path: '/directory/v1/customer/'+myCustomer+'/roleassignments',
        body: params
    });
};

// Customers

endpoint.customers = {};

endpoint.customers.get = function(params, myCustomer) {
    return endpoint.get({
        path: '/directory/v1/customers/'+myCustomer,
        params: params
    });
};

endpoint.customers.update = function(params, myCustomer) {
    return endpoint.put({
        path: '/directory/v1/customers/'+myCustomer,
        body: params
    });
};

// Users

endpoint.users = {};

endpoint.users.create = function(params) {
    return endpoint.post({
        path: '/directory/v1/users',
        body: params
    });
};

endpoint.users.update = function(params, userKey) {
    return endpoint.put({
        path: '/directory/v1/users/'+userKey,
        body: params
    });
};

endpoint.users.makeAdministrator = function(params, userKey) {
    return endpoint.post({
        path: '/directory/v1/users/'+userKey+'/makeAdmin',
        body: params
    });
};

endpoint.users.get = function(userKey) {
    return endpoint.get({
        path: '/directory/v1/users/'+userKey
    });
};

endpoint.users.getAll = function(customerKey, nextPageToken) {
    return endpoint.get({
        path: '/directory/v1/users',
        params: { 'customer': customerKey, 'pageToken': nextPageToken }
    });
};

endpoint.users.getAllByDomain = function(domain, nextPageToken) {
    return endpoint.get({
        path: '/directory/v1/users',
        params: { 'domain': domain, 'pageToken': nextPageToken }
    });
};

endpoint.users.getUserPhoto = function(userKey) {
    return endpoint.get({
        path: '/directory/v1/users/'+userKey+'/photos/thumbnail'
    });
};

endpoint.users.updateUserPhoto = function(params, userKey) {
    return endpoint.put({
        path: '/directory/v1/users/'+userKey+'/photos/thumbnail',
        body: params
    });
};

endpoint.users.deleteUserPhoto = function(userKey) {
    return endpoint.delete({
        path: '/directory/v1/users/'+userKey+'/photos/thumbnail'
    });
};

endpoint.users.delete = function(userKey) {
    return endpoint.delete({
        path: '/directory/v1/users/'+userKey
    });
};

endpoint.users.undelete = function(params, userKey) {
    return endpoint.post({
        path: '/directory/v1/users/'+userKey+'/undelete',
        body: params
    });
};

endpoint.users.aliases = {};

endpoint.users.aliases.create = function(params, userKey) {
    return endpoint.post({
        path: '/directory/v1/users/'+userKey+'/aliases',
        body: params
    });
};

endpoint.users.aliases.getAll = function(params, userKey) {
    return endpoint.get({
        path: '/directory/v1/users/'+userKey+'/aliases',
        params: params
    });
};

endpoint.users.aliases.delete = function(userKey, aliasId) {
    return endpoint.delete({
        path: '/directory/v1/users/'+userKey+'/aliases/'+aliasId
    });
};

endpoint.users.customFields = {};

endpoint.users.customFields.createSchema = function(params, customerKey) {
    return endpoint.post({
        path: '/directory/v1/customer/'+customerKey+'/schemas',
        body: params
    });
};

endpoint.users.customFields.updateSchema = function(params, customerKey, schemaKey) {
    return endpoint.put({
        path: '/directory/v1/customer/'+customerKey+'/schemas/'+schemaKey,
        body: params
    });
};

endpoint.users.customFields.getSchema = function(customerKey, schemaKey) {
    return endpoint.get({
        path: '/directory/v1/customer/'+customerKey+'/schemas/'+schemaKey
    });
};

endpoint.users.customFields.getAllSchemas = function(customerKey) {
    return endpoint.get({
        path: '/directory/v1/customer/'+customerKey+'/schemas'
    });
};


/////////////////////
// Public API - Generic Functions
/////////////////////

endpoint.get = function (url) {
    options = checkHttpOptions(url, {});
    return endpoint._get(options);
};

endpoint.post = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._post(options);
};

endpoint.put = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._put(options);
};

endpoint.patch = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._patch(options);
};

endpoint.delete = function (url) {
    var options = checkHttpOptions(url, {});
    return endpoint._delete(options);
};

/////////////////////
// Utilities
/////////////////////

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);