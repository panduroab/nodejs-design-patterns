module.exports.createProxy =  function(subject){
	return {
		//Proxied method
		hello: function() {
			return subject.hello() + ' world!';
		},
		
		//Delegated method
		goodbye: function() {
			return subject.goodbye.apply(subject, arguments);
		}
	};
};
