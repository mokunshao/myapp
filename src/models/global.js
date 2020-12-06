export default {
    namespace: 'global',
    state: {
        name: 'q1',
        user: {},
    },
    effects: {
        *query({ payload }, { call, put }) {},
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        // 启用 immer 之后
        // save(state, action) {
        //   state.name = action.payload;
        // },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'query',
                    });
                }
            });
        },
    },
};
