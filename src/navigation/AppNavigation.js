
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { StartScreen } from '../screens/StartScreen'


const PostNavigator = createStackNavigator({
    Start : StartScreen,
    //Settings: SettingsScreen,
    //SubTasks: SubTasksScreen
},{
    //initialRouteName: 'Main'
})

export const AppNavigation = createAppContainer(PostNavigator)