package com.nxapp;

import android.app.Application;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSession;

import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePush;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.github.reactnativecommunity.location.RNLocationPackage;
import com.rumax.reactnative.pdfviewer.PDFViewPackage;
import com.christopherdro.htmltopdf.RNHTMLtoPDFPackage;
import org.reactnative.camera.RNCameraPackage;
import com.rnfs.RNFSPackage;
import com.reactnativecommunity.viewpager.RNCViewPagerPackage;
import io.github.traviskn.rnuuidgenerator.RNUUIDGeneratorPackage;
import cc.rocwang.aescrypto.AesCryptoPackage;
import com.RNRSA.RNRSAPackage;
import com.taessina.paypal.RNPaypalWrapperPackage;
import com.reactlibrary.RNPaypalPackage;


import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.reactnativecommunity.slider.ReactSliderPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.corbt.keepawake.KCKeepAwakePackage;
import com.brentvatne.react.ReactVideoPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

import java.util.Arrays;
import java.util.List;
import com.microsoft.codepush.react.CodePush;


public class MainApplication extends Application implements ReactApplication {
  private  ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
    // 2. Override the getJSBundleFile method in order to let
    // the CodePush runtime determine where to get the JS
    // bundle location from on each app start
    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new CodePush(getResources().getString(R.string.CodePushDeploymentKey), getApplicationContext(), BuildConfig.DEBUG),
            new GeolocationPackage(),
            new RNLocationPackage(),
            new PDFViewPackage(),
            new RNHTMLtoPDFPackage(),
            new RNCameraPackage(),
            new RNFSPackage(),
            new RNCViewPagerPackage(),
            new RNUUIDGeneratorPackage(),
            new AesCryptoPackage(),
            new RNRSAPackage(),
            new RNPaypalWrapperPackage(),
            new AsyncStoragePackage(),
            new RNDeviceInfo(),
            new RNI18nPackage(),
            new ReactSliderPackage(),
            new LinearGradientPackage(),
            new OrientationPackage(),
            new VectorIconsPackage(),
            new KCKeepAwakePackage(),
            new ReactVideoPackage(),
            new RNCWebViewPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  public void setReactNativeHost(ReactNativeHost reactNativeHost) {
      mReactNativeHost = reactNativeHost;
  }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
      public boolean verify(final String hostname, final SSLSession session) {
          if (hostname.equals("app.epi-age.com")){
              return true;
          }else{
              return false;
          }
      }
      });
    } 

}
