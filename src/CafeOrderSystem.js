import React, { useReducer, useState } from "react";
import { orderReducer } from "./reducer";

const CafeOrderSystem = () => {
	// orderReducer라는 reducer를 사용하고, 초기 상태는 빈 배열로 설정하겠다는 의미
	// useReducer는 state와 dispatch를 담은 배열을 반환한다
	// 반환된 현재(초기) state와 dispatch를 [orders, dispatch]에 담는 것이다.
	const [orders, dispatch] = useReducer(orderReducer, []);
	// 업데이트된 주문을 저장하는 state
	const [newOrder, setNewOrder] = useState({ drink: "", size: "", price: "" });

	// 주문 추가하는 함수
	const addOrder = () => {
		// input 입력 값이 비어있지 않은 경우에만 추가
		if (
			newOrder.drink.trim() !== "" &&
			newOrder.size.trim() !== "" &&
			newOrder.price.trim() !== ""
		) {
			// 손님(요구사항): Dispatch(Action)
			dispatch({ type: "ADD_ORDER", ...newOrder });
			// 주문을 추가한 후에는 입력값 초기화
			setNewOrder({ drink: "", size: "", price: "" });
		}
	};

	// 주문 취소 함수
	const cancelOrder = (id) => {
		// 손님(요구사항): Dispatch(Action)
		dispatch({ type: "CANCEL_ORDER", id });
	};

	return (
		<div>
			<h1>Cafe Order System</h1>
			{/* 새로운 주문 정보 입력 */}
			<input
				type="text"
				placeholder="음료"
				value={newOrder.drink}
				onChange={(e) => setNewOrder({ ...newOrder, drink: e.target.value })}
			/>
			<input
				type="text"
				placeholder="사이즈"
				value={newOrder.size}
				onChange={(e) => setNewOrder({ ...newOrder, size: e.target.value })}
			/>
			<input
				type="number"
				placeholder="가격"
				step="10"
				value={newOrder.price}
				onChange={(e) => setNewOrder({ ...newOrder, price: e.target.value })}
			/>
			<button onClick={addOrder}>주문 추가</button>
			{/* 주문 목록 표시 */}
			<ul>
				{orders.map((order) => (
					<li key={order.id}>
						{order.drink} ({order.size}) - {order.price}원
						<button onClick={() => cancelOrder(order.id)}>주문 취소</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CafeOrderSystem;
