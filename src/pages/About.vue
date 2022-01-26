<template>
    <div>
        <v-row class="py-16" :class="[getPatternClass]" align="center" justify="center">
            <v-col cols="12" lg="6">
                <v-row class="py-8" align="center" justify="center" cols="12">
                    <div class="pt-1 pb-1 text-h2 text-center">
                        <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 100C0.5 44.7715 45.2715 0 100.5 0C155.728 0 200.5 44.7715 200.5 100C200.5 155.228 155.728 200 100.5 200C45.2715 200 0.5 155.228 0.5 100Z" fill="var(--v-elevation3-base)" />
                            <path
                                d="M163.882 98.7184C163.882 102.687 160.665 105.903 156.697 105.903H116.462L145.201 134.643C147.979 137.42 147.979 141.924 145.201 144.701C142.424 147.479 137.92 147.479 135.143 144.701L106.403 115.962V156.197C106.403 160.165 103.186 163.382 99.2182 163.382C95.2501 163.382 92.0334 160.165 92.0334 156.197V115.244L63.3216 143.956C60.5287 146.748 56.0005 146.748 53.2075 143.956C50.4363 141.184 50.4117 136.699 53.1523 133.897L80.5376 105.903H41.7394C37.7713 105.903 34.5546 102.687 34.5546 98.7184C34.5546 94.7502 37.7714 91.5336 41.7394 91.5336H81.9746L53.2352 62.7941C50.4575 60.0165 50.4575 55.513 53.2352 52.7353C56.0128 49.9577 60.5163 49.9577 63.294 52.7353L92.0334 81.4748V41.2395C92.0334 37.2714 95.2501 34.0547 99.2182 34.0547C103.186 34.0547 106.403 37.2715 106.403 41.2395V80.0378L134.062 52.3792C137.009 49.4319 141.812 49.5147 144.656 52.5618C147.365 55.4638 147.287 59.9902 144.48 62.7972L115.743 91.5336H156.697C160.665 91.5336 163.882 94.7502 163.882 98.7184Z"
                                fill="var(--v-primary-base)"
                            />
                        </svg>
                    </div>
                </v-row>
                <div class="py-2 text-h3 text-center font-weight-bold">Argente</div>
                <div class="py-2 mx-12 text-h6 text-center font-weight-medium text--secondary">
                    {{ this.$const.VERSION }}
                </div>
            </v-col>
        </v-row>
        <v-card flat max-width="1200" class="mx-auto my-2 pb-4 elevation2">
            <v-list-item-subtitle class="elevation2 ps-4 pb-1 pt-5 text-subtitle-2 primary--text">{{ $vuetify.lang.t('$vuetify.about.subtitleDesc') }}</v-list-item-subtitle>
            <v-list-item class="elevation2 py-1">
                <v-list-item-icon>
                    <v-icon>info</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ $vuetify.lang.t('$vuetify.about.titleDesc') }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
        <v-card flat max-width="1200" class="mx-auto my-2 pb-4 elevation2">
            <v-list-item-subtitle class="elevation2 ps-4 pb-1 pt-5 text-subtitle-2 primary--text">{{ $vuetify.lang.t('$vuetify.about.subtitleInfo') }}</v-list-item-subtitle>
            <v-list-item class="elevation2 py-1 rounded-0" ripple :href="this.$const.RELEASES">
                <v-list-item-icon>
                    <v-icon>local_library</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ $vuetify.lang.t('$vuetify.about.titleChangelog') }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
        <v-card flat max-width="1200" class="mx-auto my-2 pb-4 elevation2">
            <v-list-item-subtitle class="elevation2 ps-4 pb-1 pt-5 text-subtitle-2 primary--text">{{ $vuetify.lang.t('$vuetify.about.subtitleContrib') }}</v-list-item-subtitle>
            <v-list-item class="elevation2 py-2">
                <v-list-item-content>
                    <v-list-item-title class="text-h5">Jeffrey Turns</v-list-item-title>
                    <v-list-item-subtitle class="text-subtitle-1">{{ $vuetify.lang.t('$vuetify.about.subtitleDevAndDesign') }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-avatar size="64">
                    <img :src="this.$const.JEFFREY_AVATAR" alt="Jeffrey" />
                </v-avatar>
            </v-list-item>

            <v-divider class="outline"></v-divider>

            <v-list-item class="elevation2 py-1" ripple :href="this.$const.JEFFREY_PORTFOLIO">
                <v-list-item-icon>
                    <v-icon>link</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ $vuetify.lang.t('$vuetify.about.titleLinkPortfolio') }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item class="elevation2 py-1 rounded-0" ripple :href="this.$const.JEFFREY_GITHUB">
                <v-list-item-icon>
                    <v-icon>link</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ $vuetify.lang.t('$vuetify.about.titleLinkGithub') }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        computed: {
            getPatternClass() {
                return this.$vuetify.theme.dark === true ? "bg-dark" : "bg-light";
            },
        },
    };
</script>

<style>
    .bg-light {
        background-image: url("../assets/pattern-light.svg");
        background-size: auto auto;
    }
    .bg-dark {
        background-image: url("../assets/pattern-dark.svg");
        background-size: auto auto;
    }
</style>
