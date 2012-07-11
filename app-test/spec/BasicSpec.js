describe("Basic App Assumptions", function() {

    it("has ExtJS loaded", function() {
        expect(Ext).toBeDefined();
    });



    it("has loaded myApp code",function(){
        expect(myApp).toBeDefined();
    });


	
	it('should have a Main-View', function() {
		expect(Ext.create('myApp.view.Main')).toBeDefined();
	});
});