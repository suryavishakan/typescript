// enums
// group of named constants

enum Direction{
    UP,
    DOWN, 
    LEFT,
    RIGHT
}

function getUserDirection(direction : Direction) : void{
    if(direction === Direction.UP){
        console.log("user is going up");
    }else if(direction === Direction.DOWN){
        console.log("user is going down");
    }else if(direction === Direction.RIGHT){
        console.log("user is going right");
    }else if(direction === Direction.LEFT){
        console.log("user is going left");
    }
}

getUserDirection(Direction.UP);


enum OrderStatus{
    DELIVERED,
    RETURNED,
    PLACED,
    PENDING,
    CANCELLED
}

function getOrderStatus(status : OrderStatus) : void{
    if(status === OrderStatus.DELIVERED){
        console.log("order has been delivered");
    }else if(status === OrderStatus.RETURNED){
        console.log("order has been returned");
    }else if(status === OrderStatus.PLACED){
        console.log("order placed");
    }else if(status === OrderStatus.PENDING){
        console.log("order pending confirmation");
    }else if(status === OrderStatus.CANCELLED){
        console.log("order has been cancelled");
    }
}


getOrderStatus(OrderStatus.RETURNED);