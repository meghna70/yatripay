import React, { useState } from 'react'
import icon from "../icon.svg"
import { colors, Divider, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import calender from "../Calender.png"
import globe from "../Globe.png"
import cashback from "../Cashback.svg"
import performance from "../performance.svg"

function Features() {
    const [featureNo, setFeatureNo] = useState(0);
    const features = [
        {
            text: "365 Days Withdrawal",
        },
        {
            text: "Book Hotel & Flights"
        },
        {
            text: "Performance Overview"
        },
        {
            text: "Chance to win an iphone & a trip"
        },
        {
            text: "Unmatched Returns with Staking"
        },
        {
            text: "Zero Fees & Cashback Reward on YatriPay Transactions"
        },
    ]
    return (
        <div style={{
            minWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div class="blob"></div>
            <div class="blob bolb-right"></div>
            <div style={styles.header}  > YatriPay <img src={icon} alt='logo'/></div>
            {
                features.map((item, index) => {
                    return index == featureNo && (
                        <div>
                            <div style={{ ...styles.subheader, width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}  >
                                <Typography style={{ fontWeight: "700", textAlign: "center", fontSize: "60px", width: "70%", }}> {item.text} </Typography>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{
                                index == 0 ?
                                    <img src={calender} alt="feature-img" style={{ width: "40%" }} />
                                    : index == 1 ?
                                        <img src={globe} alt="feature-img" style={{ paddingTop: "20px", paddingLeft: "50px", width: "50%" }} />
                                        : index == 2 ?
                                            <img src={performance} alt="feature-img" style={{ paddingTop: "20px", paddingLeft: "50px", width: "50%" }} />
                                            : index == 3 ?
                                                <img src={globe} alt="feature-img" style={{ paddingTop: "20px", paddingLeft: "50px", width: "35%" }} />
                                                : index == 4 ?
                                                    <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center" }}>
                                                        <div style={{ fontSize: "120px", fontWeight: "700" }}> 30% p.a. </div>
                                                        <div style={{ fontSize: "20px", fontWeight: "400", paddingTop:"20px" }}> Annual return with <span style={{ color:"var(--secondary-text-color)" }}>yatripay</span></div>
                                                    </div>
                                                    : <img src={cashback} alt="feature-img" />

                            }
                            </div>

                            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "50px", paddingBottom: "11px" }}>
                                <button onClick={() => setFeatureNo((prev) => prev + 1)} style={styles.submitButton} type="submit">
                                    {featureNo < 1 ? 'Get Started' : 'Next'}
                                </button>
                            </div>
                        </div>
                    )
                })
            }



        </div>


    )
}

export default Features

const styles = {
    header: {
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--primary-text-color)",
        fontWeight: "700",
        fontSize: "32px",
        fontFamily: "Poppins"
    },
    subheader: {
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "700",
        fontSize: "32px",
    },
    submitButton: {
        backgroundColor: "var(--primary-color)",
        fontSize: "32px",
        fontWeight: "700",
        padding: "16px 42px",
        borderRadius: "13px",
        color: "#fff",
        border: 0
    },

}