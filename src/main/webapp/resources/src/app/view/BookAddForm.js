Ext.define('Books.view.BookAddForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.bookaddform',
	title: 'Agregar Libro',
	width: 800,
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
			name: 'title',
			fieldLabel: 'Titulo del libro'
		}, {
			xtype: 'combobox',
			store: 'Authors',
			name: 'author',
			fieldLabel: 'Nombre del autor',
			displayField: 'name',
			valueField: 'name'
		}, {
			name: 'price',
			fieldLabel: 'Precio'
		}, {
			name: 'quantity',
			fieldLabel: 'Cantidad'
		}
		]
	}],
	buttons: [{
		text: 'OK',
		action: 'add'
	}, {
		text: 'Reset',
		handler: function() {
			this.up('window').down('form').getForm().reset();
		}
	}, {
		text: 'Cancelar',
		handler: function() {
			this.up('window').close();
		}
	}]
});