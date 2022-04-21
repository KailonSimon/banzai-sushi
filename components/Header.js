import { useEffect, useState } from 'react';
import { createStyles, Header as MantineHeader, Container, Group, Burger, Paper, Transition, ActionIcon, Title, Drawer, Affix, Button } from '@mantine/core';
import { useBooleanToggle, useWindowScroll } from '@mantine/hooks';
import { ShoppingCart, ArrowUp } from 'tabler-icons-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { cartCountSelector } from '../src/redux/cart';
import CartDrawer from './CartDrawer';

const useStyles = createStyles((theme) => ({

    wrapper: {
        position: 'sticky',
        top: 0,
    },

    dropdown: {
        position: 'absolute',
        top: 64,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        padding: '0 16px',

        [theme.fn.smallerThan('sm')]: {
            justifyContent: 'space-between',
        },

    },

    title: {
        fontFamily: 'My Soul',
        color: theme.white,
        filter: `drop-shadow(0 0 2px ${theme.colors.cyan[8]})`,
        cursor: 'pointer'

    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    cartWrapper: {
        position: 'relative'
    },

    cartButton: {
        color: theme.white,
    },

    cartBadge: {
        display: 'flex',
        alignItems: 'center',
        padding: '0px 6px',
        height: '20px',
        minWidth: '20px',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'scale(1) translate(50%, -50%)',
        fontSize: '0.75rem',
        borderRadius: '10px',
        backgroundColor: theme.colors.cyan[8],
        color: theme.white,
        fontWeight: 500
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors[theme.primaryColor][8]
                    : theme.colors[theme.primaryColor][0],
            color: theme.white,
        },
    },
}));

const links = [
    { label: 'Home', link: '/' },
    { label: 'Our Menu', link: '/menu' },
    //{ label: 'Locations', link: '/locations' },
    //{ label: 'Contact Us', link: '/contact-us' },
]


export default function Header() {
    const router = useRouter();
    const [opened, toggleOpened] = useBooleanToggle(false);
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();
    const [scroll, scrollTo] = useWindowScroll();
    const cartCount = useSelector(cartCountSelector);

    useEffect(() => {
        setActive(router.pathname)
    }, [router.pathname])

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, { [classes.linkActive]: active === link.link })}
            onClick={() => {
                setActive(link.link);
                toggleOpened(false);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <>
            <MantineHeader className={classes.wrapper}>
                <Container className={classes.header}>

                    <Burger
                        opened={opened}
                        onClick={() => toggleOpened()}
                        className={classes.burger}
                        size="sm"

                    />

                    <Link href='/' passHref>
                        <Title className={classes.title}>Banzai Sushi</Title>
                    </Link>

                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>

                    <div className={classes.cartWrapper}>
                        <ActionIcon className={classes.cartButton} variant='transparent' onClick={() => setDrawerOpened(true)}>
                            <ShoppingCart size={20} />
                        </ActionIcon>
                        {cartCount > 0 && <span className={classes.cartBadge}>{cartCount <= 10 ? cartCount : '10+'}</span>}
                    </div>

                    <Transition transition="pop-top-right" duration={200} mounted={opened}>
                        {(styles) => (
                            <Paper className={classes.dropdown} withBorder style={styles}>
                                {items}
                            </Paper>
                        )}
                    </Transition>

                </Container>
            </MantineHeader>

            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftIcon={<ArrowUp />}
                            style={transitionStyles}
                            sx={{ fontWeight: 500 }}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            Scroll to top
                        </Button>
                    )}
                </Transition>
            </Affix>

            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                title='Cart'
                padding='md'
                position='right'
            >
                <CartDrawer />
            </Drawer>
        </>
    )
}
