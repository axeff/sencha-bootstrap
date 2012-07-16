Ext.define("myApp.view.Events", {
    extend: "Ext.Panel",
	alias: "widget.events",
	title: "Aktuelle Aktionen",
    requires: [
    ],

	id: 'events',
   
    config: {
        layout: {
            pack: 'center'
        },
		iconCls: 'home',
        fullscreen: true,
		title: "Home",
        items: 
			[
				{
		            xtype: "titlebar",
		            docked: "top",
					title: "Aktuelle Aktionen",
				},
				{
					xtype: 'spacer',
				},

				
			]
	}
});



