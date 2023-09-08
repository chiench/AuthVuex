<script setup></script>

<template>
  <div class="wrap">
    <div class="text-center mt-5 header">
      <h2>Sign in right now</h2>
      <p>
        If you haven't already account ?
        <a class="ml-2" href="/sign-up">Sign Up </a>here.
      </p>
    </div>
    <div class="main">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group mb-2">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share and expose your password with anyone
                else.</small
              >
            </div>

            <button type="submit" class="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  font-family: monospace, sans-serif, serif;
}

.card {
  margin: 5% 15%;
  padding: 4% 15%;
}
.header {
  color: #ffffff;
}
a,
a:link {
  color: #a66;
  text-decoration: underline;
}
a:hover {
  text-decoration: none;
  font-style: oblique;
}
</style>
