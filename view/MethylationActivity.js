import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { I18n } from '../locales/i18n';

type Props = {};
export default class MethylationActivity extends Component<Props> {
    static navigationOptions = {
        name: I18n.t("MethylationActivity.name"),
    };
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Text style={{ fontFamily: 'NotoSansHans-Medium', lineHeight: 49, fontSize: 22, color: '#0071bc' }}>DNA methylation is a chemical mark on DNA </Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>DNA methylation is a chemical mark that is added to DNA at different positions during gestation. </Text>
                    <Text style={{ height: 45, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>DNA methylation is part of the "epigenetic" program of our genes.</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>When DNA methylation happens at several important positions in genes it can silence the function of the gene.</Text>
                    <Text style={{ height: 45, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>This is how the same gene can be expressed or silenced in different cells in our body.</Text>
                    <Image style={{ height: 189, width: '100%' }} resizeMode='center' source={require("../image/icons/methy1.png")}></Image>
                </View>

                <Text style={{ width: '90%', alignSelf: 'center', fontFamily: 'NotoSansHans-Medium', lineHeight: 49, fontSize: 22, color: '#0071bc', marginTop: 20, }}>DNA methylation; the genome software</Text>
                <Image style={{ height: 123, width: '100%', marginBottom: 20 }} resizeMode='center' source={require("../image/icons/methy4.jpg")}></Image>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, }}>
                    <Text style={{ height: 56, fontSize: 14, marginBottom: 8, fontFamily: 'NotoSansHans-Medium', lineHeight: 34 }}>If we imagine that our DNA is a minicomputer running our cells then:</Text>
                    <Text style={{ height: 23, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>DNA - is the Hardware.</Text>
                    <Text style={{ height: 23, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>The genetic Sequence - is the Operating system.</Text>
                    <Text style={{ height: 45, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>DNA methylation is the - Softwre coding Apps on DNA.</Text>
                    <Text style={{ height: 45, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Different " Apps" make cells perform specific tasks in space and time.</Text>
                    <Text style={{ height: 125, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18, color: '#0071bc' }}>
                        These genomic Apps make sure that our body functions properly. Each tissue is properly programmed to
                        ensure our health and well being. Each cell type has its unique combination of methylation marks and as
                        a consequence a unique combination of genes that are active and silent.</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Image style={{ height: 189, width: '100%' }} resizeMode='center' source={require("../image/icons/methy2.png")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ height: 123, alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', lineHeight: 27, fontSize: 22, color: '#0071bc', marginTop: 20, }}>Changes in DNA methylation can cause disease; mapping DNA methylation changes could detect disease</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Changes in DNA methylation alter the way cells and tissues operate and can convert a healthy tissue to a diseased tissue.</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>More than three decades ago Szyf has suggested that changes in DNA methylation would cause diseases such as cancer. </Text>
                    <Text style={{ height: 50, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Therefore, DNA methylation is a great platform for detecting and treating disease.</Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Studies from the laboratory of Szyf at McGill University showed that one can reverse cancer in an animal model by blocking the protein that adds methylation groups to DNA. This has been replicated by many studies since.</Text>
                    <Text style={{ height: 67, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>More recently Szyf has shown that by examining DNA methylation in white blood cells, it is possible to detect liver cancer early.</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Image style={{ height: 239, width: '100%' }} resizeMode='center' source={require("../image/icons/methy5.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, }}>
                    <Text style={{ height: 89, alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', lineHeight: 27, fontSize: 22, color: '#0071bc', marginTop: 20, }}>The environment can cause changes in DNA methylation</Text>
                    <Text style={{ height: 99, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Studies by Jirtle and his colleagues in 2004 showed in a mouse model that maternal diet during pregnancy affects DNA methylation of her offspring and change their coat color and rish of obesity and other conditions.</Text>
                    <Text style={{ height: 119, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>Studies by Szyf and colleagues discovered that maternal care and behavior affects DNA methylation of her offspring and how they react to stress later in life. These studies launched the fields of behavioral epigenetics and epigenetic psychiatry. </Text>
                    <Text style={{ height: 56, fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 18 }}>
                        These discoveries provided the first evidence that both psychological and physical environments can
                        affect DNA methylation.
            </Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <Image style={{ height: 239, width: '100%' }} resizeMode='center' source={require("../image/icons/methy6.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20, flexDirection: 'row', }}>
                    <Text style={{ height: 99, width: '65%', alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', fontWeight: '700', color: '#0071bc', lineHeight: 18, paddingTop: 19 }}>DNA methylation is potentially reversible by both physical and behavioral interventions</Text>
                    <Image style={{ height: 99, width: '35%' }} resizeMode='center' source={require("../image/icons/methy7.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 77, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Studies suggest that different environmental changes can change or reverse DNA methylation events.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 77, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Thus, the potential is there that we might be able to change DNA methylation by lifestyle changes.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 77, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our optimism about DNA methylation derives from the fact that DNA methylation in difference from genetics is reversible.</Text>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 20, flexDirection: 'row', }}>
                    <Text style={{ height: 99, width: '65%', alignSelf: 'center', fontFamily: 'FontAwesome5_Brands', fontWeight: '700', color: '#0071bc', lineHeight: 23, paddingTop: 19 }}>DNA methylation and the epigenetic clock</Text>
                    <Image style={{ height: 99, width: '35%' }} resizeMode='center' source={require("../image/icons/methy8.jpg")}></Image>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', paddingBottom: 20, borderBottomColor: '#f0f0f0', borderBottomWidth: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 77, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 77, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>A paradigm shift in the search for biological age markers has happened with the discovery of the "epigenetic clock" by Horvath.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 66, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 66, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>It was discovered that the level of methylation of certain genes in our DNA changes as we age.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 66, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 66, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>By measuring methylation in these genes it is possible to determine our biological age.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 66, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 66, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Our biological age is a better measure of our health and well being than chronological age.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 66, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 66, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Studies show that acceleration of " DNA methylation age" is a predictor of early death and chronic disease.</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ height: 66, width: '7%', fontSize: 14, color: '#0071bc' }}>●</Text>
                        <Text style={{ height: 66, width: '95%', fontSize: 14, marginBottom: 8, fontFamily: 'FontAwesome', lineHeight: 21 }}>Experiments in animals show that it is possible to reverse the biological clock bydietary changes.</Text>
                    </View>
                </View>
                <Text style={{ fontFamily: 'NotoSansHans-Light', fontSize: 12, textAlign: 'center', marginTop: 20 }}>@2019 HKG epi THERAPEUTICS Ltd. All Rights Reserved</Text>
            </ScrollView>
        );
    }
}

