import { Title, Button, Center, Grid, Radio, Box, Group, Stack, Container } from "@mantine/core";
import useStyles from "./Schwierigkeit.style"
import { useForm } from '@mantine/form';
import { useRouter } from "next/router";
import { useSharedState } from "../State/State";


export function Schwierigkeit() {
    const { classes } = useStyles();
    const [state, setState] = useSharedState();
    const router = useRouter();


    function updateHardness(value: string) {
        setState((prev) => ({ ...prev, hardness: value, currentTask: 0 }))

        router.push("user-input");
    }

    return (

        <Container style={{ height: '100%' }}>
            <Center className={classes.mainContainer}>
                <Grid justify="center">

                    <Grid.Col>
                        <Center>
                            <Title className={classes.title}>Schwierigkeit</Title>
                        </Center>
                    </Grid.Col>

                </Grid>
            </Center>
            <Stack justify="center" align="stretch" style={{ height: '80%' }}>
                <Button variant="filled" color="violet" radius="xl" size="xl" onClick={() => updateHardness('EINFACH')}>Einfach</Button>
                <Button variant="filled" color="violet" radius="xl" size="xl" onClick={() => updateHardness('MITTEL')}>Mittel</Button>  
                <Button variant="filled" color="violet" radius="xl" size="xl" onClick={() => updateHardness('SCHWIERIG')}>Schwierig</Button>
            </Stack>
        </Container>
    );
}
