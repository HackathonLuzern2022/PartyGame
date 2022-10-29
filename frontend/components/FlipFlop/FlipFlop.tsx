import { Component } from 'react';

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "🤮"];

// function component
const AnimatedCard = ({ animation, letter }: {animation: String, letter: String}) => {

  return (
    <div className={`flipCard ${animation}`}>
      <span>{letter}</span>
    </div>
  );
};

// function component
const StaticCard = ({ position, letter }: {position: string, letter: String}) => {

      return (
        <div className={position}>
          <span>{letter}</span>
        </div>
      );
};

// function component
const FlipUnitContainer = ({ letterIndex, shuffle }: {letterIndex: number, shuffle: Boolean}) => {

  // assign digit value
  let previousLetter = alphabet[letterIndex - 1];
  let currentLetter = alphabet[letterIndex];

  // shuffle digits
  const letter1 = shuffle ?
    previousLetter :
    currentLetter;
  const letter2 = !shuffle ?
    previousLetter :
    currentLetter;

  // shuffle animations
  const animation1 = shuffle ?
    'fold' :
    'unfold';
  const animation2 = !shuffle ?
    'fold' :
    'unfold';

    return (
        <div className={'flipUnitContainer'}>
            <StaticCard
                position={'upperCard'}
                letter={currentLetter}
              />
            <StaticCard
                position={'lowerCard'}
                letter={previousLetter}
              />
            <AnimatedCard
                animation={animation1}
                letter={letter1}
              />
            <AnimatedCard
                animation={animation2}
                letter={letter2}
              />
        </div>
    )

};

// class component
class FlipClock extends Component<{wantedLetter: String}> {

  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      letterIndex: 0,
      lettersShuffle: true,
      // @ts-ignore
      wantedLetter: this.props.wantedLetter.toUpperCase()
    };

  }

  componentDidMount() {
    // @ts-ignore
    this.timerID = setInterval(
      () => this.updateLetters(),
      400);
  }

  componentWillUnmount() {
    // @ts-ignore
    clearInterval(this.timerID);
  }

  updateLetters() {
    // @ts-ignore
    if (this.state.wantedLetter === alphabet[0]) {
      // @ts-ignore
      clearInterval(this.timerID)
      return
    }
    
    // @ts-ignore
    const letterIndex = this.state.letterIndex + 1
    

    // @ts-ignore
    const lettersShuffle = !this.state.lettersShuffle
    this.setState({
        letterIndex,
        lettersShuffle
    });

    // @ts-ignore
    if (alphabet[letterIndex].charCodeAt(0) === this.state.wantedLetter.charCodeAt(0)) {
        // @ts-ignore
      clearInterval(this.timerID)
    }
  }

  render() {

    // state object destructuring
    // @ts-ignore
    const {
        // @ts-ignore
      letterIndex,
      // @ts-ignore
      lettersShuffle } =
      this.state;


    return (
        <FlipUnitContainer
            letterIndex={letterIndex}
            shuffle={lettersShuffle}
            />
    )


  }
}

export function FlipFlow({ word }: {word: string}) 
{
    const word_arr = word.split("")
    let i = 0;
    
    return (
      <>
      <div className={'flipClock'}>
      {
        word_arr.map(l => {
            i++;
            return (
                <FlipClock key={`${i}${l}`} wantedLetter={l} />
            )
        })
      }

      </div>
      </>
    );
}