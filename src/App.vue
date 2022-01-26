<template>
    <v-app>
        <v-navigation-drawer color="surface" v-if="$vuetify.breakpoint.mdAndUp && !root" :permanent="$vuetify.breakpoint.mdAndUp" mini-variant-width="80" v-model="drawer" :mini-variant="mini" app>
            <v-list-item class="ma-1">
                <v-list-item-avatar>
                    <v-app-bar-nav-icon color="onSurface" class="hidden-sm-and-down" icon @click="miniDrawer()">
                        <v-icon>
                            {{ this.root ? 'arrow_back' : this.mini ? 'menu' : 'menu_open' }}
                        </v-icon>
                    </v-app-bar-nav-icon>
                </v-list-item-avatar>
            </v-list-item>

            <v-list rounded>
                <v-list-item-group class="pa-1" active-class="secondaryContainer text--onSecondaryContainer">
                    <v-list-item :to="item.to" v-for="(item, i) in items" :key="i">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="font-weight-medium">{{ $vuetify.lang.t(`$vuetify.${item.translation}`) }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar v-scroll="onScroll" :color="appBarBackground" flat height="64px" app>
            <v-app-bar-nav-icon v-if="root" color="onSurface" class="hidden-sm-and-down" icon @click="goBack()">
                <v-icon>
                    arrow_back
                </v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title class="text--onSurface text-h5 hidden-sm-and-down font-weight-bold">
                {{ $vuetify.lang.t(`$vuetify.${this.$route.meta.title}`) }}
            </v-toolbar-title>

            <v-app-bar-nav-icon color="onSurface" @click="goBack()" class="hidden-md-and-up" icon>
                <v-icon>
                    {{ this.root ? 'arrow_back' : ' undefined' }}
                </v-icon>
            </v-app-bar-nav-icon>

            <v-toolbar-title v-if="root" class="text--onSurface text-h5 ms-2 hidden-md-and-up font-weight-bold">
                {{ $vuetify.lang.t(`$vuetify.${this.$route.meta.title}`) }}
            </v-toolbar-title>
            <v-spacer>
                <v-toolbar-title v-if="!root" class="text--onSurface text-h5 flex text-center hidden-md-and-up font-weight-bold">
                    {{ $vuetify.lang.t(`$vuetify.${this.$route.meta.title}`) }}
                </v-toolbar-title>
            </v-spacer>

            <v-chip v-if="$vuetify.breakpoint.mdAndUp" style="border-radius: 8px !important; border-width: thin; border-color: var(--v-outline-base) !important; border-style: solid;" class="primaryContainer font-weight-medium">
                {{ $vuetify.lang.t(`$vuetify.app.bage.title`) }}
            </v-chip>

            <v-menu v-if="$vuetify.breakpoint.smAndDown">
                <template v-slot:activator="{ on: menu, attrs }">
                    <v-btn icon color="onSurface" class="mx-1" v-bind="attrs" v-on="{ ...menu }">
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                </template>
                <v-list class="elevation2" color="text--onSurface">
                    <v-list-item v-ripple v-for="(item, i) in menus" @click="call(item.action)" :key="i">
                        <v-list-item-icon>
                            <v-icon color="onSurface">{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title class="font-weight-medium">{{ $vuetify.lang.t(`$vuetify.${item.translation}`) }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <div v-if="$vuetify.breakpoint.mdAndUp">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="mx-1" color="onSurface" @click="dialog = !dialog" icon v-bind="attrs" v-on="on">
                            <v-icon>settings</v-icon>
                        </v-btn>
                    </template>
                    <span>{{ $vuetify.lang.t(`$vuetify.app.appbar.settings`) }}</span>
                </v-tooltip>

                <v-menu content-class="elevation-4" left>
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-btn icon color="onSurface" class="mx-1" v-bind="attrs" v-on="{ ...menu }">
                            <v-icon>help_outline</v-icon>
                        </v-btn>
                    </template>
                    <v-list class="elevation2" color="text--onSurface">
                        <v-list-item :href="!item.isRouterUrl ? item.href : null" :to="item.isRouterUrl ? item.href : null" v-for="(item, i) in help" :key="i">
                            <v-list-item-icon>
                                <v-icon color="onSurface">{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title class="font-weight-medium">{{ $vuetify.lang.t(`$vuetify.${item.translation}`) }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu content-class="elevation-4" left>
                    <template v-slot:activator="{ on: menu, attrs }">
                        <v-btn icon color="onSurface" class="mx-1" v-bind="attrs" v-on="{ ...menu }">
                            <v-icon>translate</v-icon>
                        </v-btn>
                    </template>
                    <v-list class="elevation2" color="text--onSurface">
                        <v-list-item v-for="(item, i) in lang" @click="changeLocale(item.value)" :key="i">
                            <v-list-item-icon>
                                <v-icon color="onSurface">{{ $vuetify.lang.current == item.value ? 'done' : '' }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-title class="font-weight-medium">{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-app-bar>

        <v-bottom-navigation v-if="!root" active-class="v-icon-act" shift grow class="hidden-md-and-up m3-navigation-bar" app>
            <v-btn class="text--onSurface" v-for="nav in items" :key="nav.title" :to="nav.to">
                <span>{{ $vuetify.lang.t(`$vuetify.${nav.translation}`) }}</span>
                <v-icon>{{ nav.icon }}</v-icon>
            </v-btn>
        </v-bottom-navigation>

        <v-main class="surface">
            <v-container fluid>
                <v-fade-transition leave-absolute>
                    <router-view></router-view>
                </v-fade-transition>
            </v-container>
        </v-main>
        <SettingsDialog v-model="dialog" />
        <HelpDialog v-model="info" />
        <LanguageDialog v-model="language" />
    </v-app>
</template>

<script>
    import HelpDialog from "./components/HelpDialog.vue";
    import LanguageDialog from "./components/LanguageDialog.vue";
    import SettingsDialog from "./components/SettingsDialog.vue";

    export default {
        components: {
            SettingsDialog,
            HelpDialog,
            LanguageDialog,
        },
        watch: {
            $route(to) {
                this.$vuetify.goTo(0);
                this.isRoot(to.name);
                document.title = this.$vuetify.lang.t(`$vuetify.${this.$route.meta.title}`) + " | Argente" || "Argente";
            },
        },
        data() {
            return {
                drawer: false,
                dialog: false,
                info: false,
                language: false,
                menu: false,
                root: true,
                appBarBackground: "surface",
                isAppBarCollapsed: false,
                mini: true,
                values: ["Home", "Icons", "Documentation"],
                items: this.$const.NAVIGATION_ITEMS,
                menus: this.$const.APP_BAR_ITEMS,
                help: this.$const.HELP_ITEMS,
                lang: this.$const.LANGUAGE_ITEMS,
            };
        },
        mounted() {
            this.$vuetify.theme.dark = localStorage.getItem("dark_theme") == "true";
            localStorage.getItem("language") === null ? localStorage.setItem("language", "en") : (this.$vuetify.lang.current = localStorage.getItem("language"));
            document.title = this.$vuetify.lang.t(`$vuetify.${this.$route.meta.title}`) + " | Argente" || "Argente";
        },
        methods: {
            isRoot(value) {
                this.values.includes(value) ? (this.root = false) : (this.root = true);
            },
            call(action) {
                this[action]();
            },
            openSettings() {
                this.dialog = true;
            },
            openInfo() {
                this.info = true;
            },
            openLanguage() {
                this.language = true;
            },
            changeLocale(value) {
                this.$vuetify.lang.current = value;
                document.title = this.$vuetify.lang.t(`$vuetify.${this.$route.meta.title}`) + " | Argente" || "Argente";
                localStorage.setItem("language", value);
            },
            miniDrawer() {
                this.root ? (window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/")) : (this.mini = !this.mini);
            },
            goBack() {
                this.root ? (window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/")) : "";
            },
            onScroll(e) {
                if (typeof window === "undefined") return;
                const top = window.pageYOffset || e.target.scrollTop || 0;
                this.scroll_fab = top > 100;
                if (top > 1) {
                    this.appBarBackground = "elevation4";
                    this.isAppBarCollapsed = true;
                } else {
                    this.isAppBarCollapsed = false;
                    this.appBarBackground = "surface";
                }
            },
        },
        created() {
            this.isRoot(this.$route.name);
        },
    };
</script>

<style scoped>
    @import "../src/assets/global.css";
</style>
