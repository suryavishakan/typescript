// enums
// group of named constants
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function getUserDirection(direction) {
    if (direction === Direction.UP) {
        console.log("user is going up");
    }
    else if (direction === Direction.DOWN) {
        console.log("user is going down");
    }
    else if (direction === Direction.RIGHT) {
        console.log("user is going right");
    }
    else if (direction === Direction.LEFT) {
        console.log("user is going left");
    }
}
getUserDirection(Direction.UP);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["DELIVERED"] = 0] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 1] = "RETURNED";
    OrderStatus[OrderStatus["PLACED"] = 2] = "PLACED";
    OrderStatus[OrderStatus["PENDING"] = 3] = "PENDING";
    OrderStatus[OrderStatus["CANCELLED"] = 4] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    if (status === OrderStatus.DELIVERED) {
        console.log("order has been delivered");
    }
    else if (status === OrderStatus.RETURNED) {
        console.log("order has been returned");
    }
    else if (status === OrderStatus.PLACED) {
        console.log("order placed");
    }
    else if (status === OrderStatus.PENDING) {
        console.log("order pending confirmation");
    }
    else if (status === OrderStatus.CANCELLED) {
        console.log("order has been cancelled");
    }
}
getOrderStatus(OrderStatus.RETURNED);
export {};
