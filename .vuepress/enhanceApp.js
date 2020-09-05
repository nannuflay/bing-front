// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import Vue from 'vue'
import VueFroala from 'vue-froala-wysiwyg'
import editor from './theme/components/editorLayout'

Vue.use(VueFroala)

export default ({ // the options for the root Vue instance
  router, // the router instance for the app
 // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements to the app
  router.addRoutes([
    { path: '/editor', component: editor },
  ]);
}
