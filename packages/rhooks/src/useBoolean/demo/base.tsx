import React, { Fragment } from 'react';
import { Button } from 'antd';
import { useBoolean } from '../../index';

export default () => {
  const [bol, { toggle, setTrue, setFalse }] = useBoolean();

  return (
    <Fragment>
      <Button onClick={setTrue}>setTrue</Button>
      <Button onClick={setFalse}>setFalse</Button>
      <Button onClick={toggle}>toggle</Button>
      <pre>{JSON.stringify(bol)}</pre>
    </Fragment>
  );
};
