// reducer

// Action Type 정의 (요구사항 종류)
const ACTION_TYPES = {
	ADD_ORDER: "ADD_ORDER",
	CANCEL_ORDER: "CANCEL_ORDER",
}

// 점원(현재주문목록, 요구사항)
export const orderReducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.ADD_ORDER:
			return [
				...state,
				{
					id: Date.now(),
					drink: action.drink,
					size: action.size,
					price: action.price,
				},
			];
		case ACTION_TYPES.CANCEL_ORDER:
			return state.filter((order) => order.id !== action.id);
		default:
			return state;
	}
};
