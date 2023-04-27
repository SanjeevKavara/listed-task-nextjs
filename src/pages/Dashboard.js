import styles from "../styles/dashboard.module.css";
import dynamic from "next/dynamic";
import { Chart } from "react-google-charts";

import {  useState } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";


export const data = [
  ["Year", "Guest", "User"],
  
  ["Week1", 200, 400],
  ["Week2", 1170, 460],
  ["Week3", 660, 1120],
  ["Week4", 1030, 540],
];

export const options = {
  
  curveType: "function",
  legend: { position: "none"},
  
};

export const datapie  = [
  ["Product", "Percentage"],
  ["Basic Tees",40],
  ["Custom Short Pants",20],
  ["Super Hoodies",40],
]

export const optionspie = {
  title: 'Top Products',
  legend: {
    textStyle:{ 
    color:"00000" ,
    fontName: "Montserrat",
    fontSize:14,
    bold: true ,
    italic:false },
    position: "right",
    alignment: "start",
    
  },

  fontName:"Montserrat",
  fontSize:18,
  
      
};



const Dashboard = () => {
  const { data: session } = useSession();
 
  
//  const urrl = session.user.image;
  

  // const value = useContext(AppContext);
  // console.log(value);
  
  
  
  
  
 
  

  return (
    <div className={styles.dashboard}>
      <div className={styles.navigation}>
        <div className={styles.leftSide} />
        <div className={styles.help}>Help</div>
        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.settings}>Settings</div>
        <div className={styles.users}>Users</div>
        <div className={styles.schedules}>Schedules</div>
        <div className={styles.transactions}>Transactions</div>
        <b className={styles.dashboard1}>Dashboard</b>
        <img
          className={styles.transactionIcon}
          alt=""
          src="/transaction.svg"
        />
        <img className={styles.scheduleIcon} alt="" src="/schedule.svg" />
        <img
          className={styles.dashboardIcon}
          alt=""
          src="/piechart.svg"
        />
        <img className={styles.settingIcon} alt="" src="/setting.svg" />
        <img className={styles.userIcon} alt="" src="/user.svg" />
        <b className={styles.board}>Board.</b>
      </div>
      <div className={styles.totalTransactions}>
        <div className={styles.card}>
          <div className={styles.card1} />
        </div>
        <div className={styles.totalTransactions1}>Total Transactions</div>
        <b className={styles.b}>1,520</b>
        <img
        className={styles.totalTransactionsIcon}
        alt=""
        src="/tags.svg"
      />
      </div>
      <div className={styles.totalRevenues}>
        <div className={styles.card}>
          <div className={styles.card3} />
        </div>
        <div className={styles.totalRevenues1}>Total Revenues</div>
        <b className={styles.b1}>$2,129,430</b>
        <img className={styles.vectorIcon} alt="" src="/receive-money.svg" />
      </div>
      <div className={styles.totalLikes}>
        <div className={styles.card}>
          <div className={styles.card5} />
        </div>
        <div className={styles.totalLikes1}>Total Likes</div>
        <b className={styles.b2}>9,721</b>
        <img className={styles.vectorIcon1} alt="" src="/like.svg" />
      </div>
      <div className={styles.totalUsers}>
        <div className={styles.card}>
          <div className={styles.card7} />
        </div>
        <img className={styles.vectorIcon2} alt="" src="/users.svg" />
        <div className={styles.totalUsers1}>Total Users</div>
        <b className={styles.b3}>892</b>
      </div>
      <form className={styles.activitiesCard} id="line-chart">
        {/* <form className={styles.card8}> */}
          <div className={styles.card9} />
        {/* </form> */}
        <div className={styles.guest}>Guest</div>
        <div className={styles.user}>User</div>
        <b className={styles.activities}>Activities</b>
        <div className={styles.mayJune2021Parent}>
          <div className={styles.mayJune}>May - June 2021</div>
          <img className={styles.vectorIcon3} alt="" src="/down.svg" />
        </div>
        <div className={styles.chart}  >
          
           
        <Chart
        chartType="LineChart"
        top= '105px'
        left= '40px'
        width="921px"
        height="212px"
        data={data}
        options={options}
        />

          
          
        </div>
        <img
          className={styles.activitiesCardChild}
          alt=""
          src="/red-circle-icon.svg"
        />
        <img
          className={styles.activitiesCardItem}
          alt=""
          src="/bluedot.svg"
        />
      </form>
      <div className={styles.topProductsCard}>
        {/* <div className={styles.card10}>
          <div className={styles.card9} />
        </div>
        <div className={styles.div6}>
          <img className={styles.child} alt="" src="/ellipse-6.svg" />
          <b className={styles.basicTees}>Basic Tees</b>
          <div className={styles.div7}>55%</div>
        </div>
        <div className={styles.mayJune2021Wrapper}>
          <div className={styles.mayJune1}>May - June 2021</div>
        </div>
        <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
        <div className={styles.div8}>
          <img className={styles.child} alt="" src="/ellipse-61.svg" />
          <b className={styles.basicTees}>Custom Short Pants</b>
          <div className={styles.div7}>31%</div>
        </div>
        <div className={styles.div10}>
          <img className={styles.child} alt="" src="/ellipse-62.svg" />
          <b className={styles.basicTees}>Super Hoodies</b>
          <div className={styles.div7}>14%</div>
        </div>
        <b className={styles.topProducts}>Top products</b>
        <div className={styles.pieChartIcon}  >
        

        </div> */}
        <div className={styles.charrt}>
        <Chart
        chartType="PieChart"
        data={datapie}
        options={optionspie}
        width="480px"
        height="256px"
       
        
        
        />
        </div>
       
      </div>

       
      <div className={styles.schedulesCard}>
        <div className={styles.card10}>
          <div className={styles.card9} />
        </div>
        <b className={styles.todaysSchedule}>Today’s schedule</b>
        <div className={styles.meetingWithSuppliersFromKuParent}>
          <b className={styles.meetingWithSuppliers}>
            Meeting with suppliers from Kuta Bali
          </b>
          <div className={styles.div12}>14.00-15.00</div>
          <div
            className={styles.atSunsetRoad}
          >{`at Sunset Road, Kuta, Bali `}</div>
          <div className={styles.groupChild3} />
        </div>
        <div className={styles.seeAll}>See All</div>
        <img className={styles.vector} alt="" src="/right.svg" />
        <div className={styles.checkOperationAtGigaFactorParent}>
          <b className={styles.meetingWithSuppliers}>
            Check operation at Giga Factory 1
          </b>
          <div className={styles.div12}>18.00-20.00</div>
          <div className={styles.atSunsetRoad}>{`at Central Jakarta `}</div>
          <div className={styles.groupChild4} />
        </div>
      </div>
      {/* <div className={styles.chartWeeks}>
        <div className={styles.week1}>Week 1</div>
        <div className={styles.week2}>Week 2</div>
        <div className={styles.week3}>Week 3</div>
        <div className={styles.week4}>Week 4</div>
      </div>
       */}
     
      
      <div className={styles.header}>
        <b className={styles.dashboard2}>Dashboard</b>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search..."
        />
        {session && <img className={styles.maskGroupIcon} alt="" src={session.user.image} />}
        <img className={styles.vectorIcon5} alt="" src="/bell.svg" />
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Dashboard), {ssr: false})
