import { createMemo, createSignal } from "solid-js";
import "./App.css";

function App() {
  const [budget, setBudget] = createSignal(3000);
  const stage0Explore = createMemo(() => budget() / 3);
  const stage1Explore = createMemo(() => (budget() / 3) * 0.618);
  const stage1Exploit = createMemo(() => (budget() / 3) * 0.382);
  const stage2Explore = createMemo(() => (budget() / 3) * 0.382);
  const stage2Exploit = createMemo(() => (budget() / 3) * 0.618);

  return (
    <>
      <h1>Jerry Allocation Algorithm</h1>

      <div>
        <label>Budget</label>
        <input
          type="number"
          value={budget()}
          onChange={(event) => setBudget(event.target.valueAsNumber)}
        />
      </div>

      <table>
        <caption>
          <h3>Allocation</h3>
        </caption>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stage 0 Explore</td>
            <td>{stage0Explore().toFixed(2)}</td>
          </tr>
          <tr>
            <td>Stage 1 Explore</td>
            <td>{stage1Explore().toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <i>Stage 1 Exploit</i>
            </td>
            <td>
              <i>{stage1Exploit().toFixed(2)}</i>
            </td>
          </tr>
          <tr>
            <td>Stage 2 Explore</td>
            <td>{stage2Explore().toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <i>Stage 2 Exploit</i>
            </td>
            <td>
              <i>{stage2Exploit().toFixed(2)}</i>
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <p>
        <span>Open Source </span>
        <a href="https://github.com/jerryshell/jaa" target="_blank">
          github.com/jerryshell/jaa
        </a>
      </p>
    </>
  );
}

export default App;
