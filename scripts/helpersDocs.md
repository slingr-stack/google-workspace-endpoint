# Javascript API

The Javascript API of the googleworkspace endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`PUT`,`GET`,`DELETE` requests to the [googleworkspace API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.googleworkspace.post('/directory/v1/users', body)
var response = app.endpoints.googleworkspace.post('/directory/v1/users')
var response = app.endpoints.googleworkspace.put('/directory/v1/customer/:customerKey/schemas/:schemaKey', body)
var response = app.endpoints.googleworkspace.put('/directory/v1/customer/:customerKey/schemas/:schemaKey')
var response = app.endpoints.googleworkspace.get('/directory/v1/users/:userKey/aliases')
var response = app.endpoints.googleworkspace.delete('/directory/v1/users/:userKey')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/directory/v1/groups'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.post(body)
```
---
* API URL: '/directory/v1/groups/:groupKey/aliases'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.aliases.post(groupKey, body)
```
---
* API URL: '/directory/v1/groups/:groupKey/members'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.members.post(groupKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.orgunits.post(customerKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/roles'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.roles.post(customerKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/roleassignments'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.roleassignments.post(customerKey, body)
```
---
* API URL: '/directory/v1/users'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.post(body)
```
---
* API URL: '/directory/v1/users/:userKey/makeAdmin'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.makeAdmin.post(userKey, body)
```
---
* API URL: '/directory/v1/users/:userKey/undelete'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.undelete.post(userKey, body)
```
---
* API URL: '/directory/v1/users/:userKey/aliases'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.aliases.post(userKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/schemas'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.schemas.post(customerKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile/:resourceId/action'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.devices.mobile.action.post(customerKey, resourceId, body)
```
---
* API URL: '/datatransfer/v1/transfers'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.datatransfer.transfers.post(body)
```
---
* API URL: '/directory/v1/groups/:groupKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.put(groupKey, body)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:memberKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.members.put(groupKey, memberKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.orgunits.put(customerKey, orgUnitPath, body)
```
---
* API URL: '/directory/v1/customers/:customerKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customers.put(customerKey, body)
```
---
* API URL: '/directory/v1/users/:userKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.put(userKey, body)
```
---
* API URL: '/directory/v1/users/:userKey/photos/thumbnail'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.photos.thumbnail.put(userKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/schemas/:schemaKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.schemas.put(customerKey, schemaKey, body)
```
---
* API URL: '/directory/v1/groups/:groupKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.get(groupKey)
```
---
* API URL: '/directory/v1/groups/:groupKey/aliases'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.aliases.get(groupKey)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:memberKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.members.get(groupKey, memberKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.orgunits.get(customerKey, orgUnitPath)
```
---
* API URL: '/directory/v1/customer/:customerKey/roles/ALL/privileges'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.roles.ALL.privileges.get(customerKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/roles'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.roles.get(customerKey)
```
---
* API URL: '/directory/v1/customers/:customerKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customers.get(customerKey)
```
---
* API URL: '/directory/v1/users/:userKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.get(userKey)
```
---
* API URL: '/directory/v1/users/:userKey/photos/thumbnail'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.photos.thumbnail.get(userKey)
```
---
* API URL: '/directory/v1/users/:userKey/aliases'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.aliases.get(userKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/schemas/:schemaKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.schemas.get(customerKey, schemaKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.devices.mobile.get(customerKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile/:resourceId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.devices.mobile.get(customerKey, resourceId)
```
---
* API URL: '/datatransfer/v1/applications'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.datatransfer.applications.get()
```
---
* API URL: '/datatransfer/v1/applications/:applicationId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.datatransfer.applications.get(applicationId)
```
---
* API URL: '/datatransfer/v1/applications/:applicationId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.datatransfer.applications.get()
```
---
* API URL: '/datatransfer/v1/transfers'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.datatransfer.transfers.get()
```
---
* API URL: '/datatransfer/v1/transfers/:dataTransferId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.datatransfer.transfers.get(dataTransferId)
```
---
* API URL: '/datatransfer/v1/transfers/:dataTransferId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.datatransfer.transfers.get()
```
---
* API URL: '/directory/v1/groups/:domain/:customer/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.getAll.get(domain, customer, pageToken)
```
---
* API URL: '/directory/v1/groups/:userKey/:nextPageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.getAllByUser.get(userKey, nextPageToken)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.members.paged.get(groupKey, pageToken)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.orgunits.getAll.get(customerKey, orgUnitPath)
```
---
* API URL: '/directory/v1/users/:domain/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.getAllByDomain.get(domain, pageToken)
```
---
* API URL: '/directory/v1/users/:costumer/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.getAllByCostumer.get(costumer, pageToken)
```
---
* API URL: '/directory/v1/groups/:groupKey/aliases/:aliasId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.aliases.delete(groupKey, aliasId)
```
---
* API URL: '/directory/v1/groups/:groupKey'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.delete(groupKey)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:memberKey'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.groups.members.delete(groupKey, memberKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.orgunits.delete(customerKey, orgUnitPath)
```
---
* API URL: '/directory/v1/users/:userKey/photos/thumbnail'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.photos.thumbnail.delete(userKey)
```
---
* API URL: '/directory/v1/users/:userKey'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.delete(userKey)
```
---
* API URL: '/directory/v1/users/:userKey/aliases/:aliasId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.users.aliases.delete(userKey, aliasId)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile/:resourceId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
app.endpoints.googleworkspace.directory.customer.devices.mobile.delete(customerKey, resourceId)
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,PUT,GET,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/directory/v1/groups<br>/directory/v1/groups/{groupKey}/aliases<br>/directory/v1/groups/{groupKey}/members<br>/directory/v1/customer/{customerKey}/orgunits<br>/directory/v1/customer/{customerKey}/roles<br>/directory/v1/customer/{customerKey}/roleassignments<br>/directory/v1/users<br>/directory/v1/users/{userKey}/makeAdmin<br>/directory/v1/users/{userKey}/undelete<br>/directory/v1/users/{userKey}/aliases<br>/directory/v1/customer/{customerKey}/schemas<br>/directory/v1/customer/{customerKey}/devices/mobile/{resourceId}/action<br>/datatransfer/v1/transfers<br>/directory/v1/groups/{groupKey}<br>/directory/v1/groups/{groupKey}/members/{memberKey}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/customers/{customerKey}<br>/directory/v1/users/{userKey}<br>/directory/v1/users/{userKey}/photos/thumbnail<br>/directory/v1/customer/{customerKey}/schemas/{schemaKey}<br>/directory/v1/groups/{groupKey}<br>/directory/v1/groups/{groupKey}/aliases<br>/directory/v1/groups/{groupKey}/members/{memberKey}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/customer/{customerKey}/roles/ALL/privileges<br>/directory/v1/customer/{customerKey}/roles<br>/directory/v1/customers/{customerKey}<br>/directory/v1/users/{userKey}<br>/directory/v1/users/{userKey}/photos/thumbnail<br>/directory/v1/users/{userKey}/aliases<br>/directory/v1/customer/{customerKey}/schemas/{schemaKey}<br>/directory/v1/customer/{customerKey}/devices/mobile<br>/directory/v1/customer/{customerKey}/devices/mobile/{resourceId}<br>/datatransfer/v1/applications<br>/datatransfer/v1/applications/{applicationId}<br>/datatransfer/v1/applications/{applicationId}<br>/datatransfer/v1/transfers<br>/datatransfer/v1/transfers/{dataTransferId}<br>/datatransfer/v1/transfers/{dataTransferId}<br>/directory/v1/groups/{domain}/{customer}/{pageToken}<br>/directory/v1/groups/{userKey}/{nextPageToken}<br>/directory/v1/groups/{groupKey}/members/{pageToken}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/users/{domain}/{pageToken}<br>/directory/v1/users/{costumer}/{pageToken}<br>/directory/v1/groups/{groupKey}/aliases/{aliasId}<br>/directory/v1/groups/{groupKey}<br>/directory/v1/groups/{groupKey}/members/{memberKey}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/users/{userKey}/photos/thumbnail<br>/directory/v1/users/{userKey}<br>/directory/v1/users/{userKey}/aliases/{aliasId}<br>/directory/v1/customer/{customerKey}/devices/mobile/{resourceId}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*