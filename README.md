# Hotel Booking App Documentation

## Data source

- The data comes from the [JSON Server](https://app.jsonserver.io/) API for dummy data.
- This app uses Axios to make the HTTP request.

## Setup (Windows)

If you get an error set up execution policy. Open a PowerShell as an admin and run:

```powershell
Set-ExecutionPolicy Unrestricted
```

## App generation for Android

1. **Build project**
   Execute in the terminal:

   ```bash
   npm run build
   ```

2. **Remove Android folder and generate a New Android using Ionic**

   ```bash
   ionic capacitor add android
   npx cap open android
   ```

3. **Set up Android manifest**  
   Add this line in the `<application>` tag to allow the http request:

   ```xml
   android:usesCleartextTraffic="true"
   ```

4. **Generate the apk file**

   - Click on the build menu.
   - Click "Build bundle(s) / APK(s)".
   - Build APK(s).

### App installation

To do the installation you must disable Google Play Protect and enable installation from external sources.

## App generation for iOS

1. **Build project**
   Execute in the terminal:

   ```bash
   npm run build
   ```

2. **Generate a new iOS app using Ionic**

   ```bash
   ionic capacitor add ios
   ```

3. - **If you have an iPhone and MacOS**
     ```bash
     npx cap open ios
     ```
   - **If you don't have an iPhone and MacOS**
     1. Create an account at [Ionic Framework](https://ionicframework.com/).
     2. Add a new app.
     3. Connect it with your GitHub repository.
     4. Create a new build and select iOS as target.
     5. Download the App zip generated file.
     6. Go to [Appetize.io](https://appetize.io/) and select "Try Online Demo".
     7. Upload the zip file and provide your email address.
     8. Open your inbox and search for the Appetize link for the app.
     9. Click on "Tap to play" over the phone simulator.
     10. ¡Enjoy!
     11. This is the link for the app simulation: [Appetize.io - iOS App Simulation](https://appetize.io/app/qhz6wvnql3gaqxsgcnocfc2wsu?device=iphone15promax&osVersion=17.0).
