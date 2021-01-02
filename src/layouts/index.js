import {ConfigProvider} from 'antd';
import React from 'react';

export default props =>
{
    const {children} = props;
    return <ConfigProvider locale={'en'}>
        {children}
    </ConfigProvider>;
};