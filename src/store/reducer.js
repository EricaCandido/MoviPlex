export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIE_LIST":
      return {
        ...state,
        movieListData: action.payload,
      };
    case "SET_GENRE_LIST":
      localStorage.setItem("genreList", JSON.stringify(action.payload));
      return {
        ...state,
        genreList: action.payload,
      };
    case "SET_MODAL_CONTENT_USER":
      document.body.classList.add("noscroll");
      return {
        ...state,
        iconPush: { search: false, burger: false, user: true },
        modalContent: action.payload,
      };
    case "SET_MODAL_CONTENT_BURGER":
      document.body.classList.add("noscroll");
      return {
        ...state,
        iconPush: { search: false, user: false, burger: true },
        modalContent: action.payload,
      };
    case "SET_MODAL_CONTENT_SEARCH":
      document.body.classList.add("noscroll");
      return {
        ...state,
        iconPush: { search: true, user: false, burger: false },
        modalContent: action.payload,
      };
    case "SET_MODAL_CLOSE":
      document.body.classList.remove("noscroll");
      return {
        ...state,
        visible: false,
      };
    case "SET_MODAL_OPEN":
      return {
        ...state,
        visible: true,
      };
    case "CREATE_NEW_USER":
      console.log(state.users);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SET_TR_MOVIE_LIST":
      return {
        ...state,
        trListData: action.payload,
      };
    case "SET_TICKET_MOVIE_TITLE":
      localStorage.setItem("movieTitle", JSON.stringify(action.payload));
      return {
        ...state,
        ticketData: { ...state.ticketData, title: action.payload },
      };
    case "SET_TICKET_DATE":
      localStorage.setItem("movieDate", JSON.stringify(action.payload));
      return {
        ...state,
        ticketData: { ...state.ticketData, date: action.payload },
      };
    case "SET_TICKET_HOUR":
      localStorage.setItem("movieHour", JSON.stringify(action.payload));
      return {
        ...state,
        ticketData: { ...state.ticketData, hour: action.payload },
      };
    case "SET_TICKET_SEAT":
      localStorage.setItem("movieSeats", JSON.stringify(action.payload));
      return {
        ...state,
        ticketData: {
          ...state.ticketData,
          seat: [action.payload, ...state.ticketData.seat],
        },
      };

    case "SET_PAYMENT_MODAL_OPEN":
      return {
        ...state,
        paymentModalVisible: true,
      };
    case "SET_PAYMENT_MODAL_CLOSE":
      return {
        ...state,
        paymentModalVisible: false,
      };

    case "SET_MY_TICKET_MODAL_VISIBILITY":
      return {
        ...state,
        myTicketsModalVisible: !state.myTicketsModalVisible,
      };
  }
};
