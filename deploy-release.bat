@echo off
cd android && gradlew clean && cd .. && react-native run-android --variant=release