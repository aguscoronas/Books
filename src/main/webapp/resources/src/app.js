Ext.application({
	requires: ['Ext.container.Viewport'],
    name: 'Books',
    controllers: ['Book'],
    appFolder : 'resources/src/app',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
			layout: 'fit',            
            items: [
                {
                    xtype: 'booklist'
                }
            ]
        });
    }
});