Ext.Loader.setConfig({
  disableCaching: false,
  enabled: true,
  paths: {
    'EXTRD': 'app'
  }
});


Ext.application({
   name: 'EXTRD',
   requires :['EXTRD.view.MainToolbar'],
   launch: function() {
    Ext.create('Ext.container.Viewport', {
    layout: 'fit',
    items: [
    {
     title: 'EXTRD',
     xtype : 'main-toolbar'
    }
   ]
  });
 }
});