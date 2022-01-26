<template>
    <div>
        <v-card flat max-width="1200" class="mx-auto">
            <v-expansion-panels accordion multiple>
                <v-expansion-panel class="elevation1" v-for="(item, index) in data" :key="index">
                    <v-expansion-panel-header class="text-h6 font-weight-medium onSurface--text">
                        {{ item.title }}
                        <template v-slot:actions>
                            <v-icon color="onSurface">
                                expand_more
                            </v-icon>
                        </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="text-subtitle1 onSurface--text">
                        {{ item.message }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "FAQ",
        data() {
            return {
                data: [
                {
                    title: this.$vuetify.lang.t('$vuetify.faq.questIconCrossPlatform'),
                    message: this.$vuetify.lang.t('$vuetify.faq.answIconCrossPlatform'),
                },
                {
                    title: this.$vuetify.lang.t('$vuetify.faq.questDurationAnim'),
                    message:this.$vuetify.lang.t('$vuetify.faq.answDurationAnim'),
                },
                {
                    title: this.$vuetify.lang.t('$vuetify.faq.questReqIcon'),
                    message:this.$vuetify.lang.t('$vuetify.faq.answReqIcon'),
                },
            ],
            }
        }
    };
</script>

<style>
    .v-expansion-panel::before {
        box-shadow: none !important;
    }
</style>
