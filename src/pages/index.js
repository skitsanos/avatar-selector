import AvatarSelector from '@/components/AvatarSelector';
import SaveOutlined from '@ant-design/icons/lib/icons/SaveOutlined';
import {Button, Card} from 'antd';
import React, {useState} from 'react';

const Page = props =>
{
    const [selectedAvatar, setSelectedAvatar] = useState(1);

    return <div className={'p-xxl'}>
        <Card actions={[
            <Button icon={<SaveOutlined/>}
                    onClick={() =>
                    {
                        console.log(selectedAvatar);
                    }}>Save</Button>
        ]}
              style={{
                  width: 'max-content'
              }}>
            <div className={'text-centered mb'}>
                Select avatar by pressing arrows
            </div>
            <AvatarSelector className={'content-center'}
                            size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                            badge={15}
                            index={selectedAvatar}
                            onChange={setSelectedAvatar}
                            dot={false}/>

        </Card>

        <Card className={'mt'}>
            <div className={'h-box'}>
                <AvatarSelector size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                                mode={'view'}
                                badge={13}
                                index={selectedAvatar}/>

                <div className={'ml'}>
                    <h2 className={'ml'}>John Doe</h2>
                </div>
            </div>
        </Card>
    </div>;
};

export default Page;