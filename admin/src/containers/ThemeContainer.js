/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { TwitterPicker } from 'react-color';
import Axios from 'axios';

const ThemeContainer = () => {
  const [theme, setTheme] = useState({});
  const [hasChanged, setHasChanged] = useState(false);
  useEffect(() => {
    Axios.get('/admin/theme').then(({ data }) => setTheme(data));
  }, []);

  const handleDeployClick = () => {
    Axios.post('/admin/theme', theme)
      .then(() => Axios.post('/deploy'))
      .then(() => message.success('Deployed!'));
  };

  const entries = Object.entries(theme);
  if (!entries.length) return 'loading...';

  return (
    <div style={{ width: '100%' }}>
      <Button type="primary" onClick={handleDeployClick} disabled={!hasChanged}>
        Deploy the new theme
      </Button>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
      {entries.map(([k, v]) => (
        <div>
          <label>
            {k}
            <TwitterPicker
              color={v}
              onChange={(color) => {
                setTheme({ ...theme, [k]: color.hex });
                setHasChanged(true);
              }}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default ThemeContainer;
