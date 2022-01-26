<template>
    <v-sheet class="elevation2 rounded mx-auto my-4 flex">
        <v-toolbar height="64px" color="surfaceVariant" flat class="rounded-t">
            <v-toolbar-title>{{ `${fileName}.${fileExt}` }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-sheet color="elevation1" class="rounded mx-1">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="rounded" v-bind="attrs" v-on="on" @click="copyToClipboard(code)" icon><v-icon dense>copy</v-icon></v-btn>
                    </template>
                    <span>{{ $vuetify.lang.t(`$vuetify.action.copy`) }}</span>
                </v-tooltip>
            </v-sheet>

            <v-sheet color="elevation1" class="rounded mx-1">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="rounded" @click="saveAsFile(`${fileName}.${fileExt}`, 'text/plain;charset=utf-8', code)" v-bind="attrs" v-on="on" icon><v-icon dense>download</v-icon></v-btn>
                    </template>
                    <span>{{ $vuetify.lang.t(`$vuetify.action.download`) }}</span>
                </v-tooltip>
            </v-sheet>
        </v-toolbar>
        <div class="pa-4">
            <div class="fix">
                <pre>{{ code }}</pre>
            </div>
        </div>
    </v-sheet>
</template>

<script>
    import { copyToClipboard, saveAsFile } from "@/common/utils";

    export default {
        props: {
            code: {
                type: String,
                default: "<!-- this is code placeholder -->",
            },
            fileName: {
                type: String,
                default: "default",
            },
            fileExt: {
                type: String,
                default: "txt",
            },
            showMessage: {
                type: Boolean,
                default: null,
            },
        },
        data() {
            return {};
        },
        methods: {
            copyToClipboard,
            saveAsFile,
        },
    };
</script>

<style>
    pre {
        width: auto;
        height: 400px;
        overflow: auto;
        white-space: pre;
        position: relative;
    }
    .fix {
        position: relative;
    }
    .fix pre {
        position: static;
    }
</style>
