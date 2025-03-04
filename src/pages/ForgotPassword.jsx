import React, { useState } from 'react'
import icon from "../icon.svg"
import { colors, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
function ForgotPassword() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);

    const handleSubmit = (e,prev) => {
        e.preventDefault();
        if(prev==0)setPage(prev + 1);
        else navigate("/feature")
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
            <div class="blob"></div>
            <div class="blob bolb-right"></div>
            <div style={styles.header}  > YatriPay <img src={icon} alt='logo' style={{}} /></div>
            <div style={styles.subheader}> Forgot Password</div>

            <div style={{
                width: "100%",
                maxWidth: "630px"
            }}>
                <form style={{
                    padding: " 0px",
                    width: "100%",

                }} onSubmit={(e) => handleSubmit(e, page)}>
                    {
                        page == 0 ?
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
                            :
                            <>
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
                                        value={formData.confirm_password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </>
                    }
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "50px", paddingBottom: "11px" }}>
                        <button style={styles.submitButton} type="submit">
                            {'SUBMIT'}
                        </button>
                    </div>
                    {/* {error && <p className="error">{error}</p>} */}
                </form>
            </div>
        </div>


    )
}

export default ForgotPassword

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
        border: 0,
        cursor: "pointer"
    },
    formInput: {
        padding: "11px 0px",
        width: "100%",
    },
    labelStyle: {
        display: "block"
    }

}