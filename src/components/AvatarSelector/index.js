import {BackwardOutlined, createFromIconfontCN, ForwardOutlined} from '@ant-design/icons';
import {Avatar, Badge, Button} from 'antd';
import React, {useState} from 'react';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2305471_gypwidfyv27.js',
    extraCommonProps: {
        style: {
            //color: '#444'
        }
    }
});

const AvatarSelector = props =>
{
    const {
        mode = 'edit',
        size,
        badge,
        dot,
        index = 1,
        className,
        onChange
    } = props;

    const icon = <IconFont type={`icon-${index.toString().padStart(2, 0)}`}/>;

    const [currentIndex, setCurrentIndex] = useState(index);

    const onBrowse = type =>
    {
        let newPage = type ? currentIndex + 1 : currentIndex - 1;

        if (newPage > 40)
        {
            newPage = 1;
        }
        else if (newPage < 1)
        {
            newPage = 40;
        }

        setCurrentIndex(newPage);

        if (onChange)
        {
            onChange(newPage);
        }
    };

    return <>
        {mode === 'view' && <React.Fragment>
            {!badge && <Avatar size={size}
                               icon={icon}/>}

            {(badge || dot) && <Badge dot={dot}
                                      count={badge}>
                <Avatar size={size}
                        icon={icon}/>
            </Badge>}
        </React.Fragment>}

        {mode !== 'view' && <div className={`h-box ${className ? className : ''}`}>
            <Button type={'link'}
                    icon={<BackwardOutlined/>}
                    onClick={() => onBrowse(0)}/>
            <div>
                <Avatar size={size}
                        icon={<IconFont type={`icon-${currentIndex.toString().padStart(2, 0)}`}/>}/>
            </div>
            <Button type={'link'}
                    icon={<ForwardOutlined/>}
                    onClick={() => onBrowse(1)}/>
        </div>}
    </>;
};

export default AvatarSelector;