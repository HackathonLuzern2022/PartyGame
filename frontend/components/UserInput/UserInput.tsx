import { useState } from "react";
import { Stack, Button, Container, TextInput } from '@mantine/core';
import { MenuItem } from "../MenuItem/MenuItem";



export function UserInput() {
    const [inputFields, setInputFields] = useState([{name: ''}])

    //  @ts-ignore
    const updateInputField = (index, event) => {
        let data = [...inputFields]
        data[index]["name"] = event.target.value;
        setInputFields(data)
    }

    const addField = () => {
        let newfield = { name: '' }
    
        setInputFields([...inputFields, newfield])
    }

    return (
        <>
            <Container>
                <Stack>
                    <Stack justify="flex-start" align="center" spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]})}>
                        {
                            inputFields.map((input, index) => {
                                return (
                                    <TextInput key={index} value={input.name} onChange={(event) => {
                                        updateInputField(index, event)
                                    }} />
                                )
                            })
                        }
                    </Stack>
                    <Button component='a' variant="outline" color="violet" radius="xl" size="xl" onClick={addField}>Add User</Button>
                    <MenuItem name={"Weiter"} link="/hardness" />

                </Stack>
                <pre>
                    {JSON.stringify(inputFields)}
                </pre>
            </Container>
                
        </>
    )
}