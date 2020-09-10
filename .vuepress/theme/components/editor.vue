<template>
    <div id="app">
        <jodit-editor :config="config" />
    </div>
</template>
 
<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'
 
export default {
    name: 'app',
 
    components: { JoditEditor },
 
    data () {
        return {
            config: {
              height: 560,
              width:1050,
              placeholder: 'make your own article...',
            }
        }
    }
}
</script>