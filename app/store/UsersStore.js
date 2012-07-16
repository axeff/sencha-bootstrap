//our Store automatically picks up the LocalStorageProxy defined on the User model
Ext.define('myApp.store.UsersStore', {
	extend: 'Ext.data.Store',
	config: {
		model: "myApp.model.User",
		storeId: "usersStore"
	},
	//empty the store
	empty: function(success){
		var _this = this;
		if (this.data.all.length){
			for (var i = 0; i<= this.data.all.length-1; i++){
				_this.data.all[i].erase({
					success: function(){
						if (i === _this.data.all.length-1){
							_this.load(function(records){
								success(records);
							});
						}
						
					}
				});
			}
		}else{
			_this.load(function(records){
				success(records);
			});
		}
	},
	submit: function(form, success){
		var users = this;
		form.submit({
		    url: config.getServerBaseUrl()+'login.php',
		    method: 'POST',
		    success: function(form, result) {
				//get a reference to the UsersStore
				users.load(function(){
					users.empty(function(){
						var user = Ext.create('myApp.model.User', result.response);
						user.save({
							success: function(){
								//show different view
								success(result.response);
							}
						});
					});
					
				});
		    }
		});
	},

	isLogged: function(){
		var returnVal = false;
		this.load(function(results){
			if (typeof results == "object" && results.length > 0){
				if (results[0].data.loginKey.length > 0)
					returnVal = true;
			}
		});
		return returnVal;
	}
});