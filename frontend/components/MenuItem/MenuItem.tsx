import { Button } from '@mantine/core';
import useStyles from "./MenuItem.style"

import Link from 'next/link';

//@ts-ignore
export function MenuItem({ name, link }) {
    const { classes } = useStyles();

    return (
        <>
            <Link href={link}>
                <Button  className={classes.button} component='a' variant="outline" color="violet" radius="xl" size="xl">{name}</Button>
            </Link>
        </>
    )
}