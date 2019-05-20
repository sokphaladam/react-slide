import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    startScroll: 0,
    scroll: {
      offsetWidth: 0,
      scrollWidth: 0,
      scrollTo: (data: any) => { }
    }
  }

  componentDidMount() {
    this.setState({ scroll: document.getElementById('slide') });
    setInterval(() => {
      this.Play();
    }, 3000);
  }

  Play = () => {
    let number = this.state.startScroll + this.state.scroll.offsetWidth;

    number >= this.state.scroll.scrollWidth
      ? this.setState({ startScroll: 0 })
      : this.setState({ startScroll: number });

    setTimeout(() => {
      this.state.scroll.scrollTo({
        left: this.state.startScroll,
        top: 0,
        behavior: 'smooth',
      });
    }, 300);
  }

  render() {
    return (
      <div className="App">
        <div className="Slide" id="slide">
          {
            imageShow.map((e, i) => {
              return (
                <img
                  key={i}
                  src={e}
                  alt=""
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default App;


const imageShow = [
  'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1650861/pexels-photo-1650861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
]