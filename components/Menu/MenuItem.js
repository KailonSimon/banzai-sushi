import { ShoppingCartPlus } from 'tabler-icons-react'
import {
    Card,
    Image,
    Text,
    Badge,
    Group,
    useMantineTheme,
    createStyles,
    Button
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../src/redux/cart';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        height: '400px',
    },


    rating: {
        position: 'absolute',
        top: theme.spacing.xs,
        right: theme.spacing.xs + 2,
        pointerEvents: 'none',
    },

    title: {
        display: 'block',
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.xs / 2,
    },

    action: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    },

    footer: {
        marginTop: theme.spacing.md,
    },

    buttonWrapper: {    
        display: 'flex',
        width: '100%',
        position: 'absolute',
        bottom: 16,
        left: 0,
        padding: `0 ${theme.spacing.md}px`

    },

    cartButton: {
        fontWeight: 400
    }
}));

export function MenuItem({ item }) {
    const { classes } = useStyles();
    const dispatch = useDispatch();


    return (
        <Card withBorder radius="md" className={classes.card}>
            <Card.Section>
                <Image src={item.image} height={200} fit='cover' />
            </Card.Section>

            <Badge className={classes.rating} variant="filled">
                ${item.price}
            </Badge>

            <Text className={classes.title} weight={500} component="a">
                {item.name}
            </Text>

            <Text size="sm" color="dimmed" lineClamp={4}>
                {item.description}
            </Text>

            <div className={classes.buttonWrapper}>
                <Button rightIcon={<ShoppingCartPlus size={20} />} className={classes.cartButton} color='cyan' onClick={() => dispatch(addToCart(item))} size='lg' fullWidth>Add to cart</Button>
            </div>

        </Card>
    );
}

export default MenuItem
