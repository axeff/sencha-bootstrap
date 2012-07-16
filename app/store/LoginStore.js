Ext.define('myApp.store.LoginStore', {
	extend: 'Ext.data.Store',
	config: {
		model: 'myApp.model.User',
		storeId: 'loginStore',
	    proxy: {
	        type: 'ajax',
	        url : config.getServerBaseUrl()+'login.php',
			method: 'POST',
			actionMethods: {
				create : 'POST',
		        read   : 'POST',
		        update : 'POST',
		        destroy: 'POST'
			},
	        reader: {
	            type: 'json',
	            rootProperty: 'response'
	        }
	    },
	    autoLoad: false
	    
	}
});