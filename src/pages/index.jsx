import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import "../index.css";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeric = "0123456789";
let specialChar = "!#$%&'()*+,-./<=>?@[]^_`{|}~";

function PasswordInfo() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(15);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);

    const handleGeneratePassword = (e) => {
        if (
            !includeUppercase &&
            !includeLowercase &&
            !includeNumbers &&
            !includeSymbols
        ) {
            notify("You must choose at least one criteria!", true);
        }
        let characterList = "";

        if (includeLowercase) {
            characterList = characterList + lowerCase;
        }

        if (includeUppercase) {
            characterList = characterList + upperCase;
        }

        if (includeNumbers) {
            characterList = characterList + numeric;
        }

        if (includeSymbols) {
            characterList = characterList + specialChar;
        }

        setPassword(createPassword(characterList));
    };
    const createPassword = (characterList) => {
        let password = "";
        const characterListLength = characterList.length;

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characterListLength);
            password = password + characterList.charAt(characterIndex);
        }
        return password;
    };

    const notify = (message, hasError = false) => {
        if (hasError) {
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="container">
            <div className="generator">
                <h2 className="generator__header">Password Generator</h2>
                <div className="generatedPassword">
                    <h3>{password}</h3>
                </div>

                <div className="form-group">
                    <label htmlFor="password-strength">Password Length</label>
                    <Slider
                        className="switch"
                        color="secondary"
                        defaultValue="15"
                        valueLabelDisplay="auto"
                        onChange={(e) => setPasswordLength(e.target.value)}
                        id="password-strength"
                        name="password-strength"
                        max="15"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="uppercase-letters">Include Uppercase</label>
                    <Switch
                        className="switch"
                        color="secondary"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                        type="checkbox"
                        id="uppercase-letters"
                        name="uppercase-letters"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lowercase-letters">Include Lowercase</label>
                    <Switch
                        className="switch"
                        color="secondary"
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                        type="checkbox"
                        id="lowercase-letters"
                        name="lowercase-letters"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="include-numbers">Include Numbers</label>
                    <Switch
                        className="switch"
                        color="secondary"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                        type="checkbox"
                        id="include-numbers"
                        name="include-numbers"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="include-symbols">Include Symbols</label>
                    <Switch
                        className="switch"
                        color="secondary"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                        type="checkbox"
                        id="include-symbols"
                        name="include-symbols"
                    />
                </div>

                <button onClick={handleGeneratePassword}>
                    Generate Password
                </button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </div>
    );
}

export default PasswordInfo;