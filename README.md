# vue create instaclone
- Manually
-- Babel
-- Router
-- CSS preprocessor
-- no linter
-- history mode
-- node-sass

# Start the app
yarn serve

# Change the about screen as login
App.vue: About -> Login
router/index.js: about -> login
views: About.vue -> Login.vue

# Install Twitter Bootstrap
https://getbootstrap.com/docs/4.3/getting-started/download/

## public/index.html
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

# Login.vue
	<form>
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="exampleCheck1">
	    <label class="form-check-label" for="exampleCheck1">Check me out</label>
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
	</form>

# Bootstrap grid u Login.vue (pa stavi form u sredinu)

	<div class="container">
	  <div class="row">
	    <div class="col-sm">
	      One of three columns
	    </div>
	    <div class="col-sm">
	      One of three columns
	    </div>
	    <div class="col-sm">
	      One of three columns
	    </div>
	  </div>
	</div>

# Kopiraj Login.vue u Signup.vue

	<template>
	  <div>
	    <h1>This is a signup page</h1>
	    <div class="container">
	      <div class="row mt-5">
	        <div class="col-sm">
	        </div>
	        <div class="col-sm">
	          <form>
	            <div class="form-group">
	              <label for="emailField">Email address</label>
	              <input type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
	              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	            </div>
	            <div class="form-group">
	              <label for="passwordField">Password</label>
	              <input type="password" class="form-control" id="passwordField" placeholder="Password">
	            </div>
	            <div class="form-group">
	              <label for="confirmPasswordField">Confirm Password</label>
	              <input type="password" class="form-control" id="confirmPasswordField" placeholder="Password">
	            </div>
	            <button type="submit" class="btn btn-primary mt-5">Submit</button>
	          </form>
	        </div>
	        <div class="col-sm">
	        </div>
	      </div>
	    </div>
	  </div>
	</template>

# Dodaj signup link u router/index.js i App.vue

# Stavi container/row/col u index.html

# Dodaj site-wide navbar u App.vue

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Navbar</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Link</a>
	      </li>
	      <li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Dropdown
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
	          <a class="dropdown-item" href="#">Action</a>
	          <a class="dropdown-item" href="#">Another action</a>
	          <div class="dropdown-divider"></div>
	          <a class="dropdown-item" href="#">Something else here</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
	      </li>
	    </ul>
	    <form class="form-inline my-2 my-lg-0">
	      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	    </form>
	  </div>
	</nav>

# Zamijeni Home target sa # u /
Primijeti da nam se refresha stranica!

# Zamijeni search sa login/signup
    <button class="btn btn-info my-2 my-sm-0 mr-2" type="submit">Login</button>
    <button class="btn btn-outline my-2 my-sm-0" type="submit">Signup</button>

# Dodaj footer u App.vue

# Kopiraj iz originalnih router linkova u navbar

# Idemo dodati state u App.vue
	<script>
	export default {
	  data () {
	    return {
	      authenticated: false,
	      userEmail: 'fake@email.com',
	      userName: 'Neki user'
	    }
	  }
	}
	</script>

# Izmijeni login button
    <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2" to="/login">Login</router-link>

# Izmijeni authenticated field u true i vidi kako nestane button, pa vrati na false da se pojavi.

# Idemo napraviti fake login, hocemo da na Login stranici button ulogira usera.
# Klik na Submit nam refresha stranicu, sto ne zelimo. Sad cemo mi handlati submit sami.

	<form @submit="onSubmit">

	<script>
	export default {
	  methods: {
	    onSubmit () {
	      console.log("Submittasmo")
	    }
	  }
	}
	</script>

# I dalje refresha stranicu, ovo ce to srediti:

	<form @submit.prevent="onSubmit">

# Nemamo kako doci s Login stranice do podataka o useru. Izvuci cemo nas state u poseban file i dijeliti ga gdje treba (store.js).

	export default {
	    authenticated: false,
	    userEmail: 'fake@email.com',
	    userName: 'Neki user'
	}

# I sad cemo u App.vue vratiti store umjesto in-place objekta:

	<script>
	import store from '@/store.js'

	export default {
	  data () {
	    return store;
	  }
	}
	</script>

# I mozemo u Login.vue promijeniti da pristupamo istim podacima:

<script>
import store from '@/store.js'

	export default {
	  methods: {
	    onSubmit () {
	      store.authenticated = true
	    }
	  }
	}
	</script>

# Ajmo dodati Logout u App.vue navbar:

    <a @click="logout" v-if="authenticated" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>

# Moramo dodati i handler funkciju:

	<script>
	import store from '@/store.js'

	export default {
	  data () {
	    return store;
	  },

	  methods: {
	    logout() {
	      store.authenticated = false
	    }
	  }
	}
	</script>

# Napisat cemo i ime logiranog korisnika u Vue.js:

    <span v-if="authenticated">
      {{ userName }}
      <a @click="logout" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a>
    </span>
