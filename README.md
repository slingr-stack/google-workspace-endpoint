---
title: Google Workspace Admin Console endpoint
keywords: 
last_updated: September 09, 2022
tags: []
summary: "Detailed description of the Google Workspace Admin Console endpoint."
---

## Overview

This endpoint allows direct access to the [Google Admin Console, specifically Directory API](https://developers.google.com/admin-sdk/directory/reference/rest) by impersonating a workspace admin user through a service account, however it provides shortcuts and helpers for most common use cases.

Some features available in this endpoint are:

- Authentication and authorization
- Direct access to the Google Admin Console Directory API
- Helpers for API methods

## Configuration

In order to use the Google Workspace endpoint you must create an app in the [Google Developer Console](https://console.developers.google.com)
by following these instructions:

- Create a Google Cloud project for your Google Workspace app.
- Enable the Admin SDK API in your Google Cloud project.
- Create a service account and credentials and delegate domain-wide authority to it (assign ONLY the necessary scopes to your service account)[Click here for the instructions](https://developers.google.com/admin-sdk/directory/v1/guides/delegation).
- Download the JSON file with the service account credentials to get the service account private key.

### Service account email

As explained above, this value comes from the credentials file.

### OAuth Scopes

The scopes the service account have access to. Take into account if any scope is selected to which the service account does not have access the endpoint will fail to be authorized to make any requests.

### Private Key

As explained above, this value also comes from the credentials file.

### Admin Email

The email from the Workspace admin who will be impersonated

## Javascript API

The Google Workspace endpoint allows direct access to the API. This means you can make HTTP requests
to access the API documented [here](https://developers.google.com/admin-sdk/directory/reference/rest).

Additionally, the endpoint provides shortcuts and helpers for the most common use cases.

### HTTP requests

You can make `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` request to the 
[Google Admin Console, Directory API](https://developers.google.com/admin-sdk/directory/reference/rest) like this:

```js
var res = app.endpoints.googleWorkspace.get('/directory/v1/users');
```

Please take a look at the documentation of the [HTTP endpoint]({ ... }{ ... }site.baseurl/endpoints_http.html#javascript-api)
for more information.

### Shortcuts

These are the shortcuts available for the Google Workspace Admin Console API:

```
endpoint.groups.create = function(params) { ... } ... }
endpoint.groups.update = function(params, groupKey) { ... }
endpoint.groups.addAlias = function(params, groupKey) { ... }
endpoint.groups.get = function(groupKey) { ... }
endpoint.groups.deleteAlias = function(groupKey, aliasId) { ... }
endpoint.groups.delete = function(groupKey) { ... }
endpoint.groups.getAllByDomain = function(domain, nextPageToken) { ... }
endpoint.groups.getAllForMember = function(userKey, nextPageToken) { ... }
endpoint.groups.getAllByCustomer = function(customerKey, nextPageToken) { ... }
endpoint.groups.getAllGroupAliases = function() { ... }
endpoint.groups.members.add = function(params, groupKey) { ... }
endpoint.groups.members.update = function(params, groupKey, memberKey) { ... }
endpoint.groups.members.get = function(groupKey, memberKey) { ... }
endpoint.groups.members.getAll = function(groupKey, pageToken) { ... }
endpoint.groups.members.delete = function(groupKey, memberKey) { ... }
endpoint.orgUnits.create = function(params, myCustomer) { ... }
endpoint.orgUnits.update = function(params, myCustomer, orgUnitPath) { ... }
endpoint.orgUnits.get = function(myCustomer, orgUnitPath) { ... }
endpoint.orgUnits.getAll = function(myCustomer, orgUnitPath) { ... }
endpoint.orgUnits.delete = function(myCustomer, orgUnitPath) { ... }
endpoint.roles.getPrivileges = function(params, myCustomer) { ... }
endpoint.roles.getRoles = function(params, myCustomer) { ... }
endpoint.roles.create = function(params, myCustomer) { ... }
endpoint.roles.createRoleAssignment = function(params, myCustomer) { ... }
endpoint.customers.get = function(params, myCustomer) { ... }
endpoint.customers.update = function(params, myCustomer) { ... }
endpoint.users.create = function(params) { ... }
endpoint.users.update = function(params, userKey) { ... }
endpoint.users.makeAdministrator = function(params, userKey) { ... }
endpoint.users.get = function(userKey) { ... }
endpoint.users.getAll = function(customerKey, nextPageToken) { ... }
endpoint.users.getAllByDomain = function(domain, nextPageToken) { ... }
endpoint.users.getUserPhoto = function(userKey) { ... }
endpoint.users.updateUserPhoto = function(params, userKey) { ... }
endpoint.users.deleteUserPhoto = function(userKey) { ... }
endpoint.users.delete = function(userKey) { ... }
endpoint.users.undelete = function(params, userKey) { ... }
endpoint.users.aliases.create = function(params, userKey) { ... }
endpoint.users.aliases.getAll = function(params, userKey) { ... }
endpoint.users.aliases.delete = function(userKey, aliasId) { ... }
endpoint.users.customFields.createSchema = function(params, customerKey) { ... }
endpoint.users.custmoFields.updateSchema = function(params, customerKey, schemaKey) { ... }
endpoint.users.custmoFields.getSchema = function(customerKey, schemaKey) { ... }
endpoint.users.custmoFields.getAllSchemas = function(customerKey) { ... }
endpoint.get = function (url) { ... }
endpoint.post = function (url, options) { ... }
endpoint.put = function (url, options) { ... }
endpoint.patch = function (url, options) { ... }
endpoint.delete = function (url) { ... }

```

## Events

There are no events for this endpoint.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.


