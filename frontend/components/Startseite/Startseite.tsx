import { Title, Button, Center, Container, Grid, Stack } from "@mantine/core";
import useStyles from "./Starseite.styles"
import { MenuItem } from "../MenuItem/MenuItem";
import { useFullscreen } from "@mantine/hooks";


export function Startseite() {
    const { classes } = useStyles();

    return (
        <>
            <Center className={classes.mainContainer}>
                <Grid children={undefined} justify="center">
                    <>
                        <Grid.Col>
                            <Center>
                                <Title className={classes.title}>Underem Tisch</Title>
                            </Center>
                        </Grid.Col>
                    </>
                </Grid>
            </Center>

            <Center style={{ width: useFullscreen, height: 300 }}>

                <MenuItem name={"Start"} link="/hardness" />

            </Center>
        </>
    );
}
