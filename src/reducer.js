// reducer
// 점원(현재주문목록, 요구사항)
export const orderReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ORDER":
			return [
				...state,
				{
					id: Date.now(),
					drink: action.drink,
					size: action.size,
					price: action.price,
				},
			];
		case "CANCEL_ORDER":
			return state.filter((order) => order.id !== action.id);
		default:
			return state;
	}
};
