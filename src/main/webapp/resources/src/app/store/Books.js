Ext.define('Books.store.Books', {
    extend  : 'Ext.data.Store',
    model   : 'Books.model.Book',        
    alias   : 'widget.Books',
    storeId : 'Books',

    proxy	: {
        type	: 'ajax',
        url		: '/Books/book/loadBooks',
        reader	: {
            type	: 'json',
            root	: 'books'
        }
    },
    autoLoad: true,
    autoSync: true
  });