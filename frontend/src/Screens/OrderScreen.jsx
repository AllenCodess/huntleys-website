import { Link, useParams } from "react-router";
import Header from "../components/Header.jsx";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice.js";

function OrderScreen() {
  const { id: orderId } = useParams();
  const { data: order, refetch, isLoading, error } = useGetOrderDetailsQuery(orderId);

  return isLoading ? (
    <h2>is Loading . . .</h2>
  ) : error ? (
    <p>Something went wrong</p>
  ) : (
    <>
      <Header />

      <div className="order-container">
        <div className="order-left">
          <div className="order-section">
            <h2>Shipping</h2>
            <p>
              <strong>Order ID: </strong>
              {order._id}
            </p>
            <p>
              <strong>Name: </strong> {order.user.name}
            </p>
            <p>
              <strong>Email: </strong>
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
            <p>
              <strong>Address: </strong>
              {order.shippingAddress.address}, {order.shippingAddress.city},
              {order.shippingAddress.postalCode}, {order.shippingAddress.country}
            </p>
            {order.isDelivered ? <p>Delivered on {order.deliveredAt}</p> : <p>Not Delivered</p>}
          </div>

          <div className="order-section">
            <h2>Payment Method</h2>
            <p>
              <strong>Method: </strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? <p>Paid on {order.paidAt}</p> : <p>Not Paid</p>}
          </div>

          <div className="order-section">
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <p>Order is empty</p>
            ) : (
              <div>
                {order.orderItems.map(function (item, index) {
                  return (
                    <div key={index} className="order-item">
                      <img src={item.image} alt={item.name} className="order-item-image" />
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                      <span>
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="order-right">
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="order-summary-row">
              <span>Items</span>
              <span>${order.itemsPrice}</span>
            </div>

            <div className="order-summary-row">
              <span>Shipping</span>
              <span>${order.shippingPrice}</span>
            </div>

            <div className="order-summary-row">
              <span>Tax</span>
              <span>${order.taxPrice}</span>
            </div>

            <div className="order-summary-row">
              <span>Total</span>
              <span>${order.totalPrice}</span>
            </div>

            {/* PAY ORDER PLACEHOLDER */}
            {/* MARK AS DELIVERED PLACEHOLDER */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderScreen;
