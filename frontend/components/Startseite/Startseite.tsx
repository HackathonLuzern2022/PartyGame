import { Title, Button, Center, Container, Grid, Stack } from "@mantine/core";
import useStyles from "./Starseite.styles"
import { MenuItem } from "../MenuItem/MenuItem";
import { useFullscreen } from "@mantine/hooks";


export function Startseite() {
    const { classes } = useStyles();

    return (
        <>
            <Center className={classes.mainContainer}>
                <Grid justify="center">
                    <>
                        <Grid.Col>
                            <Center>
                                <Title className={classes.title}>Underem Tisch</Title>
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
