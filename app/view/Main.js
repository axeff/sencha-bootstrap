Ext.define("myApp.view.Main", {
    extend: "Ext.Container",
    fullscreen: true,
    requires: [
        "Ext.Toolbar",
    ],

    alias: "widget.newslistview",


    
    config: {
        itemCls: "MainView",
        layout: {
            type: 'fit'
        },
        
        items: 
			[
				{
		            xtype: "toolbar",
		            docked: "top",
					title: "Main"
				}
			]
	}
});