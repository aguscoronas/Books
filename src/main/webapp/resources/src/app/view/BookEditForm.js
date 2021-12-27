Ext.define('Books.view.BookEditForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.bookeditform',
	title: 'Editar Libro',
	width: 350,
	layout: 'fit',
	resizable: false,
	closeAction: 'hide',
	modal: true,
	config: {
		recordIndex: 0,
		action: ''
	},
	items: [{
		xtype: 'form',
		layout: 'anchor',
		bodyStyle: {
			background: 'none',
			padding: '10px',
			border: '0'
		},
		defaults: {
			xtype: 'textfield',
			anchor: '100%'
		},
		items: [{
			name: 'id',
			fieldLabel: 'Id',
			readOnly: 'true'
		}, {
			name: 'title',
			fieldLabel: 'Titulo del libro'
		}, {
			name: 'author',
			fieldLabel: 'Nombre del autor'
		}, {
			name: 'price',
			fieldLabel: 'Precio'
		}, {
			name: 'quantity',
			fieldLabel: 'Cantidad'
		}]
	}],
	buttons: [{
		text: 'OK',
		action: 'edit'
	}, {
		text: 'Cancelar',
		handler: function() {
			this.up('window').close();
		}
	}]
});