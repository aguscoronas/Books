Ext.define('Books.view.BookList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.booklist',
	title: 'Libros',
	store: 'Books',
	initComponent: function() {
		this.tbar = [{
			xtype: 'button',
			text: 'Agregar',
			action: 'add',
			icon: 'resources/src/image/book_add.png'
		},
		{
			xtype: 'button',
			text: 'Borrar',
			action: 'delete',
			icon: 'resources/src/image/book_delete.png'
		},
		{
			xtype: 'button',
			text: 'Editar',
			action: 'edit',
			icon: 'resources/src/image/book_edit.png'
		},
		{
			xtype: 'button',
			text: 'Generar reporte',
			action: 'report',
			icon: 'resources/src/image/report.png'
		}];
		this.columns = [
			{ header: 'Id', dataIndex: 'id', flex: 1 },
			{ header: 'Titulo', dataIndex: 'title', flex: 1 },
			{ header: 'Autor', dataIndex: 'author', flex: 1 },
			{ header: 'Precio', dataIndex: 'price', flex: 1 },
			{ header: 'Cantidad', dataIndex: 'quantity', flex: 1, sortable: false },
			{ text: 'Reporte',
			  xtype: 'actioncolumn',
			  items: [{
					xtype: 'button',
					action: 'report',
					scale: 'small',
					icon: 'resources/src/image/report.png',
					handler: function(view, rowIndex, colIndex, item, e, record, row) {
     				   		this.fireEvent('itemClick', view, rowIndex, colIndex, item, e, record, row, 'report');
    						}							
					}]}
		];
		this.callParent(arguments);
	}

});