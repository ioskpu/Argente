<template>
    <v-dialog transition="fade-transition" v-model="show" max-width="600">
        <v-card class="pa-6" color="elevation3">
            <v-card-title class="mb-4">
                {{ $vuetify.lang.t('$vuetify.settings.title') }}
            </v-card-title>
            <v-card-text class="py-0">
                <v-select :hint="this.$vuetify.lang.t('$vuetify.settings.themeHint')" class="my-2" append-icon="expand_more" persistent-hint :items="items" v-model="selected" item-text="title" :label="this.$vuetify.lang.t('$vuetify.settings.theme')" item-value="value" outlined></v-select>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="text-none" color="primary" text @click.stop="show = false">
                    {{  $vuetify.lang.t('$vuetify.action.cancel') }}
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
            const items = [
                {
                    title: this.$vuetify.lang.t('$vuetify.settings.light'),
                    value: false,
                },
                {
                    title: this.$vuetify.lang.t('$vuetify.settings.dark'),
                    value: true,
                },
            ];
            return {
                selected: localStorage.getItem("dark_theme") == "true" ? items[1] : items[0],
                items,
            };
        },
        watch: {
            selected(newVal) {
                this.$vuetify.theme.dark = newVal;
                localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
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