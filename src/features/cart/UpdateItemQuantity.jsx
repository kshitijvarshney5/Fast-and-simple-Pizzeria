import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQua, increaseItemQua } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="item-center flex gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQua(pizzaId))}>
        -
      </Button>
      <span className="flex items-center justify-center text-sm font-medium">
        {currentQuantity}
      </span>
      <Button type="round" onClick={() => dispatch(increaseItemQua(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
