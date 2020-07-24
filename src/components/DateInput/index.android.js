import React, { useMemo, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText } from './styles';

const DateInput = ({ date, onChange }) => {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(() => {
    return format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: pt });
  }, [date]);

  function handleDateChange(event, selectedDate) {
    const currentDate = selectedDate || new Date();
    setOpened(false);
    onChange(currentDate);
  }

  return (
    <Container>
      <DateButton
        onPress={() => {
          setOpened(!opened);
        }}
      >
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          value={date}
          onChange={handleDateChange}
          display="spinner"
          minimumDate={new Date()}
        />
      )}
    </Container>
  );
};

export default DateInput;
