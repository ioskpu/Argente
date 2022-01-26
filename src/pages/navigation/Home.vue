<template>
    <div>
        <v-container fluid>
            <v-row class="py-16" align="center" justify="center">
                <v-col cols="12" lg="6">
                    <v-row class="py-16" align="center" justify="center" cols="12">
                        <div class="pt-2 pb-2 text-h2 text-center">
                            <svg width="201" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 100C0.5 44.7715 45.2715 0 100.5 0C155.728 0 200.5 44.7715 200.5 100C200.5 155.228 155.728 200 100.5 200C45.2715 200 0.5 155.228 0.5 100Z" fill="var(--v-elevation3-base)" />
                                <path
                                    d="M163.882 98.7184C163.882 102.687 160.665 105.903 156.697 105.903H116.462L145.201 134.643C147.979 137.42 147.979 141.924 145.201 144.701C142.424 147.479 137.92 147.479 135.143 144.701L106.403 115.962V156.197C106.403 160.165 103.186 163.382 99.2182 163.382C95.2501 163.382 92.0334 160.165 92.0334 156.197V115.244L63.3216 143.956C60.5287 146.748 56.0005 146.748 53.2075 143.956C50.4363 141.184 50.4117 136.699 53.1523 133.897L80.5376 105.903H41.7394C37.7713 105.903 34.5546 102.687 34.5546 98.7184C34.5546 94.7502 37.7714 91.5336 41.7394 91.5336H81.9746L53.2352 62.7941C50.4575 60.0165 50.4575 55.513 53.2352 52.7353C56.0128 49.9577 60.5163 49.9577 63.294 52.7353L92.0334 81.4748V41.2395C92.0334 37.2714 95.2501 34.0547 99.2182 34.0547C103.186 34.0547 106.403 37.2715 106.403 41.2395V80.0378L134.062 52.3792C137.009 49.4319 141.812 49.5147 144.656 52.5618C147.365 55.4638 147.287 59.9902 144.48 62.7972L115.743 91.5336H156.697C160.665 91.5336 163.882 94.7502 163.882 98.7184Z"
                                    fill="var(--v-primary-base)"
                                />
                            </svg>
                        </div>
                    </v-row>
                    <div class="py-2 text-h2 text-center font-weight-bold">
                        {{ $vuetify.lang.t('$vuetify.home.headerTitle') }}
                    </div>
                    <div class="py-2 mx-12 text-h6 text-center font-weight-medium">
                        {{ $vuetify.lang.t('$vuetify.home.headerSubtitle') }}
                    </div>
                    <div class="text-center my-4">
                        <v-btn rounded large elevation="0" class="text-none onPrimary--text font-weight-bold mx-2" to="/icons" color="primary">
                            {{ $vuetify.lang.t('$vuetify.home.buttonToIcons') }} <v-icon right>arrow_forward</v-icon>
                        </v-btn>
                        <div class="ma-2 font-weight-medium">{{ $vuetify.lang.t('$vuetify.home.textOr') }}</div>
                        <v-btn rounded elevation="0" large class="text-none onSecondaryContainer--text font-weight-bold mx-2" to="/docs" color="secondaryContainer">
                            {{ $vuetify.lang.t('$vuetify.home.buttonToDocs') }} <v-icon right>arrow_forward</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-card class="mx-auto" tile color="transparent" flat max-width="1200">
                <v-row class="py-16" align="center" justify="center" cols="12" sm="12" md="12" lg="6" xl="6">
                    <v-col cols="12" lg="6">
                        <div class="pt-2 pb-2 text-h2 font-weight-bold">
                            {{ $vuetify.lang.t('$vuetify.home.titleBeta') }}
                        </div>
                        <div class="pt-4 text-h6 font-weight-medium">
                            {{ $vuetify.lang.t('$vuetify.home.subtitleBeta') }}
                        </div>
                    </v-col>
                    <v-col class="py-16" align="center" justify="center" cols="12" sm="12" md="12" lg="6" xl="6">
                        <v-img :aspect-ratio="1/1" src="@/assets/blueprint.png" class="ma-8 rounded-xl"></v-img>
                    </v-col>
                </v-row>
            </v-card>
            <v-row class="py-16" align="center" justify="center">
                <v-col cols="12" lg="6">
                    <div class="pt-2 pb-2 text-h2 text-center font-weight-bold">
                        {{ $vuetify.lang.t('$vuetify.home.iconsTitle') }}
                    </div>
                    <div class="pt-4 mx-12 text-h6 text-center font-weight-medium">
                        {{ $vuetify.lang.t('$vuetify.home.iconsSubtitle', this.items.length) }} <a href="https://material.io/design/iconography/animated-icons.html"> {{ $vuetify.lang.t('$vuetify.home.iconsGuidelines') }} </a>
                    </div>
                </v-col>
            </v-row>
            <v-card class="mx-auto rounded-xl" color="transparent" flat max-width="1200">
                <v-img :aspect-ratio="16/9" src="@/assets/icons.png" :class="[getFilterClass]"></v-img>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
            };
        },
        created() {
            fetch(`${this.$const.BASE_URL}icons.json`)
                .then((response) => response.json())
                .then((data) => (this.items = data));
        },
        computed: {
            getFilterClass() {
                return this.$vuetify.theme.dark === true ? "filter" : null;
            },
        },
    };
</script>

<style scoped>
    .filter {
        filter: brightness(0) invert(1);
    }
</style>
