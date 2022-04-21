import { Divider, Group, Text, Button } from '@mantine/core';
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { CreditCard } from 'tabler-icons-react';
import { cartValueSelector, cartLineItemsSelector } from '../src/redux/cart';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export default function PaymentUI() {
  const cartValue = useSelector(cartValueSelector);
  const lineItems = useSelector(cartLineItemsSelector);

  function handleFormSubmit(event) {
    event.preventDefault();
    stripePromise.then(stripe => {
        stripe.redirectToCheckout({
            lineItems: lineItems,
            mode: "payment",
            billingAddressCollection: "auto",
            shippingAddressCollection: {
                allowedCountries: [
                    "US",
                ],
            },
            successUrl: "https://banzai-sushi.vercel.app/",
            cancelUrl: "https://banzai-sushi.vercel.app/",
        });
    });
  }
  return (
      <Group direction="column" grow>
          <Group position="apart">
              <Text>Subtotal</Text>
              <Text>${cartValue}</Text>
          </Group>
          <Group position="apart">
              <Text>Delivery Fee</Text>
              <Text color="dimmed">--</Text>
          </Group>
          <Group position="apart">
              <Text>Estimated Tax</Text>
              <Text color="dimmed">--</Text>
          </Group>
          <Divider />
          <Group position="apart">
              <Text weight="bold">Total</Text>
              <Text weight="bold">${cartValue}</Text>
          </Group>
          <Divider />
          <Button onClick={handleFormSubmit} rightIcon={<CreditCard />} sx={{ fontWeight: 400 }}>Checkout</Button>
      </Group>
  );
}