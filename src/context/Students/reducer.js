
const reducer = (state, { type, payload, loading }) => {
  switch (type) {
    case "start":
      return { ...state, type, loading };
    case "success":
      return { ...state, list: payload, type, loading };
    case "error":
      return { ...state, type, loading };
    default:
      return { ...state }
  }
};

export default reducer;


// 1. hecch qachon fetch ishlamasligi kerak;
// 2. setTimeout(), setInterval()
// 3. async await ishlatish mumkin emas;