<template>
    <v-container>
        <v-chip-group v-if="false" column mandatory active-class="primary--text">
            <v-chip filter outlined v-for="tag in tags" :key="tag">
                {{ tag }}
            </v-chip>
        </v-chip-group>
        <v-row>
            <v-col v-for="(icon, index) in filteredIcons" :key="`${icon}${index}`" cols="6" sm="4" md="3" xl="2">
                <v-lazy>
                    <div class="d-flex justify-center" min-height="150">
                        <v-hover v-slot="{ hover }">
                            <v-sheet width="128" rounded v-ripple style="background-color: transparent !important;" min-height="128" class="pt-4 ma-1" v-on:click="tes(`${icon}${index}`, icon.length, icon.duration, icon.timing)">
                                <v-sheet style="background-color: transparent !important;" height="24">
                                    <v-row align="center" justify="end">
                                        <v-btn icon v-if="hover" class="me-4" :to="'/icons/' + icon.tag.toLowerCase() + '/' + icon.name">
                                            <v-icon>download</v-icon>
                                        </v-btn>
                                    </v-row>
                                </v-sheet>
                                <div
                                    class="scale animate"
                                    :class="[
                    { playanim: activeItem === `${icon}${index}` }, getFilterClass]"
                                    v-bind:style='[
                    activeItem === `${icon}${index}`
                      ? { backgroundImage: `url("${$const.BASE_REPOSITORY_ICONS_URL + icon.tag.toLowerCase() + "/" + icon.name + "/preview/spritesheet.svg"}")` }
                      : { backgroundImage: `url("${$const.BASE_REPOSITORY_ICONS_URL + icon.tag.toLowerCase() + "/" + icon.name + "/preview/icon.svg"}")` }]'
                                ></div>
                                <v-card-text class="no-select text-center font-weight-medium">
                                    {{ icon.title }}
                                </v-card-text>
                            </v-sheet>
                        </v-hover>
                    </div>
                </v-lazy>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        props: {
            position: Number,
            filter: String,
            load: Array,
        },
        methods: {
            tes(index) {
                index == this.activeItem ? (this.activeItem = -1) : (this.activeItem = index);
            },
        },
        data() {
            return {
                activeItem: -1,
            };
        },
        watch: {
            filter: function () {
                this.activeItem = -1;
            },
            position: function () {
                this.activeItem = -1;
            },
        },
        computed: {
            getFilterClass() {
                return this.$vuetify.theme.dark === true ? "filter" : null;
            },
            tagToName() {
                let array = this.$const.FILTER_ITEMS;
                let tagPosition = this.position;
                let returnValue = "";
                array.forEach(function (value, i) {
                    if (i == tagPosition) {
                        console.log(value);
                        returnValue = value.substring(7);
                    }
                });
                return returnValue;
            },
            filteredIcons() {
                let tempIcons = this.load;
                if (this.filter != "" && this.filter) {
                    tempIcons = tempIcons.filter((item) => {
                        return item.title.toUpperCase().includes(this.filter.toUpperCase());
                    });
                }
                if (this.position != 0) {
                    tempIcons = tempIcons.filter((item) => {
                        return item.tag == this.tagToName;
                    });
                }
                return tempIcons;
            },
        },
    };
</script>

<style scoped>
    @keyframes play {
        0% {
            background-position: 0px 0px;
        }
        100% {
            background-position: -1440px 0px;
        }
    }
    .animate {
        animation-duration: 1000ms;
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
        animation-name: play;
    }
    .scale {
        margin: auto;
        transform: scale(1.8);
    }
    .no-select {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .filter {
        filter: brightness(0) invert(1);
    }
</style>
