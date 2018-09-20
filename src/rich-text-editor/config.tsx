export const RichTextEditorSampleOrder:Object = [
    { 'path': 'rich-text-editor/tools', 'component':'Overview', 'name': 'Overview','type':'update', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","toolbarSettings","showCharCount","actionBegin","actionComplete","maxLength","appendTo"] }' },
    { 'path': 'rich-text-editor/rich-text-editor', 'component':'Default', 'name': 'Default Functionalities', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","appendTo"] }' },
    { 'path': 'rich-text-editor/image', 'component':'ImageSample', 'name': 'Image', 'type':'update', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","quickToolbarSettings","toolbarClick","appendTo","getRange"] }' },
    { 'path': 'rich-text-editor/inline', 'component':'Inline', 'name': 'Inline', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","inlineMode","toolbarSettings","format","fontFamily","appendTo","dataBind"] }' },
    { 'path': 'rich-text-editor/iframe', 'component':'IFrame', 'name': 'IFrame', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","height","iframeSettings","toolbarSettings","actionBegin","actionComplete","appendTo"] }' },
    { 'path': 'rich-text-editor/print', 'component':'Print', 'name': 'Print', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","toolbarSettings","print","appendTo"] }' },
    { 'path': 'rich-text-editor/ajax-load', 'component':'AjaxContent', 'name': 'Ajax Content', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","value","appendTo"] }' },
    { 'path': 'rich-text-editor/api', 'component':'RTEApi', 'name': 'API', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","showCharCount","maxLength","appendTo","readonly","enabled","enableHtmlEncode","value","getSelection","selectAll"] }' },
    { 'path': 'rich-text-editor/client-side-events', 'component':'RTEEvents', 'name': 'Events', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","toolbarSettings","created","actionBegin","actionComplete","focus","blur","change","toolbarClick","appendTo"] }' },
    { 'path': 'rich-text-editor/blog-posting', 'component':'Forums', 'name': 'Use Case', 'order': '01', 'category': 'RichTextEditor', 'api':'{"RichTextEditorComponent":["Inject","placeholder","value","dataBind","refresh","appendTo"] }' },
    { 'path': 'rich-text-editor/types', 'component':'Type', 'name': 'Type', 'order': '02', 'category': 'Toolbar', 'api':'{"RichTextEditorComponent":["Inject","floatingToolbarOffset","toolbarSettings","actionBegin","actionComplete","dataBind","appendTo"] }' },
    { 'path': 'rich-text-editor/custom-toolbar', 'component':'CustomTool', 'name': 'Custom Tool', 'order': '02', 'category': 'Toolbar', 'api':'{"RichTextEditorComponent":["Inject","toolbarSettings","value","created","appendTo"] }' },
    { 'path': 'rich-text-editor/markdown-editor', 'component':'MarkDown', 'name': 'Overview', 'order': '03', 'category': 'Markdown Editor', 'api':'{"RichTextEditorComponent":["Inject","toolbarSettings","height","created","disableToolbarItem","enableToolbarItem","editorMode","appendTo"] }' },
    { 'path': 'rich-text-editor/markdown-editor-preview', 'component':'Preview', 'name': 'Preview', 'order': '03', 'category': 'Markdown Editor', 'api':'{"RichTextEditorComponent":["Inject","toolbarSettings","height","created","disableToolbarItem","enableToolbarItem","editorMode","actionBegin","appendTo"] }' },
    { 'path': 'rich-text-editor/markdown-editor-custom-format', 'component':'CustomFormat', 'name': 'Custom Format', 'order': '03', 'category': 'Markdown Editor', 'api':'{"RichTextEditorComponent":["Inject","toolbarSettings","height","created","disableToolbarItem","enableToolbarItem","editorMode","formatter","appendTo"] }' }
]
