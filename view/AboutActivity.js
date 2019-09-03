import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { I18n  } from '../locales/i18n';

type Props = {};
export default class AboutActivity extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Text>{I18n.t('TabHomeActivity.name')}</Text>
        );
    }
}

