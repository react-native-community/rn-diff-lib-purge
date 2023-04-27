# Instructions for diff generation on new release

###### (assuming you have push permissions)

When a new release of `create-react-native-library` is out on [npm](https://www.npmjs.com/package/create-react-native-library), do the following:

- Clone the repo, or pull the latest `main` if you have it already cloned.

- Execute the main script:

```sh
./new-release.sh <new-release>
```

So for example, if the new release is `0.79.2`, just run:

```sh
./new-release.sh 0.79.2
```
