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
	}
});