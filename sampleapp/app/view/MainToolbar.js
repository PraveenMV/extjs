Ext.define('EXTRD.view.MainToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: ['widget.main-toolbar'],
    width: 500,
    items: [
        {
            // xtype: 'button', // default for Toolbars
            text: 'Button',
            handler : function (){
                alert('hanler');
            }
        },
        {
            xtype: 'splitbutton',
            text : 'Split Button'
        },
        // begin using the right-justified button container
        '->', // same as { xtype: 'tbfill' }
        {
            xtype    : 'textfield',
            name     : 'field1',
            emptyText: 'enter search term'
        },
        // add a vertical separator bar between toolbar items
        '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
        'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
        { xtype: 'tbspacer' },// same as ' ' to create Ext.toolbar.Spacer
        'text 2',
        { xtype: 'tbspacer', width: 50 }, // add a 50px space
        'text 3'
    ]
});