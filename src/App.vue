<script setup></script>

<template>
  <header>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/sign-in">Sign In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/sign-up">Sign Up</a>
      </li>
    </ul>
  </header>

  <main>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>
header {
  padding: 20px;
  background-color: rgb(102, 245, 145);
}

header ul li {
  margin: 5px 15px;
}
header ul li a {
  display: block;
  border: 2px solid rgb(206, 203, 69);
}
header ul li a:hover {
  font-style: italic;
  background-color: rgb(34, 190, 81);
}
main {
  background-color: #343434;
  min-height: calc(100vh - 94px);
  border: 2px solid black;
}
</style>
