const cacheName = 'static-files-v1';
//List both '/' and 'index.html' as those are two ways of referring to the same file.
const resourcesToPrecache = [
	'/',
	'index.html',
	'styles.css',
];
console.log('Installing Service Worker...');
self.addEventListener('install', event => {
	console.log('Service Worker Installed!');
	//We wait unitl the cache is ready and the promise result. This works like a Synchronous call.
	event.waitUntil(
		caches.open(cacheName)
			.then(cache=>{
				console.log('Precaching static resources...');
				return cache.addAll(resourcesToPrecache);
			})
	)
});