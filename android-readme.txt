先执行 deploy-debug.bat 进行调试编译，这样可以看到一些错误的编译信息，当没问题之后，在执行deploy-release.bat

首先：熱部署更新
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

之后：热部署上传：code-push release-react nxapp  android --d Production --noDuplicateReleaseError

code-push release-react <OurApp> android --deploymentName prod-android --development false --mandatory true --bundleName index.android.bundle
在 用户目录/.gradle/创建gradle.properties文件添加如下
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=believeus
MYAPP_RELEASE_KEY_PASSWORD=believeus
org.gradle.configureondemand=true

一、Android版本必须安装react-native 0.60.5版本

二、在android版本必须安装react-native 0.60.5版本必须修改如下代码

android 需要安装  ios安装不了经纬度定位的组件
yarn add @react-native-community/geolocation
react-native link @react-native-community/geolocation
yarn add react-native-location

修改
D:\usr\local\workspace\nxapp\node_modules\react-native-swiper\src\index.js
delete: ViewpagerAndroid
add:import ViewPagerAndroid from '@react-native-community/viewpager';

修改
D:\usr\local\workspace\nxapp\node_modules\react-native-viewpager\Viewpager.js
add: import ViewPageAndroid from 'react-native-viewpager'
add: import PropTypes from 'prop-types';

修改
D:\usr\local\workspace\nxapp\node_modules\react-native-tab-view\src\PagerAndroid.js
delete: ViewPagerAndroid,
add:import ViewPagerAndroid from '@react-native-community/viewpager';

修改
D:\usr\local\workspace\nxapp\node_modules\react-native-modal-dropdown\components
ModalDropdown.js
delete: ListView
add:import ListView from 'deprecated-react-native-listview'
add:import PropTypes from 'prop-types';
(如果已经存在就不用再次引入）

注释掉：D:\usr\local\workspace\nxapp\node_modules\graceful-fs\polyfills.js 61~63行
//fs.stat = statFix(fs.stat)
//fs.fstat = statFix(fs.fstat)
//fs.lstat = statFix(fs.lstat)

修改源码
node_modules\react-native\ReactAndroid\src\main\java\com\facebook\react\modules\network\OkHttpClientProvider.java 73行添加如下代码
node_modules\react-native\ReactAndroid\src\main\java\com\facebook\react\packagerconnection\ReconnectingWebSocket.java 73行添加如下代码
node_modules\react-native\ReactAndroid\src\main\java\com\facebook\react\devsupport\InspectorPackagerConnection.java 247行添加如下代码
nxapp\node_modules\react-native\ReactAndroid\src\main\java\com\facebook\react\devsupport\JSDebuggerWebSocketClient.java 62行添加如下代码
node_modules\react-native\ReactAndroid\src\main\java\com\facebook\react\modules\websocket\WebSocketModule.java 91行添加如下代码

.hostnameVerifier(new javax.net.ssl.HostnameVerifier() {
            @Override
            public boolean verify(String hostname, javax.net.ssl.SSLSession sslSession) {
                java.util.List<String> verifyHost=java.util.Arrays.asList(new String[]{"www.beijingepidial.com","app.epi-age.com"});
                if (verifyHost.contains(hostname))
                    return true;
                else return false;
            }
});

ndroid-sdk-windows\sources\android-23\android\webkit\WebViewClient.java 的onReceivedSslError方法中添加如下代码
android-sdk-windows\sources\android-28\android\webkit\WebViewClient.java 的onReceivedSslError方法中添加如下代码
  public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
			String message;
            switch (error.getPrimaryError()){
                case SslError.SSL_DATE_INVALID:message = "SSL_DATE_INVALID";break;
                case SslError.SSL_EXPIRED:message = "SSL_EXPIRED";break;
                case SslError.SSL_IDMISMATCH:message = "SSL_IDMISMATCH";break;
                case SslError.SSL_INVALID:message = "SSL_INVALID";break;
                case SslError.SSL_NOTYETVALID:message = "SSL_NOTYETVALID";break;
                case SslError.SSL_UNTRUSTED:message = "SSL_UNTRUSTED";break;
                default:message = "SslError unknown";
            }
        //handler.cancel();
    }



替换：
使用下面的代码替换nxapp\node_modules\react-native\react.gradle文件
// Copyright (c) Facebook, Inc. and its affiliates.

// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

import org.apache.tools.ant.taskdefs.condition.Os

def config = project.hasProperty("react") ? project.react : [];

