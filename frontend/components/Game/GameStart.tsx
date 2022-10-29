//import useStyles from "./Starseite.styles"
import { Title, Button, Center, Container, Grid, Stack, Paper, Text, ActionIcon, Space } from '@mantine/core';
import useStyles from '../Game/GameStart.Style';
import { useSharedState } from '../State/State';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IconAdjustments, IconChevronRight, IconCross, IconCrosshair, IconCrossOff, IconStepOut, IconX } from '@tabler/icons';
import { useRouter } from 'next/router';
import { FlipFlow } from "../FlipFlop/FlipFlop";
import { renderToString } from 'react-dom/server';
import reactStringReplace from 'react-string-replace';

function useTasks(hardness: string) {
  const url: string = `http://localhost:4000/tasks?hardness=${hardness}`;

  // see https://react-query.tanstack.com/guides/important-defaults
  // see https://react-query.tanstack.com/guides/paginated-queries
  return useQuery(
    ['tasks', { hardness }],
    () => axios.get(url).then((res) => res.data),
    // the following can be used to avoid refetches on already fetched data (see paginated queries docs)
    { enabled: true, retry: false }
  );
}

export function GameStart() {
    const router = useRouter()
  const [state, setState] = useSharedState();
  const { isLoading, isError, error, data, isFetching } = useTasks(state.hardness);

  const quitOnMe = () => {
    router.push("/")
  }

  const nextQuestion = () => {
    if (state.currentTask < data.length) {
      setState((prev) => ({ ...prev, currentTask: prev.currentTask+1 }))
    }
  }

  const getRandomUser = () => {
    console.log(state.users[Math.floor(Math.random() * state.users.length)].name)
    return state.users[Math.floor(Math.random() * state.users.length)].name

  }

  const setNameInText = (text: string, name: string) => {
    const [beforeString, afterString] = text.split("(Name)")
    return (
      <>
        <Text align="center" size="xl" weight="bolder">
          {beforeString}
        </Text>

        <FlipFlow word={name}></FlipFlow>

        <Text align="center" size="xl" weight="bolder">
          {afterString}
        </Text>
      </>
    )
  }

  return (
    <>
      <Stack style={{ height: '100% '}}>
        {isLoading
          ? 'Loading...'
          : isError
          ? 'Error!'
          : (data && (state.currentTask < data.length))
          ? (
                <>
                    <Paper
                    shadow="xs"
                    p="md"
                    withBorder
                    style={{ minHeight: 200, height: '100%', position: 'relative' }}
                    >
                      <Center style={{ height: '100%' }}>
                        <Stack justify="center" align="center">
                          {
                            setNameInText(data[state.currentTask].text, getRandomUser())
                          }
                        </Stack>
                      </Center>
                    </Paper>
                    <Center >
                        <ActionIcon color="gray" size="xl" radius="xl" variant="filled" onClick={quitOnMe}>
                            <IconX size={34} />
                        </ActionIcon>
                        <Space w="sm"></Space>
                        <ActionIcon color="red" size="xl" radius="xl" variant="filled">
                            <IconStepOut size={34} />
                        </ActionIcon>
                        <Space w="sm"></Space>
                        <ActionIcon color="blue" size="xl" radius="xl" variant="filled" onClick={nextQuestion}>
                            <IconChevronRight size={34} />
                        </ActionIcon>
                    </Center>
                </>
              )
          : 'Game Over'}
      </Stack>
    </>
  );
}
