<template>
    <v-dialog transition="fade-transition" v-model="show" max-width="600">
        <v-card class="pa-0" color="elevation3">
            <v-card-title class="pa-6">
                {{ $vuetify.lang.t(`$vuetify.language.title`) }}
            </v-card-title>
            <v-divider class="outline"></v-divider>
            <v-card-text class="pa-0">
                <v-list class="transparent" color="text--onSurface">
                    <v-list-item ripple v-for="(item, i) in data" @click="changeLocale(item.value)" :key="i">
                        <v-list-item-icon>
                            <v-icon color="onSurface">{{ $vuetify.lang.current == item.value ? 'done' : '' }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title class="font-weight-medium">{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card-text>
            <v-divider class="outline"></v-divider>
            <v-card-actions class="pa-6">
                <v-spacer></v-spacer>
                <v-btn class="text-none" color="primary" text @click.stop="show = false">
                     {{ $vuetify.lang.t(`$vuetify.action.cancel`) }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: {
            value: Boolean,
        },
        data() {
            return {
                data: this.$const.LANGUAGE_ITEMS,
            };
        },
        methods: {
            changeLocale(value) {
                this.$vuetify.lang.current = value;
                localStorage.setItem("language", value);
                this.show = false;
            },
        },
        computed: {
            show: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit("input", value);
                },
            },
        },
    };
</script>
