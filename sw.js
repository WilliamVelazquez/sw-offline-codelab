const cacheName = 'static-files-v1';
const resourcesToPrecache = [
	'/',
	'main.js',
	'index.html',
	'styles.css',
	'favicon.ico',
];
console.log('Installing Service Worker...');
self.addEventListener('install', event => {
	console.log('Service Worker Installed!');
	event.waitUntil(
		caches.open(cacheName)
			.then(cache=>{
				console.log('Precaching static resources...');
				return cache.addAll(resourcesToPrecache);
			})
	)
});
self.addEventListener('fetch', event => {
	event.respondWith(
		//If we previously ask for a resource and it's stored we serve it from the cache. If not, we ask for it following a normal flow.
		caches.match(event.request)
			.then( response => {
				if(response){
					return response
				}
				return fetch(event.request)
			})
	);
});