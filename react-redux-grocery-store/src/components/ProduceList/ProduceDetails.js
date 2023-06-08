import { useDispatch,useSelector } from "react-redux";
import {cartAdder} from '../../store/cart';

function ProduceDetails({ produce }) {
  const cartItem = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={()=>dispatch(cartAdder(produce))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;