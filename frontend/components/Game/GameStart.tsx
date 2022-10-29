//import useStyles from "./Starseite.styles"
import { Title, Button, Center, Container, Grid, Stack } from "@mantine/core";
import useStyles from "../Game/GameStart.Style"
import { useSharedState } from "../State/State";
import axios from 'axios'
import {
  useQuery,
} from "@tanstack/react-query"


function useTasks(hardness: string) {
    const url: string = `http://localhost:4000/tasks?hardness=${hardness}`;

    // see https://react-query.tanstack.com/guides/important-defaults
    // see https://react-query.tanstack.com/guides/paginated-queries
    return useQuery(
      ['tasks', { hardness }],
      () => axios
        .get(url)
        .then((res) => res.data),
      // the following can be used to avoid refetches on already fetched data (see paginated queries docs)
      { enabled: true, retry: false }
    );
  }


export function GameStart() {
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
      } = useTasks('EINFACH'); 
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
