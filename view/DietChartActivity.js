import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native'
import { I18n } from '../locales/i18n'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

type Props = {};
export default class DietChartActivity extends Component<Props> {
    static navigationOptions = ({ navigation, screenProps }) => {
        return ({
            title: I18n.t("DietChartActivity.name"),
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
        };
        this.items = [
            // this is the parent or 'item'
            {
                name: 'Fruits',
                id: 0,
                // these are the children or 'sub items'
                children: [
                    {
                        name: 'Apple',
                        id: 10,
                    },
                    {
                        name: 'Strawberry',
                        id: 17,
                    },
                    {
                        name: 'Pineapple',
                        id: 13,
                    },
                    {
                        name: 'Banana',
                        id: 14,
                    },
                    {
                        name: 'Watermelon',
                        id: 15,
                    },
                    {
                        name: 'Kiwi fruit',
                        id: 16,
                    },
                ],
            },
            {
                //other
            },

        ];
    }

    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View>
                    <SectionedMultiSelect
                        items={this.items}
                        uniqueKey="id"
                        subKey="children"
                        selectText="Choose some things..."
                        showDropDowns={true}
                        readOnlyHeadings={true}
                        onSelectedItemsChange={(selectedItems) => { this.setState({ selectedItems }); }}
                        selectedItems={this.state.selectedItems}
                    />
                </View>
            </ScrollView>

        );
    }
}

