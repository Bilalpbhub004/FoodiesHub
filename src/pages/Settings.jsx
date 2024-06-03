import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import { useState, useEffect } from "react"

const Settings = () => {

    const defaultSettings = {
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 0, 86)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    }

    const localSettings = () => {
        const savedSettings = localStorage.getItem("settings");
        return savedSettings ? JSON.parse(savedSettings) : defaultSettings
    }

    const [settings, setSettings] = useState(localSettings())

    useEffect(() => {
        const root = document.documentElement
        for (let key in settings) {
            root.style.setProperty(key, settings[key])
        }
        localStorage.setItem("settings", JSON.stringify(settings));
    }, [settings])

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    const themes = [
        {
            "--background-color": "#fff",
            "--background-light": "#fff",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#0A0A0A",
            "--text-light": "#575757"
        },
        {
            "--background-color": "rgb(29, 29, 29)",
            "--background-light": "rgb(77, 77, 77)",
            "--shadow-color": "rgba(0,0,0,0.2)",
            "--text-color": "#ffffff",
            "--text-light": "#eceaea",
        }
    ]

    const changeTheme = (i) => {
        const _theme = { ...themes[i] }
        setTheme(i === 0 ? "light" : "dark")

        localStorage.setItem("theme", i === 0 ? "light" : "dark")

        let _settings = { ...settings }

        for (let key in _theme) {
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }
    // Color Function

    const [primaryColor, setPrimaryColor] = useState(
        +(localStorage.getItem("primaryColor"), 10 || 0)
    )
    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ]

    const changeColor = (i) => {

        const _color = primaryColors[i]
        let _settings = { ...settings }
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        localStorage.setItem("primaryColors", i)
        setSettings(_settings)
    }

    // Font Size Function

    const [fontSize, setFontSize] = useState(+(localStorage.getItem("fontSize"), 10 || 1))

    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ]

    const changeFontSize = (i) => {
        const _size = fontSizes[i]
        let _settings = { ...settings }
        _settings["--font-size"] = _size.value
        setFontSize(i)
        localStorage.setItem("fontSize", i)
        setSettings(_settings)
    }

    // Animation Function

    const [animationSpeed, setAnimationSpeed] = useState(
        +(localStorage.getItem("animationSpeed"), 10 || 1)
    )


    const animationSpeeds = [
        {
            title: "Slow",
            value: 2
        },
        {
            title: "Medium",
            value: 1
        },
        {
            title: "Fast",
            value: .5
        }
    ]

    function changeAnimationSpeed(i) {
        let _speed = animationSpeeds[i]
        let _settings = { ...settings }
        _settings["--animation-speed"] = _speed.value
        localStorage.setItem("animationSpeed", i)
        setAnimationSpeed(i)
        setSettings(_settings)
    }






    return (
        <>
            {/* 1st Row */}
            <div className='section d-block'>
                <h2>Preferred Theme</h2>
                <div className='options-container'>
                    <div className='option light' onClick={() => changeTheme(0)}>
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className='option dark' onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* 2nd Row */}
            <div className='section d-block'>
                <h2>Preferred Color</h2>
                <div className='options-container'>
                    {primaryColors.map((color, i) => (
                        <div className='option' style={{ backgroundColor: color }} onClick={() => changeColor(i)}>
                            {primaryColor === i && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
            {/* 3rd Row  */}

            <div className="section d-block">
                <h2>Font size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (
                        <button key={index} className="btn" onClick={() => changeFontSize(index)}>
                            {size.title}
                            {fontSize === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                        </button>
                    ))}
                </div>
            </div>

            {/* 4th  Row  */}
            <div className="section d-block">
                <h2>Animation Speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (
                        <button key={index} className="btn" onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}
                            {animationSpeed === index && <span><FontAwesomeIcon icon={faCheck} /></span>}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Settings
