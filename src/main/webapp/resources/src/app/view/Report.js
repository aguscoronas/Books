Ext.define('Books.view.Report', {
	extend: 'Ext.window.Window',
	alias: 'widget.report',
	title: 'Reporte',
	width: 350,
	layout: 'fit',
	resizable: false,
	closeAction: 'hide',
	modal: true,
	store: 'Books',
	items: [{
		xtype: 'textarea',
		width: 300,
		readOnly: true
	}]
});