import React, { Component } from 'react';
import {
    AppRegistry,
    FlatList,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import { 
    Card,
    Icon 
} from 'react-native-elements';

import FlipCard from 'react-native-flip-card';

export default class WordFlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // componentWillMount(){
    //     this.animatedValue = new Animated.Value(0);

    //     this.frontInterpolate = this.animatedValue.interpolate({
    //         inputRange: [0, 180],
    //         outputRange: ['0deg', '180deg'],
    //     });
    //     this.backInterpolate = this.animatedValue.interpolate({
    //         inputRange: [0, 180],
    //         outputRange: ['180deg', '360deg'],
    //     });
    // }

    render() {
        // const frontAnimatedStyle ={
        //     transfrom:[
        //         { rotateX: this.frontInterpolate}
        //     ]
        // };
        // const backAnimatedStyle ={
        //     transfrom:[
        //         { rotateX: this.backInterpolate}
        //     ]
        // };

        return (
            <View style={styles.ItemContainer}>
                <FlipCard
                    style={styles.flip}
                    friction={1000}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={false}
                    clickable={true}>
                    {/* Face Side */}
                    <Card containerStyle={styles.cardView}
                        wrapperStyle={styles.vc_card}>
                        <View style={styles.vc_top}>
                            <View style={styles.vc_topLeft}>
                                <View style={styles.vc_wordDes}>
                                    <Text style={styles.txt_word}>{this.props.item.word}</Text>
                                    <Text style={styles.txt_pronun}>{this.props.item.pronoun}</Text>
                                    <Icon
                                        name='volume-up'
                                        type='MaterialIcons'
                                        size={30}
                                        color='#517fa4'
                                        onPress={() => {Alert.alert(
                                            'Alert Title',
                                            'My Alert Msg',
                                            [
                                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                                            ],
                                            { cancelable: false }
                                        );}}
                                    />
                                </View>
                                <View style={styles.vc_exampleTitle}>
                                    <Text style={styles.txt_exTitle}>Example:</Text>
                                </View>
                            </View>
                            <View style={styles.vc_topRight}>
                                <Image style={styles.img} 
                                    source={{ uri: this.props.item.img }}/>
                            </View>
                        </View>
                        <View style={styles.vc_bottom}>
                            <Text style={styles.txt_ex}>Hello every body</Text>
                        </View>

                    </Card>
                    {/* Back Side */}
                    <Card >
                        <Text style={styles.txt_wordTranslate}>back</Text>
                    </Card>
                </FlipCard>
                
                {/* <Animated.View style={[frontAnimatedStyle, styles.cardFront]}>
                    <Card containerStyle={styles.cardView}
                        wrapperStyle={styles.vc_card}>
                        <View style={styles.vc_top}>
                            <View style={styles.vc_topLeft}>
                                <View style={styles.vc_wordDes}>
                                    <Text style={styles.txt_word}>{this.props.item.word}</Text>
                                    <Text style={styles.txt_pronun}>{this.props.item.pronoun}</Text>
                                    <Icon
                                        name='volume-up'
                                        type='MaterialIcons'
                                        size={30}
                                        color='#517fa4'
                                    />
                                </View>
                                <View style={styles.vc_exampleTitle}>
                                    <Text style={styles.txt_exTitle}>Example:</Text>
                                </View>
                            </View>
                            <View style={styles.vc_topRight}>
                                <Image style={styles.img} 
                                    source={{ uri: this.props.item.img }}/>
                            </View>
                        </View>
                        <View style={styles.vc_bottom}>
                            <Text style={styles.txt_ex}>Hello every body</Text>
                        </View>

                    </Card>
                </Animated.View>
                <Animated.View style={[backAnimatedStyle, styles.vc_cardBack]}>
                    <Card>
                        <Text>back</Text>
                    </Card>
                </Animated.View> */}
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // Compoent
    flip: {
        borderWidth: 0,
        padding: 0,
        margin:0
    },
    ItemContainer: {
        flex: 0,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 8
    },
    cardView: {
        borderRadius: 3,
        paddingHorizontal:16,
        paddingVertical:14
    },
    img: {
        width: '100%',
        height: '100%',
        minWidth:50,
        resizeMode: 'cover',
        borderRadius:3,
        // backgroundColor:'grey'
    },
    txt_word: {
        fontSize: 24,
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#00BCD4',
        paddingRight:8,
        // backgroundColor:'white'

    },
    txt_wordTranslate: {
        fontSize: 24,
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#00BCD4',
        paddingRight:8,
        textAlign: 'center',
        // backgroundColor:'red'

    },
    txt_pronun: {
        fontSize: 14,
        fontFamily: 'System',
        opacity: 0.6,
        paddingTop:6
        
    },
    txt_ex: {
        fontSize: 14,
        fontFamily: 'System',
    },
    txt_exTitle: {
        fontSize: 14,
        fontFamily: 'System',
        color: '#6F7FD4',
        
    },
    // View
    vc_cardFront: {
        backfaceVisibility:'hidden',
        backgroundColor:'blue'
    },
    vc_cardBack: {
        backgroundColor:'red'
    },
    vc_card: {
        flex:1,
        width:'100%',
        padding:3
    },
    vc_top : {
        height:150,
        flexDirection:'row',
        // backgroundColor:'red'
    },
    vc_bottom: {
        flex:0, 
        flexDirection:'row',
        // backgroundColor:'green',
        paddingHorizontal:5,
        paddingTop:5,
    },
    vc_topLeft : {
        minWidth:'48%',
        flex: 0
    },
    vc_topRight : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    vc_wordDes: {
        flex:70,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'blue'
    },
    vc_exampleTitle: {
        flex:0,
        justifyContent:'flex-end',
        paddingLeft:5
    },
    
});
