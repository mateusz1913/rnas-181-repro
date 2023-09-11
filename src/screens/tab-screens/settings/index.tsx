import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Text, View} from '@/components';
import {ExtendedThemeType} from '@/constants/colors';
import {SIZES} from '@/constants/spacing';
import {useLayout} from '@/features';
import { useSelectedTheme } from '@/hooks';

export const Settings = () => {
  const navigate = useNavigation();
  const {colors} = useSelectedTheme();
  const isRTL = useLayout((state) => state.RTL);
  const styles = generateStyles(isRTL, colors);
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('routes.Settings')}</Text>
      <Button
        title="navigate to Home"
        onPress={() => navigate.navigate('Home')}
      />
      <Button
        title="navigate to profile"
        onPress={() => navigate.navigate('Profile')}
      />
    </View>
  );
};

const generateStyles = (isRTL: boolean, color: ExtendedThemeType['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: SIZES.medium,
      rowGap: SIZES.large,
    },
  });
