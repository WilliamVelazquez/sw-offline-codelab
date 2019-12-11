# Service Workers Offline Codelab

Codelab to learn about how Service Workers help us to empower our websites keeping assets on the cache enabling the site to load faster and work without internet connection.

![Sample Page](./.readme-static/0-sample-page.png)

## How it works?

In the master branch you will have the base project without any Service Worker implementation, you will find each of the steps to follow on different branches.

## Steps

- 1. Service Worker Registration
![Service Worker Registration](./.readme-static/1-service-worker-registration.png)

> Service Worker works only on **HTTPS** connection or **localhost**. Not on **file://**

> Visual Studio Code **Live Server** Extension is a good option for testing.

> Service Workers file normally lives at the top level of the app (next to index.html) to cover the whole app.

> Service Workers cannot have a scope above its own path but you can specify to work just on a below path.

- 2. Service Worker Installation
![Service Worker Installation](./.readme-static/2-service-worker-installation.png)

Adding Listener to the install event on the Service Worker.
> The keyword "self" is similiar to "this" when working on a Service Worker.

## Author & Credits

- [William Velazquez](https://williamvelazquez.com/)

## Social Networks

- [Twitter](https://twitter.com/@WilliamVlazquez)
- [Website](https://williamvelazquez.com/)
