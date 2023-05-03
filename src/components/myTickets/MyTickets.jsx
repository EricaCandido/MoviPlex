import styles from "./index.module.scss";
import qrCode from "../../assets/fakeQR.png";
import { useContext } from "react";
import { Context } from "../../store/state";
import { AiOutlineCloseCircle } from "react-icons/ai";

const MyTickets = () => {
  const { state, dispatch } = useContext(Context);

  const onHandleMyTicketClick = () => {
    dispatch({ type: "SET_MY_TICKET_MODAL_VISIBILITY" });
    console.log(state.myTicketsModalVisible);
  };

  return (
    <>
      <div className={styles.overlay} onClick={onHandleMyTicketClick}></div>
      <ul className={styles.MyTickets}>
        <AiOutlineCloseCircle
          className={styles.close}
          onClick={onHandleMyTicketClick}
        />
        <li>
          <div className={styles.text}>
            <p className={styles.title}>{state.ticketData.title}</p>
            <div className={styles.times}>
              <p>{state.ticketData.date}</p> <p>{state.ticketData.hour}</p>
            </div>
            <p>
              {state.ticketData.seat.filter(Boolean).map((seat, i) => (
                <strong>
                  {i === 0 ? "" : <>&nbsp;- </>}
                  {seat}
                </strong>
              ))}
            </p>
          </div>
          <img className={styles.qrCode} src={qrCode} alt="logo" />
        </li>
      </ul>
    </>
  );
};

export default MyTickets;
