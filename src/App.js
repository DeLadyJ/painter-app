import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  // console.log('hello')
  const [imageUrl, setImageUrl] = useState(null)
  const generateImage = async (inputPrompt) => {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer <link rel = "stylesheet" href = "config.js" > `,
          "Content-Type": "application/json"

    },
    body: JSON.stringify({
      'prompt': `${inputPrompt}`,
      'n': 1,
      'size': '1024X1024'
    })

  })

    const data = await response.json();

    return data.data[0].url
  }

  const handleClickChange = async (event) => {

    setImageUrl('https://th.bing.com/th?id=OIP.gygbHkxEZpnoOuxNaNsQ1QHaEb&w=323&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2')
      const inputPrompt = event.target.value;

      const imageUrlFromApi = await generateImage(InputPrompt);
      setImageUrl(imageUrlFromApi);
  }
  return (
    <div className="App">
      <input type="text" placeholder="Enter search"
      className="border-red p-2"
      id="prompt"
             onClick={handleClickChange}
      />
      <div className="border-none"
      id="showImage">

        {
          imageUrl
            ? <img src={imageUrl} alt=""/>
              : "Enter search information "
        }

        </div>
      </div>
  );
}

export default App;

// {/*<header className="App-header">*/}
// {/*  <img src={logo} className="App-logo" alt="logo" />*/}
// {/*  <p>*/}
// {/*    Edit <code>src/App.js</code> and save to reload.*/}
// {/*  </p>*/}
// {/*  <a*/}
// {/*    className="App-link"*/}
// {/*    href="https://reactjs.org"*/}
// {/*    target="_blank"*/}
// {/*    rel="noopener noreferrer"*/}
// {/*  >*/}
// {/*    Learn React*/}
// {/*  </a>*/}
// // {/*</header>*/}