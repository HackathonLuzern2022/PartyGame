import { useState } from "react";
import { Stack, Button, Container, TextInput, Center, Grid, Title } from '@mantine/core';
import { MenuItem } from "../MenuItem/MenuItem";
import { useSharedState } from "../State/State";
import { useRouter } from "next/router";
import useStyles from "../Schwierigkeit/Schwierigkeit.style"



export function UserInput() {
    const { classes } = useStyles();
    const router = useRouter()
    const [state, setState] = useSharedState();
    const [inputFields, setInputFields] = useState([{name: ''}]);

    //  @ts-ignore
    const updateInputField = (index, event) => {
        let data = [...inputFields]
        data[index]["name"] = event.target.value;
        setInputFields(data)
    }
    
    const weiterBtn = () => {
        setState((prev) => ({ ...prev, users: inputFields }))
        router.push('/hardness')
    }

    const addField = () => {
        let newfield = { name: '' }
    
        setInputFields([...inputFields, newfield])
    }

    return (
        <>
            <Container>
                <Stack>
                    <Center>
                        <Grid justify="center">

                            <Grid.Col>
                                <Center>
                                    <Title className={classes.title}>Mitspieler</Title>
                                </Center>
                            </Grid.Col>

                        </Grid>
                    </Center>
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
                    <Button variant="outline" color="violet" radius="xl" size="xl" onClick={weiterBtn}>Weiter</Button>
                </Stack>
                <pre>
                    {JSON.stringify(inputFields)}
                </pre>
            </Container>
                
        </>
    )
}