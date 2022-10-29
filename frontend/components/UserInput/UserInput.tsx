import { useState } from "react";
import { Stack, Button, Container, TextInput, Center, Grid, Title } from '@mantine/core';
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
        router.push('/game')
    }

    const addField = () => {
        let newfield = { name: '' }
    
        setInputFields([...inputFields, newfield])
    }

    return (
        <>
            <Container style={{height: '100%' }}>
                <Stack style={{height: '100%' }}>
                    <Center>
                        <Grid justify="center">

                            <Grid.Col>
                                <Center>
                                    <Title className={classes.title}>Mitspieler</Title>
                                </Center>
                            </Grid.Col>

                        </Grid>
                    </Center>
                    <Stack justify="space-between" align="stretch" style={{height: '80%' }}>
                        <Stack justify="flex-start" align="stretch" spacing="lg" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]})}>
                            {
                                inputFields.map((input, index) => {
                                    return (
                                        <TextInput key={index} label={`Player ${index+1}`} value={input.name} size="lg" onChange={(event) => {
                                            updateInputField(index, event)
                                        }} />
                                    )
                                })
                            }
                        </Stack>
                        <Stack>
                            <Button component='a' variant="outline" color="violet" radius="xl" size="xl" onClick={addField}>Add User</Button>
                            <Button variant="filled" color="violet" radius="xl" size="xl" onClick={weiterBtn}>Weiter</Button>
                        </Stack>

                    </Stack>
                </Stack>
            </Container>
                
        </>
    )
}