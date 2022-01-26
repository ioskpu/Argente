<template>
    <div>
        <v-navigation-drawer color="surface" v-model="drawer" right temporary app>
            <v-app-bar height="64px" fixed flat color="elevation3">
                <v-btn color="onSurface" @click="drawer = !drawer" icon>
                    <v-icon>chevron_right</v-icon>
                </v-btn>
                <v-toolbar-title class="text--onSurface text-h5 font-weight-bold">{{ $vuetify.lang.t(`$vuetify.app.appbar.filter`) }}</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-app-bar>
            <v-container>
                <v-list class="mt-14" nav dense>
                    <v-list-item-group v-model="selectedTag" mandatory active-class="primaryContainer text--onPrimaryContainer">
                        <v-list-item @click.stop="drawer = !drawer" v-for="(item, i) in tags" :key="i">
                            <v-list-item-content>
                                <v-list-item-title>{{ $vuetify.lang.t(`$vuetify.${item}`) }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-container>
        </v-navigation-drawer>
        <v-alert type="info" text icon="info">{{ $vuetify.lang.t(`$vuetify.app.icons.bannerAnimation`) }}</v-alert>
        <v-text-field rounded filled flat clearable v-model="search" background-color="elevation2" :placeholder="$vuetify.lang.t(`$vuetify.app.appbar.searchIcons`)" prepend-inner-icon="search" hide-details></v-text-field>
        <Icon :filter="this.search" :position="this.selectedTag" :load="this.items" />
        <v-btn elevation="2" :class="[{ padd: !this.$vuetify.breakpoint.mdAndUp == true }]" @click="drawer = true" class="rounded" fab color="primaryContainer" fixed right bottom>
            <v-icon color="onPrimaryContainer">filter_list</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import Icon from "@/components/Icon.vue";

    export default {
        components: {
            Icon,
        },
        data() {
            return {
                drawer: false,
                search: "",
                items: [],
                selectedTag: 0,
                tags: this.$const.FILTER_ITEMS,
            };
        },
        created() {
            fetch(`${this.$const.BASE_URL}icons.json`)
                .then((response) => response.json())
                .then((data) => (this.items = data));
        },
    };
</script>

<style scoped>
    .padd {
        margin-bottom: 80px;
    }
</style>
