<template> 
<!--sve je u banani-->
<div class="row">
  <div class="col-1"></div>
    <div class="col-7">
 <div class="card">
  <div class="card-header text-left">
    <img src="giraffa.jpg" alt="Avatar" class="avatar">
    Osom
  </div>
  <div class="card-body p-0">
    <img class="card-img-top" src="/giraffa.jpg" alt="giraffa">
  </div>
  <div class="card-footer text-left">
    2 days ago<br>
  <img src="iconmonstr-heart-thin.svg">
  <img src="iconmonstr-speech-bubble-comment-thin.svg" style="margin-left:3px;">
  <div class="form-group">
  <input type="text" class="form-control" id="usr" style="margin-top:3px;margin-bottom:5px;" placeholder="kill me pls">
  <input class="btn btn-primary" type="submit" value="Submit">
</div>
  </div>
</div>
<IG/>
<IG/>
<IG/>
</div>
    <div class="col-3">
      <div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Stories</div>
  <div class="card-body">
   <img src="giraffa.jpg" alt="Avatar" class="avatar1">
   <b>Giraffa</b><br/>
   <p>Two minutes ago</p>
   <img src="giraffa.jpg" alt="Avatar" class="avatar1">
   <b>Giraffa</b><br/>
   <p>Two minutes ago</p>
   <img src="giraffa.jpg" alt="Avatar" class="avatar1">
   <b>Giraffa</b><br/>
   <p>Two minutes ago</p>
   <img src="giraffa.jpg" alt="Avatar" class="avatar1">
   <b>Giraffa</b><br/>
   <p>Two minutes ago</p>
   <img src="giraffa.jpg" alt="Avatar" class="avatar1">
   <b>Giraffa</b><br/>
   <p>Two minutes ago</p>
  </div>
  </div>
    </div>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import IG from '@/components/IG.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    IG
  }
}
</script>
<style lang="scss">
.card{
  margin-bottom:20px;
}
.avatar {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.avatar1 {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float:left;
}
</style>