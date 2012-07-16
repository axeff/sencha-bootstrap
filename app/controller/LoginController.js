Ext.define('myApp.controller.LoginController', {
    extend: 'Ext.app.Controller',
	
    config: {
		refs: {
			submit: '#submitButton',
			form: '#loginForm'
		},
		control: {

			submit: {
				tap: 'doLogin'
			},
		


        },

			//             stores: [
			//                 'LoginStore',
			// 'UsersStore'
			//             ],
    },


    doLogin: function() {

		var users = Ext.StoreManager.lookup('usersStore');
		users.submit(this.getForm(), function(results){
			console.log("logged in with ", results);
			Ext.Viewport.setActiveItem(Ext.create('myApp.view.Events'));
		});

    }

});
