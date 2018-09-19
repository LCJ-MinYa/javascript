## SwitchHeaderTitle 自定义

![image](./img/SwitchHeaderTitle.gif)

``` javascript
//SwitchHeaderTitle.js
export const CHECKIN_LIST = [{
    text: '渠道部门',
    isActive: true,
}, {
    text: '代理商',
    isActive: false,
}];


export default class SwitchHeaderTitle extends Component {
    renderHeaderTitleList() {
        let headerTitleListArray = [];
        for (let i = 0; i < this.props.list.length; i++) {
            headerTitleListArray.push(
                <TouchableOpacity
                    key={i}
                    activeOpacity={0.7}
                    style={[styles.headerTitleItemViewStyle, this.props.list[i].isActive ? {backgroundColor: '#fff'} : null ,i == 0 ? styles.noHeaderTitleItemViewStyle : null]}
                    onPress={this.toggleSwitchHeaderTitle.bind(this, i)}
                >
                    <Text style={[styles.titleTextStyle, this.props.list[i].isActive ? {color: CommonColor.themColor} : null]}>{this.props.list[i].text}</Text>
                </TouchableOpacity>
            )
        }
        return headerTitleListArray;
    }
    render() {
        return (
            <View style={styles.headerTitleWrapStyle}>
                <View style={styles.headerTitleViewStyle}>
                {this.renderHeaderTitleList.bind(this)()}
                </View>
            </View>
        );
    }
    toggleSwitchHeaderTitle(index) {
        for (let i = 0; i < this.props.list.length; i++) {
            if (i == index) {
                this.props.list[i].isActive = true;
            } else {
                this.props.list[i].isActive = false;
            }
        }
        this.props.action(this.props.list);
    }
}

const styles = StyleSheet.create({
    headerTitleWrapStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitleViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff',
        overflow: 'hidden'
    },
    headerTitleItemViewStyle: {
        borderLeftColor: '#fff',
        borderLeftWidth: StyleSheet.hairlineWidth,
        minWidth: UISize.p2d(150),
        alignItems: 'center',
        justifyContent: 'center'
    },
    noHeaderTitleItemViewStyle: {
        borderLeftWidth: 0,
    },
    titleTextStyle: {
        color: '#fff',
        fontSize: 14,
        paddingVertical: UISize.p2d(10),
        paddingHorizontal: UISize.p2d(20)
    }
});

//ModifyAllCheckInScreen.js

import SwitchHeaderTitle, {
    CHECKIN_LIST
} from '具体目录/SwitchHeaderTitle';
import ModifyDepartmentCheckInScreen from './ModifyDepartmentCheckInScreen'; //子页面一
import ModifyAgentCheckInScreen from './ModifyAgentCheckInScreen'; //子页面二

export default class ModifyAllCheckInScreen extends Component {
    static navigationOptions = ({
        navigation
    }) => {
        return {
            headerTitle: <SwitchHeaderTitle list={navigation.state.params && navigation.state.params.list || []} action={navigation.state.params ? navigation.state.params.toggleSwitchHeaderTitle : null}/>,
            headerRight: <NavbarRightButton content='保存' action={navigation.state.params ? navigation.state.params.rightPress : null}/>
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            lazyDeptLoading: CHECKIN_LIST[0].isActive,
            lazyAgentLoading: CHECKIN_LIST[1].isActive,
        }
        this.props.navigation.setParams({
            list: CHECKIN_LIST,
            toggleSwitchHeaderTitle: this.toggleSwitchHeaderTitle.bind(this),
            rightPress: this.doSave.bind(this)
        })
    }
    render() {
        return (
            <View style={CommonStyles.whiteContainer}>
                {
                    this.state.lazyDeptLoading ? (
                        <ModifyDepartmentCheckInScreen
                            show={CHECKIN_LIST[0].isActive}
                            ref={ref => this.ModifyDepartmentCheckInScreen = ref}
                            navigation={this.props.navigation}
                        />
                    ) : null
                }
                {
                    this.state.lazyAgentLoading ? (
                        <ModifyAgentCheckInScreen
                            show={CHECKIN_LIST[1].isActive}
                            ref={ref => this.ModifyAgentCheckInScreen = ref}
                            navigation={this.props.navigation}
                        />
                    ) : null
                }
            </View>
        )
    }
    toggleSwitchHeaderTitle(list) {
        if (list[0].isActive && !this.state.lazyDeptLoading) {
            this.state.lazyDeptLoading = true;
        }
        if (list[1].isActive && !this.state.lazyAgentLoading) {
            this.state.lazyAgentLoading = true;
        }
        this.props.navigation.setParams({
            list: list
        })
    }
    doSave() {
        if (CHECKIN_LIST[0].isActive) {
            this.ModifyDepartmentCheckInScreen.doConfirmBtn();
        } else {
            this.ModifyAgentCheckInScreen.doConfirmBtn();
        }
    }
}

//ModifyDepartmentCheckInScreen.js 子页面一
export default class ModifyDepartmentCheckInScreen extends Component {
    render(){
        return(
            <View style={this.props.show ? {flex: 1} : {flex: 0,height: 0}}>
                <Text>页面一</Text>
            </View>
        )
    }
    doConfirmBtn(){
        console.log('点击保存按钮');
    }
}

//ModifyAgentCheckInScreen.js 子页面二
同页面一
```