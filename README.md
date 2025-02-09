> Edited for use in IDX on 07/09/12

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).


## Notes - Helen

Hi! So for the Hackathon we wanted to explore different IDEs, in this case Google's project IDX to see if there was one that could serve as a realistic alternative for development. IDX offers a build in android and web emulator which would naturally help developers to test the cross compatibility of their code, as well as offers codewriting assistance through Gemini. In this repo, I and the other interns are trying to create a basic app in react native so that we can showcase how IDX allows programmers to create a full multiplatform experience within the IDE and doesn't require any further

Here are a few bullets on what I did to get everything to work on my system. 
- Cloning - I ended up just copying the HTTP link from the original repo and pasting it into [`here`](https://idx.google.com/import). I made no edits, everything loaded and uploaded fine without additional configuration.
- Running the emulator - IDX rebuilds the web and android emulators whenever the page is refreshed, but this, for me at least, only ever worked on the web emulator and always showed an error for android saying the port was unable to connect or that the launch.json was not configured properly. IDX uses a currently existing react native platform, Expo, and any documentation on running the emulators is not specific to IDX but rather to Expo so it was a little hard to find relevant documentation because most of it does not apply to IDX. I did some research and learned that often this was an error that occurred when the computer did not have the android sdk path in their environment variables, so I downloaded Android Studio (suggested in the documentation for Expo) and added the variable like that. After this I ran the following command: [npm run android -- --port 5554 --tunnel] on the bash in IDX and the emulator worked. You do have to manually navigate into Expo Go and the app, have not found a workaround for this.
- [`Here`](https://www.figma.com/design/IowKCQfPMxYNacT23ir9i4/Delivery---Password-Requirements-Refinement---08%2F2023?node-id=343-4554&m=dev) is a figma detailing our goal design. Because we aren't working in the monorepo we don't have access to the MDS Library and so have been doing our best to copy over the components and styles we need. Our end goal is to just create a working frontend to be able to demo on thursday, this won't connect to any actual thrivent registration services or similar.
- Below is the readme that autogenerated when the project was created, it also includes helpful information on getting the application up and running.

## Get started

#### Android

Android previews are defined as a `workspace.onStart` hook and started as a vscode task when the workspace is opened/started.

Note, if you can't find the task, either:
- Rebuild the environment (using command palette: `IDX: Rebuild Environment`), or
- Run `npm run android -- --tunnel` command manually run android and see the output in your terminal. The device should pick up this new command and switch to start displaying the output from it.

In the output of this command/task, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You'll also find options to open the app's developer menu, reload the app, and more.

#### Web

Web previews will be started and managred automatically. Use the toolbar to manually refresh.

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
