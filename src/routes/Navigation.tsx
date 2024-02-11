import { Navigation } from "react-native-navigation";

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "Home",
            },
          },
        ],
      },
    },
  });
});
