 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


function parse(str) {
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

endpoint.directory = {};

endpoint.directory.groups = {};

endpoint.directory.groups.create = function(httpOptions) {
	var url = parse('/directory/v1/groups');
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.groups.update = function(groupKey, httpOptions) {
	if (!groupKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
	sys.logs.debug('[googleWorkspace] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.directory.groups.aliases = {};

endpoint.directory.groups.aliases.create = function(groupKey, httpOptions) {
	if (!groupKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/aliases', [groupKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.groups.get = function(groupKey, httpOptions) {
	if (!groupKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.groups.getAll = function(domain, customerKey, nextPageToken,httpOptions) {
    if (!domain || !customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [domain, customerKey].');
		return;
	}
	var url = parse('/directory/v1/groups?domain='+encodeURIComponent(domain)+'&customer='+encodeURIComponent(customerKey)+'&pageToken='+encodeURIComponent((nextPageToken ? nextPageToken : "")));
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.groups.getAllByUser = function(userKey,nextPageToken,httpOptions) {
    if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/groups?userKey='+encodeURIComponent(userKey)+'&pageToken='+encodeURIComponent((nextPageToken ? nextPageToken : "")));
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.groups.aliases.getAllAliases = function(groupKey, httpOptions) {
	if (!groupKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/aliases', [groupKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.groups.aliases.delete = function(groupKey, aliasId, httpOptions) {
	if (!groupKey || !aliasId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,aliasId].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/aliases/:aliasId', [groupKey, aliasId]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.directory.groups.delete = function(groupKey, httpOptions) {
	if (!groupKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.directory.groups.members = {};

endpoint.directory.groups.members.create = function(groupKey, httpOptions) {
	if (!groupKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/members', [groupKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.groups.members.update = function(groupKey, memberKey, httpOptions) {
	if (!groupKey || !memberKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
	sys.logs.debug('[googleWorkspace] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.directory.groups.members.get = function(groupKey, memberKey, httpOptions) {
	if (!groupKey || !memberKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.groups.members.getAll = function(groupKey,nextPageToken ,httpOptions) {
	if (!groupKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/members?pageToken='+encodeURIComponent((nextPageToken ? nextPageToken : "")), [groupKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.groups.members.delete = function(groupKey, memberKey, httpOptions) {
	if (!groupKey || !memberKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
		return;
	}
	var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.directory.orgUnits = {};

endpoint.directory.orgUnits.create = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/orgunits', [customerKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.orgUnits.update = function(customerKey, orgUnitPath, httpOptions) {
	if (!customerKey || !orgUnitPath) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
	sys.logs.debug('[googleWorkspace] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.directory.orgUnits.get = function(customerKey, orgUnitPath, httpOptions) {
	if (!customerKey || !orgUnitPath) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.orgUnits.getAll = function(customerKey, orgUnitPath,httpOptions) {
	if (!customerKey || !orgUnitPath) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey, orgUnitPath].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/orgunits?orgUnitPath='+encodeURIComponent(orgUnitPath)+'&type=all', [customerKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.orgUnits.delete = function(customerKey, orgUnitPath, httpOptions) {
	if (!customerKey || !orgUnitPath) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.directory.roles = {};

endpoint.directory.roles.privileges = {};

endpoint.directory.roles.privileges.getAll = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/roles/ALL/privileges', [customerKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.roles.get = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/roles', [customerKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.roles.create = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/roles', [customerKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.roleassignments = {};

endpoint.directory.roleassignments.create = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/roleassignments', [customerKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.customers = {};

endpoint.directory.customers.get = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customers/:customerKey', [customerKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.customers.update = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customers/:customerKey', [customerKey]);
	sys.logs.debug('[googleWorkspace] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.directory.users = {};

endpoint.directory.users.create = function(httpOptions) {
	var url = parse('/directory/v1/users');
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.users.update = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey', [userKey]);
	sys.logs.debug('[googleWorkspace] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.directory.users.makeAdmin = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/makeAdmin', [userKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.users.get = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey', [userKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.users.getAllByDomain = function(domain,nextPageToken,httpOptions) {
    if (!domain) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [domain].');
		return;
    }
	var url = parse('/directory/v1/users?domain='+encodeURIComponent(domain)+'&pageToken='+encodeURIComponent((nextPageToken ? nextPageToken : "")));
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.users.getAllByCustomer = function(customerKey,nextPageToken,httpOptions) {
    if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
    }
	var url = parse('/directory/v1/users?customer='+encodeURIComponent(customerKey)+'&pageToken='+encodeURIComponent((nextPageToken ? nextPageToken : "")));
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.users.photos = {};

endpoint.directory.users.photos.get = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.users.photos.update = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
	sys.logs.debug('[googleWorkspace] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.directory.users.photos.delete = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.directory.users.delete = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey', [userKey]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.directory.users.undelete = {};

endpoint.directory.users.undelete.undelete = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/undelete', [userKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.users.aliases = {};

endpoint.directory.users.aliases.create = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/aliases', [userKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.users.aliases.getAll = function(userKey, httpOptions) {
	if (!userKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/aliases', [userKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.users.aliases.delete = function(userKey, aliasId, httpOptions) {
	if (!userKey || !aliasId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey,aliasId].');
		return;
	}
	var url = parse('/directory/v1/users/:userKey/aliases/:aliasId', [userKey, aliasId]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.users = {};

endpoint.users.directory = {};

endpoint.users.directory.schemas = {};

endpoint.users.directory.schemas.create = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/schemas', [customerKey]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.users.directory.schemas.update = function(customerKey, schemaKey, httpOptions) {
	if (!customerKey || !schemaKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,schemaKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/schemas/:schemaKey', [customerKey, schemaKey]);
	sys.logs.debug('[googleWorkspace] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.users.directory.schemas.get = function(customerKey, schemaKey, httpOptions) {
	if (!customerKey || !schemaKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,schemaKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/schemas/:schemaKey', [customerKey, schemaKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.devices = {};

endpoint.directory.devices.mobile = {};

endpoint.directory.devices.mobile.getAll = function(customerKey, httpOptions) {
	if (!customerKey) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/devices/mobile?projection=FULL', [customerKey]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.devices.mobile.get = function(customerKey, resourceId, httpOptions) {
	if (!customerKey || !resourceId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,resourceId].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId?projection=FULL', [customerKey, resourceId]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.directory.devices.mobile.approve = function(customerKey, resourceId, httpOptions) {
	if (!customerKey || !resourceId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,resourceId].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId/action', [customerKey, resourceId]);
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.directory.devices.mobile.delete = function(customerKey, resourceId, httpOptions) {
	if (!customerKey || !resourceId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,resourceId].');
		return;
	}
	var url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId', [customerKey, resourceId]);
	sys.logs.debug('[googleWorkspace] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.datatransfer = {};

endpoint.datatransfer.applications = {};

endpoint.datatransfer.applications.getAll = function(httpOptions) {
	var url = parse('/datatransfer/v1/applications');
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.datatransfer.applications.get = function(applicationId, httpOptions) {
	if (!applicationId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [applicationId].');
		return;
	}
	var url = parse('/datatransfer/v1/applications/:applicationId', [applicationId]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.datatransfer.transfers = {};

endpoint.datatransfer.transfers.get = function(dataTransferId, httpOptions) {
	if (!dataTransferId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [dataTransferId].');
		return;
	}
	var url = parse('/datatransfer/v1/transfers/:dataTransferId', [dataTransferId]);
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.datatransfer.transfers.insert = function(httpOptions) {
	var url = parse('/datatransfer/v1/transfers');
	sys.logs.debug('[googleWorkspace] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.datatransfer.transfers.getAll = function(httpOptions) {
	var url = parse('/datatransfer/v1/transfers');
	sys.logs.debug('[googleWorkspace] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

