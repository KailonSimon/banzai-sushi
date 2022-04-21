import { Divider, Group, Text } from '@mantine/core';
import CartItem from './CartItem';
import PaymentUI from './PaymentUI';
import { useSelector } from 'react-redux';
import { cartCountSelector } from '../src/redux/cart';

export default function CartDrawer() {
    const cart = useSelector(state => state.cart.items);
    const cartCount = useSelector(cartCountSelector);

    return (
        <>
        {cart.length ?
            <Group direction="column" grow>
                <Text>Order Summary</Text>
                <Divider />
                <Text size="sm">{cartCount} items</Text>
                <Group direction="column" grow>
                    {cart.map(item => {
                        return <CartItem key={item.id} item={item} />
                    })}
                </Group>
                <PaymentUI />
            </Group>
        :
        <Text>Your cart is empty</Text>
        }
        </>
    );
}