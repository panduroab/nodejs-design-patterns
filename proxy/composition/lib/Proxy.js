//Pass the subject to create the Proxy
module.exports.createProxy = function (subject) {
	//Get the prototype of the Subject object
	var proto = Object.getPrototypeOf(subject);
	
	function Proxy(subject) {
		this.subject = subject;
	}

	Proxy.prototype = Object.create(proto);

	//Intercept hello method
	Proxy.prototype.hello = function() {
		return this.subject.hello() + ' world!';
	}
	
	//Delegated goodbye method
	Proxy.prototype.goodbye = function() {
		return this.subject.goodbye.apply(this.subject, arguments);
	}

	return new Proxy(subject);
};
