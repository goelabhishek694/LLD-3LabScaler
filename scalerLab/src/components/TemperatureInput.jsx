import React, { useState } from 'react';

function TemperatureInput({temperature, tempChange}) {

  return (
    <div>
      <label>
        Enter temperature:
        <input
          type="text"
          value={temperature}
          onChange={(e) => tempChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default TemperatureInput
