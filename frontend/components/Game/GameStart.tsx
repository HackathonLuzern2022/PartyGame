//import useStyles from "./Starseite.styles"
import { Popover, Title, Button, Center, Container, Grid, Stack, Paper, Text, ActionIcon, Space, Card, Image } from '@mantine/core';
import useStyles from '../Game/GameStart.Style';
import { useSharedState } from '../State/State';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { IconAdjustments, IconChevronRight, IconCross, IconCrosshair, IconCrossOff, IconStepOut, IconX } from '@tabler/icons';
import { useRouter } from 'next/router';
import { FlipFlow } from "../FlipFlop/FlipFlop";
import { renderToString } from 'react-dom/server';
import reactStringReplace from 'react-string-replace';
import { useState } from 'react';
import { openConfirmModal } from '@mantine/modals';
import { MenuItem } from '../MenuItem/MenuItem';

function useTasks(hardness: string) {
  const url: string = `https://partyparty-api.enea.tech/tasks?hardness=${hardness}`;
  return useQuery(
    ['tasks', { hardness }],
    () => axios.get(url).then((res) => res.data),
    { enabled: true, retry: false }
  );
}

export function GameStart() {
  const router = useRouter()
  const [state, setState] = useSharedState();
  const { isLoading, isError, error, data, isFetching } = useTasks(state.hardness);
  const { classes } = useStyles();


  function getSips() {
    console.log(state.hardness)
    switch (state.hardness) {
      case 'EINFACH':
        return getEasySips()
      case 'MITTEL':
        return getMediumSips()
      case 'SCHWIERIG':
        return getHardSips()
    }
  }

  function getEasySips() {
    return getRandomNumberBetweenOneToThree() + 1;
  }

  function getMediumSips() {
    return getRandomNumberBetweenOneToThree() + 3;
  }

  function getHardSips() {
    return getRandomNumberBetweenOneToThree() + 5;
  }

  function getRandomNumberBetweenOneToThree() {
    let max = 3;
    return Math.floor(Math.random() * max)
  }

  const openModal = () => openConfirmModal({
    title:(<Title>Bestrafung!</Title>) ,
    children: (
      <Text>
        Du musst {getSips()} Schlücke trinken
      </Text>
    ),
    labels: {
      confirm: 'Weiter',
      cancel: 'Abbruch'
    },
    onConfirm: () => nextQuestion(),
    centered : true
  })

  const quitOnMe = () => {
    router.push("/")
  }

  const nextQuestion = () => {
    if (state.currentTask < data.length) {
      setState((prev) => ({ ...prev, currentTask: prev.currentTask + 1 }))
    }
  }

  const getRandomUser = () => {
    console.log(state.users[Math.floor(Math.random() * state.users.length)].name)
    return state.users[Math.floor(Math.random() * state.users.length)].name || "User"

  }

  const setNameInText = (text: string, name: string) => {
    const [beforeString, afterString] = text.split("(Name)")
    return (
      <>
        <Text align="center" size="xl" weight="bolder" className='game-text'>
          {beforeString}
        </Text>

        <FlipFlow word={name}></FlipFlow>

        <Text align="center" size="xl" weight="bolder" className='game-text'>
          {afterString}
        </Text>
      </>
    )
  }

  return (
    <>
      <Stack style={{ height: '100% ' }}>
        {isLoading
          ? 'Loading...'
          : isError
            ? 'Error!' + JSON.stringify(error)
            : (data && (state.currentTask < data.length))
              ? (
                <>
                  <Paper
                    shadow="xs"
                    p="md"
                    withBorder
                    style={{ minHeight: 200, height: '100%', position: 'relative' }}
                    >
                          <Stack justify="center" align="center" style={{ height: '100%'}}>
                              {
                                setNameInText(data[state.currentTask].text, getRandomUser())
                              }
                          </Stack>
                    </Paper>
                    <Center >
                        <ActionIcon color="gray" size="xl" radius="xl" variant="filled" onClick={quitOnMe}>
                            <IconX size={34} />
                        </ActionIcon>
                        <Space w="sm"></Space>
                        <ActionIcon color="red" size="xl" radius="xl" variant="filled" onClick={openModal}>
                            <IconStepOut size={34} />
                        </ActionIcon>
                        <Space w="sm"></Space>
                        <ActionIcon color="blue" size="xl" radius="xl" variant="filled" onClick={nextQuestion}>
                            <IconChevronRight size={34} />
                        </ActionIcon>
                    </Center>
                </>
              )
          : (
            <Stack justify="center" align="center"> 
              <MenuItem name="Restart Game." link="/" />
            </Stack>
          )}
      </Stack>
    </>
  );
}
