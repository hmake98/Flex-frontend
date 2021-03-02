// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  firebaseConfig: {
    apiKey: "AIzaSyCmS5432VwfOAQy3V_YaQLqTtMq-sNqyds",
    authDomain: "flex-frontend.firebaseapp.com",
    projectId: "flex-frontend",
    storageBucket: "flex-frontend.appspot.com",
    messagingSenderId: "281634357031",
    appId: "1:281634357031:web:837c7e318b230d91ad7302"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
