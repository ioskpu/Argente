<template>
    <div>
        <v-card class="mx-auto pa-4" color="surface" flat max-width="1200">
            <div class="text-h5 py-1 font-weight-bold">{{ $vuetify.lang.t('$vuetify.docs.titleIconType') }}</div>
            <div class="text-subtitle-1 py-1">
                {{ $vuetify.lang.t('$vuetify.docs.textIconType') }}<a href="https://material.io/design/iconography/animated-icons.html#transitions">{{ $vuetify.lang.t('$vuetify.docs.textIconTypeAnim') }}</a>
                {{ $vuetify.lang.t('$vuetify.docs.textIconTypes') }}
            </div>
            <div class="text-h5 py-1 font-weight-bold py-1">{{ $vuetify.lang.t('$vuetify.docs.titleIconWithSelec') }}</div>
            <div class="text-subtitle-1 py-1">
                {{ $vuetify.lang.t('$vuetify.docs.textIconWithSelec') }}
                <a href="https://m3.material.io/components/navigation-bar">{{ $vuetify.lang.t('$vuetify.docs.textIconWithSelecNavBar') }}</a>
                {{ $vuetify.lang.t('$vuetify.docs.textIconWithSelecDownl') }}
            </div>
            <v-alert color="info" class="onInfo--text my-2">{{ $vuetify.lang.t('$vuetify.docs.alertTextIconWithSelecRewrite') }}</v-alert>
            <CodeSnippet :code="this.code1" :fileExt="`xml`" :fileName="`sd_vector_example`" :showMessage="false"></CodeSnippet>
            <v-alert color="info" class="onInfo--text">{{ $vuetify.lang.t('$vuetify.docs.alertTextIconWithSelecRead') }}</v-alert>
            <div class="text-subtitle-1 py-1">
                {{ $vuetify.lang.t('$vuetify.docs.textIconWithSelecCreate') }}
            </div>
            <div class="text-h5 py-1 font-weight-bold py-1">{{ $vuetify.lang.t('$vuetify.docs.titleIconProgram') }}</div>
            <div class="text-subtitle-1 py-1">
                {{ $vuetify.lang.t('$vuetify.docs.textIconProgram') }}
            </div>
            <CodeSnippet :code="this.code2" :fileExt="`kt`" :fileName="`MainActivty`" :showMessage="false"></CodeSnippet>
            <div class="text-subtitle-1 py-1">
                {{ $vuetify.lang.t('$vuetify.docs.textIconProgramExt') }}
            </div>
            <v-alert color="warning" class="onWarning--text my-2">{{ $vuetify.lang.t('$vuetify.docs.alertTextIconProgramExt') }}</v-alert>
            <CodeSnippet :code="this.code3" :fileExt="`kt`" :fileName="`ImageViewExtensions`" :showMessage="false"></CodeSnippet>
        </v-card>
    </div>
</template>

<script>
    import CodeSnippet from "@/components/CodeSnippet.vue";

    export default {
        components: {
            CodeSnippet,
        },
        data() {
            return {
                code1: "",
                code2: "",
                code3: "",
            };
        },
        created() {
            fetch(`${this.$const.BASE_URL}code/sd_vector_example.xml`)
                .then((response) => response.text())
                .then((response) => {
                    this.code1 = response;
                })
                .catch((err) => console.log(err));
            fetch(`${this.$const.BASE_URL}code/MainActivty.kt`)
                .then((response) => response.text())
                .then((response) => {
                    this.code2 = response;
                })
                .catch((err) => console.log(err));
            fetch(`${this.$const.BASE_URL}code/ImageViewExtensions.kt`)
                .then((response) => response.text())
                .then((response) => {
                    this.code3 = response;
                })
                .catch((err) => console.log(err));
        },
    };
</script>