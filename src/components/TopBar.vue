<template>
    <v-app-bar style="color: white; background-color: #24182f;" app :elevation="3">
      <v-app-bar-nav-icon />
      <v-toolbar-title>Application Bar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
    </v-app-bar>
</template>
<script>
export default{
    name:'TopBar'
}
</script>
<style></style>