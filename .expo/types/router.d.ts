/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/Orders` | `/AppNavigator` | `/Orders` | `/_sitemap` | `/layouts/article` | `/logical/addToListUser` | `/logical/getInputValue` | `/pages/login` | `/pages/participantsList` | `/pages/personInfo` | `/pages/registration` | `/pages/user`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
