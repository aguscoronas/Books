Ext.define('Books.model.Book', {
    extend: 'Ext.data.Model',
    fields: [
      {name: 'id', type: 'int'},
      {name: 'title', type: 'string'},
      {name: 'author',  type: 'string'},
      {name: 'price', type: 'int'},
      {name: 'quantity',  type: 'int'}
    ]
});