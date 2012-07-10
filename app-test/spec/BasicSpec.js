describe("Basic Assumptions", function() {

    it("has ExtJS loaded", function() {
        expect(Ext).toBeDefined();
    });

    it("has loaded myApp code",function(){
        expect(myApp).toBeDefined();
    });
});