import './App.css'
import Welcome from './components/Welcome'
import WelcomeClass from './components/WelcomeClass'
// this syntax works for DEFAULT exports
// import { Welcome } from './components/Welcome'
// this works for NOT default exports

function App() {
  // const myName = 'Stefano'

  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome title="Welcome" subTitle="To My Second React App" />
        <Welcome title="Another Title" subTitle="The magic of props!" /> */}
        <WelcomeClass
          title="Welcome to a Class Component"
          subTitle="I've created this myself! :)"
        />
        <WelcomeClass />
      </header>
    </div>
  )
}

export default App

// the process of passing a prop down ALWAYS occurrs from TOP to BOTTOM
// --> so from a Parent component to a Child component

// Welcome CANNOT pass a prop to App
// App instead CAN pass a prop to Welcome
