<template>
  <v-app>
    <TopBar @menu-click="toggleSidebar" />
    <SideBar :drawerVisible="showSidebar" @update:drawerVisible="showSidebar = $event" />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import TopBar from './components/TopBar.vue';
import SideBar from './components/SideBar.vue';

const cards = ['Today', 'Yesterday'];
const showSidebar = ref(true);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
}
</script>

<style>

</style>
