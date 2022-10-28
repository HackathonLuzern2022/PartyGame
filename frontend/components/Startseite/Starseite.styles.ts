import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontSize: 40,
        letterSpacing: -2,
    
        [theme.fn.smallerThan('md')]: {
          fontSize: 50,
        },
      },
      mainContainer:{
        alignitems: "center"
        
      },
      button:{
        
      }


}))