describe("User integrity", function() {

    it("has model user", function() {
		//get a reference to the User model class
		var User = Ext.ModelManager.getModel('myApp.model.User');
        expect(User).toBeDefined();
    });

	it("saves and loads a user", function(){
			
		var user = Ext.create('myApp.model.User', {
				email: 'a.freudiger@mysportgroup.com',
				password: "123456",
				loginKey: "123qwe987poi"
			});
	
		//uses the configured LocalStorageProxy to save the new Search to localStorage
		user.save({
	        success: function(user) {
		
				//get a reference to the User model class
				var User = Ext.ModelManager.getModel('myApp.model.User');
				
				//load it with previous id
	            User.load(user.getId(),{
					success: function(user){
						expect(user.data.email).toBe('a.freudiger@mysportgroup.com');
					}
				});
	        }
		})
	});
	
	it("erases the existing and stores a new user", function(){
		
		//get a reference to the UserStore
		var users = Ext.StoreManager.lookup('usersStore');
		
		var storeNew = function(success){
			var user = Ext.create('myApp.model.User', {
					email: 'a.freudiger@mysportgroup.com',
					password: "123456",
					loginKey: "internalUSerKey"
				});

			//uses the configured LocalStorageProxy to save the new Search to localStorage
			user.save({
				success: function(){
					users.load(function(records){
						success(records);
					});
				}
			});
		};

		//load all existing users
		users.load(function(){
			users.empty(function(records){
		
				expect(records.length).toBe(0);
				storeNew(function(newRecords){
					expect(newRecords.length).toBe(1);
				});
			});
		});
		
	});
});