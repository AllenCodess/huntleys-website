import { Link, useParams } from "react-router";
import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Header from "../components/Header.jsx";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useDeliverOrderMutation,
} from "../slices/ordersApiSlice";

function OrderScreen() {
  const { id: orderId } = useParams();
  const { data: order, refetch, isLoading, error } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [deliverOrder, { isLoading: loadingDeliver }] = useDeliverOrderMutation();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "medium",
      timeStyle: "short",
    });

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Order is paid");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  }

  async function onApproveTest() {
    await payOrder({ orderId, details: { payer: {} } });
    refetch();
    toast.success("Order is paid");
  }

  function onError(err) {
    toast.error(err.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

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
              {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
              {order.shippingAddress.postalCode}, {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <p>Delivered on {formatDate(order.deliveredAt)}</p>
            ) : (
              <p>Not Delivered</p>
            )}
          </div>

          <div className="order-section">
            <h2>Payment Method</h2>
            <p>
              <strong>Method: </strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? <p>Paid on {formatDate(order.paidAt)}</p> : <p>Not Paid</p>}
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

            {!order.isPaid && (
              <div className="order-pay-section">
                {loadingPay && <p>Processing payment...</p>}

                {isPending ? (
                  <p>Loading PayPal...</p>
                ) : (
                  <div>
                    <button
                      className="btn-block"
                      style={{ marginBottom: "10px" }}
                      onClick={onApproveTest}
                    >
                      Test Pay Order
                    </button>
                    <div>
                      <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                      ></PayPalButtons>
                    </div>
                  </div>
                )}
              </div>
            )}
            {loadingDeliver && <p>Updating...</p>}

            {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
              <div className="order-deliver-section">
                <button type="button" className="btn-block" onClick={deliverHandler}>
                  Mark As Delivered
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderScreen;
