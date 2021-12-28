Ext.define('Books.store.Authors', {
    extend  : 'Ext.data.Store',
    model   : 'Books.model.Author',
    alias   : 'widget.Authors',
    storeId : 'Authors',
    
    /* probe primero con datos hardcodeados
    data : [
        {"name":"Alabama"},
        {"name":"Alaska"},
        {"name":"Arizona"}
    ]
	*/
	
    proxy	: {
        type	: 'ajax',
        url		: '/Books/book/loadAuthors',
        reader: {
            type: 'json',
            root: 'authors',            
        }
    },
    autoLoad: true,
    autoSync: true
  });