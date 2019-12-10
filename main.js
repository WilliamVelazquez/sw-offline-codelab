console.log('Verifying Service Worker Support on the Browser...');

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register(
		'./sw.js'
		//,{ scope: '/app/'}
	)
	.then((registration)=>{
		console.log('Service Worker Registered!')
		console.log('SW Scope is:', registration.scope);
	})
	.catch((error)=>{
		console.log('Error Registrating Service Worker: ', error);
	});
}else{
	console.log('Service Worker not supported');
}