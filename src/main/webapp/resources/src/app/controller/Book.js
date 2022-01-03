Ext.define('Books.controller.Book', {
	extend: 'Ext.app.Controller',

	views: [
		'BookList', 'BookAddForm', 'BookEditForm', 'Report'
	],
	stores: [
		'Books',
		'Authors'
	],
	models: [
		'Book',
		'Author'
	],

	init: function() {
		this.control({
			'booklist > toolbar > button[action=add]': {
				click: this.showAddForm
			},
			'booklist > toolbar > button[action=edit]': {
				click: this.showEditForm
			},
			'booklist > toolbar > button[action=delete]': {
				click: this.deleteBook
			},
			'booklist > toolbar > button[action=report]': {
				click: this.showReportForm
			},
			'actioncolumn': {
             itemClick: this.onActionColumnItemClick
	         },
			'bookaddform button[action=add]': {
				click: this.doAddBook
			},
			'bookeditform button[action=edit]': {
				click: this.editBook
			}
		})
	},
	showAddForm: function() {
		var win = Ext.widget('bookaddform');
		win.setTitle('Agregar Libro');
		win.setAction('add');
		win.down('form').getForm().reset();
		win.show();
	},
	showEditForm: function(button) {
		var win = Ext.widget('bookeditform');
		var toolbar = button.up('toolbar'),
			booklist = toolbar.up('booklist'),
			selectionModel = booklist.getSelectionModel(),
			record = selectionModel.getSelection();
		if (record[0] == null) {
			Ext.Msg.alert('Info', 'Primero se debe seleccionar algun libro para editarlo');
			return;
		} else {
			win.setTitle('Editar Libro');
			win.setAction('edit');
			win.down('form').getForm().setValues(record[0].getData());
			win.show();
		}
		selectionModel.deselectAll();
	},
	showReportForm: function(button) {
		var win = Ext.widget('report'),
		text = win.down('textarea');
		var store = Ext.getStore('Books');
		var numberOfBooksInStore = store.count();
		text.setValue('La base de datos tiene ' + numberOfBooksInStore + " libros.");		
		win.show();

	},
	doAddBook: function(button) {
		var win = button.up('window'),
			form = win.down('form'),
			values = form.getValues();

		Ext.Ajax.request({
			url: '/Books/book/save',
			method: 'POST',
			jsonData: values,
			success: function(response) {
				var store = Ext.getStore('Books');
				store.load();
			},
			failure: function(response) {
				Ext.Msg.alert('Status', 'Fallo la peticion.');
			}
		});
		win.close();
	},
	onActionColumnItemClick : function(view, rowIndex, colIndex, item, e, record, row) {
    alert("Libro " + record.get('title') + " escrito por " + record.get('author'));
	},
	deleteBook: function(button) {
		var toolbar = button.up('toolbar'),
			booklist = toolbar.up('booklist'),
			selectionModel = booklist.getSelectionModel(),
			record = selectionModel.getSelection();

		if (record[0] == null) {
			Ext.Msg.alert('Info', 'Primero se debe seleccionar algun libro para borrarlo');
			return;
		} else {
			var bookToDelete = record[0].getData();
			Ext.Ajax.request({
				url: '/Books/book/delete',
				method: 'DELETE',
				jsonData: bookToDelete,
				success: function(response) {
					var store = Ext.getStore('Books');
					store.load();
				},
				failure: function(response) {
					Ext.Msg.alert('Status', 'Fallo la peticion.');
				}
			});
		}
	},
	editBook: function(button) {
		var win = button.up('window');
		var values = win.down('form').getValues();
		Ext.Ajax.request({
			url: '/Books/book/updateBook',
			method: 'POST',
			jsonData: values,
			success: function(response) {
				var store = Ext.getStore('Books');
				store.load();
			},
			failure: function(response) {
				Ext.Msg.alert('Status', 'Request Failed.');
			}
		});
		win.close();
	}
});