import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    StyleSheet,
    PanResponder,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const ScreenWidth = Dimensions.get('window').width;

export default class ISlider extends Component<Props> {
    static propTypes = {
        height: PropTypes.number, // 控件高度
        width: PropTypes.number, // 控件宽度
        maximumTrackTintColor: PropTypes.string, // 进度条背景颜色
        minimumTrackTintColor: PropTypes.string, // 进度条进度部分颜色
        onChange: PropTypes.func, // 进度值发生改变时的回调
        onAfterChange: PropTypes.func, // 拖动结束时的回调
        defaultValue: PropTypes.number, // 默认的进度值
        min: PropTypes.number.isRequired, // 进度范围最小值
        max: PropTypes.number.isRequired, // 进度范围最大值
        step: PropTypes.number.isRequired, // 步长（进度变化的最小单位）
        disabled: PropTypes.bool, // 是否可以拖动
        thumbSize: PropTypes.number, // 滑块的尺寸
        thumbImage: PropTypes.number, // 滑块的图片
        processHeight: PropTypes.number, // 进度条高度
    };

    static defaultProps = {
        height: 20,
        width: ScreenWidth,
        onChange: () => { },
        onAfterChange: () => { },
        defaultValue: 0,
        disabled: false,
        thumbSize: 20,
        thumbImage: null,
        maximumTrackTintColor: '#dcdbdb',
        minimumTrackTintColor: '#577BFF',
        processHeight: 4,
    };

    state = {
        process: 0,
        processWidth: 0,
    };

    constructor(props) {
        super(props);
        console.info(props)
        this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
        this._onPanResponderEnd = this._onPanResponderEnd.bind(this);
        this._onPanResponderMove = this._onPanResponderMove.bind(this);
    }

    componentWillMount() {
        this.watcher = PanResponder.create({
            // 建立监视器
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: this._onPanResponderGrant, // 按下
            onPanResponderMove: this._onPanResponderMove, // 移动
            onPanResponderEnd: this._onPanResponderEnd, // 结束
        });
        const {
            defaultValue, min, max, thumbSize,
        } = this.props;
        const process = defaultValue / (max - min);

        this.setState({
            process,
            newValue: 0,
            processWidth: ScreenWidth - thumbSize,
        });
    }

    _onPanResponderGrant(e, gestureState) {
        const { thumbSize } = this.props;
        const { processWidth } = this.state;
        const process = (gestureState.x0 - thumbSize / 2) / processWidth;

        this._changeProcess(process);
    }
    _onPanResponderMove(e, gestureState) {
        const { thumbSize } = this.props;
        const { processWidth } = this.state;
        const process = (gestureState.x0 - thumbSize / 2 + gestureState.dx) / processWidth;
        this._changeProcess(process);
    }
    _onPanResponderEnd(e, gestureState) {
        const { onAfterChange } = this.props;
        if (onAfterChange) {
            // onAfterChange(gestureState.x0);
            onAfterChange(this.state.newValue);
        }
    }

    _changeProcess(changeProcess) {
        // 判断滑动开关
        const { disabled } = this.props;
        if (disabled) return;
        const { min, max, step, onChange } = this.props;
        const { process } = this.state;

        if (changeProcess >= 0 && changeProcess <= 1) {

            onChange(changeProcess);
            // 按步长比例变化刻度
            const v = changeProcess * (max - min);
            const newValue = Math.round(v / step) * step;
            this.setState({ newValue });
            const newProcess = newValue / (max - min);
            if (process !== newProcess) {
                this.setState({
                    process: newProcess,
                });
            }
            if (newProcess) {

            }
        }
    }

    render() {
        const { height, width, thumbSize } = this.props;
        const { process, processWidth } = this.state;
        return (
            <View style={{width:"100%"}}>
                <View style={{ width: "90%", alignSelf: 'center' }}>
                    <View>
                        <View style={{ borderRadius: 50, height: 20, width: "100%", flexDirection: "row" }}>
                            {this.props.gradient ? this.props.gradient.map((item) => {
                                return <View style={{ width: item[0] }}>
                                    <Text style={{ textAlign: "right" }}>{item[2]}</Text>
                                </View>
                            }) : null}
                        </View>
                    </View>
                    <View style={{ width: "100%", flexDirection: "row", height: 23 }} >
                        {this.props.gradient ? this.props.gradient.map((item) => {
                            return <View style={{ width: item[0], backgroundColor: item[1], }}></View>
                        }) : null}
                    </View>
                </View>
                    <View {...this.watcher.panHandlers} style={{ left: process * processWidth * 0.9 }}>
                        <View style={{ width: thumbSize }}>
                            <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={require("../image/icons/jiantou.png")} />
                            <Text style={{ fontSize: 12, textAlign: 'center', width: 30 }}>{this.state.newValue}</Text>
                        </View>
                    </View>
            </View>
        );
    }
}