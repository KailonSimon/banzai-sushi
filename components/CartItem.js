import { CloseButton, Divider, Group, Image, NumberInput, Text, Tooltip } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { removeFromCart, setItemQuantity } from '../src/redux/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const handleItemRemove = () => {
        dispatch(removeFromCart(item));
    }
    const handleQuantityChange = (quantity) => {
        dispatch(setItemQuantity({ item, quantity }))
    }

    const itemTotal = (Math.round(item.price * item.quantity * 100) / 100).toFixed(2);

    return (
        <>
            <Group position="left" noWrap>
                <Image src={item.image} alt={item.name} fit="contain" width={110} radius='md' />
                <Group direction="column" position="left" sx={{ width: "100%" }} >
                    <Group position="apart" sx={{ width: "100%" }} noWrap>
                        <Tooltip label={item.name}>
                            <Text size="sm" lineClamp={1} >{item.name}</Text>
                        </Tooltip>
                        <CloseButton sx={{ color: 'red' }} size='sm' onClick={handleItemRemove} />
                    </Group>
                    <Group sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', height: '100%' }}>
                        <NumberInput
                            defaultValue={item.quantity}
                            onChange={number => handleQuantityChange(number)}
                            min={1}
                            description="Quantity"
                            size="xs"
                            styles={{ input: { width: '72px', textAlign: 'left' } }}
                        />
                        <Text size="sm">${itemTotal}</Text>
                    </Group>
                </Group>
            </Group>
            <Divider variant="dotted" />
        </>
    );
}

export default CartItem;