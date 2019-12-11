console.log('Installing Service Worker...');
//Self refers to the Service Worker. Just like this works on a normal JavaScript File.
self.addEventListener('install', event => {
	console.log('Service Worker Installed!');
});