import React from 'react'
import { TextInput } from 'react-native';

const Inputs = (props: any) => {
    const { data, setData, type } = props
    console.log("🚀 ~ Inputs ~ type:", type)
    const handlechange = (event: any) => {
        try {
            const funtionReuire = () => {
                const trimmedValue = event?.target?.value?.trim(); // Trim leading and trailing spaces
                setData({
                    ...data,
                    [event?.target?.name]: trimmedValue,
                });

            }
            funtionReuire()

        } catch (error) {
            console.log("🚀 ~ Inputs ~ error:", error)
        }
    };
    return (
        <TextInput
            onChange={handlechange}
            {...props}
        />
    )
}

export default Inputs


//placeholder=""
//defaultValue=""