def cliPath = config.cliPath ?: "node_modules/react-native/cli.js"
def composeSourceMapsPath = config.composeSourceMapsPath ?: "node_modules/react-native/scripts/compose-source-maps.js"
def bundleAssetName = config.bundleAssetName ?: "index.android.bundle"
def entryFile = config.entryFile ?: "index.android.js"
def bundleCommand = config.bundleCommand ?: "bundle"
def reactRoot = file(config.root ?: "../../")
def inputExcludes = config.inputExcludes ?: ["android/**", "ios/**"]
def bundleConfig = config.bundleConfig ? "${reactRoot}/${config.bundleConfig}" : null ;
def enableVmCleanup = config.enableVmCleanup == null ? true : config.enableVmCleanup
def hermesCommand = config.hermesCommand ?: "../../node_modules/hermes-engine/%OS-BIN%/hermes"

def reactNativeDevServerPort() {
    def value = project.getProperties().get("reactNativeDevServerPort")
    return value != null ? value : "8081"
}

def reactNativeInspectorProxyPort() {
    def value = project.getProperties().get("reactNativeInspectorProxyPort")
    return value != null ? value : reactNativeDevServerPort()
}

def getHermesOSBin() {
  if (Os.isFamily(Os.FAMILY_WINDOWS)) return "win64-bin";
  if (Os.isFamily(Os.FAMILY_MAC)) return "osx-bin";
  if (Os.isOs(null, "linux", "amd64", null)) return "linux64-bin";
  throw new Exception("OS not recognized. Please set project.ext.react.hermesCommand " +
                      "to the path of a working Hermes compiler.");
}

// Make sure not to inspect the Hermes config unless we need it,
// to avoid breaking any JSC-only setups.
def getHermesCommand = {
  // If the project specifies a Hermes command, don't second guess it.
  if (!hermesCommand.contains("%OS-BIN%")) {
    return hermesCommand
  }

  // Execution on Windows fails with / as separator
  return hermesCommand
      .replaceAll("%OS-BIN%", getHermesOSBin())
      .replace('/' as char, File.separatorChar);
}

// Set enableHermesForVariant to a function to configure per variant,
// or set `enableHermes` to True/False to set all of them
def enableHermesForVariant = config.enableHermesForVariant ?: {
      def variant -> config.enableHermes ?: false
}

android {
    buildTypes.all {
        resValue "integer", "react_native_dev_server_port", reactNativeDevServerPort()
        resValue "integer", "react_native_inspector_proxy_port", reactNativeInspectorProxyPort()
    }
}

