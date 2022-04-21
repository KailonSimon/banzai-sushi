import { createStyles, Text, Container, ActionIcon, Group, Title } from '@mantine/core';
import Link from 'next/link';
import { BrandGithub, BrandLinkedin, BrandGoogle } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
    footer: {
        width: '100%',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: 'My Soul',
        filter: `drop-shadow(0 0 2px ${theme.colors.cyan[8]})`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        cursor: 'pointer'
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        color: `${theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][8]
            }`,
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));


export default function Footer() {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Link href='/' passHref>
                        <Title className={classes.title}>Banzai Sushi and Bar</Title>
                    </Link>
                    <Text size="xs" color="dimmed" className={classes.description}>
                        An Authentic Japanese Experience
                    </Text>
                </div>
                {/*<div className={classes.groups}>{groups}</div>*/}
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © {new Date().getFullYear()} Kailon Simon. All rights reserved.
                </Text>

                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <Link href='https://github.com/KailonSimon' passHref>
                        <ActionIcon size='lg' component='a'>
                            <BrandGithub size={24} className={classes.links} />
                        </ActionIcon>
                    </Link>
                    <Link href='https://www.linkedin.com/in/kailon-simon-59b416230' passHref>
                        <ActionIcon size='lg' component='a'>
                            <BrandLinkedin size={24} className={classes.links} />
                        </ActionIcon>
                    </Link>
                    <Link href='mailto:kailonsimon@gmail.com' passHref>
                        <ActionIcon size='lg' component='a'>
                            <BrandGoogle size={24} className={classes.links} />
                        </ActionIcon>
                    </Link>
                </Group>
            </Container>
        </footer>
    );
}