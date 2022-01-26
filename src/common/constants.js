const FILTER_ITEMS = [
    "filter.all",
    "filter.action",
    "filter.alert",
    "filter.audioVideo",
    "filter.communication",
    "filter.content",
    "filter.device",
    "filter.editor",
    "filter.file",
    "filter.hardware",
    "filter.home",
    "filter.image",
    "filter.maps",
    "filter.navigation",
    "filter.notification",
    "filter.places",
    "filter.search",
    "filter.social",
    "filter.toggle",
];
const NAVIGATION_ITEMS = [
    { translation: "app.routes.home", icon: "home", to: "/" },
    { translation: "app.routes.icons", icon: "dashboard", to: "/icons" },
    { translation: "app.routes.docs", icon: "description", to: "/docs" },
];
const HELP_ITEMS = [
    { translation: "app.help.bug", icon: "bug_report", href: "https://github.com/Jeffrey01596/Argente/issues", isRouterUrl: false },
    { translation: "app.help.faq", icon: "quiz", href: "/faq", isRouterUrl: true },
    { translation: "app.help.donate", icon: "card_giftcard", href: "https://jeffreyturns.vercel.app/donate", isRouterUrl: false },
    { translation: "app.help.code", icon: "source", href: "https://github.com/Jeffrey01596/Argente", isRouterUrl: false },
    { translation: "app.help.about", icon: "info", href: "/about", isRouterUrl: true },
];
const LANGUAGE_ITEMS = [
    { title: "English", value: "en" },
    { title: "Русский", value: "ru" },
];
const APP_BAR_ITEMS = [
    { translation: "app.appbar.settings", icon: "settings", action: "openSettings" },
    { translation: "app.appbar.help", icon: "help_outline", action: "openInfo" },
    { translation: "app.appbar.lang", icon: "translate", action: "openLanguage" },
];
const BASE_REPOSITORY_ICONS_URL = "https://raw.githubusercontent.com/Jeffrey01596/Argente/main/static/icons/";
const BASE_URL = "https://raw.githubusercontent.com/Jeffrey01596/Argente/main/static/";
const VERSION = "1.0.0 alpha 1";

const RELEASES = "https://github.com/Jeffrey01596/Argente/releases/";
const JEFFREY_AVATAR = "https://avatars1.githubusercontent.com/u/51068771?s=460&u=9558ff3c9db73237417b69b8b6de7b4d2872ce82&v=4";
const JEFFREY_PORTFOLIO = "https://jeffreyturns.vercel.app";
const JEFFREY_GITHUB = "https://github.com/Jeffrey01596";

export default {
    FILTER_ITEMS: FILTER_ITEMS,
    NAVIGATION_ITEMS: NAVIGATION_ITEMS,
    APP_BAR_ITEMS: APP_BAR_ITEMS,
    BASE_URL: BASE_URL,
    BASE_REPOSITORY_ICONS_URL: BASE_REPOSITORY_ICONS_URL,
    HELP_ITEMS: HELP_ITEMS,
    LANGUAGE_ITEMS: LANGUAGE_ITEMS,
    VERSION: VERSION,
    RELEASES: RELEASES,
    JEFFREY_AVATAR: JEFFREY_AVATAR,
    JEFFREY_PORTFOLIO: JEFFREY_PORTFOLIO,
    JEFFREY_GITHUB: JEFFREY_GITHUB,
};
