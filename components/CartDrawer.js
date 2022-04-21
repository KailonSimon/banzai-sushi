import { createStyles, Divider, Group, ScrollArea, Text } from '@mantine/core';
import CartItem from './CartItem';
import PaymentUI from './PaymentUI';
import { useSelector } from 'react-redux';
import { cartCountSelector } from '../src/redux/cart';

const useStyles = createStyles((theme) => ({
    thumb: {
        display: 'none',
    }
}))


export default function CartDrawer() {
    const cart = useSelector(state => state.cart.items);
    const cartCount = useSelector(cartCountSelector);
    const { classes } = useStyles()

    return (
        <>
            {cart.length ?
                <Group direction="column" grow>
                    <Text>Order Summary</Text>
                    <Divider />
                    <Text size="sm">{cartCount} items</Text>
                    <ScrollArea sx={{ height: 350 }} classNames={{ thumb: classes.thumb }} type='scroll' scrollHideDelay={250} scrollbarSize={1}>
                        <Group direction="column" grow>

                            {cart.map(item => {
                                return <CartItem key={item.id} item={item} />
                            })}
                        </Group>
                    </ScrollArea>
                    <PaymentUI />
                </Group>
                :
                <Text>Your cart is empty</Text>
            }
        </>
    );
}