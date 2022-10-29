//import useStyles from "./Starseite.styles"
import { Title, Button, Center, Container, Grid, Stack } from "@mantine/core";
import useStyles from "../Game/GameStart.Style"
import { useSharedState } from "../State/State";


export function GameStart() {
    const [state, setState] = useSharedState();

    return (
        <>
        <Center>
             {/* <Grid>
                <Center>
                    <Grid.Col>2</Grid.Col>
                </Center>
                <Center style={{ width: "useFullscreen", height: 350 }}>
                    <Grid.Col>3</Grid.Col>    
                </Center>
                <Center style={{ width: "useFullscreen", height: 800 }}>
                    <Grid.Col>1</Grid.Col>
                </Center>

      </Grid> */}
        <pre>
            {JSON.stringify(state)}
        </pre>
      </Center>

        </>
        /*

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

            <Center style={{ width: "useFullscreen", height: 300 }}>

                <MenuItem name={"Start"} link="/hardness" />

            </Center>
        </>
        */
    );
}
