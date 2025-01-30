// fonts.ts
import localFont from "next/font/local";

// Suisse Intl fonts
const suisseIntlBlack = localFont({
  src: "../public/fonts/SuisseIntl-Black-WebM.woff",
  variable: "--font-suisse-intl-black",
});

const suisseIntlBold = localFont({
  src: "../public/fonts/SuisseIntl-Bold-WebM.woff",
  variable: "--font-suisse-intl-bold",
});

const suisseIntlSemiBold = localFont({
  src: "../public/fonts/SuisseIntl-SemiBold-WebM.woff",
  variable: "--font-suisse-intl-semibold",
});

// Suisse Screen fonts
const suisseScreenLight = localFont({
  src: "../public/fonts/SuisseScreen-Light-WebM.woff",
  variable: "--font-suisse-screen-light",
});

const suisseScreenMedium = localFont({
  src: "../public/fonts/SuisseScreen-Medium-WebM.woff",
  variable: "--font-suisse-screen-medium",
});

const suisseScreenRegular = localFont({
  src: "../public/fonts/SuisseScreen-Regular-WebM.woff",
  variable: "--font-suisse-screen-regular",
});

const suisseScreenThin = localFont({
  src: "../public/fonts/SuisseScreen-Thin-WebM.woff",
  variable: "--font-suisse-screen-thin",
});

// Export grouped fonts
export const suisseIntl = {
  black: suisseIntlBlack,
  bold: suisseIntlBold,
  semiBold: suisseIntlSemiBold,
};

export const suisseScreen = {
  light: suisseScreenLight,
  medium: suisseScreenMedium,
  regular: suisseScreenRegular,
  thin: suisseScreenThin,
};
