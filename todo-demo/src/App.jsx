import $ from 'jquery'
export default function App() {
    return (
        <div>
            <h2>jquery</h2>
            <button onClick={$('h2').text()}>click</button>

        </div>
    )
}