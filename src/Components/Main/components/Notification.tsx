import Bell2 from "../../../assets/icons/bell2.svg";
import BarChart from "../../../assets/icons/bar-chart.svg";
import TriangleDown from "../../../assets/icons/triangle-down.png";
import Clock from "../../../assets/icons/clock.svg";

const Notification = () => {
  return (
    <div className="horizontal-scroll relative">
      <div className="overay absolute  w-full h-full z-50"></div>

      <div className="scroll-container flex gap-4">
        <div
          className="card flex flex-col justify-between bg-white rounded-lg p-3.5"
          style={styles.card}
        >
          <div className="flex justify-between">
            <div className="item">
              <img src={Bell2} alt="" />
            </div>
            <small className="cursor-pointer">Save</small>
          </div>
          <div className="text-sm font-medium">
            We'll be sending notifications to you here
          </div>
          <div
            className="py-2 px-3 bg-white text-[9.1px]"
            style={styles.emailBox}
          >
            hello@gmail.com
          </div>
        </div>

        {/* ============================= */}

        <div
          className="card flex flex-col justify-between items-start w-[189.7px] h-[171.5px] bg-white rounded-lg p-3.5"
          style={styles.card}
        >
          <div className="flex justify-between w-full">
            <div className="item">
              <img src={BarChart} alt="" />
            </div>
            <input type="checkbox" value="true" checked={true} onChange={() => {}}/>
          </div>
          <div className="text-sm font-medium">
            Notify me when any wallets move more than
          </div>

          <div
            className="p-[4.2px] bg-gray-50 text-[9.1px]"
            style={styles.strip}
          >
            $1,000.00
            <img src={TriangleDown} alt="" />
          </div>
        </div>

        {/* ============================= */}

        <div
          className="card flex flex-col justify-between items-start w-[189.7px] h-[171.5px] bg-white rounded-lg p-3.5"
          style={styles.card}
        >
          <div className="flex justify-between w-full">
            <div className="item">
              <img src={Clock} alt="" />
            </div>
            <input type="checkbox" value="true" checked={true} onChange={() => {}}/>
          </div>
          <div className="text-sm font-medium">
            Notify me when any wallets move more than
          </div>

          <div
            className="p-[4.2px] bg-gray-50 text-[9.1px]"
            style={styles.strip}
          >
            $1,000.00
            <img src={TriangleDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    boxShadow:
      "0px 0.7px 0.7px 0px rgba(0, 0, 0, 0.04), 0px 2.8px 7px 0px rgba(0, 0, 0, 0.04)",
  },
  emailBox: {
    borderRadius: "5.6px",
    border: "0.7px solid var(--neutral-300, #D4D4D4)",
  },
  strip: {
    background: "rgba(229, 229, 230, 0.50)",
    fontSize: "9.1px",
    padding: "4.2px",
    gap: "2.8px",
    display: "flex",
    borderRadius: "2.8px",
  },
};

export default Notification;
