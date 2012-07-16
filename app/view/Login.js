Ext.define("myApp.view.Login", {
    extend: "Ext.form.Panel",
    fullscreen: true,
    requires: [
        "Ext.Toolbar",
		"Ext.field.Text",
		"Ext.field.Password",
		"Ext.form.FieldSet"
    ],

	id: 'loginForm',
   
    config: {
        itemCls: "LoginView",
        layout: {
            pack: 'center'
        },
        fullscreen: true,
        items: 
			[
				{
		            xtype: "toolbar",
		            docked: "top",
					title: "Login"
				},
				{
					xtype: 'spacer',
				},
				{
					xtype: 'fieldset',
		            title: 'Bitte geben Sie Ihre Daten an!',
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
				},
				{
		            xtype: 'button',
		            text: 'Login',
					id: "submitButton"
		        },
				
			]
	}
});