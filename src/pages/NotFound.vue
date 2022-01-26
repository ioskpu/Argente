<template>
        <v-container fluid>
            <v-row class="py-16" align="center" justify="center">
                <v-col cols="12" lg="6">
                    <div class="pt-2 pb-2 text-h2 text-center font-weight-bold">
                        {{ $vuetify.lang.t('$vuetify.notFound.title') }}
                    </div>
                    <div class="pt-2 mx-12 text-h6 text-center font-weight-medium">
                        {{ $vuetify.lang.t('$vuetify.notFound.subtitle') }}
                    </div>
                    <div class="text-center py-8">
                        <v-btn rounded elevation="0" class="text-none onPrimary--text font-weight-bold mx-2" to="/" color="primary">
                            {{ $vuetify.lang.t('$vuetify.notFound.buttonHome') }} <v-icon right>arrow_forward</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    export default {
        name: "NotFound",
        data() {
            return {
            }
        }
    };
</script>