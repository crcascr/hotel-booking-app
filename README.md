# Run server JSON command
    npm run serve-json
# set up android manifest.    
add this line in the application tag to allow the http request:
android:usesCleartextTraffic="true"

# Firts Step:
Review the ip v4 form you laptop device. In my case is 192.168.0.104
# Second
Replace the ip en all places in the project


# Build proyect
Execute in the terminal:  npm run build
# Remove android folder and generate a new android ussing ionic
ionic capacitor add android
npx cap open android

# Generate a new iOS app ussing ionic
ionic capacitor add ios
npx cap open ios

# if get an error set up execution policy. Open a powerchell as an admin and run
Set-ExecutionPolicy Unrestricted
# Run server JSON command
    npm run serve-json
# Run the instaler in your device

# App Android installation
    To do the installation you must disable Google Play Protect