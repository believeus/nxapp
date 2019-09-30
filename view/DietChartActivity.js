import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, Modal, Alert, TextInput } from 'react-native'
import { I18n } from '../locales/i18n'
import { WebView } from 'react-native-webview'
import InputSpinner from "react-native-input-spinner";
import Search from 'react-native-search-box';

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
            dietbox: [],
            items: [],
            display: false,
            curpage: 1,
            size: 1,
            isshow: false,
            itembox: [],
            index: -1
        };

    }

    load = (text, index) => {
        this.setState({ items: [] })
        this.setState({ index })
        this.setState({ text })
        let url = "https://esha-nutrition-demo.azurewebsites.net/api/foods?query=" + text + "&count=5&start=" + index + "&spell=true&"
        fetch(url).then(res => res.json()).then((data) => {
            console.info(data)
            this.setState({ isshow: true })
            this.setState({ total: data.total })
            let allpage = data.total / 5.0
            this.setState({ allpage })
            let items = []
            let item = data.items;
            for (let i in item) {
                let view =
                    <View key={i} style={{ width: "100%", borderBottomWidth: 1, borderColor: "#808080" }}>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <TouchableOpacity style={{ width: "85%", flexDirection: "row" }}
                                onPress={() => {
                                    let url = "https://esha-nutrition-demo.azurewebsites.net/api/food/" + item[i].id + "?"
                                    fetch(url).then(res => res.json()).then((data) => {
                                        Alert.alert("detail", "Saturated Fat:" + data.nutrient_data[0].value + " g\nCalories:" + data.nutrient_data[1].value + " kcal")
                                    })
                                }} >
                                <View style={{ width: "100%", alignItems: "center" }}>
                                    <View style={{ width: "100%", flexDirection: "row" }}>
                                        <Text><Text style={{ fontWeight: "bold" }}>Amount:</Text>{item[i].quantity} Each </Text>
                                    </View>
                                    <View style={{ width: "100%", flexDirection: "row" }}>
                                        <Text><Text style={{ fontWeight: "bold" }}>Category:</Text>{item[i].category}</Text>
                                    </View>
                                    <View style={{ width: "100%", flexDirection: "row" }}>
                                        <Text style={{ fontWeight: "bold" }}>Description:<Text style={{ color: "#0071BC", textDecorationLine: "underline" }}>{item[i].description}</Text></Text>
                                    </View>
                                    <View style={{ width: "100%" }}>
                                        <Text><Text style={{ fontWeight: "bold" }}>Groups:</Text>{item[i].groups}</Text>
                                    </View>
                                    <View style={{ width: "100%" }}>
                                        <Text><Text style={{ fontWeight: "bold" }}>Product:</Text>{item[i].product}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ width: "15%" }}>
                                <TouchableOpacity>
                                    <Button title="add" onPress={() => {
                                        let url = "https://esha-nutrition-demo.azurewebsites.net/api/food/" + item[i].id + "?"
                                        if (this.state.itembox.indexOf(item[i].id) == -1) {
                                            this.state.itembox.push(item[i].id)
                                            this.setState({ itembox: this.state.itembox })
                                            fetch(url).then(res => res.json()).then((data) => {
                                                let itemid = this.state.index + 1
                                                this.setState({ index, itemid })
                                                let diet = {};
                                                diet.quantity = data.quantity + ""
                                                diet.description = data.description
                                                diet.calories = data.nutrient_data[1].value
                                                let dietview =
                                                    <View key={(new Date()).valueOf()} style={{ width: "100%", alignItems: "center" }}>
                                                        <View style={{ width: "90%", flexDirection: "row" }}>
                                                            <Text style={{ width: "40%", color: "#0071BC", fontSize: 14, fontWeight: "bold", height: 20 }}>{diet.description}</Text>
                                                            <View style={{ width: "30%", height: 20, alignItems: "center" }}>
                                                                <InputSpinner
                                                                    inputStyle={{ paddingVertical: 0 }}
                                                                    showBorder={true}
                                                                    fontSize={16}
                                                                    rounded={false}
                                                                    height={20}
                                                                    width={70}
                                                                    max={100}
                                                                    min={1}
                                                                    precision={1}
                                                                    step={1}
                                                                    arrows={true}
                                                                    color={"#a0a0a0"}
                                                                    value={1}
                                                                    onChange={(value) => {
                                                                        // let url = data.url + "user/sleep/update.jhtml?uuid=" + this.state.user.uuid + "&column=" + this.props.column + "&value=" + value + "&utime=" + new Date().getTime();
                                                                        // fetch(url).then(res => res.text()).then(() => {
                                                                        //     this.load();
                                                                        // }).catch(function (error) {
                                                                        //     console.log('There has been a problem with your fetch operation: ' + error.message);
                                                                        // });

                                                                    }}
                                                                />
                                                            </View>
                                                            <View style={{ width: "30%" }}>
                                                                <TouchableOpacity itemid={itemid} ref={(ref) => { this.obj = ref }} onPress={() => {
                                                                    console.info(this.obj)
                                                                    // let index=this.state.index-1
                                                                    // this.setState({index})
                                                                    // console.info(this.state.index)
                                                                    //this.setState({ dietbox: this.state.dietbox.splice(j,1) })
                                                                }}>
                                                                    <Text style={{ fontWeight: "bold", textAlign: "right", width: "100%" }}>Remove</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                        <View style={{ width: "100%", height: 5, alignItems: "center" }}><View style={{ width: "90%", height: "100%", borderBottomColor: "#efefef", borderBottomWidth: 1 }}></View></View>
                                                    </View>

                                                this.state.dietbox.push(dietview)
                                                this.setState({ dietbox: this.state.dietbox })
                                            })
                                        } else {
                                            Alert.alert("Items have been added to the list")
                                        }
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                items.push(view)
            }
            this.setState({ items })
        })

    }
    render() {
        const navigate = this.props.navigation;//此处可以自定义跳转属性
        return (
            <ScrollView>
                <View style={{ width: "100%" }}>
                    {this.state.display == true ?
                        <Modal animationType='slide' transparent={false} visible={this.state.display} onRequestClose={() => { this.setState({ display: true }) }}>
                            <WebView ref={(ref) => { this.brower = ref }} source={{ uri: "https://www.nhlbi.nih.gov/health/educational/lose_wt/eat/calories.htm" }} />
                            <View style={{ width: "100%", height: 35, backgroundColor: "#0071BC" }}>
                                <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                                    <Button style={{ width: "100%", height: "100%", backgroundColor: "#0071BC" }} title="close" onPress={() => { { this.setState({ display: false }) } }} />
                                </TouchableOpacity>
                            </View>
                        </Modal> : null
                    }
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ width: "90%", height: 45 }}><Text style={{ fontSize: 18, fontWeight: "bold", textAlignVertical: "center", height: "100%" }}>Food Consumption (calories/day)</Text></View>
                        <View style={{ width: "90%" }}>
                            <TouchableOpacity onPress={() => { this.setState({ display: true }) }}>
                                <Text style={{ fontSize: 12, fontWeight: "bold", textAlignVertical: "center", color: "#0071BC" }}>
                                    Source: National Heart, Lung, and Blood Institute
                                </Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                                Recommendation:
                            </Text>
                            <Text>Eating plans that contain 1,200–1,500 calories each day will help most women lose weight safely. Eating plans that contain 1,500–1,800 calories each day are suitable for men and for women who weigh more or who exercise regularly.</Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 20 }}></View>
                    <View style={{ width: "100%", alignItems: "center" }}>
                        <View style={{ width: "90%", flexDirection: "row", borderBottomColor: "#efefef", borderBottomWidth: 1 }}>
                            <View style={{ width: "40%" }}><Text style={{ textAlign: "center" }}>Food</Text></View>
                            <View style={{ width: "30%" }}><Text style={{ textAlign: "center" }}>Each</Text></View>
                            <View style={{ width: "30%" }}><Text style={{ textAlign: "right" }}>Edit</Text></View>
                        </View>
                        <View style={{ width: "100%", height: 5 }}></View>
                    </View>
                    {this.state.dietbox.length == 0 ? null : this.state.dietbox.map((value) => { console.info(value); return value })}
                    <View style={{ width: "100%", height: 10 }}></View>
                    <View>
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <View style={{ width: "90%" }}><Text style={{ fontWeight: "bold" }}>Select your diet</Text></View>
                        </View>
                        <View>
                            <Search
                                ref={(ref) => { this.searchbox = ref }}
                                onCancel={() => { this.setState({ items: [] }) }}
                                onSearch={(text) => {
                                    this.load(text, 0)
                                }}
                            />
                        </View>
                        <ScrollView keyboardShouldPersistTaps="always" style={{ backgroundColor: '#f8f8f8', width: "100%", height: 600 }}>
                            {this.state.items}
                            {this.state.isshow == true ?
                                <View style={{ width: "100%", height: 30, flexDirection: "row" }}>
                                    <View style={{ width: "30%", height: 30 }}>
                                        <Text style={{ width: "100%", textAlignVertical: "center", height: 30, textAlign: "right" }}>Total:{this.state.allpage} page</Text>
                                    </View>
                                    <View style={{ width: "40%" }}>
                                        <TouchableOpacity onPress={() => {
                                            if (this.state.curpage == 1) { return; }
                                            let curpage = this.state.curpage - 1
                                            this.setState({ curpage })
                                            let index = this.state.index - 5
                                            this.setState({ index })
                                            this.load(this.state.text, index)
                                        }}>
                                            <Text style={{ color: "#0071BC", fontWeight: "bold", textAlignVertical: "center", height: "100%", textAlign: "right" }}>prev</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: "5%", height: 30 }}><Text style={{ textAlignVertical: "center", fontWeight: "bold", width: "100%", height: "100%", textAlign: "center" }}>{this.state.curpage}</Text></View>
                                    <View style={{ width: "10%" }}>
                                        <TouchableOpacity onPress={() => {
                                            if (curpage == this.state.total) { return; }
                                            let curpage = this.state.curpage + 1
                                            this.setState({ curpage })
                                            let index = this.state.index + 5
                                            this.setState({ index })
                                            this.load(this.state.text, index)
                                            this.setState({ greycolor: "#0071BC" })

                                        }}>
                                            <Text style={{ color: "#0071BC", fontWeight: "bold", textAlignVertical: "center", height: "100%", textAlign: "left" }}>next</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> : null}
                        </ScrollView>
                    </View>

                </View>

            </ScrollView >

        );
    }
}

