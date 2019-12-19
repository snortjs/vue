<template>
  <div class="row">
    <div class="col-8">

      <div v-if="authenticated">
         <form @submit.prevent="postNewImage" class="form-inline mb-5">
 <div class="form-group">
 <label for="imageUrl">Image URL</label>
 <input v-model="newImageUrl" type="text" class="form-control ml-2"
id="imageUrl" placeholder="Enter the image URL">
 </div>
 <button type="submit" class="btn btn-primary ml-2">Post image</button>
 
 </form>
 <div>
<input type="file" id="files" name="files[]" multiple />
<button v-on:click="uploadFile()">Pohrani</button>
</div>
<button v-on:click="ok()">Prikazi</button>
<InstagramCard :key="card.id" :info="card" v-for="card in filteredCards" />
      </div>

    </div>
    <div class="col-4">
      Trazimo sljedece: {{ searchTerm }}
    </div>
  </div>
</template>

<script>
import InstagramCard from '@/components/InstagramCard.vue'
import store from '@/store.js'
import firebase from 'firebase';
import * as firebase1 from 'firebase/app';

export default {
  data () {
    return store;
  
  },
  computed: {
    filteredCards () {
      // let filtered = []
      // for(let card of this.cards) {
      //   if (card.title.includes(this.searchTerm)) {
      //     filtered.push(card)
      //   }
      // }
      // return filtered;
      return this.cards.filter(card => card.title.includes(this.searchTerm));
    }
  },
  name: 'home',
  components: {
    InstagramCard
  },
 methods: {
 postNewImage() {
db.collection("posts").add({
 url: this.newImageUrl,
 email: this.userEmail,
 posted_at: Date.now()
 })
 },
   uploadFile(){
      var storage = firebase.storage();

      var file = document.getElementById("files").files[0];
      console.log(file);
      var storageRef = firebase.storage().ref();
      var thisRef = storageRef.child("oof/"+file.name);
      thisRef.put(file).then(function(snapshot) {
      console.log('Uploadano');
      });
    },
  ok(){
    var storageRef = firebase1.storage().ref("oof");
storageRef.listAll().then(function(result) {
  result.items.forEach(function(imageRef) {
    displayImage(imageRef);
  });
}).catch(function(error) {
});

function displayImage(imageRef) {
  imageRef.getDownloadURL().then(function(url) {
    console.log(url)
  }).catch(function(error) {
  });
}
  }
}
}
</script>

<style lang="scss">

.card-body {
  padding: 0px;
}

img:hover {
  cursor: pointer;
}

</style>