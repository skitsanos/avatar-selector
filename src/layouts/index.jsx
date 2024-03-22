import {ConfigProvider} from 'antd';
import React from 'react';
import {Outlet} from 'umi';

export default () =>
{
    return <ConfigProvider locale={'en'}>
        <Outlet/>
    </ConfigProvider>;
};