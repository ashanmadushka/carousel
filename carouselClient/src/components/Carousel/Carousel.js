import React, {useState, useEffect} from 'react'
import './Carousel.css'

const Carousel = (props) => {
    const {children, slides, Infinite} = props

    const [currentIndex, setCurrentIndex] = useState(Infinite ? 1 : 0)
    const [length, setLength] = useState(slides)

    const [isRepeating, setIsRepeating] = useState(Infinite)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(slides)
        setIsRepeating(Infinite)
    }, [children, Infinite])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, length])

    const next = () => {
        // if (isRepeating) {
            setCurrentIndex(prevState => prevState + 1)
        // }
    }

    const prev = () => {
        // if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        // }
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + 1) {
                setTransitionEnabled(false)
                setCurrentIndex(1)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        output.push(children[length - 1])
        output.reverse()

        return output
    }

    const renderExtraNext = () => {
        let output = []
        output.push(children[0])
        return output
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {
                    (isRepeating || currentIndex > 0) &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                >
                    <div
                        className={`carousel-content show-${1}`}
                        style={{
                            transform: `translateX(-${currentIndex * (100)}%)`,
                            transition: !transitionEnabled ? 'none' : undefined,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {
                            (isRepeating) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (isRepeating) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {
                    (isRepeating || currentIndex < (length - 1)) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel