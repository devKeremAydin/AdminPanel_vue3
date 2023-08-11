<template>
    <div class="dashboard">
        <v-subheader class="d-flex justify-space-between align-center">
            <h3 style="color: #827e7e;">Dashboard</h3>
            <v-btn color="success" class="rounded-lg">View Orders</v-btn>
        </v-subheader>
        <v-row>
            <v-col color="" lg="6" cols="10">
                <v-alert  dense text type="success"><strong>Login Successfully:</strong> Good Morning <strong> Kerem</strong> Welcom to Panel</v-alert>
                
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "DashBoard",
    
}
</script>

<style></style>