<template>
  <v-app-bar style="color: white; background-color: #24182f;" app :elevation="3">
    <v-app-bar-nav-icon @click="menuClick" />
    <v-toolbar-title>Application Bar</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-col lg="5" cols="12">
      <v-form>
        <v-text-field
          style="color: black; background-color: #FFFFFF; border-radius: 50px; transform: scaleY(0.78);"
          hide-details
          single-line
          placeholder="Search Here"
        ></v-text-field>
      </v-form>
    </v-col>
    <v-spacer></v-spacer>
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <span class="mx-5 mr-10" style="cursor: pointer" v-bind="props" v-on="on">
          <v-badge content="5" color="red">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
      </template>

      <v-list :items="items" item-props lines="three" style="max-width: 300px; max-height: 400px;">
        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-menu>
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <span style="cursor: pointer" v-bind="props" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="27" offset-x="">
              <v-avatar size="40">
                <v-img src="https://avatars.githubusercontent.com/u/64500329?v=4" />
              </v-avatar>
            </v-badge>
            <span class="ml-3">Kerem Aydın</span>
          </v-chip>
        </span>
      </template>

      <!-- diğer tarafta 55-->

      <v-list width="250" class="py-0">
        <v-list-item two-line>
          <v-row>
  <v-col cols="auto">
    <v-list-item-avatar>
      <img src="https://avatars.githubusercontent.com/u/64500329?v=4" style="max-width: 100px;" />
    </v-list-item-avatar>
  </v-col>
  <v-col>
    <v-list-item-content>
      <v-list-item-title>
        mdksalmds
      </v-list-item-title>
      <v-list-item-title>
        mdksalmds
      </v-list-item-title>
      <v-list-item-title>
        mdksalmds
      </v-list-item-title>
      <v-list-item-title>
        mdksalmds
      </v-list-item-title>
      
    </v-list-item-content>
  </v-col>
</v-row>


          <v-list-item-content>
            <v-list-item-title>Kerem Aydın</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item link v-for="(menu, i) in menus" :key="i">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>


    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TopBar',
  emits: ['menu-click'], // Emit event to parent
  methods: {
    menuClick() {
      this.$emit('menu-click'); // Emit the event
    },
  },
  data: () => ({
    items: [
      { type: 'subheader', title: 'Today' },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ],
  }),
};
</script>

<style></style>
