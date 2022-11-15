<script setup lang="ts">
import { ref } from "vue";
import router from "../router";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserCredential } from "firebase/auth";

const error = ref("");
const user_email = ref("");
const user_password = ref("");

const signIn = (email: string, password: string) => {
  // we also renamed this method
  signInWithEmailAndPassword(auth, email, password) // THIS LINE CHANGED
    .then((data: UserCredential) => {
      alert(JSON.stringify(data.user.toJSON()));
      localStorage.setItem("user", JSON.stringify(data.user.toJSON()));
      console.log("Successfully logged in!");
      router.push("/"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" required autofocus
                    v-model="user_email" />
                </div>
              </div>
              <br />
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" required
                    v-model="user_password" />
                </div>
              </div>

              <div class="form-group row mb-0">
                <p></p>
                <div class="col-md-8 offset-md-4">
                  <a class="btn btn-primary" v-on:click="signIn(user_email, user_password)">Login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
