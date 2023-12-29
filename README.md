# Data source
The data comes from the https://app.jsonserver.io/ API for dummy data
This app uses Axios to make the http request

# if get an error set up execution policy. Open a powerchell as an admin and run
Set-ExecutionPolicy Unrestricted

**App generation for Android**
# Build proyect
Execute in the terminal:  npm run build
# Remove android folder and generate a new android ussing ionic
ionic capacitor add android
npx cap open android
# Set up android manifest.    
add this line in the application tag to allow the http request:
android:usesCleartextTraffic="true"
# Generate the apk file
Click on the build menu
Click Build bundle(s) / APK(s)
Build APK(s)
# App installation
To do the installation you must disable Google Play Protect and enable installation from external sources


**App generation for iOS**
# Generate a new iOS app ussing ionic
ionic capacitor add ios
    - **If you have an iPhone and MacOs**
        npx cap open ios
    - **If you don't have an iPhone and MacOs**
        Create an account at https://ionicframework.com/
        Add a new app
        Connect it with your gitHub repository
        Create a new build and select iOs as target
        Download the App zip generated file
        Go to https://appetize.io/ and select "Try Online Demo"
        Upload the zip file and provide your email address
        Open your inbox and search for the Appetize link for the app
        Click on tap to play over the phone simulator
        ¡Enjoy!
        This is the link for the app simulation: https://appetize.io/app/qhz6wvnql3gaqxsgcnocfc2wsu?device=iphone15promax&osVersion=17.0

