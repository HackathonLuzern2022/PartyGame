import { Title, Button, Center, Container, Grid, Stack } from "@mantine/core";
import useStyles from "./Starseite.styles"
import { MenuItem } from "../MenuItem/MenuItem";
import { useFullscreen } from "@mantine/hooks";
import { FlipFlow } from "../FlipFlop/FlipFlop";


export function Startseite() {
    const { classes } = useStyles();
    const title = 'Party Game'

    return (
        <>
            <Center className={classes.mainContainer}>
                <Grid justify="center">
                    <>
                        <Grid.Col>
                            <Center>
                                <FlipFlow word={title} />
                            </Center>
                        </Grid.Col>
                    </>
                </Grid>
            </Center>

            <Center style={{height: '80%' }}>

                <MenuItem name={"Start"} link="/hardness" />

            </Center>
        </>
    );
}
