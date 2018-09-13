# vue-busy-state-mixin

This is a simple mixin which should help implementing some king of loading state while a component is doing someting. The implementation is based on Promises. So the example below on how it works.

## Installation

```bash
yarn add vue-busy-state-mixin
```

## Example

```html
<template>
  <div>
    <template v-if="isBusy">I'm working!</template> 
  </div>
</template>

<script>
  import busyState from 'vue-busy-state-mixin'

  export default {
    name: 'App',
    mixins: [busyState],
    mounted() {
      this.do(this.work)
        .then(() => {
          // work is done
        })
        .catch(() => {
          // something went wrong while working
        })
    },
    methods: {
      work() {
        return new Promise((resolve) => {
          setTimeout(() => {
              resolve()            
          }, 1000)
        })
      }
    }
  }
</script>
```
