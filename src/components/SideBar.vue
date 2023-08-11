<template>
  <v-navigation-drawer v-model="localDrawer" app style="background-color: #24182f;">
    <v-img src="">
      <div class="text-center">
        <v-avatar class="mt-4" size="64">
          <v-img src="https://avatars.githubusercontent.com/u/64500329?v=4"></v-img>
        </v-avatar>
        <h3 style="color: white;">krmydn7@gmail.com</h3>
      </div>
    </v-img>

    <v-divider></v-divider>

    <v-list>
      <v-list-item style="color: white;" v-for="[icon, text] in links" :key="icon" :prepend-icon="icon" :title="text" link></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'SideBar',
  props: {
    drawerVisible: Boolean // Görünürlük durumunu almak için prop tanımla
  },
  computed: {
    localDrawer: {
      get() {
        return this.drawerVisible;
      },
      set(val) {
        // Kapatma işlemini App.vue üzerinden yönet
        if (!val) {
          this.$emit('update:drawerVisible', val);
        }
      }
    }
  },
  data(){
    return{
      links: [
        ["mdi-microsoft-windows", "Dashboard"],
        ["mdi-account", "Profile"],
        ["mdi-clipboard-list-outline", "Products"],
        ["mdi-card-account-details-outline", "Orders"],
        ["mdi-cog", "System Setting"],
      ],
    }
  }
}
</script>
<style></style>
