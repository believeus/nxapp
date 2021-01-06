import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView, Container } from 'react-native';
import { WebView } from 'react-native-webview';
import Session from '../storage/Session'

type Props = {};
export default class PdfViewActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: "PDF View"
        })
    }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Session.load("sessionuser").then((user) => {
            this.setState({ user })
        })
    }
    render() {
        const { params } = this.props.navigation.state
        const resourceType = 'url';
        return (
            <View style={{ flex: 1 }}>
                <WebView startInLoadingState={true} source={{ uri: params.pdfpath }} />
                {/* Some Controls to change PDF resource
                <PDFView
                    fadeInDuration={250.0}
                    style={{ flex: 1 }}
                    resource={params.pdfpath}
                    resourceType={resourceType}
                    onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                    onError={(error) => console.log('Cannot render PDF', error)}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        margin: 10
    }
})