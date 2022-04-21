import { ActionIcon, CloseButton, Divider, Group, Image, NumberInput, Text, Tooltip } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, setItemQuantity } from '../src/redux/cart';

function CartItem({ item }) {
    const dispatch = useDispatch();
    const onItemRemove = () => {
        dispatch(removeFromCart(item));
    }
    const onQuantityChange = (quantity) => {
        dispatch(setItemQuantity({ item, quantity }))
    }

    const itemTotal = (Math.round(item.price * item.quantity * 100) / 100).toFixed(2);
    
    return (
        <>
            <Group position="left" noWrap>
                <Image src={item.image} alt={item.name} fit="contain" width={110} />
                <Group direction="column" position="left" sx={{ width: "100%" }} >
                    <Group position="apart" sx={{ width: "100%" }}>
                        <Tooltip label={item.name}>
                            <Text size="sm" lineClamp={1} sx={{ maxWidth: '85px' }}>{item.name}</Text>
                        </Tooltip>
                        <Text size="sm">${itemTotal}</Text>
                    </Group>
                    <NumberInput
                        defaultValue={item.quantity}
                        onChange={number => onQuantityChange(number)}
                        min={1}
                        description="Quantity"
                        size="xs"
                        styles={{ input: { width: 48, textAlign: 'left' } }}
                    />
                    {/*<CloseButton onClick={onItemRemove} size="xs" />*/}
                </Group>
            </Group>
            <Divider variant="dotted" />
        </>
    );
}

export default CartItem;