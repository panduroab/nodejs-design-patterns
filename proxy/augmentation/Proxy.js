//Object augmentation or monkey patching
module.exports.createProxy = function (subject){
    var helloOrig = subject.hello;
    
    subject.hello = function() {
        return helloOrig.call(this) + ' world!';
    }
	
    return subject;
}
