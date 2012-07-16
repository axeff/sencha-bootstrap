describe("Basic App Assumptions", function() {

    it("has ExtJS loaded", function() {
        expect(Ext).toBeDefined();
    });



    it("has loaded myApp code",function(){
        expect(myApp).toBeDefined();
    });


	
	it('should have a Login-View', function() {
		expect(Ext.create('myApp.view.Login')).toBeDefined();
	});
});