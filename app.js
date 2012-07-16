// Disable Cache because PhoneGap + Caching Mechanism of Sencha 2 won't work on Android > 3.x
// At the proxy that request the local file set the properties
// noCache: false, enablePagingParams: false,
Ext.Loader.setConfig({ disableCaching: false });



//Defining a global config-object
//properties are available as getters()
//example: 
//
// config: {
// 	timeout: 5000
// }
// is availabe as config.getTimeout()

Ext.define('Config', {
    config: {
        serverBaseUrl: 'http://localhost/msb-dummy/',
		timeout: 5000
    },

    constructor: function(config) {
        this.initConfig(config);

        return this;
    }
});

var config = new Config();



//Bootstrap for Application
Ext.application({
    name: 'myApp',

    requires: [
   
    ],

    views: [
		'Login',
		'Main',
		'Events',
		'Cart'
	],
	models: [
		'User'
	],
	controllers: [
		'LoginController',
	],
	stores: [
		'UsersStore',
		'LoginStore'
	],
	// Give the Ext.Viewport global instance a custom layout and animation
    viewport: {
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 300
            }
        }
    },

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {

	
        
		try{
			// Destroy the #appLoadingIndicator element
		   Ext.fly('appLoadingIndicator').destroy();
		}catch(e){
			
		}

		//check if user is loggedin already
		var users = Ext.StoreManager.lookup('usersStore');
		//if (users.isLogged())
			// Initialize the Events view
			Ext.create('myApp.view.Main');
		//else
			// Initialize the Login view
		//	Ext.create('myApp.view.Login');
        
        

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
