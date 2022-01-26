<template>
    <v-container class="pa-0">
        <v-row>
            <v-col v-bind:class="[(this.$vuetify.breakpoint.lgAndUp) ? 'd-flex': '']" cols="12" sm="12" md="12" lg="8" xl="8">
                <v-sheet class="elevation2 rounded mx-auto flex">
                    <v-toolbar height="64px" color="surfaceVariant" flat class="rounded-t">
                        <v-toolbar-title class="font-weight-bold">{{ $vuetify.lang.t(`$vuetify.icon.previewToolbarTitle`) }}</v-toolbar-title>
                        <v-spacer></v-spacer>

                        <v-sheet color="elevation1" class="rounded mx-1">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="rounded" v-bind="attrs" v-on="on" @click="shareUrl()" icon><v-icon dense>share</v-icon></v-btn>
                                </template>
                                <span>{{ $vuetify.lang.t(`$vuetify.action.share`) }}</span>
                            </v-tooltip>
                        </v-sheet>
                    </v-toolbar>
                    <v-container>
                        <v-row>
                            <v-col>
                                <div class="text-h6 pa-4">
                                    <v-sheet rounded height="192" color="transparent">
                                        <div
                                            class="animate bg playanim"
                                            :class="[
                    { pause: activeItem === 1 }, getFilterClass, getSlowClass, {reverse: reverse == true}]"
                                            v-bind:style='[
                    {backgroundImage: `url("${this.$const.BASE_REPOSITORY_ICONS_URL + this.$route.params.tag + "/" + this.$route.params.icon + "/preview/spritesheet.svg"}")`}]'
                                        ></div>
                                    </v-sheet>
                                </div>
                                <v-sheet class="pa-4 d-flex justify-center" color="transparent">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn class="my-auto ma-4" v-bind="attrs" v-on="on" @click="slow = !slow" :color="slow ? 'primary': ''" icon><v-icon>speed</v-icon></v-btn>
                                        </template>
                                        <span>{{ $vuetify.lang.t(`$vuetify.icon.action.slowMotion`) }}</span>
                                    </v-tooltip>
                                    <v-btn fab elevation="2" class="rounded" color="tertiaryContainer" @click="tes(1)"><v-icon color="onTertiaryContainer">{{ this.activeItem == -1 ? 'pause' : 'play_arrow' }}</v-icon></v-btn>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn class="my-auto ma-4" v-bind="attrs" v-on="on" @click="reverse = !reverse" :color="reverse ? 'primary': ''" icon><v-icon>rotate_left</v-icon></v-btn>
                                        </template>
                                        <span>{{ $vuetify.lang.t(`$vuetify.icon.action.reverseAnimation`) }}</span>
                                    </v-tooltip>
                                </v-sheet>
                            </v-col>
                            <v-col class="pt-10">
                                <v-list-item two-line class="mb-4">
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h5 font-weight-bold">{{ items.title }}</v-list-item-title>
                                        <div class="pt-4">
                                            <template v-for="(item, index) in items.source">
                                                <v-chip :href="item.url" :key="index + 'A'" style="border-radius: 8px;" outlined text-color="onSurface" color="outline">{{ item.name }}</v-chip>
                                                <v-icon class="mx-1" v-if="index < items.source.length - 1" :key="index + 'B'" small>arrow_forward</v-icon>
                                            </template>
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon color="onSurface">timer</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ $vuetify.lang.t(`$vuetify.icon.durationTitle`) }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ items.info[0]["duration"] + $vuetify.lang.t(`$vuetify.icon.duration.timeMs`) }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon color="onSurface">format_shapes</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ $vuetify.lang.t(`$vuetify.icon.styleTitle`) }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ iconStyle() }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon color="onSurface">format_list_numbered</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ $vuetify.lang.t(`$vuetify.icon.lengthTitle`) }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ `${this.code_animated.split(/\r\n|\r|\n/).length} ${$vuetify.lang.t(`$vuetify.icon.length.lineLength`)}` }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-icon>
                                        <v-icon color="onSurface">event_note</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ $vuetify.lang.t(`$vuetify.icon.addedTitle`) }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ formatDate() }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
            </v-col>
            <v-col v-bind:class="[(this.$vuetify.breakpoint.lgAndUp) ? 'd-flex': '']" cols="12" sm="12" md="12" lg="4" xl="4">
                <v-sheet class="elevation2 rounded mx-auto flex">
                    <v-toolbar height="64px" color="surfaceVariant" flat class="rounded-t">
                        <v-toolbar-title class="font-weight-bold">{{ $vuetify.lang.t(`$vuetify.icon.codeToolbarTitle`) }}</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-sheet color="elevation1" class="rounded mx-1">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="rounded" v-bind="attrs" v-on="on" @click="copyCode()" icon><v-icon dense>copy</v-icon></v-btn>
                                </template>
                                <span>{{ $vuetify.lang.t(`$vuetify.action.copy`) }}</span>
                            </v-tooltip>
                        </v-sheet>

                        <v-sheet color="elevation1" class="rounded mx-1">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="rounded" @click="saveIconAsXml()" v-bind="attrs" v-on="on" icon><v-icon dense>download</v-icon></v-btn>
                                </template>
                                <span>{{ $vuetify.lang.t(`$vuetify.action.download`) }}</span>
                            </v-tooltip>
                        </v-sheet>
                    </v-toolbar>
                    <div>
                        <v-chip-group v-model="codeWatch" class="ma-2" active-class="red" column mandatory>
                            <v-chip v-for="item in codes" :key="item + 'C'" active-class="choose-chip tertiaryContainer">
                                {{ item }}
                            </v-chip>
                        </v-chip-group>
                    </div>
                    <div class="pa-4">
                        <div class="fix">
                            <pre>{{ code }}</pre>
                        </div>
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
        <v-snackbar timeout="2000" right multi-line color="info" content-class="onInfo--text" v-model="snackbar">
            {{ $vuetify.lang.t(`$vuetify.action.copiedText`) }}

            <template v-slot:action="{ attrs }">
                <v-btn class="text-none" color="onInfo" text v-bind="attrs" @click="snackbar = false">
                    {{ $vuetify.lang.t(`$vuetify.action.close`) }}
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
    import { copyToClipboard, saveAsFile } from "@/common/utils";

    export default {
        data() {
            return {
                activeItem: 1,
                snackbar: false,
                items: [],
                codes: [this.$vuetify.lang.t(`$vuetify.icon.chipAnimated`), this.$vuetify.lang.t(`$vuetify.icon.chipStart`), this.$vuetify.lang.t(`$vuetify.icon.chipEnd`)],
                slow: false,
                reverse: false,
                codeWatch: 0,
                code: "",
                code_animated: "",
                code_start: "",
                code_end: "",
            };
        },
        watch: {
            codeWatch: function () {
                var watcher = this.codeWatch;
                var codeChoosed = [this.code_animated, this.code_start, this.code_end];
                var localCode;
                codeChoosed.forEach(function (value, i) {
                    if (watcher == i) {
                        localCode = value;
                    }
                });
                this.code = localCode;
            },
        },
        methods: {
            copyCode() {
                copyToClipboard(this.code);
                this.snackbar = true;
            },
            shareUrl() {
                copyToClipboard(window.location.href);
                this.snackbar = true;
            },
            tes(index) {
                index == this.activeItem ? (this.activeItem = -1) : (this.activeItem = 1);
            },
            saveIconAsXml() {
                saveAsFile(`${this.titleToNameFile()}.xml`, "text/plain;charset=utf-8", this.code);
            },
            titleToNameFile() {
                var choosedCode;
                var code = this.codeWatch;
                var codes = ["_animated_vector", "_start_vector", "_end_vector"];
                codes.forEach(function (value, i) {
                    if (code == i) {
                        choosedCode = value;
                    }
                });
                return this.items.title.toLowerCase().replace(/\s+/g, "_") + choosedCode;
            },
            iconStyle() {
                var style;
                var initionVal = this.items.info[0]["style"];
                var styles = [
                    this.$vuetify.lang.t(`$vuetify.icon.style.filled`),
                    this.$vuetify.lang.t(`$vuetify.icon.style.outlined`),
                    this.$vuetify.lang.t(`$vuetify.icon.style.rounded`),
                    this.$vuetify.lang.t(`$vuetify.icon.style.sharp`),
                    this.$vuetify.lang.t(`$vuetify.icon.style.twoTone`),
                ];
                styles.forEach(function (value, i) {
                    if (i + 1 == initionVal) {
                        style = value;
                    }
                });
                return style;
            },
            formatDate() {
                var returnValue;
                var getNum = this.items.info[0]["date"];
                var matches = getNum.match(/(?<=\[)[^\][]*(?=])/g);
                var months = [
                    this.$vuetify.lang.t(`$vuetify.icon.added.jan`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.feb`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.mar`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.apr`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.may`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.jun`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.jul`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.aug`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.sep`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.oct`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.nov`),
                    this.$vuetify.lang.t(`$vuetify.icon.added.dec`),
                ];
                months.forEach(function (value, i) {
                    if (i + 1 == matches) {
                        returnValue = value;
                    }
                });
                return returnValue + getNum.replace(/(?<=\[)[^\][]*(?=])/g, "").replace("[]", "");
            },
        },
        computed: {
            getFilterClass() {
                return this.$vuetify.theme.dark === true ? "filter" : null;
            },
            getSlowClass() {
                return this.slow ? "slow" : "normal";
            },
        },
        created() {
            fetch(this.$const.BASE_REPOSITORY_ICONS_URL + this.$route.params.tag + "/" + this.$route.params.icon + "/meta.json")
                .then((response) => response.json())
                .then((data) => (this.items = data));

            fetch(this.$const.BASE_REPOSITORY_ICONS_URL + this.$route.params.tag + "/" + this.$route.params.icon + "/animation/avd_animation.xml")
                .then((response) => response.text())
                .then((data) => {
                    this.code_animated = data;
                    this.code = data;
                });

            fetch(this.$const.BASE_REPOSITORY_ICONS_URL + this.$route.params.tag + "/" + this.$route.params.icon + "/icons/ic_start.xml")
                .then((response) => response.text())
                .then((data) => (this.code_start = data));

            fetch(this.$const.BASE_REPOSITORY_ICONS_URL + this.$route.params.tag + "/" + this.$route.params.icon + "/icons/ic_end.xml")
                .then((response) => response.text())
                .then((data) => (this.code_end = data));
        },
    };
