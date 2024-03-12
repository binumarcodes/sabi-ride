import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CompletedScreen from './CompletedScreen';
import CancelScreen from './CanceledScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Cancel" component={CancelScreen} />
    </Tab.Navigator>
  );
};



export default TabNavigation;
