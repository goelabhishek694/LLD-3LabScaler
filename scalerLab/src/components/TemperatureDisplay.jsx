import React, { useState } from 'react';

function TemperatureDisplay({temperature}) {

  const fahrenheit = (temperature * 9 / 5) + 32;

  return (
    <div>
      <p>Temperature in Celsius: {temperature}°C</p>
      <p>Temperature in Fahrenheit: {fahrenheit.toFixed(1)}°F</p>
    </div>
  );
}

export default TemperatureDisplay