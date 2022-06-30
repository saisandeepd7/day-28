function Cart(props) {
  return (
    <div>
      <ol class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">{props.items.name} - ${props.items.newprice} &nbsp;</div>

          </div>
          
        </li>
      </ol>
    </div>
  );
}
export default Cart;
