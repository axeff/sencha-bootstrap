describe("User integrity", function() {

    it("has model user", function() {
		//get a reference to the User model class
		var User = Ext.ModelManager.getModel('myApp.model.User');
        expect(User).toBeDefined();
    });

	it("should login User at Backend", function(){
		
		var flag = false;
		var value;
		
		runs(function(){

			var form = Ext.create('Ext.form.Panel', {
			    items: [
	                {
	                    xtype: 'textfield',
	                    label: 'E-Mail',
	                    name: 'email'
	                },
	                {
	                    xtype: 'passwordfield',
	                    label: 'Passwort',
	                    name: 'password'
	                },
			    ]
			});

			form.setValues({
				email: "a.freudiger@mysportgroup.de",
	            password: "123456"
			});
			
			var users = Ext.StoreManager.lookup('usersStore');
			users.submit(form, function(result){
				flag = true;

				value = result.loginKey;
			
			});
			
			//destroy Viewport of App
			Ext.Viewport.removeAll(true);
		

		});
		
		waitsFor(function(){

			if (flag){
				expect(value).toEqual("sOmEkEyCoMiNgFrOmPhP");
			}			
			
			return flag;
			
		}, "success of user login", config.getTimeout());
		
	});

	it("saves and loads a user", function(){
		
		var flag = false;
		var valueEmail;

		runs(function(){
			var user = Ext.create('myApp.model.User', {
					email: 'a.freudiger@mysportgroup.de',
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
							valueEmail = user.data.email
							flag = true;
						}
					});
		        }
			})
		});
		
		waitsFor(function(){
			if (flag)
				expect(valueEmail).toBe('a.freudiger@mysportgroup.de');
			return flag;
		}, "save and load a user", config.getTimeout());
		
	});
	
	it("erases the existing and stores a new user", function(){
		
		var flag = false;
		var valueRecordsEmpty, valueRecordsNotEmpty;
		
		runs(function(){
			//get a reference to the UserStore
			var users = Ext.StoreManager.lookup('usersStore');
		
			var storeNew = function(success){
				var user = Ext.create('myApp.model.User', {
						email: 'a.freudiger@mysportgroup.de',
						password: "123456",
						loginKey: "internalUSerKey"
					});

				//uses the configured LocalStorageProxy to save the new User to localStorage
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
					valueRecordsEmpty = records.length;
					storeNew(function(newRecords){
						valueRecordsNotEmpty = newRecords.length;
						flag = true;
					});
				});
			});
		});
		
		waitsFor(function(){
			if(flag){
				expect(valueRecordsEmpty).toBe(0);
				expect(valueRecordsNotEmpty).toBe(1);
			}
			return flag;
		}, "erasing old and creating new user", config.getTimeout());
		
	});
	
	it("confirms that a valid user is logged", function(){
		var flag = false;
		var value;
		
		runs(function(){
			//get a reference to the UserStore
			var users = Ext.StoreManager.lookup('usersStore');


			var user = Ext.create('myApp.model.User', {
					email: 'a.freudiger@mysportgroup.de',
					password: "123456",
					loginKey: "internalUSerKey"
				});

			//uses the configured LocalStorageProxy to save the new User to localStorage
			users.empty(function(){
				user.save({
					success: function(){

						users.load(function(){
							value = users.isLogged();
							flag = true;
						});
					}
				});
			});
			

		});
		
		waitsFor(function(){
			if(flag){
				expect(value).toBe(true);
			}
			return flag;
		}, "valid user to return true", config.getTimeout());
	});
	
	
	it("confirms that NO valid user is logged", function(){
		var flag = false;
		var value;
		
		runs(function(){
			//get a reference to the UserStore
			var users = Ext.StoreManager.lookup('usersStore');


			var user = Ext.create('myApp.model.User', {
					email: 'a.freudiger@mysportgroup.de',
					password: "123456",
					loginKey: "internalUSerKey"
				});

			//uses the configured LocalStorageProxy to save the new User to localStorage
			users.empty(function(){
				value = users.isLogged();
				flag = true;
			
			});
			

		});
		
		waitsFor(function(){
			if(flag){
				expect(value).toBe(false);
			}
			return flag;
		}, "to return false", config.getTimeout());
	});
	
});