</script>

<style scoped>
    @keyframes play60 {
        0% {
            background-position: 0px 0px;
        }
        100% {
            background-position: -1440px 0px;
        }
    }
    .animate {
        animation-timing-function: steps(60);
        width: 24px;
        height: 24px;
        opacity: 0.6;
        background-repeat: no-repeat;
        animation-iteration-count: infinite;
    }
    .pause {
        -webkit-animation-play-state: paused !important;
        -moz-animation-play-state: paused !important;
        -o-animation-play-state: paused !important;
        animation-play-state: paused !important;
    }
    .playanim {
        animation-name: play60;
    }
    .reverse {
        animation-direction: reverse;
    }
    .choose-chip {
        border-radius: 16px !important;
    }
    .v-chip-group .v-chip--active {
        color: var(--v-onTertiaryContainer-base);
    }
    .bg {
        margin: auto;
        padding: auto;
        transform-origin: top center;
        transform: scale(8);
    }
    .filter {
        filter: brightness(0) invert(1);
    }
    .slow {
        animation-duration: 3000ms;
    }
    .normal {
        animation-duration: 1000ms;
    }
    .v-chip:not(.v-chip--active) {
        background: var(--v-secondaryContainer-base);
        border-radius: 8px;
    }
    .v-chip--active::before {
        opacity: 0;
    }
    pre {
        width: auto;
        height: 400px;
        overflow: auto;
        white-space: pre;
        position: relative;
    }
    .v-btn.v-btn--has-bg {
        background-color: var(--v-elevation2-base);
    }
    .fix {
        position: relative;
    }
    .fix pre {
        position: static;
    }
</style>
