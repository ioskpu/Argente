import Vue from "vue";
import Vuetify from "vuetify/lib";
import en from "@/locale/en";
import ru from "@/locale/ru";

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: {
            en,
            ru,
        },
        current: "en",
    },
    icons: {
        iconfont: "md",
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#005AC5",
                onPrimary: "#FFFFFF",
                primaryContainer: "#D6E2FF",
                onPrimaryContainer: "#001A43",
                secondary: "#575E71",
                onSecondary: "#FFFFFF",
                secondaryContainer: "#DAE2F9",
                onSecondaryContainer: "#141B2C",
                tertiary: "#715574",
                onTertiary: "#FFFFFF",
                tertiaryContainer: "#FBD7FB",
                onTertiaryContainer: "#29132D",
                error: "#BA1B1B",
                onError: "#FFFFFF",
                errorContainer: "#FFDAD4",
                onErrorContainer: "#410001",

                info: "#1B51BA",
                onInfo: "#FFFFFF",
                warning: "#BA671B",
                onWarning: "#FFFFFF",
                success: "#1BBA51",
                onSuccess: "#FFFFFF",

                background: "#FDFBFF",
                onBackground: "#1B1B1E",
                surface: "#FDFBFF",
                onSurface: "#1B1B1E",
                surfaceVariant: "#E1E2EC",
                onSurfaceVariant: "#44474F",
                outline: "#74777F",

                elevation0: "#FDFBFF",
                elevation1: "#F0F3FC",
                elevation2: "#E9EEFA",
                elevation3: "#E1E9F9",
                elevation4: "#DFE8F8",
                elevation5: "#DAE4F7",

                scrollbarThumb: "#B0B0B0",
                scrollbarThumbHover: "#8C8C8C",
            },
            dark: {
                primary: "#ACC7FF",
                onPrimary: "#002E6C",
                primaryContainer: "#004397",
                onPrimaryContainer: "#D6E2FF",
                secondary: "#BFC6DC",
                onSecondary: "#283041",
                secondaryContainer: "#3F4759",
                onSecondaryContainer: "#DAE2F9",
                tertiary: "#DEBBDF",
                onTertiary: "#402843",
                tertiaryContainer: "#583E5B",
                onTertiaryContainer: "#FBD7FB",
                error: "#FFB4A9",
                onError: "#680003",
                errorContainer: "#930006",
                onErrorContainer: "#FFDAD4",

                info: "#A9C1FF",
                onInfo: "#000A68",
                warning: "#FFCDA9",
                onWarning: "#682C00",
                success: "#A9FFC6",
                onSuccess: "#006817",

                background: "#1B1B1E",
                onBackground: "#E4E2E6",
                surface: "#1B1B1E",
                onSurface: "#E4E2E6",
                surfaceVariant: "#44474F",
                onSurfaceVariant: "#C4C6D0",
                outline: "#8E9099",

                elevation0: "#1B1B1E",
                elevation1: "#222429",
                elevation2: "#272930",
                elevation3: "#2B2E37",
                elevation4: "#2C3039",
                elevation5: "#2F333D",

                scrollbarThumb: "#3E3E3E",
                scrollbarThumbHover: "#7C7C7C",
            },
        },
    },
});
