import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useFormik } from 'formik';
import { SideBar } from '../../components/SideBar/SideBar';
import { THEME } from '../../theme';
import { styles } from './styles';
import { Input } from '../../components/Input/Input';
import { visitedSchema, visitedInitial } from '../../forms';
import { STRINGS } from '../../constants';
import { BackButton } from '../../components/BackButton/BackButton';
import AppContext from '../../context/AppContext/AppContext';
import { InfoItem } from './Components/InfoItem';

export const VisitesScreen = ({ navigation }) => {
  const scrollRef = useRef(null);
  const [locations, setLocations] = useState([]);
  const { createOrder, isLoading } = useContext(AppContext);

  const { cardIds, getLocationById, removeLocationsFromSelected } =
    useContext(AppContext);

  const submit = async (values) => {
    const result = await createOrder(values);
    if (result) {
      navigation.goBack();
    } else {
      Alert.alert('Server error. Try again');
    }
  };

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    validationSchema: visitedSchema,
    initialValues: visitedInitial,
    onSubmit: submit,
  });

  useLayoutEffect(() => {
    values.pois = cardIds;
    const locations = [];
    cardIds.forEach((id) => {
      locations.push(getLocationById(id));
    });
    setLocations(locations);

    if (cardIds.length === 0) {
      navigation.goBack();
    }
  }, [cardIds]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        ref={scrollRef}
        keyboardShouldPersistTaps={'handled'}
      >
        <StatusBar backgroundColor={THEME.COLORS.white} />
        <SideBar navigation={navigation} isHideAll />

        <View style={styles.formWrapper}>
          <View style={styles.form}>
            {locations.map((location, index) => {
              if (location) {
                return (
                  <InfoItem
                    key={`${location?.id}-${index}`}
                    title={location.id}
                    description={location.description}
                    image={location.image_first}
                    onRemove={() => removeLocationsFromSelected(index)}
                  />
                );
              }
            })}
            <Text style={[styles.title, styles.singleTitle]}>
              {STRINGS.VISITED.salePerson}
            </Text>
            <Input
              isRequired={true}
              handleValueChange={handleChange('seller')}
              value={values.seller}
              error={errors.seller}
              touched={touched.seller}
              width={368}
            />
            <Text style={styles.title}>{STRINGS.VISITED.customerDetails}</Text>
            <View style={styles.row}>
              <Input
                label={STRINGS.VISITED.company}
                isRequired={true}
                handleValueChange={handleChange('company')}
                value={values.company}
                error={errors.company}
                touched={touched.company}
                width={266}
              />
              <Input
                label={STRINGS.VISITED.nameSurname}
                isRequired={true}
                handleValueChange={handleChange('name')}
                value={values.name}
                error={errors.name}
                touched={touched.name}
                width={311}
              />
            </View>
            <View style={styles.row}>
              <Input
                label={STRINGS.VISITED.address}
                isRequired={true}
                handleValueChange={handleChange('address')}
                value={values.address}
                error={errors.address}
                touched={touched.address}
                width={266}
              />
              <Input
                label={STRINGS.VISITED.postcode}
                isRequired={true}
                handleValueChange={handleChange('postal')}
                value={values.postal}
                error={errors.postal}
                touched={touched.postal}
                width={99}
              />
              <Input
                label={STRINGS.VISITED.city}
                isRequired={true}
                handleValueChange={handleChange('city')}
                value={values.city}
                error={errors.city}
                touched={touched.city}
                width={199}
              />
            </View>
            <View style={styles.row}>
              <Input
                label={STRINGS.VISITED.phone}
                isRequired={true}
                handleValueChange={handleChange('phone')}
                value={values.phone}
                error={errors.phone}
                touched={touched.phone}
                width={266}
              />
              <Input
                label={STRINGS.VISITED.email}
                isRequired={true}
                handleValueChange={handleChange('email')}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                width={311}
              />
            </View>
            <Input
              label={STRINGS.VISITED.note}
              numberOfLines={10}
              handleValueChange={handleChange('note')}
              value={values.note}
              error={errors.note}
              touched={touched.note}
              width={588}
              multiline={true}
              textarea
              onFocus={scrollToBottom}
            />
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.button}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.buttonText}>
                  {STRINGS.VISITED.register}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <BackButton isHideAll />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
