Ext.define("myApp.view.Cart", {
    extend: "Ext.Panel",
	alias: "widget.cart",
	title: "Warenkorb",
    requires: [
    ],

	id: 'cart',
   
    config: {
        layout: {
            pack: 'center'
        },
		iconCls: 'organize',
        fullscreen: true,
		title: "Warenkorb",
        items: 
			[
				{
		            xtype: "titlebar",
		            docked: "top",
					title: "Ihr Warenkorb",
				},
				{
					xtype: 'spacer',
				},

				
			]
	}
});



