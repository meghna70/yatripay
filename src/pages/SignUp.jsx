import React, { useState } from 'react'
import icon from "../icon.svg"
import { colors, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import bitcoin from "../bitcoin.png"
import eth from "../eth.png"
import coin from "../coin.png"
import doge from "../doge.png"
function SignUp() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/feature")
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirm_password: ''
    });

    return (
        <div style={{
            minWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{overflow:"hidden"}} class="blob"></div>
            <div style={{overflow:"hidden"}} class="blob bolb-right"></div>
            <div style={{ padding: "15px", position: "absolute", zIndex: "-1", top: "40%", left: "15%", borderRadius: "100%", backgroundColor: "rgba(254, 231, 21, 0.2)" }}>
                <img src={bitcoin} />
            </div>
            <div style={{ padding: "15px", position: "absolute", zIndex: "-1", top: "70%", left: "20%", borderRadius: "100%", backgroundColor: "rgba(90, 40, 176, 0.2)" }}>
                <img src={eth} />
            </div>
            <div style={{ padding: "15px", position: "absolute", zIndex: "-1", top: "40%", right: "15%", borderRadius: "100%", backgroundColor: "rgba(204, 49, 61, 0.2)" }}>
                <img src={doge} />
            </div>
            <div style={{ padding: "15px", position: "absolute", zIndex: "-1", top: "70%", right: "20%", borderRadius: "100%", backgroundColor: "rgba(51, 135, 90, 0.2)" }}>
                <img src={coin} />
            </div>


            <div style={styles.header}  > YatriPay <img src={icon} alt='logo' style={{}} /></div>
            <div style={styles.subheader}> Sign up with us!</div>
            <div style={styles.socialsBtn}>
                <div style={styles.facebook}>f</div>
                <div style={styles.google}>G+</div>
            </div>
            <div style={{
                fontSize: "32px",
                width: "100%",
                maxWidth: "630px",
                padding: "16px 0px"
            }}>
                <Divider sx={{
                    "&::before, &::after": {
                        borderColor: "#fff",
                    },
                }}> or </Divider>
            </div>
            <div style={{

                width: "100%",
                maxWidth: "630px"
            }}>
                <form style={{
                    padding: " 0px",
                    width: "100%",

                }} onSubmit={handleSubmit}>
                    <div style={styles.formInput}>
                        <input
                            type="text"
                            name="username"
                            style={styles.inputStyle}
                            placeholder='Email or username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>



                    <div style={styles.formInput}>
                        {/* <label style={styles.labelStyle}>Password</label> */}
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            style={styles.inputStyle}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={styles.formInput}>
                        {/* <label style={styles.labelStyle}>Password</label> */}
                        <input
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            style={styles.inputStyle}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "50px", paddingBottom: "11px" }}>
                        <button style={styles.submitButton} type="submit">
                            {'SUBMIT'}
                        </button>
                        <div style={{ fontSize: "15px", padding: "10px" }}>Already a member? <span onClick={() => navigate('/login')} style={{ color: "var(--secondary-text-color)" }}>Log in</span></div>
                        <div style={{ fontSize: "11px" }}>By creating an account, you agree to YoPayX Terms of Service & Privacy Policy</div>
                    </div>
                    {/* {error && <p className="error">{error}</p>} */}
                </form>
            </div>
        </div>


    )
}

export default SignUp

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
    socialsBtn: {
        padding: "16px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",

    },
    facebook: {
        padding: "9px 64px",
        backgroundColor: "var(--facebook-blue)",
        borderRadius: "13px",
        fontWeight: "600",
        fontSize: "21px",
    },
    google: {
        padding: "10px 64px",
        backgroundColor: "var(--google-red)",
        borderRadius: "13px",
        fontFamily: "Poppins",
        fontSize: "14px",
    },
    inputStyle: {
        padding: "24px 32px",
        // fontSize: "19px",
        width: "calc(100% - 64px)",
        color: "var(--secondary-color)",
        borderRadius: "13px",
        color: "black"
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
    formInput: {
        padding: "11px 0px",
        width: "100%",
    },
    labelStyle: {
        display: "block"
    }

}