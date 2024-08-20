---
title: API
---

This project provides you different solutions to test your frontend implementation with an API by:

- [running our official backend implementation locally](#run-the-official-backend-implementation-locally)
- [hosting your own API](#host-your-own-api)
- [using the API deployed for the official demo](#demo-api)

## Run the official backend implementation locally

The official backend implementation is open-sourced.  
You can find the GitHub repository [here](https://github.com/gothinkster/node-express-prisma-v1-official-app).  
The Readme will provide you guidances to start the server locally.

:::info  
We encourage you to use this implementation's **main** branch for local tests as the **limited** one includes [limitations](#api-limitations) aimed to protect public-hosted APIs.  
:::

## Host your own API

The official backend implementation includes a [**Deploy to Heroku** button](https://github.com/gothinkster/node-express-prisma-v1-official-app#deploy-to-heroku).  
This button provides you a quick and easy way to deploy the API on Heroku for your frontend implementation.

:::caution
The official backend implementation repository includes two branches:

- the **main** branch which adheres to the RealWorld backend specs
- the **limited** branch which includes limitations for public-hosted APIs

The **limited** branch will be more suitable if you plan to host your implementation.
[Here](#api-limitations) is the list of the limitations.
:::

## Demo API

This project provides you with a public hosted API to test your frontend implementations.  
Point your API requests to `https://api.realworld.io/api` and you're good to go!

### API Usage

The API is freely available for public usage but its access is limited to RealWorld usage only: you won't be able to t consume it on its own but with a frontend application.

## API Limitations

:::info
To provide everyone a **safe** and **healthy** experience by not exposing free speech created content, the following limitations have been introduced in 2021
:::

The visibility of user content is limited :

- logged out users see only content created by demo accounts
- logged in users see only their content and the content created by demo accounts
