<template>
  <div>bar</div>
</template>

<script>
import Service from 'src/services/service' 

export default {
  created () {
  	Service.get('http://test.captain.useonline.cn//mobile/driver/v2/dispatchtasks')
  	.then( (response) => {
  		
  	})
  }
}
</script>

<style>

</style>
