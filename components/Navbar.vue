<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" style="text-decoration: none;" class="font-weight-bold">
      <b-navbar-brand to="/">
        Nuxt PWA
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav class="text-white">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto text-white">
          <b-nav-item class="link">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </b-nav-item>
          <b-nav-item class="link">
            <nuxt-link to="/about">
              About
            </nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link to="/todo">
              Todo
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.link{
  text-decoration: none !important;
}
</style>
