<template>
  <!-- 반응형 추가 -->
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <div class="ml-8 w-40"><v-img src="/public/logo.svg"></v-img></div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container class="w-full h-full">
        <slot></slot>
      </v-container>
    </v-main>
    <v-navigation-drawer
      location="right"
      temporary
      :mini-variant="miniVariant"
      v-model="drawer"
      fixed
      :clipped="clipped"
    >
      <v-list>
        <!-- TODO: Nuxt link로 바꿀것 -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-spacer />
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Board",
          to: "/board",
        },
        {
          icon: "mdi-login",
          title: "로그인",
          to: "/login",
        },
        {
          icon: "mdi-acount",
          title: "회원가입",
          to: "/signup",
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
