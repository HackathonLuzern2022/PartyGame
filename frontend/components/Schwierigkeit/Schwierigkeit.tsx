import { Title, Button, Center, Grid, Radio, Box, Group } from "@mantine/core";
import useStyles from "./Schwierigkeit.style"
import { useForm } from '@mantine/form';
import { useRouter } from "next/router";


export function Schwierigkeit() {
    const { classes } = useStyles();
    const router = useRouter();

    const form = useForm({
        initialValues: {
            schwierigkeit: 'EINFACH',
        },
    });

    function navigateToNextPage(){
        sendSchwierigkeit();
        router.push("user-input");
    }

    const sendSchwierigkeit = () => {
        return postMessage(`https://localhost:4000/hardness/${form.values.schwierigkeit}`);
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
                <form onSubmit={form.onSubmit((value) => {console.log(value), navigateToNextPage()})}>

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
