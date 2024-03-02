import { NativeModules } from 'react-native';

const { AwesomeVideo } = NativeModules;

export const getSomething = () => {
    return 'test'
};