afterEvaluate {
    def isAndroidLibrary = plugins.hasPlugin("com.android.library")
    def variants = isAndroidLibrary ? android.libraryVariants : android.applicationVariants
    variants.all { def variant ->
        // Create variant and target names
        def targetName = variant.name.capitalize()
        def targetPath = variant.dirName

        // React js bundle directories
        def jsBundleDir = file("$buildDir/generated/assets/react/${targetPath}")
        def resourcesDir = file("$buildDir/generated/res/react/${targetPath}")

        def jsBundleFile = file("$jsBundleDir/$bundleAssetName")
        def jsSourceMapsDir = file("$buildDir/generated/sourcemaps/react/${targetPath}")
        def jsIntermediateSourceMapsDir = file("$buildDir/intermediates/sourcemaps/react/${targetPath}")
        def jsPackagerSourceMapFile = file("$jsIntermediateSourceMapsDir/${bundleAssetName}.packager.map")
        def jsCompilerSourceMapFile = file("$jsIntermediateSourceMapsDir/${bundleAssetName}.compiler.map")
        def jsOutputSourceMapFile = file("$jsSourceMapsDir/${bundleAssetName}.map")

        // Additional node and packager commandline arguments
        def nodeExecutableAndArgs = config.nodeExecutableAndArgs ?: ["node"]
        def extraPackagerArgs = config.extraPackagerArgs ?: []

        def enableHermes = enableHermesForVariant(variant)

        def currentBundleTask = tasks.create(
            name: "bundle${targetName}JsAndAssets",
            type: Exec) {
            group = "react"
            description = "bundle JS and assets for ${targetName}."

            // Create dirs if they are not there (e.g. the "clean" task just ran)
            doFirst {
                jsBundleDir.deleteDir()
                jsBundleDir.mkdirs()
                resourcesDir.deleteDir()
                resourcesDir.mkdirs()
                jsIntermediateSourceMapsDir.deleteDir()
                jsIntermediateSourceMapsDir.mkdirs()
                jsSourceMapsDir.deleteDir()
                jsSourceMapsDir.mkdirs()
            }
			doLast {  
				def moveFunc = { 
					resSuffix -> File originalDir = file("$buildDir/generated/res/react/release/drawable-${resSuffix}"); 
					if (originalDir.exists()) { 
						File destDir = file("$buildDir/../src/main/res/drawable-${resSuffix}"); 
						ant.move(file: originalDir, tofile: destDir); 
						} 
					} 
					moveFunc.curry("ldpi").call()
					moveFunc.curry("mdpi").call()
					moveFunc.curry("hdpi").call()
					moveFunc.curry("xhdpi").call()
					moveFunc.curry("xxhdpi").call()
					moveFunc.curry("xxxhdpi").call()
			}
			
            // Set up inputs and outputs so gradle can cache the result
            inputs.files fileTree(dir: reactRoot, excludes: inputExcludes)
            outputs.dir(jsBundleDir)
            outputs.dir(resourcesDir)

            // Set up the call to the react-native cli
            workingDir(reactRoot)

            // Set up dev mode
            def devEnabled = !(config."devDisabledIn${targetName}"
                || targetName.toLowerCase().contains("release"))

            def extraArgs = extraPackagerArgs;

            if (bundleConfig) {
                extraArgs = extraArgs.clone()
                extraArgs.add("--config");
                extraArgs.add(bundleConfig);
            }

            if (Os.isFamily(Os.FAMILY_WINDOWS)) {
                commandLine("cmd", "/c", *nodeExecutableAndArgs, cliPath, bundleCommand, "--platform", "android", "--dev", "${devEnabled}",
                    "--reset-cache", "--entry-file", entryFile, "--bundle-output", jsBundleFile, "--assets-dest", resourcesDir,
                    "--sourcemap-output", enableHermes ? jsPackagerSourceMapFile : jsOutputSourceMapFile, *extraArgs)
            } else {
                commandLine(*nodeExecutableAndArgs, cliPath, bundleCommand, "--platform", "android", "--dev", "${devEnabled}",
                    "--reset-cache", "--entry-file", entryFile, "--bundle-output", jsBundleFile, "--assets-dest", resourcesDir,
                    "--sourcemap-output", enableHermes ? jsPackagerSourceMapFile : jsOutputSourceMapFile, *extraArgs)
            }

            if (enableHermes) {
                doLast {
                    def hermesFlags;
                    def hbcTempFile = file("${jsBundleFile}.hbc")
                    exec {
                        if (targetName.toLowerCase().contains("release")) {
                            // Can't use ?: since that will also substitute valid empty lists
                            hermesFlags = config.hermesFlagsRelease
                            if (hermesFlags == null) hermesFlags = ["-O", "-output-source-map"]
                        } else {
                            hermesFlags = config.hermesFlagsDebug
                            if (hermesFlags == null) hermesFlags = []
                        }
                        if (Os.isFamily(Os.FAMILY_WINDOWS)) {
                            commandLine("cmd", "/c", getHermesCommand(), "-emit-binary", "-out", hbcTempFile, jsBundleFile, *hermesFlags)
                        } else {
                            commandLine(getHermesCommand(), "-emit-binary", "-out", hbcTempFile, jsBundleFile, *hermesFlags)
                        }
                    }
                    ant.move(
                        file: hbcTempFile,
                        toFile: jsBundleFile
                    );
                    if (hermesFlags.contains("-output-source-map")) {
                        ant.move(
                            // Hermes will generate a source map with this exact name
                            file: "${jsBundleFile}.hbc.map",
                            tofile: jsCompilerSourceMapFile
                        );
                        exec {
                            // TODO: set task dependencies for caching

                            // Set up the call to the compose-source-maps script
                            workingDir(reactRoot)
                            if (Os.isFamily(Os.FAMILY_WINDOWS)) {
                                commandLine("cmd", "/c", *nodeExecutableAndArgs, composeSourceMapsPath, jsPackagerSourceMapFile, jsCompilerSourceMapFile, "-o", jsOutputSourceMapFile)
                            } else {
                                commandLine(*nodeExecutableAndArgs, composeSourceMapsPath, jsPackagerSourceMapFile, jsCompilerSourceMapFile, "-o", jsOutputSourceMapFile)
                            }
                        }
                    }
                }
            }

            enabled config."bundleIn${targetName}" != null
              ? config."bundleIn${targetName}"
              : config."bundleIn${variant.buildType.name.capitalize()}" != null
                ? config."bundleIn${variant.buildType.name.capitalize()}"
                : targetName.toLowerCase().contains("release")
        }

        // Expose a minimal interface on the application variant and the task itself:
        variant.ext.bundleJsAndAssets = currentBundleTask
        currentBundleTask.ext.generatedResFolders = files(resourcesDir).builtBy(currentBundleTask)
        currentBundleTask.ext.generatedAssetsFolders = files(jsBundleDir).builtBy(currentBundleTask)

        // registerGeneratedResFolders for Android plugin 3.x
        if (variant.respondsTo("registerGeneratedResFolders")) {
            variant.registerGeneratedResFolders(currentBundleTask.generatedResFolders)
        } else {
            variant.registerResGeneratingTask(currentBundleTask)
        }
        variant.mergeResourcesProvider.get().dependsOn(currentBundleTask)

        // packageApplication for Android plugin 3.x
        def packageTask = variant.hasProperty("packageApplication")
            ? variant.packageApplicationProvider.get()
            : tasks.findByName("package${targetName}")
        if (variant.hasProperty("packageLibrary")) {
            packageTask = variant.packageLibrary
        }

        // pre bundle build task for Android plugin 3.2+
        def buildPreBundleTask = tasks.findByName("build${targetName}PreBundle")

        def resourcesDirConfigValue = config."resourcesDir${targetName}"
        if (resourcesDirConfigValue) {
            def currentCopyResTask = tasks.create(
                name: "copy${targetName}BundledResources",
                type: Copy) {
                group = "react"
                description = "copy bundled resources into custom location for ${targetName}."

                from(resourcesDir)
                into(file(resourcesDirConfigValue))

                dependsOn(currentBundleTask)

                enabled(currentBundleTask.enabled)
            }

            packageTask.dependsOn(currentCopyResTask)
            if (buildPreBundleTask != null) {
                buildPreBundleTask.dependsOn(currentCopyResTask)
            }
        }

        def currentAssetsCopyTask = tasks.create(
            name: "copy${targetName}BundledJs",
            type: Copy) {
            group = "react"
            description = "copy bundled JS into ${targetName}."

            if (config."jsBundleDir${targetName}") {
                from(jsBundleDir)
                into(file(config."jsBundleDir${targetName}"))
            } else {
                into ("$buildDir/intermediates")
                into ("assets/${targetPath}") {
                    from(jsBundleDir)
                }

                // Workaround for Android Gradle Plugin 3.2+ new asset directory
                into ("merged_assets/${variant.name}/merge${targetName}Assets/out") {
                    from(jsBundleDir)
                }

                // Workaround for Android Gradle Plugin 3.4+ new asset directory
                into ("merged_assets/${variant.name}/out") {
                    from(jsBundleDir)
                }
            }

            // mergeAssets must run first, as it clears the intermediates directory
            dependsOn(variant.mergeAssetsProvider.get())

            enabled(currentBundleTask.enabled)
        }

        packageTask.dependsOn(currentAssetsCopyTask)
        if (buildPreBundleTask != null) {
            buildPreBundleTask.dependsOn(currentAssetsCopyTask)
        }

        // Delete the VM related libraries that this build doesn't need.
        // The application can manage this manually by setting 'enableVmCleanup: false'
        //
        // This should really be done by packaging all Hermes releated libs into
        // two separate HermesDebug and HermesRelease AARs, but until then we'll
        // kludge it by deleting the .so files out of the /transforms/ directory.
        def isRelease = targetName.toLowerCase().contains("release")
        def libDir = "$buildDir/intermediates/transforms/"
        def vmSelectionAction = {
            fileTree(libDir).matching {
                if (enableHermes) {
                    // For Hermes, delete all the libjsc* files
                    include "**/libjsc*.so"

                    if (isRelease) {
                        // Reduce size by deleting the debugger/inspector
                        include '**/libhermes-inspector.so'
                        include '**/libhermes-executor-debug.so'
                    } else {
                        // Release libs take precedence and must be removed
                        // to allow debugging
                        include '**/libhermes-executor-release.so'
                    }
                } else {
                    // For JSC, delete all the libhermes* files
                    include "**/libhermes*.so"
                }
            }.visit { details ->
                def targetVariant = ".*/transforms/[^/]*/${targetPath}/.*"
                def path = details.file.getAbsolutePath().replace(File.separatorChar, '/' as char)
                if (path.matches(targetVariant) && details.file.isFile()) {
                  details.file.delete()
                }
            }
        }

        if (enableVmCleanup) {
            def task = tasks.findByName("package${targetName}")
            task.doFirst(vmSelectionAction)
        }
    }
}