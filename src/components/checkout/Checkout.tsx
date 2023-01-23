import { CheckoutForm } from "./components/CheckoutForm";
import { Summary } from "./components/Summary";

export function Checkout() {
  return (
    <div className="flex gap-8 mt-20 mb-20  tablet:flex-col">
      <CheckoutForm />
      <Summary />
    </div>
  );
}
