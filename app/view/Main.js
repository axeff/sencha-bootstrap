/*
 * @class App.view.Main
 * @extends Ext.TabPanel
 * @docs http://docs.sencha.com/touch/2-0/#!/api/Ext.tab.Panel
 *
 * The Main view is the application's shell; it calls the other tab panels
 * This app only uses a TabPanel so we use a fullscreen card layout here. 
 */

Ext.define('myApp.view.Main', {
    extend  : 'Ext.TabPanel', 
	alias: "widget.main",
    requires: [
        'myApp.view.Events',
		'myApp.view.Cart',
    ],
    config: {
        fullscreen      : true,
        tabBarPosition  : 'bottom',
        items: [
            {
				xtype: 'events',
			},
			{
				xtype: 'cart',
			}
        ]
    }
});