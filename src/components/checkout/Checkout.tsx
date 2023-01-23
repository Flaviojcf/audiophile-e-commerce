import { CheckoutForm } from "./components/CheckoutForm";
import { Summary } from "./components/Summary";

export function Checkout() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      className="flex gap-8 mt-20 mb-20  tablet:flex-col"
      onSubmit={(e) => handleSubmit(e)}
    >
      <CheckoutForm />
      <Summary />
    </form>
  );
}
