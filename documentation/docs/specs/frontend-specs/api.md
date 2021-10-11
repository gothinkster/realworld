---
sidebar_position: 5
---

# API

> This project provides you with a public hosted API to test your frontend implementations.

Point your API requests to `https://conduit.productionready.io/api` and you're good to go!

## API Usage

The usage of the API is free and non-limited by any kind of key.


## API Limitations

The public APi is currently hosted on a free plan project on Heroku.  
If the hosted API receives no traffic in 30 minutes, it will sleep. In such a situation, there will be an additional delay on the first request.

:::info
To provide everyone a **safe** and **healthy** experience, the following limitations have been introduced in 2021
:::

The visibility of user content is limited :
- logged out users see only content created by demo accounts
- logged in users see only their content and the content created by demo accounts

Non-demo Articles, Tags, and Comments are deleted on a daily basis to avoid additional costs.

## Swagger documentation

The API exposes a **Swagger** documentation on `https://conduit.productionready.io/api-docs`.

Most of the requests require a valid token.

### Retrieve a token

You can retrieve a token by logging in or by registering.

Log in : https://conduit.productionready.io/api-docs/#/User%20and%20Authentication/Login  
Register: https://conduit.productionready.io/api-docs/#/User%20and%20Authentication/CreateUser  

* Click the `Try it out` button
* populate the body input with the related credentials
* Click `Execute` button
* Copy the token from the response body

### Register the token

* Click `Authorize` button on top of the Swagger documentation page
* Populate the field with `Token <generated token>`
