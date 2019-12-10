<template>

      <div class="card text-center">
        <div class="card-header text-left">
          {{info.title}}
        </div>
        <div class="card-body">
          <img class="card-img-top" :src="info.url" alt="Maznusmo s unsplasha i bilo bi lijepo da napisemo cija je slika">
        </div>
        <div class="card-footer text-left">
          <div class="row">
        <div class="col-sm-6">
          {{info.time}}
        </div>
        <div class="col-sm-6">
          {{info.id}}
        </div>
      </div>
      </div></div>
</template>
<script>
export default {
 props: ["info"]
}
</script>
