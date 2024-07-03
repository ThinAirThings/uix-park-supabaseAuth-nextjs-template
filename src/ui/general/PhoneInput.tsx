
import { FC, forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';
import { PhoneInput as ReactPhoneInput } from 'react-international-phone'

import "react-international-phone/style.css"
import { token } from '~/styled-system/tokens';

export const PhoneInput: FC<{
    control: Control<any>
}> = forwardRef(({
    control,
    ...props
}, forwardedRef) => {
    return (
        <Controller
            control={control}
            name='phoneNumber'
            render={({ field }) => (
                <ReactPhoneInput
                    style={{ width: '100%' }}
                    inputStyle={{
                        width: '100%',
                        height: '56px',
                        borderRadius: '16px',
                        border: '1px solid #EEE',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        borderTopLeftRadius: '0px',
                        borderBottomLeftRadius: '0px',
                        borderLeft: '0px',
                        backgroundColor: token('colors.grayscale.50'),
                        color: token('colors.grayscale.900')
                    }}
                    countrySelectorStyleProps={{
                        buttonStyle: {
                            height: '56px',
                            padding: '16px',
                            borderTopLeftRadius: '16px',
                            borderBottomLeftRadius: '16px',
                            border: '1px solid #EEE',
                            borderRight: '0px',
                            backgroundColor: token('colors.grayscale.50')
                        },
                        dropdownStyleProps: {
                            style: {
                                border: '1px solid #EEE',
                                background: token('colors.grayscale.50'),
                                color: token('colors.black')
                            }
                        }
                    }}
                    forceDialCode={true}
                    defaultCountry='us'
                    {...field}
                    {...props}
                />
            )}
        />
    );
})
