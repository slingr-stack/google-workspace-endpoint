////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.directory = {};

endpoint.directory.groups = {};

endpoint.directory.groups.aliases = {};

endpoint.directory.groups.members = {};

endpoint.directory.customer = {};

endpoint.directory.customer.orgunits = {};

endpoint.directory.customer.roles = {};

endpoint.directory.customer.roles.ALL = {};

endpoint.directory.customer.roles.ALL.privileges = {};

endpoint.directory.customer.roleassignments = {};

endpoint.directory.customers = {};

endpoint.directory.users = {};

endpoint.directory.users.makeAdmin = {};

endpoint.directory.users.photos = {};

endpoint.directory.users.photos.thumbnail = {};

endpoint.directory.users.undelete = {};

endpoint.directory.users.aliases = {};

endpoint.directory.customer.schemas = {};

endpoint.directory.customer.devices = {};

endpoint.directory.customer.devices.mobile = {};

endpoint.directory.customer.devices.mobile.action = {};

endpoint.datatransfer = {};

endpoint.datatransfer.applications = {};

endpoint.datatransfer.transfers = {};

endpoint.directory.groups.getAll = {};

endpoint.directory.groups.getAllByUser = {};

endpoint.directory.groups.members.paged = {};

endpoint.directory.customer.orgunits.getAll = {};

endpoint.directory.users.getAllByDomain = {};

endpoint.directory.users.getAllByCostumer = {};

endpoint.directory.groups.post = function(httpOptions) {
    var url = parse('/directory/v1/groups');
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.groups.put = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.directory.groups.aliases.post = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/aliases', [groupKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.groups.get = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.groups.aliases.get = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/aliases', [groupKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.groups.aliases.delete = function(groupKey, aliasId, httpOptions) {
    if (!groupKey || !aliasId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,aliasId].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/aliases/:aliasId', [groupKey, aliasId]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.directory.groups.delete = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.directory.groups.members.post = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members', [groupKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.groups.members.put = function(groupKey, memberKey, httpOptions) {
    if (!groupKey || !memberKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.directory.groups.members.get = function(groupKey, memberKey, httpOptions) {
    if (!groupKey || !memberKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.groups.members.delete = function(groupKey, memberKey, httpOptions) {
    if (!groupKey || !memberKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.directory.customer.orgunits.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.customer.orgunits.put = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey || !orgUnitPath) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.directory.customer.orgunits.get = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey || !orgUnitPath) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.customer.orgunits.delete = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey || !orgUnitPath) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.directory.customer.roles.ALL.privileges.get = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roles/ALL/privileges', [customerKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.customer.roles.get = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roles', [customerKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.customer.roles.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roles', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.customer.roleassignments.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roleassignments', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.customers.get = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customers/:customerKey', [customerKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.customers.put = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customers/:customerKey', [customerKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.directory.users.post = function(httpOptions) {
    var url = parse('/directory/v1/users');
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.users.put = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey', [userKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.directory.users.makeAdmin.post = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/makeAdmin', [userKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.users.get = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey', [userKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.users.photos.thumbnail.get = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.users.photos.thumbnail.put = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.directory.users.photos.thumbnail.delete = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.directory.users.delete = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey', [userKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.directory.users.undelete.post = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/undelete', [userKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.users.aliases.post = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/aliases', [userKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.users.aliases.get = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/aliases', [userKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.users.aliases.delete = function(userKey, aliasId, httpOptions) {
    if (!userKey || !aliasId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey,aliasId].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/aliases/:aliasId', [userKey, aliasId]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.directory.customer.schemas.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/schemas', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.customer.schemas.put = function(customerKey, schemaKey, httpOptions) {
    if (!customerKey || !schemaKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,schemaKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/schemas/:schemaKey', [customerKey, schemaKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.directory.customer.schemas.get = function(customerKey, schemaKey, httpOptions) {
    if (!customerKey || !schemaKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,schemaKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/schemas/:schemaKey', [customerKey, schemaKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.customer.devices.mobile.get = function(customerKey, resourceId, httpOptions) {
    if (!customerKey || arguments.length === 0) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/directory/v1/customer/:customerKey/devices/mobile', [customerKey]);
            url = concatQuery(url, 'projection', 'FULL');
            break;
        case 1:
            url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId', [customerKey, resourceId]);
            url = concatQuery(url, 'projection', 'FULL');
            break;
        case 2:
            url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId', [customerKey,resourceId]);
            url = concatQuery(url, 'projection', 'FULL');
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.customer.devices.mobile.action.post = function(customerKey, resourceId, httpOptions) {
    if (!customerKey || !resourceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,resourceId].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId/action', [customerKey, resourceId]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.customer.devices.mobile.delete = function(customerKey, resourceId, httpOptions) {
    if (!customerKey || !resourceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,resourceId].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId', [customerKey, resourceId]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.datatransfer.applications.get = function(applicationId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/datatransfer/v1/applications');
			break;
		case 1:
			url = parse('/datatransfer/v1/applications/:applicationId', [applicationId]);
			break;
		case 2:
            url = parse('/datatransfer/v1/applications/:applicationId', [applicationId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googleworkspace] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.datatransfer.transfers.get = function(dataTransferId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length){
        case 0:
			url = parse('/datatransfer/v1/transfers');
			break;
		case 1:
			url = parse('/datatransfer/v1/transfers/:dataTransferId', [dataTransferId]);
			break;
		case 2:
            url = parse('/datatransfer/v1/transfers/:dataTransferId', [dataTransferId]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googleworkspace] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.datatransfer.transfers.post = function(httpOptions) {
    var url = parse('/datatransfer/v1/transfers');
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.directory.groups.getAll.get = function(domain, customer, pageToken, httpOptions) {
    var url = parse('/directory/v1/groups');
    if (!!domain) {
        url = concatQuery(url, 'domain', encodeURIComponent(domain));
    }
    if (!!customer) {
        url = concatQuery(url, 'customer', encodeURIComponent(customer));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.groups.getAllByUser.get = function(userKey, nextPageToken, httpOptions) {
    var url = parse('/directory/v1/groups');
    if (!!userKey) {
        url = concatQuery(url, 'userKey', encodeURIComponent(userKey));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(nextPageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.groups.members.paged.get = function(groupKey, pageToken, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members');
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.customer.orgunits.getAll.get = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits');
    if (!!orgUnitPath) {
        url = concatQuery(url, 'orgUnitPath', encodeURIComponent(orgUnitPath));
    }
    url = concatQuery(url, 'type', "all");
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.users.getAllByDomain.get = function(domain, pageToken, httpOptions) {
    var url = parse('/directory/v1/users');
    if (!!domain) {
        url = concatQuery(url, 'domain', encodeURIComponent(domain));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.directory.users.getAllByCostumer.get = function(costumer, pageToken, httpOptions) {
    var url = parse('/directory/v1/users');
    if (!!costumer) {
        url = concatQuery(url, 'costumer', encodeURIComponent(costumer));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};
            
endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
};

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

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}