import { Title, Button, Center, Grid, Radio, Box, Group } from "@mantine/core";
import useStyles from "./Schwierigkeit.style"
import { useForm } from '@mantine/form';
import { useRouter } from "next/router";
import { useSharedState } from "../State/State";


export function Schwierigkeit() {
    const { classes } = useStyles();
    const [state, setState] = useSharedState();
    const router = useRouter();

    const form = useForm({
        initialValues: {
            schwierigkeit: state.hardness,
        },
    });

    function saveDataAndNavigateToNextPage() {
        console.log(form.values.schwierigkeit);
        setState((prev) => ({ ...prev, hardness: form.values.schwierigkeit }))

        router.push("user-input");
    }

    return (

        <Box sx={{ maxWidth: '100%' }} mx="auto">
            <Center className={classes.mainContainer}>
                <Grid justify="center">

                    <Grid.Col>
                        <Center>
                            <Title className={classes.title}>Schwierigkeitsgrad</Title>
                        </Center>
                    </Grid.Col>

                </Grid>
            </Center>
            <Center>
                <form onSubmit={form.onSubmit((value) => { saveDataAndNavigateToNextPage() })}>

                    <Radio.Group
                        {...form.getInputProps('schwierigkeit')}
                    >
                        <div>
                            <div className={classes.radiobutton}>
                                <Radio value="EINFACH" label="Einfach" />
                            </div>
                            <div className={classes.radiobutton}>
                                <Radio value="MITTEL" label="Mittel" />
                            </div>
                            <div className={classes.radiobutton}>
                                <Radio value="SCHWER" label="Schwer" />
                            </div>
                        </div>
                    </Radio.Group>

                    <Group position="right" mt="md">
                        <Button type="submit" >Submit</Button>
                    </Group>
                </form>
            </Center>
        </Box>
    );
}
