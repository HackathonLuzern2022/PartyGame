import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Title,
  Group,
  Space,
  Image
} from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import {MenuItem} from '../MenuItem/MenuItem'


//@ts-ignore
export function MainAppShell({children}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      // navbar={
      //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} >
      //     <MenuItem name='Time Between' link='/between' />
      //     <Space h="md" />
      //     <MenuItem name='Time Hours' link='/hours' />
      //   </Navbar>
      // }
      
      // header={
      //   <Header height={70} p="md">
      //     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
      //       <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      //         <Burger
      //           opened={opened}
      //           onClick={() => setOpened((o) => !o)}
      //           size="sm"
      //           color={theme.colors.gray[6]}
      //           mr="xl"
      //         />
      //       </MediaQuery>

      //       <h1>Party Time</h1>

      //       <ColorSchemeToggle></ColorSchemeToggle>

      //     </div>
      //   </Header>
      // }
    >
      {children}
    </AppShell>
  );
}