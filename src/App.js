import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(90)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()

    let grams = (bottles * 0.33) * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let alcoLevel = 0
    
    if (gender === 'male') {
      alcoLevel = gramsLeft / (weight * 0.7)
    } else {
      alcoLevel = gramsLeft / (weight * 0.6)
    } if (alcoLevel < 0) {
      setResult(0)
    } else {
      setResult(alcoLevel);
    }
  }
  return (
    <>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name="time" value={time} onChange={e => setTime(e.target.value)} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input><label>Female</label>
        </div>
        <div>
          <output>Your alcohol blood level is (BAC) {result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;