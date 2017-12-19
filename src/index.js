import React from 'react';
import PropTypes from 'prop-types';
import { BlinkingCaret, Container } from './components.js';

class Typewriter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            letters: [...props.phrase],
            blinkingCaretTimer: null,
            typingTimer: null,
            isBlink: false,
            counter: 0,
        };
    }

    componentDidMount() {
        const { delay, typingSpeed, blinkDuration } = this.props;
        setTimeout(
            () =>
                this.setState({
                    typingTimer: setInterval(this.tick, typingSpeed),
                    blinkingCaretTimer: setInterval(this.handleBlink, blinkDuration),
                }),
            delay,
        );
    }

    componentWillUnmount() {
        clearInterval(this.state.typingTimer);
        clearInterval(this.state.blinkingCaretTimer);
    }

    tick = () => {
        if (this.state.counter < (this.state.letters || []).length) {
            this.setState(prevState => ({ counter: prevState.counter + 1 }));
        }
    };

    handleBlink = () => {
        if ((this.state.letters || []).length) {
            this.setState(prevState => ({ isBlink: !prevState.isBlink }));
        }
    };

    render() {
        const { letters, counter, isBlink } = this.state;
        if (!this.props.sustained) {
            clearInterval(this.state.blinkingCaretTimer);
        }
        return (
            <Container size={this.props.fontSize}>
                {letters.map((x, i) => {
                    return (
                        i < counter &&
                        i < letters.length && (
                            <BlinkingCaret
                                key={i}
                                last={i === letters.length - 1}
                                isBlink={i === counter - 1 && isBlink}
                            >
                                {x}
                            </BlinkingCaret>
                        )
                    );
                })}
            </Container>
        );
    }
}

export default Typewriter;

Typewriter.propTypes = {
    fontSize: PropTypes.string,
    phrase: PropTypes.string,
    delay: PropTypes.number,
    typingSpeed: PropTypes.number,
    blinkDuration: PropTypes.number,
    sustained: PropTypes.bool,
};

Typewriter.defaultProps = {
    blinkDuration: 500,
    typingSpeed: 500,
    sustained: false,
    phrase: '',
    delay: 0,
};
